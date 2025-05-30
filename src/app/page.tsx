
import Navbar from "@/Components/Navbar"; 
import LandingPage from "@/Components/LandingPage";
import Techstars from "@/Components/Techstars";
import HowItWork from "@/Components/HowItWork";
import Testimonials from "@/Components/Testimonials";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <Navbar /> 
      <LandingPage /> 
      <Techstars />
      <HowItWork />
      <Testimonials />
      <Footer />
    </div>
  );
}
