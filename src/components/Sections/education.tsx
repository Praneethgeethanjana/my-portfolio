import SectionWrapper from "@/components/SectionWrapper";

export default function Education() {
    const education = [
        {
            degree: "Bachelor of Science in Computer Science",
            institution: "University of Colombo",
            duration: "2018 - 2022",
            details: [
                "Specialized in Software Engineering and Web Development",
                "Graduated with honors (GPA: 3.9/4.0)",
                "Completed projects on Full Stack Development using React and Node.js"
            ]
        },
        {
            degree: "Full Stack Web Development Certification",
            institution: "FreeCodeCamp",
            duration: "2021",
            details: [
                "Completed 100+ hours of hands-on coding challenges",
                "Built several projects with React, Node.js, and MongoDB"
            ]
        }
    ];

    return (
        <SectionWrapper id="education" title="Education">
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
                {education.map((edu, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
                    >
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                            {edu.degree}
                        </h3>
                        <h4 className="text-lg text-gray-600 dark:text-gray-400 mb-2">
                            {edu.institution}
                        </h4>
                        <p className="text-gray-500 dark:text-gray-300 italic mb-4">
                            {edu.duration}
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                            {edu.details.map((detail, i) => (
                                <li key={i}>{detail}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
//
// import SectionWrapper from "@/components/SectionWrapper";
//
// export default function Education() {
//     const education = [
//         {
//             degree: "Bachelor of Science in Computer Science",
//             institution: "University of Colombo",
//             duration: "2018 - 2022",
//             details: [
//                 "Specialized in Software Engineering and Web Development",
//                 "Graduated with honors (GPA: 3.9/4.0)",
//                 "Completed projects on Full Stack Development using React and Node.js"
//             ]
//         },
//         {
//             degree: "Full Stack Web Development Certification",
//             institution: "FreeCodeCamp",
//             duration: "2021",
//             details: [
//                 "Completed 100+ hours of hands-on coding challenges",
//                 "Built several projects with React, Node.js, and MongoDB"
//             ]
//         }
//     ];
//
//     return (
//         <SectionWrapper id="education" title="Education">
//             <div className="space-y-10">
//                 {education.map((edu, index) => (
//                     <div key={index} className="relative">
//                         {/* Vertical line */}
//                         {index !== education.length - 1 && (
//                             <span className="absolute left-4 top-0 h-full w-1 bg-gray-300 dark:bg-gray-700" />
//                         )}
//
//                         <div className="pl-10">
//                             <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
//                                 {edu.degree}
//                             </h3>
//                             <h4 className="text-lg text-gray-600 dark:text-gray-400">
//                                 {edu.institution}
//                             </h4>
//                             <p className="text-gray-500 dark:text-gray-300 italic">
//                                 {edu.duration}
//                             </p>
//                             <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-700 dark:text-gray-300">
//                                 {edu.details.map((detail, i) => (
//                                     <li key={i}>{detail}</li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </SectionWrapper>
//     );
// }
