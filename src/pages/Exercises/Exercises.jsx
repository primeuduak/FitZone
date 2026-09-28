import { useState } from "react";
import { ArrowUpRight, Dumbbell, Search } from "lucide-react";

function Exercises() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const categories = [
    "All",
    "Chest",
    "Back",
    "Legs",
    "Shoulders",
    "Arms",
    "Core",
  ];

  const exercises = [
    {
      name: "Barbell Bench Press",
      category: "Chest",
      difficulty: "Intermediate",
      equipment: "Barbell",
    },
    {
      name: "Pull Ups",
      category: "Back",
      difficulty: "Intermediate",
      equipment: "Pull-up Bar",
    },
    {
      name: "Barbell Squats",
      category: "Legs",
      difficulty: "Intermediate",
      equipment: "Barbell",
    },
    {
      name: "Shoulder Press",
      category: "Shoulders",
      difficulty: "Beginner",
      equipment: "Dumbbells",
    },
    {
      name: "Bicep Curls",
      category: "Arms",
      difficulty: "Beginner",
      equipment: "Dumbbells",
    },
    {
      name: "Plank",
      category: "Core",
      difficulty: "Beginner",
      equipment: "Bodyweight",
    },
  ];

  const filteredExercises = exercises.filter((exercise) => {
    const matchesCategory =
      activeCategory === "All" || exercise.category === activeCategory;

    const matchesSearch = exercise.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="min-h-screen bg-[#080b12] px-6 py-20 text-white md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Hero */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
            Exercise Library
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-5xl">
            Train Smarter.
            <span className="text-blue-500"> Get Stronger.</span>
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-gray-400">
            Explore exercises designed to help you build strength, improve
            fitness, and reach your goals.
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
            placeholder="Search exercises..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            className="w-full rounded-xl border border-white/10 bg-white/5 py-4 pl-12 pr-5 text-white outline-none placeholder:text-gray-500 transition focus:border-blue-500 focus:bg-white/[0.08]"
          />
        </div>

        {/* Categories */}
        <div className="mt-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Exercise Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredExercises.map((exercise) => (
            <div
              key={exercise.name}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition duration-200 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-white/[0.08]"
            >
              {/* Exercise Image */}
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
                    {exercise.category}
                  </span>

                  <span className="text-xs text-gray-300">
                    {exercise.difficulty}
                  </span>
                </div>

                <h2 className="mt-4 text-xl font-bold">{exercise.name}</h2>

                <p className="mt-2 text-sm text-gray-200">
                  Equipment: {exercise.equipment}
                </p>

                <button
                  type="button"
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 px-4 py-3 text-sm font-semibold transition hover:border-blue-400 hover:bg-blue-500/10"
                >
                  View Exercise
                  <ArrowUpRight size={16} aria-hidden="true" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Exercises;
