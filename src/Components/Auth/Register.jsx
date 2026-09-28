import { useState } from "react";
import { Link } from "react-router-dom";
import { PATHS } from "../../Routes/Paths";
import { useNavigate } from "react-router-dom";
import workoutBackground from "../../assets/workout-background2.avif";

function Register() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState("");

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });

        setError("");
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (
            !formData.fullName ||
            !formData.username ||
            !formData.email ||
            !formData.password ||
            !formData.confirmPassword
        ) {
            setError("Please fill in all fields.");
            return;
        }

        if (formData.password.length < 8) {
            setError("Password must be at least 8 characters.");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        console.log("Registration data:", formData);

        navigate(PATHS.auth.login);
    }

    return (
        <section
            className="relative min-h-screen bg-cover bg-center px-6 py-16 text-white"
            style={{
                backgroundImage:
                    `url(${workoutBackground})`,
            }}
        >

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/75"></div>

            {/* Register content */}
            <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-md items-center justify-center">

                <div className="w-full rounded-2xl border border-white/10 bg-black/40 p-8 shadow-2xl backdrop-blur-md">

                    <div className="text-center">

                        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
                            FitZone
                        </p>

                        <h1 className="text-3xl font-bold">
                            Create Your Account
                        </h1>

                        <p className="mt-2 text-gray-400">
                            Join FitZone and start your fitness journey
                        </p>

                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="mt-8 space-y-5"
                    >

                        {/* Full Name */}
                        <div>
                            <label
                                htmlFor="fullName"
                                className="mb-2 block text-sm font-medium text-gray-300"
                            >
                                Full Name
                            </label>

                            <input
                                id="fullName"
                                name="fullName"
                                type="text"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-blue-500"
                            />
                        </div>

                        {/* Username */}
                        <div>
                            <label
                                htmlFor="username"
                                className="mb-2 block text-sm font-medium text-gray-300"
                            >
                                Username
                            </label>

                            <input
                                id="username"
                                name="username"
                                type="text"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder="Choose a username"
                                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-blue-500"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="mb-2 block text-sm font-medium text-gray-300"
                            >
                                Email Address
                            </label>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-blue-500"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label
                                htmlFor="password"
                                className="mb-2 block text-sm font-medium text-gray-300"
                            >
                                Password
                            </label>

                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Create a password"
                                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-blue-500"
                            />
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label
                                htmlFor="confirmPassword"
                                className="mb-2 block text-sm font-medium text-gray-300"
                            >
                                Confirm Password
                            </label>

                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="Confirm your password"
                                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-blue-500"
                            />
                        </div>

                        {/* Error */}
                        {error && (
                            <p className="rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-400">
                                {error}
                            </p>
                        )}

                        {/* Button */}
                        <button
                            type="submit"
                            className="w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700"
                        >
                            Create Account
                        </button>

                    </form>

                    <p className="mt-6 text-center text-sm text-gray-400">
                        Already have an account?{" "}

                        <Link
                            to={PATHS.auth.login}
                            className="font-semibold text-blue-500 transition hover:text-blue-400"
                        >
                            Login
                        </Link>

                    </p>

                </div>

            </div>

        </section>
    );
}

export default Register;