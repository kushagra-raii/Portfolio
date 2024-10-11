// blogData.ts

export interface BlogMetadata {
  id: number;
  title: string;
  description: string;
  link: string;
  date: string; // You can use Date type too, but for simplicity, I’m using string.
}

const blogData: BlogMetadata[] = [
  {
    id: 1,
    title: "Introduction to Next.js",
    description: "A complete beginner's guide to Next.js and SSR",
    link: "/blogs/nextjs-intro",
    date: "2023-10-11",
  },
  {
    id: 2,
    title: "Tailwind for Web Development",
    description: "How to rapidly develop websites using Tailwind CSS.",
    link: "/blogs/tailwind-rapid-development",
    date: "2023-09-29",
  },
  // Add more blog data here
];

export default blogData;

