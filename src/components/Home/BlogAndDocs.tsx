import React from "react";
import { Nunito_Sans } from "next/font/google";
import blogData from "@/../public/data/blogdata"; // Blog data file
import docData from "@/../public/data/docsData"; // Doc data file
import Button from "../shared/Button";

const nunito = Nunito_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const BlogsAndDocsSection: React.FC = () => {
  const featuredDoc = docData[0]; // Assuming the first doc is the featured one
  const blogs = blogData.slice(0, 2); // Displaying only the first two blogs

  return (
    <div className="flex flex-col gap-4 text-gray-300 border-b border-slate-600 py-6 px-5 backdrop-blur-lg w-3/4 lg:w-1/2 mx-auto">
      <h2 className={`font-mono text-lg self-start text-gray-Light`}>
        Blogs and Docs
      </h2>

      <div className="flex flex-col lg:flex-row gap-4">
        {/* Featured Doc */}
        <div className="flex flex-col w-full lg:w-1/2 border p-4 justify-between border-slate-600 rounded-lg">
          <h3 className={`${nunito.className} text-lg font-semibold text-gray-Light`}>
            {featuredDoc.docTitle}
          </h3>
          <p className="text-sm mb-2 ">{featuredDoc.description}</p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            {featuredDoc.chapters.slice(0, 5).map((chapter, index) => (
              <li key={index}>{chapter.title}</li>
            ))}
          </ul>
          <div className="text-right mt-2">
            <Button text="Read More" primary={false} />
          </div>
        </div>

        {/* Blogs */}
        <div className="flex flex-col w-full lg:w-1/2 gap-4">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="flex flex-col border p-4 border-slate-600 rounded-lg"
            >
              <h3 className={`${nunito.className} text-lg font-semibold text-gray-Light`}>
                {blog.title}
              </h3>
              <p className="text-sm mb-2">{blog.description}</p>
              <div className="text-right ">
                <Button text="Read More" primary={false} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsAndDocsSection;

