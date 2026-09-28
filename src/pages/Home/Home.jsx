import HeroSection from "../../Components/HomePageUI/HeroSection";
import MembershipPlans from "../../Components/MembershipPlans/MembershipPlans";
import FeaturesSection from "../../Components/FeaturesSection/FeaturesSection";
import AboutSection from "../../Components/AboutSection/AboutSection";

function HomePage() {
    return (
        <>
            <HeroSection />
            <MembershipPlans />
            <FeaturesSection />
            <AboutSection />
        </>);
}

export default HomePage;