import Navbar from "@/Components/Navbar";
import {LandingPage} from "@/Components/LandingPage";
import { Techstars } from "@/Components/Techstars";
import { HowItWork } from "@/Components/HowItWork";
import Testimonials from "@/Components/Testimonials";
import { Footer } from "@/Components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-grow">
        <LandingPage />
        <Techstars />
        <HowItWork />
        <Testimonials />
      </div>

      <Footer />
    </main>
  );
}
