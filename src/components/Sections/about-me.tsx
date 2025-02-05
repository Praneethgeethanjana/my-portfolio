// "use client";
// import Image from "next/image";
// import {motion} from "framer-motion"; // To handle animations
//
// export default function AboutMe() {
//     return (
//         <div
//             className="relative bg-cover bg-center h-screen flex items-center justify-center text-white px-6 py-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
//             {/* Background Overlay */}
//             <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
//
//             {/* Section Content */}
//             <div
//                 className="relative z-10 container mx-auto flex flex-col md:flex-row items-center text-center md:text-left space-y-8 md:space-y-0 md:space-x-12">
//                 {/* Image Section */}
//                 <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center md:justify-start">
//                     <motion.div
//                         initial={{opacity: 0, scale: 0.5}}
//                         animate={{opacity: 1, scale: 1}}
//                         transition={{duration: 1}}
//                         className="overflow-hidden rounded-full border-4 border-white shadow-2xl"
//                     >
//                         <Image
//                             src="/images/my.jpg" // Replace with your image path
//                             alt="Praneeth"
//                             width={400}
//                             height={400}
//                             className="rounded-full cursor-pointer shadow-xl transform transition duration-500 hover:scale-110"
//                         />
//                     </motion.div>
//                 </div>
//
//                 {/* Text Section */}
//                 <div className="md:w-2/3 px-4 space-y-6">
//                     <motion.h2
//                         initial={{opacity: 0, y: 50}}
//                         animate={{opacity: 1, y: 0}}
//                         transition={{duration: 1.5, delay: 0.2}}
//                         className="text-4xl md:text-5xl font-bold text-gray-100"
//                     >
//                         Hi, I'm Praneeth!
//                     </motion.h2>
//
//                     {/* Moving Text */}
//                     <motion.p
//                         initial={{opacity: 0, x: -200}}
//                         animate={{opacity: 1, x: 0}}
//                         transition={{
//                             type: "spring",
//                             stiffness: 100,
//                             damping: 25,
//                             duration: 1.5,
//                             delay: 0.4,
//                         }}
//                         className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6"
//                     >
//                         Experienced Front-End Developer with over 3 years of expertise in React.js, having successfully
//                         delivered 10+ React.js projects and 2 React Native applications. Skilled in developing scalable,
//                         user-friendly web applications, focusing on reusable components and performance optimization.
//                         Proficient in Next.js and passionate about crafting responsive, visually appealing, and
//                         accessible user interfaces. A collaborative team player who is always eager to learn and adapt
//                         to emerging web technologies.
//                     </motion.p>
//
//                     {/* Moving Button */}
//                     <motion.a
//                         href="#projects"
//                         initial={{opacity: 0, scale: 0.8}}
//                         animate={{opacity: 1, scale: 1}}
//                         transition={{duration: 1.5, delay: 0.6}}
//                         className="inline-block px-6 py-3 bg-opacity-5 bg-white text-white rounded-lg shadow-xl hover:bg-gradient-to-r hover:from-blue-500 hover:bg-opacity-90  hover:to-pink-500  transform transition duration-300 ease-out"
//                     >
//                         Check My Projects
//                     </motion.a>
//                 </div>
//             </div>
//
//             {/* Additional Moving Text Below */}
//             <motion.div
//                 className="absolute bottom-10 left-0 w-full text-center"
//                 initial={{opacity: 0, y: 50}}
//                 animate={{opacity: 1, y: 0}}
//                 transition={{
//                     type: "spring",
//                     stiffness: 150,
//                     damping: 30,
//                     duration: 2,
//                     delay: 1,
//                 }}
//             >
//                 <h3 className="text-xl text-gray-300 font-light">
//                     Building the future, one line of code at a time.
//                 </h3>
//             </motion.div>
//         </div>
//     );
// }


