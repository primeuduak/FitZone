import { useLocation, useNavigate } from "react-router-dom";
import accessCardBackground from "../../assets/access card image.jpg";
function AccessCard() {
  const location = useLocation();
  const navigate = useNavigate();

  const plan = location.state?.plan;

  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat px-6 py-24 text-white"
      style={{
        backgroundImage: `url(${accessCardBackground})`,
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
            Membership
          </p>

          <h1 className="mt-3 text-4xl font-bold">Your Access Card</h1>

          <p className="mt-3 text-gray-400">
            Use this card when checking in at the front desk.
          </p>
        </div>

        {/* Access Card */}
        <div className="mx-auto mt-12 max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-blue-600 via-blue-700 to-[#080b12] p-8 shadow-2xl md:p-10">
          {/* Card Header */}
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em]">
                FitZone
              </p>

              <p className="mt-1 text-sm text-blue-100">Gym Membership</p>
            </div>

            <div className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
              Active
            </div>
          </div>

          {/* Member Information */}
          <div className="mt-12">
            <p className="text-xs uppercase tracking-wider text-blue-100">
              Member Name
            </p>

            <h2 className="mt-1 text-3xl font-bold">John Doe</h2>
          </div>

          {/* ID + Plan */}
          <div className="mt-10 grid grid-cols-2 gap-6">
            <div>
              <p className="text-xs uppercase tracking-wider text-blue-100">
                Member ID
              </p>

              <p className="mt-2 text-lg font-semibold tracking-wider">
                FZ-2026-00124
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-blue-100">
                Membership
              </p>

              <p className="mt-2 text-lg font-semibold">
                {plan?.name || "Premium Plan"}
              </p>
            </div>
          </div>

          {/* Dates */}
          <div className="mt-8 grid grid-cols-2 gap-6 border-t border-white/20 pt-6">
            <div>
              <p className="text-xs uppercase tracking-wider text-blue-100">
                Start Date
              </p>

              <p className="mt-2 font-medium">Sep 25, 2026</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-blue-100">
                Expiry Date
              </p>

              <p className="mt-2 font-medium">Oct 25, 2026</p>
            </div>
          </div>

          {/* QR Placeholder */}
          <div className="mt-8 flex items-center justify-between border-t border-white/20 pt-6">
            <p className="max-w-xs text-sm text-blue-100">
              Present this card or your Member ID at the front desk for
              check-in.
            </p>

            <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-white p-2">
              <div className="grid h-full w-full grid-cols-4 gap-1">
                <span className="bg-black"></span>
                <span className="bg-black"></span>
                <span></span>
                <span className="bg-black"></span>

                <span></span>
                <span className="bg-black"></span>
                <span className="bg-black"></span>
                <span></span>

                <span className="bg-black"></span>
                <span></span>
                <span className="bg-black"></span>
                <span className="bg-black"></span>

                <span className="bg-black"></span>
                <span className="bg-black"></span>
                <span></span>
                <span className="bg-black"></span>
              </div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="text-sm text-gray-400 transition hover:text-white"
          >
            Return to Home
          </button>
        </div>
      </div>
    </section>
  );
}

export default AccessCard;
