import membership from "../../assets/membership image.jpg";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../Routes/Paths";

function MembershipPlans() {
  const navigate = useNavigate();
  const plans = [
    {
      name: "Basic",
      price: "₦500",
      period: "/ month",
      description:
        "Everything you need to get started with your fitness journey.",
      features: [
        "Gym access",
        "Basic equipment access",
        "Locker access",
        "Free fitness assessment",
      ],
    },
    {
      name: "Premium",
      price: "₦1,000",
      period: "/ month",
      description: "More flexibility and benefits for serious fitness goals.",
      popular: true,
      features: [
        "24/7 gym access",
        "All equipment access",
        "Locker access",
        "Personal fitness assessment",
        "Group fitness classes",
      ],
    },
    {
      name: "Elite",
      price: "₦2,000",
      period: "/ month",
      description: "A complete premium experience with personalized support.",
      features: [
        "24/7 gym access",
        "All equipment access",
        "Personal trainer",
        "Nutrition guidance",
        "Priority support",
      ],
    },
  ];

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
          {plans.map((plan) => (
            <div
              key={plan.name}
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
                {plan.description}
              </p>

              {/* Price */}
              <div className="mt-8 flex items-end gap-1">
                <span className="text-4xl font-extrabold">{plan.price}</span>

                <span className="mb-1 text-sm text-gray-200">
                  {plan.period}
                </span>
              </div>

              {/* Features */}
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
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
