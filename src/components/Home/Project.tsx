import React from "react";
import { Nunito_Sans } from "next/font/google";
import ProjectData from "@/../public/data/ProjectData";
import Button from "../shared/Button";

const nunito = Nunito_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const ProjectSection: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 text-gray-300 border-b border-slate-600 py-6 px-4 backdrop-blur-lg w-3/4 lg:w-1/2 mx-auto">
      <h2
        className={`font-mono text-lg self-start text-gray-Light`}
      >
        Projects
      </h2>

      {/* Map through ProjectData to display each project */}
      {ProjectData.map((project) => (
        <div
          key={project.id}
          className="flex flex-col border p-2 border-slate-600  cursor-default  gap-2 mx-2 my-4  rounded-lg "
        >
          <h3
            className={`${nunito.className} text-lg font-semibold text-gray-Light`}
          >
            {project.title}
          </h3>
          <p className="text-sm">{project.tagline}</p>

          {/* Tech Stack Display */}
          <div className="flex flex-wrap gap-2 text-xs my-2">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 cursor-default bg-gray-700 text-white rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Features List */}
          <ul className="list-disc pl-5 text-sm space-y-1">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <div className="flex flex-row-reverse justify-between items-center mt-2">
            {/* Status Button */}
            <div className="text-right">
              <Button text="see more" primary={false} />
            </div>
            {/*status*/}
            <div className={`  font-mono text-xs text-gray-Light`}>
              Status: <span className="italic underline">{project.status}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectSection;
