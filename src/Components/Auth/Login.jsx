import { Link, useNavigate } from "react-router-dom";
import { PATHS } from "../../Routes/Paths";
import gymBackground from "../../assets/gym-background1.avif"; //import image background 
import { useState } from "react";
function Login() {

  const [formData, setFormData] = useState({
     email: "",
     password: ""
  });

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
      const {value, name} = e.target
      setFormData( (prev) => ({...prev, [name] : value}))
  }

    const navigate = useNavigate();
    const BASEURL = "https://fitness-website-api-v1.onrender.com"

    async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);
        try {
            const res = await fetch(`${BASEURL}/auth/login`, {
                method:"POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(formData),
                credentials: "include"
            });
            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || data.msg || "Unable to log in.");
            }

            navigate(PATHS.app.dashboard);
        } catch (error) {
            console.error("Login failed:", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <section
            className="relative min-h-screen bg-cover bg-center px-6 py-16 text-white"
            style={{
                backgroundImage:
                    `url(${gymBackground})`,
            }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/75"></div>

            {/* Content */}
            <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-md items-center justify-center">
                <div className="w-full rounded-2xl border border-white/10 bg-black/40 p-8 shadow-2xl backdrop-blur-md">

                    <div className="text-center">
                        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
                            FitZone
                        </p>

                        <h1 className="text-3xl font-bold">
                            Welcome Back
                        </h1>

                        <p className="mt-2 text-gray-400">
                            Login to continue your fitness journey
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="mt-8 space-y-5">

                        <div>
                            <label
                                htmlFor="email"
                                className="mb-2 block text-sm font-medium text-gray-300"
                            >
                                Email Address
                            </label>

                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="mb-2 block text-sm font-medium text-gray-300"
                            >
                                Password
                            </label>

                            <input
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={handleChange}
                                
                                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-blue-500"
                            />

                            <div className="mt-2 text-right">
                                <button
                                    type="button"
                                    className="text-sm text-blue-500 transition hover:text-blue-400"
                                >
                                    Forgot password?
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700"
                        >
                           {loading ? "Logging in..." : "Login"}
                        </button>
                    </form>

                    <p className="mt-6 text-center text-sm text-gray-400">
                        Don't have an account?{" "}
                        {/* <Link
                            to={PATHS.auth.register}
                            className="font-semibold text-blue-500 transition hover:text-blue-400"
                        > */}
                            Sign Up
                        {/* </Link> */}
                    </p>

                    <p className="mt-4 text-center text-sm text-gray-400">
                        Staff member?{" "}
                        <Link
                            to={PATHS.admin.login}
                            className="font-semibold text-blue-400 transition hover:text-blue-300"
                        >
                            Admin sign in
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Login;