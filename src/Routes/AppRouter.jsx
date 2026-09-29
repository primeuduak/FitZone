import { Route, Routes } from "react-router-dom";
import MainLayOut from "../Layouts/MainLayout";
import HomePage from "../pages/Home/Home";
import { PATHS } from "./Paths";
import LoginPage from "../pages/Login/Login";
import VerifyEmail from "../pages/VerifyEmail/VerifyEmail";
import ProtectedRoutes from "./ProtectedRoute";
import ProfilePage from "../pages/Profile/profile";
import RegisterPage from "../pages/Register/Register";
import MembershipPage from "../pages/Membership/Membership";
import ChoosePlan from "../pages/Membership/ChoosePlan";
import PaymentPage from "../pages/Payment/Payment";
import PaymentSuccess from "../pages/PaymentSuccess/PaymentSuccess";
import AccessCard from "../pages/AccessCard/AccessCard";
import Exercises from "../pages/Exercises/Exercises";
import WorkoutPlans from "../pages/WorkoutPlans/WorkoutPlans";
import Nutrition from "../pages/Nutrition/Nutrition";
import Progress from "../pages/Progress/Progress";
import Dashboard from "../pages/Dashboard/Dashboard";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import AdminLogin from "../pages/Admin/AdminLogin";
import WorkoutDetails from "../pages/WorkoutDetails/WorkoutDetails";




function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayOut />}>
        <Route path={PATHS.public.home} element={<HomePage />} />
        <Route path={PATHS.auth.login} element={<LoginPage />} />
        <Route path={PATHS.auth.register} element={<RegisterPage />} />
        <Route path={PATHS.auth.verifyEmail} element={<VerifyEmail />} />
        <Route path={PATHS.admin.login} element={<AdminLogin />} />
        <Route path={PATHS.admin.dashboard} element={<AdminDashboard />} />
        <Route path={PATHS.admin.memberVerification} element={<AdminDashboard />} />
        <Route path={PATHS.public.membership} element={<MembershipPage />} />
        <Route path={PATHS.public.choosePlan} element={<ChoosePlan />} />
        <Route path={PATHS.public.payment} element={<PaymentPage />} />
        <Route
          path={PATHS.public.paymentSuccess}
          element={<PaymentSuccess />}
        />
        <Route path={PATHS.public.accessCard} element={<AccessCard />} />
        <Route path={PATHS.app.exercises} element={<Exercises />} />
        <Route path={PATHS.app.workoutPlans} element={<WorkoutPlans />} />
        {/* Add pages that require authentication here */}

        <Route element={<ProtectedRoutes />}>
          <Route path={PATHS.app.profile} element={<ProfilePage />} />
        </Route>
          <Route path={PATHS.app.nutrition} element={<Nutrition />} />
          <Route path={PATHS.app.progress} element={<Progress />} />
          <Route path={PATHS.app.dashboard} element={<Dashboard />} />
          <Route path={PATHS.app.workoutDetails} element={<WorkoutDetails />} />
        </Route>
    </Routes>
  );
}

export default AppRouter;
