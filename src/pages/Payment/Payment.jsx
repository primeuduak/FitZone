import { useLocation, useNavigate } from "react-router-dom";
import paymentBackground from "../../assets/payment image.jpg";
import { PATHS } from "../../Routes/Paths";

function PaymentPage() {
  const location = useLocation();
  const plan = location.state?.plan;
  const navigate = useNavigate();

  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat px-6 py-24 text-white"
      style={{
        backgroundImage: `url(${paymentBackground})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
          Membership
        </p>

        <h1 className="mt-3 text-4xl font-bold">Complete Your Payment</h1>

        <p className="mt-3 text-gray-400">
          Review your membership and continue with payment.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* Payment Form */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold">Payment Details</h2>

            <div className="mt-6 space-y-5">
              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  Cardholder Name
                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  Card Number
                </label>

                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-2 block text-sm text-gray-400">
                    Expiry Date
                  </label>

                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-gray-400">
                    CVV
                  </label>

                  <input
                    type="text"
                    placeholder="123"
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-blue-500"
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={() =>
                  navigate(PATHS.public.paymentSuccess, {
                    state: { plan },
                  })
                }
                className="w-full rounded-xl bg-blue-600 px-5 py-3 font-semibold transition hover:bg-blue-700"
              >
                Pay Now
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold">Order Summary</h2>

            <div className="mt-6 rounded-xl bg-black/30 p-5">
              <p className="text-sm text-gray-500">Selected Plan</p>

              <h3 className="mt-2 text-2xl font-bold">{plan?.name}</h3>

              <div className="mt-5 flex items-end justify-between">
                <span className="text-gray-400">Monthly Membership</span>

                <span className="text-2xl font-bold">{plan?.price}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PaymentPage;
