import { useLocation, useNavigate } from "react-router-dom";
import successBackground from "../../assets/payment success.jpg";
import { PATHS } from "../../Routes/Paths";

function PaymentSuccess() {
  const location = useLocation();
  const navigate = useNavigate();

  const plan = location.state?.plan;

  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat px-6 py-24 text-white"
      style={{
        backgroundImage: `url(${successBackground})`,
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-2xl items-center justify-center">
        <div className="w-full rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-2xl backdrop-blur-sm md:p-12">
          {/* Success Icon */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-2xl font-bold text-white">
              ✓
            </div>
          </div>

          {/* Heading */}
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
            Payment Successful
          </p>

          <h1 className="mt-3 text-4xl font-bold">Welcome to the Gym</h1>

          <p className="mx-auto mt-4 max-w-lg text-gray-400">
            Your membership has been activated successfully. You can now access
            your membership card.
          </p>

          {/* Membership Details */}
          <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-6 text-left">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-gray-400">Membership Plan</span>

              <span className="font-semibold">
                {plan?.name || "Premium Plan"}
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-white/10 py-4">
              <span className="text-gray-400">Amount Paid</span>

              <span className="font-semibold">{plan?.price || "$0"}</span>
            </div>

            <div className="flex items-center justify-between pt-4">
              <span className="text-gray-400">Status</span>

              <span className="rounded-full bg-green-500/10 px-3 py-1 text-sm font-semibold text-green-400">
                Active
              </span>
            </div>
          </div>

          {/* Action */}
          <button
            type="button"
            onClick={() =>
              navigate(PATHS.public.accessCard, {
                state: { plan },
              })
            }
            className="mt-8 w-full rounded-xl bg-blue-600 px-5 py-3 font-semibold transition hover:bg-blue-700"
          >
            View Access Card
          </button>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="mt-4 text-sm text-gray-400 transition hover:text-white"
          >
            Return to Home
          </button>
        </div>
      </div>
    </section>
  );
}

export default PaymentSuccess;
