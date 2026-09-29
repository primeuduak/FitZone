import { Navigate, useLocation } from "react-router-dom";
import paymentBackground from "../../assets/payment image.jpg";
import { PATHS } from "../../Routes/Paths";
import { useState } from "react";

function PaymentPage() {
  const location = useLocation();
  const plan = location.state?.plan;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const BASEURL = `${process.env.REACT_APP_BASE_URL}/payments/checkout`;

  if (!plan) {
    return <Navigate to={PATHS.public.membership} replace />;
  }

  const handlePayment = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${BASEURL}/payments/checkout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          planId: plan.id,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(
          data.message || data.msg || "Unable to start payment. Please try again."
        );
      }

      const paymentLink = data.paymentLink || data.data?.paymentLink || data.data?.link;

      if (paymentLink) {
        sessionStorage.setItem("fitzonePendingPlan", JSON.stringify(plan));
        window.location.assign(paymentLink);
        return;
      }

      throw new Error("Payment link was not returned by the server.");
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat px-6 py-24 text-white"
      style={{
        backgroundImage: `url(${paymentBackground})`,
      }}
    >
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
          Membership
        </p>

        <h1 className="mt-3 text-4xl font-bold">
          Complete Your Payment
        </h1>

        <p className="mt-3 text-gray-400">
          Review your membership and continue with secure payment.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">

          {/* Payment Section */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold">
              Secure Payment
            </h2>

            <p className="mt-3 leading-7 text-gray-400">
              Click the button below to continue to our secure payment
              provider.
            </p>

            {error && (
              <div className="mt-6 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                {error}
              </div>
            )}

            <button
              type="button"
              onClick={handlePayment}
              disabled={loading}
              className="mt-8 w-full rounded-xl bg-blue-600 px-5 py-3 font-semibold transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Redirecting to payment..." : "Pay Now"}
            </button>

            <p className="mt-4 text-center text-xs text-gray-500">
              You will be redirected to the secure payment page.
            </p>
          </div>

          {/* Order Summary */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold">
              Order Summary
            </h2>

            <div className="mt-6 rounded-xl bg-black/30 p-5">
              <p className="text-sm text-gray-500">
                Selected Plan
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                {plan.name}
              </h3>

              <div className="mt-5 flex items-end justify-between">
                <span className="text-gray-400">
                  Membership
                </span>

                <span className="text-2xl font-bold">
                  ₦{Number(plan.price).toLocaleString()}
                </span>
              </div>

              <div className="mt-4 border-t border-white/10 pt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">
                    Duration
                  </span>

                  <span>
                    {plan.duration} days
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default PaymentPage;