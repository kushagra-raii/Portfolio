import About from "@/components/Home/Hero/About";
import HeroSection from "@/components/Home/Hero/Hero";
import ProjectSection from "@/components/Home/Project";
import BlogsAndDocsSection from "@/components/Home/BlogAndDocs";
import NetworkSection from "@/components/Home/NetworkSection";
import Skills from "@/components/Home/Hero/Skills";

export default function Home() {
  return (
    <main className="  min-h-screen w-full  ">
      <About />
      <Skills/>
      <HeroSection />
      <ProjectSection />
      <BlogsAndDocsSection />
      <NetworkSection />
    </main>
  );
}
