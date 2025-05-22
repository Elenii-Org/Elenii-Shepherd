import Image from "next/image";
import Navbar from "@/Components/Navbar"; 
import LandingPage from "@/Components/LandingPage";
import Techstars from "@/Components/Techstars";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <Navbar /> 
      <LandingPage /> 
      <Techstars />
    </div>
  );
}
