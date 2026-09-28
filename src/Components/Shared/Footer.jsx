import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PATHS } from "../../Routes/Paths";
function Footer() {
    return (
        <footer className="border-t border-white/10 bg-[#05070b] text-white">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <div className="text-2xl font-extrabold tracking-wide">
                            FIT<span className="text-blue-500">ZONE</span>
                        </div>

                        <p className="mt-4 max-w-md leading-7 text-gray-400">
                            A modern fitness community built to help you
                            train harder, stay consistent, and become
                            stronger.
                        </p>

                        {/* Social Icons */}
                        <div className="mt-6 flex gap-3">
                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-blue-500 hover:bg-blue-500 hover:text-white"
                            >
                                <FaInstagram size={18} />
                            </a>

                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-blue-500 hover:bg-blue-500 hover:text-white"
                            >
                                <FaFacebookF size={18} />
                            </a>

                            <a
                                href="https://x.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Twitter"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-blue-500 hover:bg-blue-500 hover:text-white"
                            >
                                <FaTwitter size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                 {/* Navigation */}
<div>
    <h3 className="font-semibold">
        Navigation
    </h3>

    <div className="mt-4 space-y-3 text-sm text-gray-400">
        <Link
            to={`${PATHS.public.home}#home`}
            className="block transition hover:text-white"
        >
            Home
        </Link>

        <Link
            to={PATHS.public.membership}
            className="block transition hover:text-white"
        >
            Membership Plans
        </Link>

        <Link
            to={`${PATHS.public.home}#features`}
            className="block transition hover:text-white"
        >
            Features
        </Link>

        <Link
            to={`${PATHS.public.home}#about`}
            className="block transition hover:text-white"
        >
            About
        </Link>
    </div>
</div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold">
                            Contact
                        </h3>

                        <div className="mt-4 space-y-3 text-sm text-gray-400">
                            <p>hello@fitzone.com</p>
                            <p>+234 800 000 0000</p>
                            <p>Uyo, Nigeria</p>
                        </div>
                    </div>

                </div>

                {/* Bottom */}
                <div className="mt-12 border-t border-white/10 pt-8">
                    <p className="text-center text-sm text-gray-500">
                        © 2026 FitZone. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
}

export default Footer;