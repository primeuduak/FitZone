import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import successBackground from "../../assets/payment success.jpg";
import { PATHS } from "../../Routes/Paths";

function PaymentSuccess() {
  const location = useLocation();
  const navigate = useNavigate();
  const BASEURL = `${process.env.REACT_APP_BASE_URL}/payments/verify`;
  const searchParams = new URLSearchParams(location.search);
  const transactionId = searchParams.get("transaction_id") || searchParams.get("transactionId");
  const transactionReference = searchParams.get("tx_ref");
  const callbackStatus = searchParams.get("status");

  const [plan] = useState(() => {
    if (location.state?.plan) return location.state.plan;

    try {
      return JSON.parse(sessionStorage.getItem("fitzonePendingPlan")) || null;
    } catch {
      return null;
    }
  });
  const [isVerifying, setIsVerifying] = useState(true);
  const [isVerified, setIsVerified] = useState(false);
  const [verificationError, setVerificationError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function verifyPayment() {
      if (callbackStatus && callbackStatus.toLowerCase() !== "successful") {
        setVerificationError("Payment was not completed.");
        setIsVerifying(false);
        return;
      }

      if (!transactionId && !transactionReference) {
        setVerificationError("Payment confirmation details were not returned.");
        setIsVerifying(false);
        return;
      }

      try {
        const response = await fetch(`${BASEURL}/payments/verify`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({
            transactionId,
            transaction_id: transactionId,
            tx_ref: transactionReference,
          }),
        });
        const contentType = response.headers.get("content-type") || "";
        const data = contentType.includes("application/json")
          ? await response.json()
          : { message: await response.text() };

        if (!response.ok || data.success === false) {
          throw new Error(
            data.message || data.msg || data.error || `Payment verification failed (${response.status}).`,
          );
        }

        const paymentStatus = String(
          data.status || data.data?.status || data.data?.payment?.status || "",
        ).toLowerCase();

        if (["failed", "cancelled", "canceled", "error"].includes(paymentStatus)) {
          throw new Error("The payment was not successful.");
        }

        if (isMounted) {
          setIsVerified(true);
          sessionStorage.removeItem("fitzonePendingPlan");
        }
      } catch (error) {
        if (isMounted) {
          setVerificationError(error.message || "Unable to verify this payment.");
        }
      } finally {
        if (isMounted) setIsVerifying(false);
      }
    }

    verifyPayment();
    return () => {
      isMounted = false;
    };
  }, [callbackStatus, transactionId, transactionReference]);

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
          {isVerifying ? (
            <>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
                Payment
              </p>
              <h1 className="mt-3 text-3xl font-bold">Verifying your payment</h1>
              <p className="mt-4 text-gray-300">Please wait while we confirm the transaction.</p>
            </>
          ) : isVerified ? (
            <>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-2xl font-bold text-white">
                  ✓
                </div>
              </div>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
                Payment Successful
              </p>
              <h1 className="mt-3 text-4xl font-bold">Welcome to the Gym</h1>
              <p className="mx-auto mt-4 max-w-lg text-gray-300">
                Your payment has been verified. Your membership is ready.
              </p>
            </>
          ) : (
            <>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-300">
                Payment
              </p>
              <h1 className="mt-3 text-3xl font-bold">Payment not verified</h1>
              <p role="alert" className="mx-auto mt-4 max-w-lg text-red-200">
                {verificationError}
              </p>
            </>
          )}

          {isVerified && (
          <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-6 text-left">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-gray-400">Membership Plan</span>

              <span className="font-semibold">{plan?.name || "Membership Plan"}</span>
            </div>

            <div className="flex items-center justify-between border-b border-white/10 py-4">
              <span className="text-gray-400">Amount Paid</span>

              <span className="font-semibold">
                {plan?.price ? `₦${Number(plan.price).toLocaleString()}` : "Confirmed"}
              </span>
            </div>

            <div className="flex items-center justify-between pt-4">
              <span className="text-gray-400">Status</span>

              <span className="rounded-full bg-green-500/10 px-3 py-1 text-sm font-semibold text-green-400">
                Active
              </span>
            </div>
          </div>
          )}

          {isVerified && (
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
          )}

          <button
            type="button"
            onClick={() => navigate(isVerified ? PATHS.public.home : PATHS.public.membership)}
            className="mt-4 text-sm text-gray-400 transition hover:text-white"
          >
            {isVerified ? "Return to Home" : "Return to Plans"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default PaymentSuccess;
