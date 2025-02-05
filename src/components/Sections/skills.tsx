// import SectionWrapper from "@/components/SectionWrapper";
//
// export default function Skills() {
//     const skills = [
//         "React JS",
//         "Next JS",
//         "JavaScript",
//         "TypeScript",
//         "Gatsby JS",
//         "Bootstrap 5",
//         "TailwindCSS",
//         "Node JS",
//     ];
//
//     return (
//         <SectionWrapper id="skills" title="Skills">
//             <div className="overflow-hidden w-full">
//                 <div className="flex animate-scroll whitespace-nowrap">
//                     {skills.concat(skills).map((skill, index) => (
//                         <div
//                             key={index}
//                             className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg mx-2 flex-shrink-0"
//                         >
//                             {skill}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </SectionWrapper>
//     );
// }

import SectionWrapper from "@/components/SectionWrapper";
import {FaBootstrap, FaGitAlt, FaHtml5, FaJsSquare, FaNodeJs, FaReact,} from "react-icons/fa";
import {SiGatsby, SiNextdotjs, SiTailwindcss, SiTypescript} from "react-icons/si";

export default function Skills() {
    const skills = [
        {name: "React JS", icon: <FaReact className="text-blue-500"/>},
        {name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white"/>},
        {name: "JavaScript", icon: <FaJsSquare className="text-yellow-500"/>},
        {name: "TypeScript", icon: <SiTypescript className="text-blue-600"/>},
        {name: "Gatsby JS", icon: <SiGatsby className="text-purple-500"/>},
        {name: "Bootstrap 5", icon: <FaBootstrap className="text-indigo-500"/>},
        {name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-500"/>},
        {name: "Node.js", icon: <FaNodeJs className="text-green-500"/>},
        {name: "HTML", icon: <FaHtml5 className="text-blue-800"/>},
        {name: "Git", icon: <FaGitAlt className="text-orange-500"/>},

    ];

    return (
        <SectionWrapper id="skills" title="Skills">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center space-y-2"
                    >
                        <div className="text-4xl">{skill.icon}</div>
                        <p className="text-lg dark:text-white font-medium">{skill.name}</p>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
