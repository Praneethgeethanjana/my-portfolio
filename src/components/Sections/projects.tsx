// "use client";
//
// import SectionWrapper from "@/components/SectionWrapper";
// import {motion} from "framer-motion";
// import {useState} from "react";
//
// export default function FeaturedProjects() {
//     const [selectedProject, setSelectedProject] = useState(null);
//
//     const projects = [
//         {
//             name: "Project 1",
//             link: "#",
//             description: "A React-based dashboard with advanced filtering and charting capabilities.",
//             techStack: ["React", "Chart.js", "Node.js"],
//             role: "Frontend Developer",
//             duration: "Jan 2023 - Mar 2023",
//         },
//         {
//             name: "Project 2",
//             link: "#",
//             description: "An E-commerce platform with seamless payment integration and responsive design.",
//             techStack: ["Next.js", "Tailwind CSS", "Stripe"],
//             role: "Full-Stack Developer",
//             duration: "May 2022 - Aug 2022",
//         },
//         {
//             name: "Project 3",
//             link: "#",
//             description: "Portfolio website showcasing projects and skills with animations and responsiveness.",
//             techStack: ["React", "Framer Motion", "SCSS"],
//             role: "Frontend Developer",
//             duration: "Sep 2023 - Oct 2023",
//         },
//     ];
//
//     return (
//         <SectionWrapper id="projects" title="Featured Projects">
//             {/* Project Grid */}
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {projects.map((project , index) => (
//                     <motion.div
//                         key={index}
//                         initial={{opacity: 0, y: 20}}
//                         animate={{opacity: 1, y: 0}}
//                         transition={{duration: 0.5, delay: index * 0.2}}
//                         className="relative bg-gray-100 dark:bg-gray-800   dark:border-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all"
//                     >
//                         <div className="p-6">
//                             <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">
//                                 {project.name}
//                             </h3>
//                             <p className="text-gray-600 dark:text-gray-400 mb-4">
//                                 {project.description}
//                             </p>
//                             {/* Tech Stack */}
//                             <div className="flex flex-wrap gap-2 mb-4">
//                                 {project.techStack.map((tech, techIndex) => (
//                                     <span
//                                         key={techIndex}
//                                         className="px-3 py-1 bg-gray-200 dark:bg-gray-700 dark:text-gray-100 text-sm rounded-full"
//                                     >
//                     {tech}
//                   </span>
//                                 ))}
//                             </div>
//                             {/* Role */}
//                             <p className="text-gray-600 dark:text-gray-400 mb-4">
//                                 <strong>Role:</strong> {project.role}
//                             </p>
//                             <button
//                                 onClick={() => setSelectedProject(project)}
//                                 className="inline-block px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-all"
//                             >
//                                 View Details
//                             </button>
//                         </div>
//                     </motion.div>
//                 ))}
//             </div>
//
//             {/* Modal for Detailed View */}
//             {selectedProject && (
//                 <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//                     <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-11/12 max-w-2xl shadow-lg relative">
//                         <button
//                             onClick={() => setSelectedProject(null)}
//                             className="absolute top-3 right-3 text-gray-500 dark:text-gray-300 hover:text-red-500"
//                         >
//                             Close
//                         </button>
//                         <h2 className="font-bold text-2xl text-gray-900 dark:text-white mb-4">
//                             {selectedProject.name}
//                         </h2>
//                         <p className="text-gray-700 dark:text-gray-300 mb-4">
//                             {selectedProject.description}
//                         </p>
//                         <p className="text-gray-700 dark:text-gray-300 mb-4">
//                             <strong>Role:</strong> {selectedProject.role}
//                         </p>
//                         <p className="text-gray-700 dark:text-gray-300 mb-4">
//                             <strong>Duration:</strong> {selectedProject.duration}
//                         </p>
//                         <div className="flex flex-wrap gap-2 mb-4">
//                             {selectedProject.techStack.map((tech, techIndex) => (
//                                 <span
//                                     key={techIndex}
//                                     className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-sm rounded-full"
//                                 >
//                   {tech}
//                 </span>
//                             ))}
//                         </div>
//                         <a
//                             href={selectedProject.link}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//                         >
//                             Visit Project
//                         </a>
//                     </div>
//                 </div>
//             )}
//         </SectionWrapper>
//     );
// }


"use client";

import SectionWrapper from "@/components/SectionWrapper";
import {motion} from "framer-motion";
import {useEffect, useState} from "react";

// Define the Project type
type Project = {
    name: string;
    link: string;
    description: string;
    techStack: string[];
    role: string;
    duration: string;
};

export default function FeaturedProjects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [selectedProject]);


    const projects: Project[] = [
        {
            name: "Learnfi.lk",
            link: "https://learnfi.lk/",
            description: "An online educational platform providing interactive learning experiences.",
            techStack: ["React.js", "Javascript", "Bootstrap"],
            role: "Lead Frontend Developer",
            duration: "2023 - Present",
        },
        {
            name: "Ancybtrading",
            link: "#",
            description: "A modern trading platform with seamless user experience.",
            techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
            role: "Frontend Developer",
            duration: "2023",
        },
        {
            name: "Cheetah Ceylon",
            link: "https://cheetahceylon.com/",
            description: "A static website for Cheetah Holdings (Pvt) Ltd, a diversified Sri Lankan conglomerate.",
            techStack: ["React.js", "Bootstrap"],
            role: "Lead Frontend Developer",
            duration: "2023",
        },
        {
            name: "Tea Center Management System",
            link: "#",
            description: "An admin panel for tea center owners to manage fertilizers, tea, tea leaves, and farmers.",
            techStack: ["React.js", "JavaScript", "Bootstrap"],
            role: "Lead Frontend Developer",
            duration: "2024",
        }
    ];

    return (
        <SectionWrapper id="projects" title="Featured Projects">
            {/* Project Grid */}
            <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: index * 0.2}}
                        className="relative bg-gray-100 dark:bg-gray-800 dark:border-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all"
                    >
                        <div className="p-6">
                            <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">
                                {project.name}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                {project.description}
                            </p>
                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.techStack.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="px-3 py-1 bg-gray-200 dark:bg-gray-700 dark:text-gray-100 text-sm rounded-full"
                                    >
                    {tech}
                  </span>
                                ))}
                            </div>
                            {/* Role */}
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                <strong>Role:</strong> {project.role}
                            </p>
                            <button
                                onClick={() => setSelectedProject(project)}
                                className="inline-block px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-all"
                            >
                                View Details
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Modal for Detailed View */}
            {/* Modal for Detailed View */}
            {selectedProject && (
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4"
                    onClick={() => setSelectedProject(null)} // close when click outside modal
                >
                    <motion.div
                        initial={{scale: 0.9, opacity: 0}}
                        animate={{scale: 1, opacity: 1}}
                        exit={{scale: 0.9, opacity: 0}}
                        onClick={(e) => e.stopPropagation()} // prevent close on modal content click
                        className="relative w-full max-w-2xl bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6"
                    >
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-3 right-3 text-gray-500 dark:text-gray-300 hover:text-red-500 text-xl"
                            aria-label="Close modal"
                        >
                            ✕
                        </button>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                            {selectedProject.name}
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-3">
                            {selectedProject.description}
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 mb-2">
                            <strong>Role:</strong> {selectedProject.role}
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            <strong>Duration:</strong> {selectedProject.duration}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {selectedProject.techStack.map((tech, techIndex) => (
                                <span
                                    key={techIndex}
                                    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-sm rounded-full"
                                >
            {tech}
          </span>
                            ))}
                        </div>
                        <a
                            href={selectedProject.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                        >
                            Visit Project
                        </a>
                    </motion.div>
                </motion.div>
            )}

        </SectionWrapper>
    );
}
