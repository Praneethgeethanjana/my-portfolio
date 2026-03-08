"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/section-wrapper";
import {
    FiLayout,
    FiCode,
    FiSmartphone,
    FiServer,
    FiTool,
    FiSettings
} from "react-icons/fi";

const skillCategories = [
    {
        title: "Frameworks & Libraries",
        icon: FiLayout,
        skills: ["React.js", "Next.js", "React Native", "Gatsby.js", "Redux", "Context API"],
        color: "from-blue-500/20 to-blue-500/5"
    },
    {
        title: "Languages",
        icon: FiCode,
        skills: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3 / SASS"],
        color: "from-yellow-500/20 to-yellow-500/5"
    },
    {
        title: "UI & Styling",
        icon: FiSmartphone,
        skills: ["Tailwind CSS", "Bootstrap 5", "Responsive Design", "Mobile-First"],
        color: "from-cyan-500/20 to-cyan-500/5"
    },
    {
        title: "APIs & Integration",
        icon: FiServer,
        skills: ["RESTful APIs", "Axios", "Jitsi SDK", "Payhere SDK"],
        color: "from-purple-500/20 to-purple-500/5"
    },
    {
        title: "Build & Tools",
        icon: FiTool,
        skills: ["Vite", "Git", "GitHub", "Xcode", "Android Studio"],
        color: "from-orange-500/20 to-orange-500/5"
    },
    {
        title: "Deployment & Other",
        icon: FiSettings,
        skills: ["App Store", "Google Play Store", "AWS S3", "SEO Optimization"],
        color: "from-green-500/20 to-green-500/5"
    }
];

export default function Skills() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <Section id="skills" className="relative z-10">
            {/* Background decoration */}
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply blur-[128px] -z-10 dark:mix-blend-lighten pointer-events-none transform -translate-y-1/2 translate-x-1/2"></div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="flex flex-col gap-4 mb-16 text-center items-center"
            >
                <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold tracking-tight">
                    Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Arsenal</span>
                </motion.h2>
                <motion.div variants={itemVariants} className="w-20 h-1 bg-gradient-to-r from-primary to-blue-500 rounded-full mx-auto" />
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="glass-card p-6 md:p-8 flex flex-col group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden"
                    >
                        {/* Category Background Gradient overlay */}
                        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${category.color} rounded-bl-full opacity-50 -z-10 transition-transform duration-500 group-hover:scale-110`}></div>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-primary shadow-sm border border-primary/10 text-xl group-hover:scale-110 transition-transform duration-300">
                                <category.icon />
                            </div>
                            <h3 className="text-xl font-bold">{category.title}</h3>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, i) => (
                                <span
                                    key={i}
                                    className="px-4 py-1.5 rounded-full bg-background/50 border border-border text-sm text-foreground/80 hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </Section>
    );
}
