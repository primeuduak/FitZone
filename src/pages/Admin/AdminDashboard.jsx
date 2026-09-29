import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Activity,
  CheckCircle2,
  Clock3,
  CreditCard,
  Search,
  Users,
} from "lucide-react";
import { PATHS } from "../../Routes/Paths";

const BASEURL = "/api";
const membershipFilters = ["Active", "Expired", "No membership"];

async function readResponse(response) {
  const contentType = response.headers.get("content-type") || "";
  const data = contentType.includes("application/json")
    ? await response.json()
    : { message: await response.text() };

  if (!response.ok) {
    throw new Error(
      data.message || data.msg || data.error || `Request failed (${response.status}).`,
    );
  }

  return data;
}

function getPayload(data) {
  return data.data?.data || data.data || data;
}

function getMemberCardNumber(member) {
  return member.cardNumber || member.card_number || member.memberId || member.member_id || "";
}

function getMemberStatus(member) {
  const status =
    member.membershipStatus ||
    member.membership_status ||
    member.membership?.status ||
    member.subscription?.status;

  if (!status) return "No membership";

  const normalized = String(status).toLowerCase();
  if (["active", "valid", "current"].includes(normalized)) return "Active";
  if (["expired", "inactive", "ended"].includes(normalized)) return "Expired";
  if (["none", "no membership", "unsubscribed"].includes(normalized)) {
    return "No membership";
  }

  return status;
}

