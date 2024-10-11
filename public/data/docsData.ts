// docsData.ts

export interface Chapter {
  title: string;
  path: string; // Relative path to the markdown file or link
}

export interface DocMetadata {
  id: number;
  docTitle: string;
  description: string;
  chapters: Chapter[];
}

const docsData: DocMetadata[] = [
  {
    id: 1,
    docTitle: "Git and GitHub",
    description:"How to rapidly develop websites using Tailwind CSS.How to rapidly develop websites using Tailwind CSS.",
    chapters: [
      { title: "Introduction to Git", path: "/docs/git-intro" },
      { title: "Basic Git Commands", path: "/docs/basic-commands" },
      { title: "GitHub Features", path: "/docs/github-features" },
      { title: "Introduction to Git", path: "/docs/git-intro" },
      { title: "Basic Git Commands", path: "/docs/basic-commands" },
      { title: "GitHub Features", path: "/docs/github-features" },
      // Add more chapters
    ],
  },
  {
    id: 2,
    docTitle: "JavaScript ES6+",
    description:"",

    chapters: [
      { title: "Arrow Functions", path: "/docs/js-arrow-functions" },
      { title: "Destructuring", path: "/docs/js-destructuring" },
      { title: "Promises and Async/Await", path: "/docs/js-promises" },
      // Add more chapters
    ],
  },
  // Add more docs data here
];

export default docsData;

