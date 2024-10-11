// Define the TypeScript type for a project
type Project = {
    id: number;
    title: string;
    tagline: string;
    image: string;
    techStack: string[];
    features: string[];
    status: string;
  };
  
  // Create the project data array using the defined type
  const ProjectData: Project[] = [
    {
        id: 1,
        title: "Second Brain - AI-Powered Knowledge Assistant",
        tagline: "Transforming information overload into structured knowledge and actionable insights.",
        image: "/second-brain-thumbnail.jpg", // Add a relevant image in the `public` folder
        techStack: ["React","Postgres", "react-native","Next.js", "Node.js", "Flask", "MongoDB", "TensorFlow", "Docker", "TypeScript", "Microservices", " Event driven architecture", "Python"],
        features: [
          "Summarize Google Meet, YouTube, and Web content in real-time",
          "Organize and manage tasks, notes, and summaries",
          "Mobile-friendly with voice-to-text functionality",
          "Tagging and advanced search for fast information retrieval",
          "Link related tasks, notes, and ideas for a connected knowledge system",
          "Knowledge review and periodic learning reminders",
          "Generate and share PDF summaries",
          "Personalized chatbot powered by user data and AI"
        ],
        status: "In Progress"
      }
      ,
    // {
    //   id: 2,
    //   title: "Club Management System",
    //   tagline: "Manage and collaborate with club members effortlessly.",
    //   image: "/club-management.jpg", // Replace with the appropriate image
    //   techStack: ["Next.js", "Firebase", "Tailwind CSS", "Socket.IO"],
    //   features: [
    //     "Real-time chat system",
    //     "Role-based access management",
    //     "Project and task tracking",
    //     "Team collaboration tools",
    //   ],
    //   status: "In Progress",
    // },
    // {
    //   id: 3,
    //   title: "Virtual Lab Platform",
    //   tagline: "Interactive labs for college subjects with real-time coding environment.",
    //   image: "/virtual-lab.jpg", // Replace with the appropriate image
    //   techStack: ["React", "Electron", "Python", "Docker"],
    //   features: [
    //     "Desktop and web support",
    //     "Coding environment with compilers",
    //     "Interactive lab manuals",
    //     "Student progress tracking",
    //   ],
    //   status: "In Progress",
    // },
  ];
  
  export default ProjectData;
  