import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import profileBackground from "../../assets/profile page image.jpg";
import { PATHS } from "../../Routes/Paths";

function UserProfile() {
  const BASEURL = "${BASEURL}/auth/change-password";
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [passwordError, setPasswordError] = useState("");
  const [passwordNotice, setPasswordNotice] = useState("");
  const [passwordLoading, setPasswordLoading] = useState(false);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await fetch(`${BASEURL}/auth/me`, {
          credentials: "include",
        });
        const contentType = response.headers.get("content-type") || "";
        const data = contentType.includes("application/json")
          ? await response.json()
          : await response.text();

        if (!response.ok) {
          throw new Error(
            typeof data === "string"
              ? data || `Unable to load profile (${response.status}).`
              : data.message || data.msg || `Unable to load profile (${response.status}).`,
          );
        }

        setUser(data.user || data.data?.user || data.data || data);
      } catch (requestError) {
        setError(requestError.message || "Unable to load your profile.");
      } finally {
        setLoading(false);
      }
    }

    fetchProfile();
  }, []);

  const name = user?.name || user?.fullName || user?.username || "Member";
  const username = user?.username || user?.userName;
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  async function handlePasswordChange(event) {
    event.preventDefault();
    setPasswordError("");
    setPasswordNotice("");

    if (passwordForm.newPassword.length < 8) {
      setPasswordError("New password must be at least 8 characters.");
      return;
    }

    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setPasswordError("New passwords do not match.");
      return;
    }

    setPasswordLoading(true);

    try {
      const response = await fetch(`${BASEURL}/auth/change-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          currentPassword: passwordForm.currentPassword,
          newPassword: passwordForm.newPassword,
        }),
      });
      const contentType = response.headers.get("content-type") || "";
      const data = contentType.includes("application/json")
        ? await response.json()
        : { message: await response.text() };

      if (!response.ok) {
        throw new Error(
          data.message || data.msg || data.error || `Password change failed (${response.status}).`,
        );
      }

      setPasswordForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
      setPasswordNotice(data.message || data.msg || "Password changed successfully.");
    } catch (requestError) {
      setPasswordError(requestError.message || "Unable to change your password.");
    } finally {
      setPasswordLoading(false);
    }
  }

  return (
    <section
      className="relative min-h-screen bg-cover bg-center px-6 py-16 text-white"
      style={{
        backgroundImage: `url(${profileBackground})`,
      }}
    >
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Page heading */}
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
            FitZone
          </p>

          <h1 className="mt-2 text-4xl font-bold">My Profile</h1>

          <p className="mt-2 text-gray-200">
            Manage your account and membership.
          </p>
        </div>

        {/* Profile and Membership */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Profile Card */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:col-span-1">
            {loading ? (
              <p className="text-gray-300">Loading profile...</p>
            ) : error ? (
              <div role="alert">
                <p className="text-sm text-red-300">{error}</p>
                <Link
                  to={PATHS.auth.login}
                  className="mt-4 inline-block font-semibold text-blue-300 hover:text-blue-200"
                >
                  Log in again
                </Link>
              </div>
            ) : (
              <>
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold">
                  {initials || "M"}
                </div>

                <h2 className="mt-5 text-2xl font-bold">{name}</h2>

                {username && <p className="mt-1 text-gray-200">@{username}</p>}

                <p className="mt-4 text-sm text-gray-200">
                  {user?.email || "Email unavailable"}
                </p>
              </>
            )}
          </div>

          {/* Membership Card */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:col-span-2">
            <h2 className="text-2xl font-bold">Membership</h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-black/30 p-4">
                <p className="text-sm text-gray-200">Plan</p>

                <p className="mt-1 text-lg font-semibold">Premium</p>
              </div>

              <div className="rounded-xl bg-black/30 p-4">
                <p className="text-sm text-gray-200">Status</p>

                <p className="mt-1 text-lg font-semibold text-green-400">
                  Active
                </p>
              </div>

              <div className="rounded-xl bg-black/30 p-4">
                <p className="text-sm text-gray-200">Access ID</p>

                <p className="mt-1 text-lg font-semibold">FZ-83921</p>
              </div>

              <div className="rounded-xl bg-black/30 p-4">
                <p className="text-sm text-gray-200">Expires</p>

                <p className="mt-1 text-lg font-semibold">24 Oct 2026</p>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={handlePasswordChange}
          className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8"
        >
          <h2 className="text-2xl font-bold">Change Password</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <label className="text-sm text-gray-300">
              Current password
              <input
                type="password"
                autoComplete="current-password"
                required
                value={passwordForm.currentPassword}
                onChange={(event) =>
                  setPasswordForm({ ...passwordForm, currentPassword: event.target.value })
                }
                className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-blue-500"
              />
            </label>
            <label className="text-sm text-gray-300">
              New password
              <input
                type="password"
                autoComplete="new-password"
                minLength={8}
                required
                value={passwordForm.newPassword}
                onChange={(event) =>
                  setPasswordForm({ ...passwordForm, newPassword: event.target.value })
                }
                className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-blue-500"
              />
            </label>
            <label className="text-sm text-gray-300">
              Confirm new password
              <input
                type="password"
                autoComplete="new-password"
                minLength={8}
                required
                value={passwordForm.confirmPassword}
                onChange={(event) =>
                  setPasswordForm({ ...passwordForm, confirmPassword: event.target.value })
                }
                className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-blue-500"
              />
            </label>
          </div>

          {passwordError && (
            <p role="alert" className="mt-4 text-sm text-red-300">{passwordError}</p>
          )}
          {passwordNotice && (
            <p role="status" className="mt-4 text-sm text-green-300">{passwordNotice}</p>
          )}

          <button
            type="submit"
            disabled={passwordLoading}
            className="mt-6 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {passwordLoading ? "Updating password..." : "Update Password"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default UserProfile;
