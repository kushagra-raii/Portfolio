import About from "@/components/Home/About";
import HeroSection from "@/components/Home/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="  min-h-screen w-full  ">
      <About/>
      <HeroSection/>   
    </main>
  );
}
