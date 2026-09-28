import { useState } from "react";
import { ArrowUpRight, Utensils, Search } from "lucide-react";

function Nutrition() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    "All",
    "High Protein",
    "Weight Loss",
    "Muscle Gain",
    "Healthy",
  ];

  const meals = [
    {
      name: "Grilled Chicken & Rice",
      category: "High Protein",
      calories: "520 kcal",
      protein: "48g Protein",
      meal: "Lunch",
      description:
        "Lean grilled chicken served with rice and fresh vegetables for a balanced high-protein meal.",
    },
    {
      name: "Protein Oatmeal",
      category: "Muscle Gain",
      calories: "430 kcal",
      protein: "28g Protein",
      meal: "Breakfast",
      description:
        "A nutritious combination of oats, banana, milk, and protein designed to support muscle growth.",
    },
    {
      name: "Chicken Salad Bowl",
      category: "Weight Loss",
      calories: "350 kcal",
      protein: "35g Protein",
      meal: "Lunch",
      description:
        "A light but filling salad packed with vegetables and lean chicken for a balanced meal.",
    },
    {
      name: "Greek Yogurt & Berries",
      category: "Healthy",
      calories: "280 kcal",
      protein: "20g Protein",
      meal: "Snack",
      description:
        "Greek yogurt combined with fresh berries for a simple and nutritious snack.",
    },
    {
      name: "Salmon & Vegetables",
      category: "High Protein",
      calories: "490 kcal",
      protein: "42g Protein",
      meal: "Dinner",
      description:
        "A nutrient-rich salmon meal served with vegetables and a balanced side.",
    },
    {
      name: "Avocado Egg Toast",
      category: "Healthy",
      calories: "390 kcal",
      protein: "19g Protein",
      meal: "Breakfast",
      description:
        "Whole-grain toast topped with avocado and eggs for a nutritious start to the day.",
    },
  ];

  const filteredMeals = meals.filter((meal) => {
    const matchesCategory =
      activeCategory === "All" || meal.category === activeCategory;

    const matchesSearch = meal.name
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
            Nutrition
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-5xl">
            Fuel Your
            <span className="text-blue-500"> Progress.</span>
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-gray-400">
            Discover nutritious meals designed to support your workouts,
            recovery, and fitness goals.
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
            placeholder="Search meals..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            className="w-full rounded-xl border border-white/10 bg-white/5 py-4 pl-12 pr-5 text-white outline-none placeholder:text-gray-500 transition focus:border-blue-500 focus:bg-white/[0.08]"
          />
        </div>
        {/* Categories */}
        <div className="mt-10 flex flex-wrap gap-3">
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

        {/* Meal Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredMeals.map((meal) => (
            <div
              key={meal.name}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition duration-200 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-white/[0.08]"
            >
              {/* Meal Image */}
              <div className="relative flex h-52 items-center justify-center overflow-hidden bg-[#111620]">
                <div className="absolute inset-0 bg-linear-to-br from-blue-600/20 via-transparent to-black/40" />

                <Utensils
                  className="relative text-blue-400 transition duration-300 group-hover:scale-110"
                  size={48}
                  aria-hidden="true"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
                    {meal.category}
                  </span>

                  <span className="text-xs text-gray-300">{meal.meal}</span>
                </div>

                <h2 className="mt-4 text-xl font-bold">{meal.name}</h2>

                <p className="mt-3 text-sm leading-relaxed text-gray-200">
                  {meal.description}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-5">
                  <div>
                    <p className="text-sm font-semibold">{meal.calories}</p>

                    <p className="mt-1 text-xs text-gray-300">{meal.protein}</p>
                  </div>

                  <button
                    type="button"
                    className="flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2 text-sm font-semibold transition hover:border-blue-400 hover:bg-blue-500/10"
                  >
                    View Meal
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

export default Nutrition;