// "use client";
// import {motion} from "framer-motion";
//
// export default function AboutMe() {
//     return (
//         <section id="about" className="bg-gray-900 text-white py-16 px-6">
//             <div className="container mx-auto max-w-4xl text-center md:text-left">
//                 {/* Section Title */}
//                 <motion.h2
//                     initial={{opacity: 0, y: 30}}
//                     animate={{opacity: 1, y: 0}}
//                     transition={{duration: 1.2}}
//                     className="text-4xl font-bold text-center mb-6"
//                 >
//                     About Me
//                 </motion.h2>
//
//                 {/* Description */}
//                 <motion.p
//                     initial={{opacity: 0, y: 30}}
//                     animate={{opacity: 1, y: 0}}
//                     transition={{duration: 1.4, delay: 0.2}}
//                     className="text-lg text-gray-300 leading-relaxed"
//                 >
//                     I'm a **Front-End Developer** with over 3 years of experience specializing in **React.js, Next.js,
//                     and modern UI frameworks**.
//                     With a passion for creating **scalable, high-performance web applications**, I've successfully
//                     delivered **10+ React.js projects**
//                     and **2 React Native applications**.
//                 </motion.p>
//
//                 {/* Skills Overview */}
//                 <motion.div
//                     initial={{opacity: 0, y: 30}}
//                     animate={{opacity: 1, y: 0}}
//                     transition={{duration: 1.5, delay: 0.4}}
//                     className="mt-6 text-lg"
//                 >
//                     <h3 className="text-xl font-semibold mb-4">What I Do</h3>
//                     <ul className="list-disc list-inside text-gray-400 space-y-2">
//                         <li>🔹 Building dynamic, interactive **React.js** applications</li>
//                         <li>🔹 Creating **high-performance, responsive** web UIs</li>
//                         <li>🔹 Implementing **Redux & State Management**</li>
//                         <li>🔹 Working with **Next.js** for server-side rendering & SEO</li>
//                         <li>🔹 Integrating APIs & handling front-end logic efficiently</li>
//                     </ul>
//                 </motion.div>
//             </div>
//         </section>
//     );
// }

"use client";
import {motion} from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";

export default function AboutMe() {
    return (
        <SectionWrapper id="about-me" title="About Me">
            {/*// <section id="about-me" className="bg-white dark:text-white py-16 px-6">*/}
            <div className="container mx-auto  text-center md:text-left">
                {/* Section Title */}
                {/*<motion.h2*/}
                {/*    initial={{opacity: 0, y: 30}}*/}
                {/*    animate={{opacity: 1, y: 0}}*/}
                {/*    transition={{duration: 1.2}}*/}
                {/*    className="text-4xl font-bold text-center mb-6"*/}
                {/*>*/}
                {/*    About Me*/}
                {/*</motion.h2>*/}

                {/* Description */}
                <motion.p
                    initial={{opacity: 0, y: 30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1.4, delay: 0.2}}
                    className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed"
                >
                    I'm an Experienced Front-End Developer with 3+ years of expertise in React.js. I've
                    successfully completed 10+ React.js and 2 React Native projects, specializing in building
                    scalable, user-friendly web applications with reusable components and performance optimization.
                    I'm also proficient in Next.js and passionate about creating responsive, visually appealing,
                    and accessible user interfaces. A collaborative team player, I am eager to learn and adapt to
                    evolving web technologies.
                </motion.p>

                {/* Skills Overview */}
                <motion.div className="flex justify-between">
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 1.5, delay: 0.4}}
                        className="mt-6 text-lg"
                    >
                        <h3 className="text-lg text-gray-700 dark:text-gray-100 font-semibold mb-4">What I Do</h3>
                        <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 space-y-2">
                            <p>🔹 Building dynamic, interactive React.js applications</p>
                            <p>🔹 Creating high-performance, responsive web UIs</p>
                            <p>🔹 Implementing Redux & State Management</p>
                            <p>🔹 Working with Next.js for server-side rendering & SEO</p>
                            <p>🔹 Integrating APIs & handling front-end logic efficiently</p>
                        </ul>
                    </motion.div>

                    {/* Education */}
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 1.5, delay: 0.6}}
                        className="mt-8 text-lg text-gray-300"
                    >
                        <h3 className="text-lg text-gray-700 dark:text-gray-100 font-semibold mb-4">Education</h3>
                        <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 space-y-2">
                            <p>🎓 Graduate Diploma in Software Engineering (GDSE) - IJSE</p>
                            <p>🎓 Bachelor's Degree in Software Engineering - Cardiff Metropolitan University</p>
                        </ul>
                    </motion.div>
                </motion.div>
            </div>
            {/*</section>*/}
        </SectionWrapper>
    );
}
