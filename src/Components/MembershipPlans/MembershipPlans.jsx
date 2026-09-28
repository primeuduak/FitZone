import membership from "../../assets/membership image.jpg";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../Routes/Paths";
import { useEffect, useState } from "react";

function MembershipPlans() {
  const navigate = useNavigate();
  const [plans, setPlans] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await fetch("/api/plans");

        if (!res.ok) {
          throw new Error("Unable to load membership plans.");
        }

        const data = await res.json();
        setPlans(Array.isArray(data.data) ? data.data : []);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlans();
  }, []);


  return (
    <section
      id="plans"
      className="relative bg-cover bg-center px-6 py-24 text-white lg:px-8"
      style={{
        backgroundImage: `url(${membership})`,
      }}
    >
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
            Membership Plans
          </p>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Choose the plan that
            <span className="block text-blue-500">works for you.</span>
          </h2>

          <p className="mt-5 text-gray-400">
            Flexible membership options designed to fit your goals, schedule,
            and lifestyle.
          </p>
        </div>

        {/* Plans */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {isLoading && (
            <p className="text-center text-gray-300 lg:col-span-3">
              Loading membership plans...
            </p>
          )}

          {!isLoading && error && (
            <p className="text-center text-red-300 lg:col-span-3">{error}</p>
          )}

          {!isLoading && !error && plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl border p-8 transition ${
                plan.popular
                  ? "border-blue-400 bg-blue-950/80"
                  : "border-white/20 bg-black/70"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute right-6 top-6 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold">{plan.name}</h3>

              <p className="mt-3 min-h-12 text-sm leading-6 text-gray-200">
                {plan.description || `Membership access for ${plan.duration} days.`}
              </p>

              {/* Price */}
              <div className="mt-8 flex items-end gap-1">
                <span className="text-4xl font-extrabold">
                  ₦{Number(plan.price).toLocaleString()}
                </span>

                <span className="mb-1 text-sm text-gray-200">
                  / {plan.duration} days
                </span>
              </div>

              {/* Features */}
              <ul className="mt-8 space-y-4">
                {plan.benefits.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-white"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/20 text-xs text-blue-400">
                      ✓
                    </span>

                    {feature}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                onClick={() =>
                  navigate(PATHS.public.choosePlan, {
                    state: { plan },
                  })
                }
                className={`mt-8 w-full rounded-xl px-5 py-3 font-semibold transition ${
                  plan.popular
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "border border-white/15 text-white hover:bg-white/5"
                }`}
              >
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MembershipPlans;
