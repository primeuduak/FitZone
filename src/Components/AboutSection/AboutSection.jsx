import workoutBackground from "../../assets/workout-background2.avif";
import { Link } from "react-router-dom";
import { PATHS } from "../../Routes/Paths";


function AboutSection() {
    return (
        <section
            id="about"
            className="bg-[#080b12] px-6 py-24 text-white lg:px-8"
        >
            <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

                {/* Image */}
                <div className="relative overflow-hidden rounded-3xl border border-white/10">
                    <img
                        src={workoutBackground}
                        alt="Person working out in a gym"
                        className="h-[500px] w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/20"></div>
                </div>

                {/* Content */}
                <div>

                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
                        About FitZone
                    </p>

                    <h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
                        More than a gym.
                        <span className="block text-blue-500">
                            It's your community.
                        </span>
                    </h2>

                    <p className="mt-6 leading-7 text-gray-400">
                        FitZone is built for people who want more from their
                        fitness journey. Whether you're just getting started
                        or you've been training for years, we've created a
                        space where you can work hard, stay consistent, and
                        become stronger.
                    </p>

                    <p className="mt-4 leading-7 text-gray-400">
                        From modern equipment to experienced trainers and
                        flexible membership plans, everything is designed
                        around helping you make progress.
                    </p>

                    {/* Stats */}
                    <div className="mt-8 grid grid-cols-3 gap-4 border-y border-white/10 py-6">

                        <div>
                            <p className="text-2xl font-bold">500+</p>
                            <p className="mt-1 text-sm text-gray-500">
                                Members
                            </p>
                        </div>

                        <div>
                            <p className="text-2xl font-bold">15+</p>
                            <p className="mt-1 text-sm text-gray-500">
                                Trainers
                            </p>
                        </div>

                        <div>
                            <p className="text-2xl font-bold">5+</p>
                            <p className="mt-1 text-sm text-gray-500">
                                Years
                            </p>
                        </div>

                    </div>

                    <Link
                        to={PATHS.auth.register}
                        className="mt-8 inline-block rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-700"
                    >
                        Start Your Journey
                    </Link>

                </div>

            </div>
        </section>
    );
}

export default AboutSection;