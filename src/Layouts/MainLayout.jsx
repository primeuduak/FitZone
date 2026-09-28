import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { PATHS } from "../Routes/Paths";

function MainLayOut() {
    const { pathname } = useLocation();

    return (
        <div>
            <Navbar
                compact={pathname === PATHS.auth.login || pathname === PATHS.auth.register}
            />

            <main>
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}

export default MainLayOut;