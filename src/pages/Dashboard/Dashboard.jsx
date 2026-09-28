import { Link } from "react-router-dom";
import {
    ArrowUpRight,
    CalendarCheck2,
    ChartNoAxesCombined,
    Dumbbell,
    Flame,
    Target,
    Utensils,
} from "lucide-react";
import { PATHS } from "../../Routes/Paths";

function Dashboard() {
    return (
        <section className="min-h-screen bg-[#080b12] px-6 py-20 text-white md:py-24">

            <div className="mx-auto max-w-7xl">

                {/* Welcome */}
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
                        Member Dashboard
                    </p>

                    <h1 className="mt-4 text-4xl font-bold md:text-5xl">
                        Welcome back,
                        <span className="text-blue-500"> John.</span>
                    </h1>

                    <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-400">
                        Stay consistent, track your progress, and keep working
                        toward your fitness goals.
                    </p>
                </div>

                {/* Membership Card */}
                <div className="relative mt-10 overflow-hidden rounded-2xl border border-blue-500/30 bg-linear-to-br from-blue-600/25 to-white/5 p-6 shadow-2xl shadow-blue-950/30">

                    <div className="absolute -right-16 -top-20 h-48 w-48 rounded-full border border-blue-400/20" />

                    <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

                        <div className="relative z-10">
                            <p className="text-sm text-gray-400">
                                Current Membership
                            </p>

                            <h2 className="mt-2 text-2xl font-bold">
                                Premium Plan
                            </h2>

                            <p className="mt-2 text-sm text-gray-400">
                                Active until October 24, 2026
                            </p>

                            <div className="mt-5 max-w-md">
                                <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-blue-200">
                                    <span>Membership progress</span>
                                    <span>78%</span>
                                </div>
                                <div className="h-2 overflow-hidden rounded-full bg-black/30">
                                    <div className="h-full w-[78%] rounded-full bg-blue-400" />
                                </div>
                            </div>
                        </div>

                        <span className="relative z-10 flex w-fit items-center gap-2 rounded-full bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-400">
                            <span className="h-2 w-2 rounded-full bg-green-400" />
                            Active
                        </span>

                    </div>

                </div>

                {/* Stats */}
                <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                    <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/[0.08]">
                        <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-400">Current Weight</p>
                            <Target className="text-blue-400" size={20} aria-hidden="true" />
                        </div>

                        <h2 className="mt-3 text-3xl font-bold">
                            78 kg
                        </h2>

                        <p className="mt-2 text-sm text-blue-400">
                            Goal: 72 kg
                        </p>
                    </div>

                    <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/[0.08]">
                        <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-400">Workouts</p>
                            <Dumbbell className="text-blue-400" size={20} aria-hidden="true" />
                        </div>

                        <h2 className="mt-3 text-3xl font-bold">
                            18
                        </h2>

                        <p className="mt-2 text-sm text-blue-400">
                            This month
                        </p>
                    </div>

                    <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/[0.08]">
                        <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-400">Consistency</p>
                            <CalendarCheck2 className="text-blue-400" size={20} aria-hidden="true" />
                        </div>

                        <h2 className="mt-3 text-3xl font-bold">
                            82%
                        </h2>

                        <p className="mt-2 text-sm text-blue-400">
                            This month
                        </p>
                    </div>

                    <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/[0.08]">
                        <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-400">Calories Burned</p>
                            <Flame className="text-orange-400" size={20} aria-hidden="true" />
                        </div>

                        <h2 className="mt-3 text-3xl font-bold">
                            8,420
                        </h2>

                        <p className="mt-2 text-sm text-blue-400">
                            This month
                        </p>
                    </div>

                </div>

                {/* Quick Access */}
                <div className="mt-10">

                    <div>
                        <h2 className="text-2xl font-bold">
                            Quick Access
                        </h2>

                        <p className="mt-2 text-gray-400">
                            Everything you need for your fitness journey.
                        </p>
                    </div>

                    <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                        <Link
                            to={PATHS.app.exercises}
                            className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-200 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-white/[0.08]"
                        >
                            <div className="flex items-start justify-between">
                                <Dumbbell className="text-blue-400" size={24} aria-hidden="true" />
                                <ArrowUpRight className="text-gray-500 transition group-hover:text-blue-400" size={20} aria-hidden="true" />
                            </div>
                            <h3 className="mt-6 text-lg font-bold">Exercises</h3>

                            <p className="mt-2 text-sm text-gray-400">
                                Explore exercises and training movements.
                            </p>

                            <span className="mt-5 inline-block text-sm font-semibold text-blue-400">
                                Explore →
                            </span>
                        </Link>

                        <Link
                            to={PATHS.app.workoutPlans}
                            className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-200 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-white/[0.08]"
                        >
                            <div className="flex items-start justify-between">
                                <ChartNoAxesCombined className="text-blue-400" size={24} aria-hidden="true" />
                                <ArrowUpRight className="text-gray-500 transition group-hover:text-blue-400" size={20} aria-hidden="true" />
                            </div>
                            <h3 className="mt-6 text-lg font-bold">Workout Plans</h3>

                            <p className="mt-2 text-sm text-gray-400">
                                Follow structured programs for your goals.
                            </p>

                            <span className="mt-5 inline-block text-sm font-semibold text-blue-400">
                                View Plans →
                            </span>
                        </Link>

                        <Link
                            to={PATHS.app.nutrition}
                            className="group rounded-2xl border border-blue-500/30 bg-blue-500/10 p-6 transition duration-200 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-500/20"
                        >
                            <div className="flex items-start justify-between">
                                <Utensils className="text-blue-300" size={24} aria-hidden="true" />
                                <ArrowUpRight className="text-blue-300/60 transition group-hover:text-white" size={20} aria-hidden="true" />
                            </div>
                            <h3 className="mt-6 text-lg font-bold">Nutrition</h3>

                            <p className="mt-2 text-sm text-gray-400">
                                Discover meals to support your training.
                            </p>

                            <span className="mt-5 inline-block text-sm font-semibold text-blue-400">
                                Open Nutrition →
                            </span>
                        </Link>

                        <Link
                            to={PATHS.app.progress}
                            className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-200 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-white/[0.08]"
                        >
                            <div className="flex items-start justify-between">
                                <ChartNoAxesCombined className="text-blue-400" size={24} aria-hidden="true" />
                                <ArrowUpRight className="text-gray-500 transition group-hover:text-blue-400" size={20} aria-hidden="true" />
                            </div>
                            <h3 className="mt-6 text-lg font-bold">My Progress</h3>

                            <p className="mt-2 text-sm text-gray-400">
                                Track your fitness progress and workouts.
                            </p>

                            <span className="mt-5 inline-block text-sm font-semibold text-blue-400">
                                View Progress →
                            </span>
                        </Link>

                    </div>

                </div>

                {/* Recent Activity */}
                <div className="mt-10 rounded-2xl border border-white/10 bg-white/5">

                    <div className="border-b border-white/10 p-6">
                        <h2 className="text-xl font-bold">
                            Recent Activity
                        </h2>

                        <p className="mt-1 text-sm text-gray-400">
                            Your latest training activity.
                        </p>
                    </div>

                    <div className="divide-y divide-white/10">

                        <div className="flex flex-col gap-2 p-6 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <h3 className="font-semibold">
                                    Upper Body Strength
                                </h3>

                                <p className="mt-1 text-sm text-gray-500">
                                    Completed September 24, 2026
                                </p>
                            </div>

                            <span className="text-sm text-blue-400">
                                420 kcal
                            </span>
                        </div>

                        <div className="flex flex-col gap-2 p-6 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <h3 className="font-semibold">
                                    Leg Day
                                </h3>

                                <p className="mt-1 text-sm text-gray-500">
                                    Completed September 22, 2026
                                </p>
                            </div>

                            <span className="text-sm text-blue-400">
                                510 kcal
                            </span>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Dashboard;