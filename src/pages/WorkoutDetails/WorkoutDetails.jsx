import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, CalendarDays, Dumbbell, Play, Timer } from "lucide-react";
import { PATHS } from "../../Routes/Paths";

function WorkoutDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  const defaultWorkout = {
    title: "Strength Builder",
    level: "Intermediate",
    duration: "6 Weeks",
    frequency: "4 Days / Week",
    description:
      "A structured strength program designed to help you build strength, improve performance, and stay consistent.",
  };

  const selectedPlan = location.state?.plan;
  const workout = selectedPlan
    ? {
        title: selectedPlan.name,
        level: selectedPlan.level,
        duration: selectedPlan.duration,
        frequency: selectedPlan.days,
        description: selectedPlan.description,
      }
    : defaultWorkout;

  const weeklySchedule = [
    {
      day: "MON",
      title: "Upper Body",
      exercises: "Chest · Shoulders · Triceps",
    },
    {
      day: "WED",
      title: "Lower Body",
      exercises: "Legs · Glutes · Core",
    },
    {
      day: "FRI",
      title: "Upper Body",
      exercises: "Back · Biceps · Shoulders",
    },
    {
      day: "SAT",
      title: "Full Body",
      exercises: "Strength · Conditioning",
    },
  ];

  return (
    <section className="min-h-screen bg-[#080b12] px-6 py-20 text-white md:py-24">
      <div className="mx-auto max-w-4xl">
        {/* Back */}
        <button
          onClick={() => navigate(PATHS.app.workoutPlans)}
          className="mb-8 flex items-center gap-2 text-sm font-semibold text-gray-400 transition hover:text-blue-400"
        >
          <ArrowLeft size={18} aria-hidden="true" />
          Back to Workout Plans
        </button>

        {/* Header */}
        <div className="relative mb-12 overflow-hidden rounded-2xl border border-blue-500/30 bg-linear-to-br from-blue-600/20 to-white/5 p-6 md:p-8">
          <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full border border-blue-400/20" />

          <div className="relative z-10">
          <div className="mb-4 flex flex-wrap gap-3">
            <span className="rounded-full bg-blue-500/20 px-4 py-2 text-sm font-semibold text-blue-200">
              <Dumbbell className="mr-2 inline" size={16} aria-hidden="true" />
              {workout.level}
            </span>

            <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-gray-200">
              <Timer className="mr-2 inline" size={16} aria-hidden="true" />
              {workout.duration}
            </span>

            <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-gray-200">
              <CalendarDays className="mr-2 inline" size={16} aria-hidden="true" />
              {workout.frequency}
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            {workout.title}
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-200">
            {workout.description}
          </p>
          </div>
        </div>

        {/* Weekly Schedule */}
        <div>
          <h2 className="mb-6 text-2xl font-semibold">Weekly Schedule</h2>

          <div className="space-y-4">
            {weeklySchedule.map((workout, index) => (
                <div
                key={index}
                className="group flex items-center gap-5 rounded-2xl border border-white/20 bg-black/60 p-5 transition duration-200 hover:-translate-y-0.5 hover:border-blue-500/50 hover:bg-black/75"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-500 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition group-hover:bg-blue-400">
                  {workout.day}
                </div>

                <div>
                  <h3 className="flex items-center gap-2 font-semibold">
                    {workout.title}
                    <ArrowUpRight size={16} className="text-gray-600 transition group-hover:text-blue-400" aria-hidden="true" />
                  </h3>
                  <p className="mt-1 text-sm text-gray-200">
                    {workout.exercises}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <button
            onClick={() => navigate(PATHS.app.progress)}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-500"
          >
            <Play size={18} fill="currentColor" aria-hidden="true" />
            Start Workout
          </button>
        </div>
      </div>
    </section>
  );
}

export default WorkoutDetails;