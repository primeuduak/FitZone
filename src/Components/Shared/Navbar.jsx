import { useState } from "react";
import { Dumbbell, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { PATHS } from "../../Routes/Paths";

function Navbar({ compact = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
const { pathname } = useLocation();

const isMemberArea =
  pathname === PATHS.app.dashboard ||
  pathname === PATHS.app.profile ||
  pathname === PATHS.app.exercises ||
  pathname === PATHS.app.workoutPlans ||
  pathname === PATHS.app.workoutDetails ||
  pathname === PATHS.app.nutrition ||
  pathname === PATHS.app.progress;
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="w-full border-b border-white/10 bg-[#080b12]">
      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:grid md:grid-cols-3 lg:px-8">
        {/* Navigation */}
      {/* Navigation */}
<div
  className={`${compact ? "hidden" : "hidden md:flex"} items-center gap-8 md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2`}
>
  {isMemberArea ? (
    <>
      <Link
        to={PATHS.app.dashboard}
        className="text-sm font-semibold text-gray-300 transition-all duration-200 hover:-translate-y-0.5 hover:text-blue-400"
      >
        Dashboard
      </Link>

      <Link
        to={PATHS.app.exercises}
        className="text-sm font-semibold text-gray-300 transition-all duration-200 hover:-translate-y-0.5 hover:text-blue-400"
      >
        Exercises
      </Link>

      <Link
        to={PATHS.app.workoutPlans}
        className="text-sm font-semibold text-gray-300 transition-all duration-200 hover:-translate-y-0.5 hover:text-blue-400"
      >
        Workout Plans
      </Link>

      <Link
        to={PATHS.app.nutrition}
        className="text-sm font-semibold text-gray-300 transition-all duration-200 hover:-translate-y-0.5 hover:text-blue-400"
      >
        Nutrition
      </Link>

      <Link
        to={PATHS.app.progress}
        className="text-sm font-semibold text-gray-300 transition-all duration-200 hover:-translate-y-0.5 hover:text-blue-400"
      >
        Progress
      </Link>

      <Link
        to={PATHS.app.profile}
        className="text-sm font-semibold text-gray-300 transition-all duration-200 hover:-translate-y-0.5 hover:text-blue-400"
      >
        Profile
      </Link>
    </>
  ) : (
    <>
      <Link
        to={`${PATHS.public.home}#home`}
        className="text-sm font-semibold text-gray-300 transition-all duration-200 hover:-translate-y-0.5 hover:text-blue-400"
      >
        Home
      </Link>

      <Link
        to={PATHS.public.membership}
        className="text-sm font-semibold text-gray-300 transition-all duration-200 hover:-translate-y-0.5 hover:text-blue-400"
      >
        Plans
      </Link>

      <a
        href={`${PATHS.public.home}#about`}
        className="text-sm font-semibold text-gray-300 transition-all duration-200 hover:-translate-y-0.5 hover:text-blue-400"
      >
        About
      </a>

      <a
        href={`${PATHS.public.home}#contact`}
        className="text-sm font-semibold text-gray-300 transition-all duration-200 hover:-translate-y-0.5 hover:text-blue-400"
      >
        Contact
      </a>

      <Link
        to={PATHS.app.profile}
        className="text-sm font-semibold text-gray-300 transition-all duration-200 hover:-translate-y-0.5 hover:text-blue-400"
      >
        Profile
      </Link>
    </>
  )}
</div>

        {/* Brand */}
        <div
          className="mr-auto flex items-center gap-6 md:col-start-1 md:justify-self-start md:mr-0"
        >
          <Link
            to={PATHS.public.home}
            aria-label="Go to FitZone home page"
            className="group flex items-center gap-3 text-white"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/25 transition-transform duration-200 group-hover:rotate-6">
              <Dumbbell size={24} strokeWidth={2.5} aria-hidden="true" />
            </span>
            <span className="text-xl font-black tracking-[0.18em]">
              FIT<span className="text-blue-400">ZONE</span>
            </span>
          </Link>
        </div>

        {!compact && !isMemberArea && (
          <Link
            to={PATHS.auth.login}
            className="hidden rounded-lg border border-blue-400/60 px-5 py-2 text-sm font-bold text-blue-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-500/10 hover:text-white md:col-start-3 md:block md:justify-self-end"
          >
            Login
          </Link>
        )}

        {!compact && (
          <button
            type="button"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            className="relative z-20 ml-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/15 p-2 text-white transition hover:bg-white/5 md:hidden"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        )}
      </div>

      {!compact && isMenuOpen && (
        <div id="mobile-navigation" className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-white/10 px-6 py-5 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {isMemberArea ? (
              <>
                <Link to={PATHS.app.dashboard} onClick={closeMenu} className="rounded-lg px-3 py-3 text-sm font-semibold text-gray-300 transition hover:bg-white/5 hover:text-blue-400">
                  Dashboard
                </Link>
                <Link to={PATHS.app.exercises} onClick={closeMenu} className="rounded-lg px-3 py-3 text-sm font-semibold text-gray-300 transition hover:bg-white/5 hover:text-blue-400">
                  Exercises
                </Link>
                <Link to={PATHS.app.workoutPlans} onClick={closeMenu} className="rounded-lg px-3 py-3 text-sm font-semibold text-gray-300 transition hover:bg-white/5 hover:text-blue-400">
                  Workout Plans
                </Link>
                <Link to={PATHS.app.nutrition} onClick={closeMenu} className="rounded-lg px-3 py-3 text-sm font-semibold text-gray-300 transition hover:bg-white/5 hover:text-blue-400">
                  Nutrition
                </Link>
                <Link to={PATHS.app.progress} onClick={closeMenu} className="rounded-lg px-3 py-3 text-sm font-semibold text-gray-300 transition hover:bg-white/5 hover:text-blue-400">
                  Progress
                </Link>
                <Link to={PATHS.app.profile} onClick={closeMenu} className="rounded-lg px-3 py-3 text-sm font-semibold text-gray-300 transition hover:bg-white/5 hover:text-blue-400">
                  Profile
                </Link>
              </>
            ) : (
              <>
                <Link to={`${PATHS.public.home}#home`} onClick={closeMenu} className="rounded-lg px-3 py-3 text-sm font-semibold text-gray-300 transition hover:bg-white/5 hover:text-blue-400">
                  Home
                </Link>
                <Link to={PATHS.public.membership} onClick={closeMenu} className="rounded-lg px-3 py-3 text-sm font-semibold text-gray-300 transition hover:bg-white/5 hover:text-blue-400">
                  Plans
                </Link>
                <a href={`${PATHS.public.home}#about`} onClick={closeMenu} className="rounded-lg px-3 py-3 text-sm font-semibold text-gray-300 transition hover:bg-white/5 hover:text-blue-400">
                  About
                </a>
                <a href={`${PATHS.public.home}#contact`} onClick={closeMenu} className="rounded-lg px-3 py-3 text-sm font-semibold text-gray-300 transition hover:bg-white/5 hover:text-blue-400">
                  Contact
                </a>
                <Link to={PATHS.app.profile} onClick={closeMenu} className="rounded-lg px-3 py-3 text-sm font-semibold text-gray-300 transition hover:bg-white/5 hover:text-blue-400">
                  Profile
                </Link>
                <Link to={PATHS.auth.login} onClick={closeMenu} className="mt-3 rounded-lg border border-blue-400/60 px-4 py-3 text-center text-sm font-bold text-blue-300 transition hover:border-blue-300 hover:bg-blue-500/10 hover:text-white">
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
