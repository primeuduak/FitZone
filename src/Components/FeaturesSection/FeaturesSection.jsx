function FeaturesSection() {
    const features = [
        {
            icon: "⚡",
            title: "Modern Equipment",
            description:
                "Train with quality equipment designed to support every type of workout.",
        },
        {
            icon: "🏋️",
            title: "Expert Trainers",
            description:
                "Get guidance from experienced trainers who can help you reach your goals.",
        },
        {
            icon: "🕒",
            title: "Flexible Access",
            description:
                "Choose a membership that fits your schedule and enjoy convenient gym access.",
        },
        {
            icon: "🔥",
            title: "Results Focused",
            description:
                "Stay motivated with an environment built around progress and consistency.",
        },
    ];

    return (
        <section
            id="features"
            className="bg-[#080b12] px-6 py-24 text-white lg:px-8"
        >
            <div className="mx-auto max-w-7xl">

                {/* Heading */}
                <div className="mx-auto max-w-2xl text-center">

                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
                        Why Choose Us
                    </p>

                    <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
                        Everything you need to
                        <span className="block text-blue-500">
                            become stronger.
                        </span>
                    </h2>

                    <p className="mt-5 text-gray-400">
                        We've created an environment that makes it easier
                        to stay consistent, motivated, and focused on your
                        fitness goals.
                    </p>

                </div>

                {/* Feature cards */}
                <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="rounded-2xl border border-white/10 bg-white/3 p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/5"
                        >

                            {/* Icon */}
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-2xl">
                                {feature.icon}
                            </div>

                            <h3 className="mt-6 text-xl font-bold">
                                {feature.title}
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-gray-400">
                                {feature.description}
                            </p>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default FeaturesSection;