function AdminDashboard() {
  const [dashboard, setDashboard] = useState(null);
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [activeMembershipFilter, setActiveMembershipFilter] = useState("Active");
  const [cardNumber, setCardNumber] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationError, setVerificationError] = useState("");
  const [verificationResult, setVerificationResult] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);
  const [memberError, setMemberError] = useState("");
  const [loadingMember, setLoadingMember] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadAdminData() {
      setLoading(true);
      setLoadError("");

      try {
        const [dashboardResponse, membersResponse] = await Promise.all([
          fetch(`${BASEURL}/admin/dashboard`, { credentials: "include" }).then(readResponse),
          fetch(`${BASEURL}/admin/members`, { credentials: "include" }).then(readResponse),
        ]);

        const dashboardData = getPayload(dashboardResponse);
        const membersData = getPayload(membersResponse);
        const memberList = Array.isArray(membersData)
          ? membersData
          : membersData.members || membersData.users || [];

        if (isMounted) {
          setDashboard(dashboardData.dashboard || dashboardData);
          setMembers(Array.isArray(memberList) ? memberList : []);
        }
      } catch (error) {
        if (isMounted) setLoadError(error.message || "Unable to load admin dashboard.");
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadAdminData();
    return () => {
      isMounted = false;
    };
  }, []);

  const statsData = dashboard?.stats || dashboard || {};
  const stats = [
    {
      label: "Active Members",
      value: statsData.activeMembers ?? statsData.active_members ?? "—",
      icon: Users,
    },
    {
      label: "Checked In Today",
      value: statsData.checkedInToday ?? statsData.checked_in_today ?? "—",
      icon: CheckCircle2,
    },
    {
      label: "Expiring Soon",
      value: statsData.expiringSoon ?? statsData.expiring_soon ?? "—",
      icon: Clock3,
    },
    {
      label: "New Members",
      value: statsData.newMembers ?? statsData.new_members ?? "—",
      icon: CreditCard,
    },
  ];
  const filteredMembers = members.filter(
    (member) => getMemberStatus(member) === activeMembershipFilter,
  );

  async function handleVerifyMembership(event) {
    event.preventDefault();
    setVerificationError("");
    setVerificationResult(null);

    if (!cardNumber.trim()) {
      setVerificationError("Enter a member card number.");
      return;
    }

    setIsVerifying(true);

    try {
      const response = await fetch(`${BASEURL}/admin/verify-membership`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ cardNumber: cardNumber.trim() }),
      });
      const data = await readResponse(response);
      setVerificationResult(getPayload(data));
    } catch (error) {
      setVerificationError(error.message || "Unable to verify membership.");
    } finally {
      setIsVerifying(false);
    }
  }

  async function loadMemberDetails(member) {
    const memberCardNumber = getMemberCardNumber(member);
    if (!memberCardNumber) {
      setMemberError("This member does not have a card number.");
      return;
    }

    setMemberError("");
    setSelectedMember(null);
    setLoadingMember(true);

    try {
      const response = await fetch(
        `${BASEURL}/admin/members/${encodeURIComponent(memberCardNumber)}`,
        { credentials: "include" },
      );
      const data = await readResponse(response);
      const payload = getPayload(data);
      setSelectedMember(payload.member || payload);
    } catch (error) {
      setMemberError(error.message || "Unable to load member details.");
    } finally {
      setLoadingMember(false);
    }
  }

  return (
    <section className="min-h-screen bg-[#080b12] px-6 py-20 text-white md:py-24">
      <div className="mx-auto max-w-7xl">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
            Front Desk
          </p>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">Admin Dashboard</h1>
          <p className="mt-4 max-w-2xl text-gray-400">
            Manage memberships, verify members, and keep track of today's gym activity.
          </p>
        </div>

        {loadError ? (
          <div role="alert" className="mt-10 rounded-xl border border-red-500/20 bg-red-500/10 p-5 text-red-200">
            <p>{loadError}</p>
            <Link to={PATHS.admin.login} className="mt-3 inline-block font-semibold text-blue-300">
              Sign in with an admin account
            </Link>
          </div>
        ) : (
          <>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                        <Icon size={22} />
                      </div>
                      <Activity size={18} className="text-gray-600" />
                    </div>
                    <p className="mt-6 text-3xl font-bold">
                      {loading ? "…" : stat.value}
                    </p>
                    <p className="mt-1 text-sm text-gray-400">{stat.label}</p>
                  </div>
                );
              })}
            </div>

            <form
              onSubmit={handleVerifyMembership}
              className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8"
            >
              <div className="max-w-2xl">
                <h2 className="text-2xl font-bold">Member Verification</h2>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Enter the unique card number to verify the member's subscription.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <div className="relative flex-1">
                    <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(event) => setCardNumber(event.target.value)}
                      placeholder="Enter card number"
                      className="w-full rounded-xl border border-white/10 bg-[#111620] py-4 pl-12 pr-4 text-white outline-none placeholder:text-gray-500 focus:border-blue-500"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isVerifying}
                    className="rounded-xl bg-blue-600 px-6 py-4 font-semibold transition hover:bg-blue-500 disabled:opacity-60"
                  >
                    {isVerifying ? "Verifying..." : "Verify Member"}
                  </button>
                </div>
                {verificationError && <p role="alert" className="mt-4 text-sm text-red-300">{verificationError}</p>}
                {verificationResult && (
                  <div role="status" className="mt-4 rounded-xl border border-green-500/20 bg-green-500/10 p-4 text-sm text-green-200">
                    {verificationResult.message || verificationResult.msg || "Membership verification completed."}
                  </div>
                )}
              </div>
            </form>

            <section className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
              <div>
                <h2 className="text-2xl font-bold">Members</h2>
                <p className="mt-1 text-sm text-gray-400">Browse members by membership status.</p>
              </div>

              <div aria-label="Filter members by membership status" className="mt-6 inline-flex max-w-full flex-wrap gap-1 rounded-xl border border-white/10 bg-black/30 p-1">
                {membershipFilters.map((status) => {
                  const count = members.filter((member) => getMemberStatus(member) === status).length;
                  return (
                    <button
                      key={status}
                      type="button"
                      aria-pressed={activeMembershipFilter === status}
                      onClick={() => setActiveMembershipFilter(status)}
                      className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                        activeMembershipFilter === status
                          ? "bg-blue-600 text-white"
                          : "text-gray-300 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {status} <span className="ml-1 text-xs opacity-75">{count}</span>
                    </button>
                  );
                })}
              </div>

              {memberError && <p role="alert" className="mt-4 text-sm text-red-300">{memberError}</p>}
              {loadingMember && <p className="mt-4 text-sm text-gray-300">Loading member details...</p>}
              {selectedMember && (
                <div className="mt-4 rounded-xl border border-blue-500/20 bg-blue-500/5 p-4 text-sm">
                  <p className="font-semibold">{selectedMember.name || selectedMember.fullName || "Member details"}</p>
                  <p className="mt-1 text-gray-300">{selectedMember.email || ""}</p>
                  <p className="mt-1 text-gray-300">
                    Status: {getMemberStatus(selectedMember)}
                  </p>
                </div>
              )}

              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-150 text-left">
                  <thead>
                    <tr className="border-b border-white/10 text-sm text-gray-500">
                      <th className="pb-4 font-medium">Member</th>
                      <th className="pb-4 font-medium">Card Number</th>
                      <th className="pb-4 font-medium">Email</th>
                      <th className="pb-4 font-medium">Membership</th>
                      <th className="pb-4 text-right font-medium">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredMembers.map((member, index) => {
                      const memberCardNumber = getMemberCardNumber(member);
                      return (
                        <tr key={memberCardNumber || member.id || index} className="border-b border-white/5 last:border-0">
                          <td className="py-5 font-medium">{member.name || member.fullName || "—"}</td>
                          <td className="py-5 text-sm text-gray-400">{memberCardNumber || "—"}</td>
                          <td className="py-5 text-sm text-gray-400">{member.email || "—"}</td>
                          <td className="py-5 text-sm text-gray-300">{getMemberStatus(member)}</td>
                          <td className="py-5 text-right">
                            <button
                              type="button"
                              onClick={() => loadMemberDetails(member)}
                              disabled={!memberCardNumber || loadingMember}
                              className="rounded-lg border border-white/15 px-3 py-2 text-sm text-white transition hover:bg-white/10 disabled:opacity-50"
                            >
                              View
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                    {!loading && filteredMembers.length === 0 && (
                      <tr>
                        <td colSpan={5} className="py-8 text-center text-sm text-gray-400">
                          {members.length ? "No members in this status." : "No members returned."}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </section>
          </>
        )}
      </div>
    </section>
  );
}

export default AdminDashboard;
