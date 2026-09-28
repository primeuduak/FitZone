import {
  Activity,
  CheckCircle2,
  Clock3,
  CreditCard,
  Search,
  Users,
} from "lucide-react";

function AdminDashboard() {
  const stats = [
    {
      label: "Active Members",
      value: "248",
      icon: Users,
    },
    {
      label: "Checked In Today",
      value: "37",
      icon: CheckCircle2,
    },
    {
      label: "Expiring Soon",
      value: "12",
      icon: Clock3,
    },
    {
      label: "New Members",
      value: "5",
      icon: CreditCard,
    },
  ];

  const recentCheckIns = [
    {
      name: "John Doe",
      memberId: "FZ-2026-00124",
      time: "09:42 AM",
    },
    {
      name: "Sarah Smith",
      memberId: "FZ-2026-00131",
      time: "09:35 AM",
    },
    {
      name: "Michael Brown",
      memberId: "FZ-2026-00142",
      time: "09:21 AM",
    },
    {
      name: "David Wilson",
      memberId: "FZ-2026-00157",
      time: "09:08 AM",
    },
  ];

  return (
    <section className="min-h-screen bg-[#080b12] px-6 py-20 text-white md:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
            Front Desk
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-5xl">
            Admin Dashboard
          </h1>

          <p className="mt-4 max-w-2xl text-gray-400">
            Manage memberships, verify members, and keep track of today's
            gym activity.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <Icon size={22} />
                  </div>

                  <Activity
                    size={18}
                    className="text-gray-600"
                  />
                </div>

                <p className="mt-6 text-3xl font-bold">
                  {stat.value}
                </p>

                <p className="mt-1 text-sm text-gray-400">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Member Verification */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold">
              Member Verification
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              Enter the unique ID on the member's access card to verify
              their subscription.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <Search
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                  type="text"
                  placeholder="Enter Member ID"
                  className="w-full rounded-xl border border-white/10 bg-[#111620] py-4 pl-12 pr-4 text-white outline-none placeholder:text-gray-500 focus:border-blue-500"
                />
              </div>

              <button
                type="button"
                className="rounded-xl bg-blue-600 px-6 py-4 font-semibold transition hover:bg-blue-500"
              >
                Verify Member
              </button>
            </div>
          </div>
        </div>

        {/* Recent Check-ins */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">
                Recent Check-ins
              </h2>

              <p className="mt-1 text-sm text-gray-400">
                Today's latest member activity.
              </p>
            </div>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[600px] text-left">
              <thead>
                <tr className="border-b border-white/10 text-sm text-gray-500">
                  <th className="pb-4 font-medium">Member</th>
                  <th className="pb-4 font-medium">Member ID</th>
                  <th className="pb-4 font-medium">Check-in Time</th>
                  <th className="pb-4 text-right font-medium">Status</th>
                </tr>
              </thead>

              <tbody>
                {recentCheckIns.map((member) => (
                  <tr
                    key={member.memberId}
                    className="border-b border-white/5 last:border-0"
                  >
                    <td className="py-5 font-medium">
                      {member.name}
                    </td>

                    <td className="py-5 text-sm text-gray-400">
                      {member.memberId}
                    </td>

                    <td className="py-5 text-sm text-gray-400">
                      {member.time}
                    </td>

                    <td className="py-5 text-right">
                      <span className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                        Checked In
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AdminDashboard;