import {
    ArrowUpRight,
    CalendarCheck2,
    Dumbbell,
    Flame,
    Target,
    TrendingDown,
} from "lucide-react";

function Progress() {
    const stats = [
        {
            label: "Current Weight",
            value: "78 kg",
            change: "-2 kg",
            icon: Target,
        },
        {
            label: "Goal Weight",
            value: "72 kg",
            change: "6 kg to go",
            icon: TrendingDown,
        },
        {
            label: "Workouts",
            value: "18",
            change: "This month",
            icon: Dumbbell,
        },
        {
            label: "Calories Burned",
            value: "8,420",
            change: "This month",
            icon: Flame,
        },
    ];

    const workoutHistory = [
        {
            workout: "Upper Body Strength",
            date: "Sep 24, 2026",
            duration: "52 min",
            calories: "420 kcal",
        },
        {
            workout: "Leg Day",
            date: "Sep 22, 2026",
            duration: "61 min",
            calories: "510 kcal",
        },
        {
            workout: "Full Body Workout",
            date: "Sep 20, 2026",
            duration: "48 min",
            calories: "390 kcal",
        },
        {
            workout: "Chest & Triceps",
            date: "Sep 18, 2026",
            duration: "55 min",
            calories: "450 kcal",
        },
    ];

    return (
        <section className="min-h-screen bg-[#080b12] px-6 py-20 text-white md:py-24">

            <div className="mx-auto max-w-7xl">

                {/* Hero */}
                <div className="max-w-3xl">

                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
                        Your Progress
                    </p>

                    <h1 className="mt-4 text-4xl font-bold md:text-5xl">
                        Track Your
                        <span className="text-blue-500">
                            {" "}Progress.
                        </span>
                    </h1>

                    <p className="mt-5 text-lg leading-relaxed text-gray-400">
                        Monitor your workouts, body measurements, and fitness
                        progress all in one place.
                    </p>

                </div>

                {/* Stats */}
                <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-200 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/[0.08]"
                        >

                            <div className="flex items-center justify-between">
                                <p className="text-sm text-gray-400">{stat.label}</p>
                                <stat.icon className="text-blue-400" size={20} aria-hidden="true" />
                            </div>

                            <h2 className="mt-3 text-3xl font-bold">
                                {stat.value}
                            </h2>

                            <p className="mt-2 text-sm font-semibold text-blue-400">
                                {stat.change}
                            </p>

                        </div>
                    ))}

                </div>

                {/* Progress Overview */}
                <div className="mt-8 grid gap-6 lg:grid-cols-2">

                    {/* Weight Progress */}
                    <div className="rounded-2xl border border-blue-500/30 bg-linear-to-br from-blue-500/15 to-white/5 p-6 shadow-lg shadow-blue-950/20">

                        <div className="flex items-center justify-between">

                            <div>
                                <p className="text-sm text-gray-300">
                                    Weight Progress
                                </p>

                                <h2 className="mt-1 text-xl font-bold">
                                    78 kg
                                </h2>
                            </div>

                            <span className="flex items-center gap-2 text-sm font-semibold text-blue-300">
                                <TrendingDown size={16} aria-hidden="true" />
                                Goal: 72 kg
                            </span>

                        </div>

                        <div className="mt-8">

                            <div className="h-3 overflow-hidden rounded-full bg-white/10">

                                <div
                                    className="h-full rounded-full bg-linear-to-r from-blue-500 to-cyan-300"
                                    style={{ width: "70%" }}
                                ></div>

                            </div>

                            <div className="mt-3 flex justify-between text-xs text-gray-400">
                                <span>Start: 84 kg</span>
                                <span>Current: 78 kg</span>
                                <span>Goal: 72 kg</span>
                            </div>

                        </div>

                    </div>

                    {/* Workout Consistency */}
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-blue-500/40 hover:bg-white/[0.08]">

                        <div className="flex items-center justify-between">

                            <div>
                                <p className="text-sm text-gray-400">
                                    Workout Consistency
                                </p>

                                <h2 className="mt-1 text-xl font-bold">
                                    82%
                                </h2>
                            </div>

                            <span className="flex items-center gap-2 text-sm font-semibold text-blue-300">
                                <CalendarCheck2 size={16} aria-hidden="true" />
                                This month
                            </span>

                        </div>

                        <div className="mt-8 grid grid-cols-7 gap-2">

                            {[1, 1, 1, 0, 1, 1, 0].map((day, index) => (
                                <div
                                    key={index}
                                    title={`${["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index]} workout status`}
                                    className={`h-10 rounded-lg transition ${
                                        day
                                            ? "bg-blue-500 shadow-lg shadow-blue-500/20 hover:bg-blue-400"
                                            : "bg-white/10 hover:bg-white/20"
                                    }`}
                                ></div>
                            ))}

                        </div>

                        <div className="mt-3 flex justify-between text-xs text-gray-500">
                            <span>Mon</span>
                            <span>Tue</span>
                            <span>Wed</span>
                            <span>Thu</span>
                            <span>Fri</span>
                            <span>Sat</span>
                            <span>Sun</span>
                        </div>

                    </div>

                </div>

                {/* Workout History */}
                <div className="mt-8 rounded-2xl border border-white/10 bg-white/5">

                    <div className="border-b border-white/10 p-6">

                        <h2 className="text-xl font-bold">
                            Recent Workouts
                        </h2>

                        <p className="mt-1 text-sm text-gray-400">
                            Your latest completed training sessions.
                        </p>

                    </div>

                    <div className="divide-y divide-white/10">

                        {workoutHistory.map((workout) => (
                            <div
                                key={`${workout.workout}-${workout.date}`}
                                className="group flex flex-col gap-4 p-6 transition hover:bg-white/[0.04] sm:flex-row sm:items-center sm:justify-between"
                            >

                                <div>
                                    <h3 className="flex items-center gap-2 font-semibold">
                                        <Dumbbell size={18} className="text-blue-400" aria-hidden="true" />
                                        {workout.workout}
                                        <ArrowUpRight size={16} className="text-gray-600 transition group-hover:text-blue-400" aria-hidden="true" />
                                    </h3>

                                    <p className="mt-1 text-sm text-gray-500">
                                        {workout.date}
                                    </p>
                                </div>

                                <div className="flex gap-6 text-sm">

                                    <div>
                                        <p className="text-gray-400">
                                            Duration
                                        </p>

                                        <p className="mt-1 font-medium">
                                            {workout.duration}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-gray-400">
                                            Calories
                                        </p>

                                        <p className="mt-1 font-medium">
                                            {workout.calories}
                                        </p>
                                    </div>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Progress;