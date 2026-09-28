import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { PATHS } from "../../Routes/Paths";
import choosePlan from "../../assets/choose plan image.jpg";

function ChoosePlan() {
  const location = useLocation();
  const plan = location.state?.plan;
  const navigate = useNavigate();

  if (!plan) {
    return <Navigate to={PATHS.public.membership} replace />;
  }

  return (
    <section
      className="relative min-h-screen bg-cover bg-center px-6 py-24 text-white"
      style={{
        backgroundImage: `url(${choosePlan})`,
      }}
    >
      <div className="relative z-10 mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
          Membership
        </p>

        <h1 className="mt-3 text-4xl font-bold">Confirm Your Plan</h1>

        <p className="mt-4 max-w-2xl rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-lg font-bold leading-7 text-white shadow-lg">
          Review your selected membership before continuing to payment.
        </p>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-bold">{plan.name}</h2>

          <p className="mt-2 text-3xl font-extrabold">
            {plan.price}
            <span className="ml-1 text-sm font-normal text-gray-500">
              {plan.period}
            </span>
          </p>

          <button
            onClick={() =>
              navigate("/payment", {
                state: { plan },
              })
            }
            className="mt-8 w-full rounded-xl bg-blue-600 px-5 py-3 font-semibold transition hover:bg-blue-700"
          >
            Continue to Payment
          </button>
        </div>
      </div>
    </section>
  );
}

export default ChoosePlan;
