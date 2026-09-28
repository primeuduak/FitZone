import { Navigate, Outlet } from "react-router-dom";
import { PATHS } from "./Paths";

function ProtectedRoutes() {

    /*
     * PROTECTED ROUTES
     
     * Implement your protected route logic here.
    
     * - Authentication: Check if the user is logged in.
     * - Authorization: Check if the user has permission to access
     *   the requested route.
     * 
     * Example:
     
     */
    const isUserAuthenticated = true;

    if (!isUserAuthenticated) {
        alert("Profile Page Route is protected")
        return <Navigate to={PATHS.public.home} replace />
    }

    return (
        <Outlet />
    );
}

export default ProtectedRoutes;