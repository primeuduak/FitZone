import { Link } from "react-router-dom";
import { PATHS } from "../../Routes/Paths";
import gymBackground from "../../assets/gym-background1.avif"; //import image background

function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${gymBackground})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Train. Transform. Repeat.
          </p>

          <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Build a stronger
            <span className="block text-blue-500">version of you.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Get access to premium gym facilities, flexible membership plans, and
            everything you need to reach your fitness goals.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to={PATHS.auth.register}
              className="rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-700"
            >
              Get Started
            </Link>

            <Link
              to={PATHS.public.membership}
              className="rounded-xl border border-white/30 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              View Plans
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-10 flex gap-8">
            <div>
              <p className="text-2xl font-bold text-white">500+</p>

              <p className="text-sm text-gray-400">Members</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-white">15+</p>

              <p className="text-sm text-gray-400">Trainers</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-white">24/7</p>

              <p className="text-sm text-gray-400">Access</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
