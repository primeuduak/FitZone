import { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import workoutBackground from "../../assets/workout-background2.avif";
import { PATHS } from "../../Routes/Paths";

function VerifyEmail() {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email;
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (!email) {
    return <Navigate to={PATHS.auth.register} replace />;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");

    if (!otp.trim()) {
      setError("Enter the verification code sent to your email.");
      return;
    }

    setLoading(true);
const BASEURL = "https://fitness-website-api-v1.onrender.com";
    try {
      const response = await fetch(`${BASEURL}/auth/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp: otp.trim() }),
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          data.msg || data.message || data.error || `Verification failed (${response.status}).`,
        );
      }

      navigate(PATHS.auth.login, {
        replace: true,
        state: { message: "Your email is verified. You can now log in." },
      });
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      className="relative min-h-screen bg-cover bg-center px-6 py-16 text-white"
      style={{ backgroundImage: `url(${workoutBackground})` }}
    >
      <div className="absolute inset-0 bg-black/75" />

      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-md items-center justify-center">
        <div className="w-full rounded-2xl border border-white/10 bg-black/40 p-8 shadow-2xl backdrop-blur-md">
          <div className="text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
              FitZone
            </p>
            <h1 className="text-3xl font-bold">Verify Your Email</h1>
            <p className="mt-3 text-gray-300">
              Enter the verification code sent to <span className="font-semibold text-white">{email}</span>.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label
                htmlFor="otp"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Verification Code
              </label>
              <input
                id="otp"
                name="otp"
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                value={otp}
                onChange={(event) => {
                  setOtp(event.target.value.replace(/\s/g, ""));
                  setError("");
                }}
                placeholder="Enter your code"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-center text-xl tracking-[0.3em] text-white outline-none placeholder:text-gray-500 focus:border-blue-500"
              />
            </div>

            {error && (
              <p role="alert" className="rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-400">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Verifying..." : "Verify Email"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-400">
            Wrong email?{" "}
            <Link
              to={PATHS.auth.register}
              className="font-semibold text-blue-500 transition hover:text-blue-400"
            >
              Register again
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default VerifyEmail;
