import React from "react";
import Button from "../shared/Button";

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-start gap-y-4 w-3/4 lg:w-1/2 mx-auto bg-gray-Charcoal px-4">
      <div className="flex flex-col w-full text-nowrap">
        <h1 className="text-2xl sm:text-3xl md:text-5xl self-start font-bold text-gray-Light mb-2">
          Full-Stack
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-5xl sm:pl-12 lg:pl-24 font-bold text-gray-Light mb-6">
          Software Developer
        </h2>
      </div>
      <p className="text-lg text-gray-Light tracking-wide text-justify mb-8 w-full text">
        Hi! I’m <strong>Kushagra</strong>, specialized in building <strong>high-performance, scalable web applications</strong>. Based in <em>Indore, India</em>. Let’s build something amazing together.
      </p>
      <div className="self-start">
        <Button primary={false} text="Let’s connect" />
      </div>
    </section>
  );
};

export default HeroSection;
