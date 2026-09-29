import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PATHS } from "../../Routes/Paths";
import gymBackground from "../../assets/gym-background1.avif";

const BASEURL = "/api";

function AdminLogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setError("");
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${BASEURL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(formData),
      });
      const contentType = response.headers.get("content-type") || "";
      const data = contentType.includes("application/json")
        ? await response.json()
        : { message: await response.text() };

      if (!response.ok) {
        throw new Error(data.message || data.msg || "Unable to log in.");
      }

      const user = data.user || data.data?.user || data.data;
      const role = String(user?.role || data.role || "").toLowerCase();
      const isExplicitlyNotAdmin =
        (role && !["admin", "administrator", "staff"].includes(role)) ||
        user?.isAdmin === false ||
        data.isAdmin === false;

      if (isExplicitlyNotAdmin) {
        throw new Error("This account does not have admin access.");
      }

      navigate(PATHS.admin.dashboard, { replace: true });
    } catch (requestError) {
      setError(requestError.message || "Unable to log in as an admin.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      className="relative min-h-screen bg-cover bg-center px-6 py-16 text-white"
      style={{ backgroundImage: `url(${gymBackground})` }}
    >
      <div className="absolute inset-0 bg-black/80" />
      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-md items-center justify-center">
        <div className="w-full rounded-2xl border border-white/10 bg-black/50 p-8 shadow-2xl backdrop-blur-md">
          <div className="text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              FitZone Staff
            </p>
            <h1 className="text-3xl font-bold">Admin Sign In</h1>
            <p className="mt-2 text-gray-300">Sign in with an administrator account.</p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label htmlFor="admin-email" className="mb-2 block text-sm font-medium text-gray-300">
                Admin email
              </label>
              <input
                id="admin-email"
                name="email"
                type="email"
                autoComplete="username"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your admin email"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="admin-password" className="mb-2 block text-sm font-medium text-gray-300">
                Password
              </label>
              <input
                id="admin-password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-blue-500"
              />
            </div>

            {error && (
              <p role="alert" className="rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-300">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign In to Admin"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-400">
            <Link to={PATHS.auth.login} className="font-semibold text-blue-300 hover:text-blue-200">
              Return to member login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default AdminLogin;
