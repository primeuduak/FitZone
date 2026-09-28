import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight, Dumbbell, Search } from "lucide-react";
import { PATHS } from "../../Routes/Paths";

function WorkoutPlans() {
  const navigate = useNavigate();
  const [activeLevel, setActiveLevel] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const levels = ["All", "Beginner", "Intermediate", "Advanced"];

  const workoutPlans = [
    {
      name: "Full Body Starter",
      level: "Beginner",
      duration: "4 Weeks",
      days: "3 Days / Week",
      description:
        "A simple full-body program designed to help beginners build strength and establish a consistent training routine.",
    },
    {
      name: "Strength Builder",
      level: "Intermediate",
      duration: "6 Weeks",
      days: "4 Days / Week",
      description:
        "Build strength and muscle with a structured training program focused on progressive overload.",
    },
    {
      name: "Muscle Growth",
      level: "Intermediate",
      duration: "8 Weeks",
      days: "5 Days / Week",
      description:
        "A structured hypertrophy program designed to target major muscle groups and improve overall muscle development.",
    },
    {
      name: "Power & Performance",
      level: "Advanced",
      duration: "8 Weeks",
      days: "5 Days / Week",
      description:
        "An advanced program combining strength, power, conditioning, and performance-focused training.",
    },
    {
      name: "Lower Body Focus",
      level: "Beginner",
      duration: "4 Weeks",
      days: "3 Days / Week",
      description:
        "Improve lower-body strength with focused workouts for your legs, glutes, and core.",
    },
    {
      name: "Athletic Conditioning",
      level: "Advanced",
      duration: "6 Weeks",
      days: "4 Days / Week",
      description:
        "Improve endurance, speed, strength, and conditioning with athletic-style workouts.",
    },
  ];

  const filteredPlans = workoutPlans.filter((plan) => {
    const matchesLevel = activeLevel === "All" || plan.level === activeLevel;

    const matchesSearch = plan.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesLevel && matchesSearch;
  });

  return (
    <section className="min-h-screen bg-[#080b12] px-6 py-20 text-white md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Hero */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
            Workout Programs
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-5xl">
            Train With a<span className="text-blue-500"> Plan.</span>
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-gray-400">
            Follow structured workout programs designed to help you build
            strength, improve fitness, and stay consistent.
          </p>
        </div>
        {/* Search */}
        <div className="relative mt-10 max-w-xl">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            size={20}
            aria-hidden="true"
          />

          <input
            type="text"
            placeholder="Search workout plans..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            className="w-full rounded-xl border border-white/10 bg-white/5 py-4 pl-12 pr-5 text-white outline-none placeholder:text-gray-500 transition focus:border-blue-500 focus:bg-white/8"
          />
        </div>

        {/* Level Filters */}
        <div className="mt-10 flex flex-wrap gap-3">
          {levels.map((level) => (
            <button
              key={level}
              type="button"
              onClick={() => setActiveLevel(level)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                activeLevel === level
                  ? "bg-blue-600 text-white"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {level}
            </button>
          ))}
        </div>

        {/* Workout Plans */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPlans.map((plan) => (
            <div
              key={plan.name}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition duration-200 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-white/8"
            >
              {/* Workout Image */}
              <div className="relative flex h-52 items-center justify-center overflow-hidden bg-[#111620]">
                <div className="absolute inset-0 bg-linear-to-br from-blue-600/20 via-transparent to-black/40" />

                <Dumbbell
                  className="relative text-blue-400 transition duration-300 group-hover:scale-110"
                  size={48}
                  aria-hidden="true"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
                    {plan.level}
                  </span>

                  <span className="text-xs text-gray-300">{plan.duration}</span>
                </div>

                <h2 className="mt-4 text-xl font-bold">{plan.name}</h2>

                <p className="mt-3 text-sm leading-relaxed text-gray-200">
                  {plan.description}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="text-sm text-gray-200">{plan.days}</span>

                  <button
                    onClick={() =>
                      navigate(PATHS.app.workoutDetails, {
                        state: { plan },
                      })
                    }
                    className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold transition hover:bg-blue-500"
                  >
                    View Plan
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkoutPlans;
