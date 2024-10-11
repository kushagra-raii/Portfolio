import About from "@/components/Hero/About";
import HeroSection from "@/components/Hero/Hero";
import ProjectSection from "@/components/Projects/Project";
import BlogsAndDocsSection from "@/components/BlogsAndDocs/BlogAndDocs";
import NetworkSection from "@/components/Hero/NetworkSection";

export default function Home() {
  return (
    <main className="  min-h-screen w-full  ">
      <About />
      <HeroSection />
      <ProjectSection />
      <BlogsAndDocsSection />
      <NetworkSection />
    </main>
  );
}
