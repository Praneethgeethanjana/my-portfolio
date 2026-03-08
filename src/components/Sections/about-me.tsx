"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Section } from "@/components/section-wrapper";
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiJavascript,
    SiTailwindcss,
    SiBootstrap,
    SiRedux,
    SiHtml5,
    SiCss3
} from "react-icons/si";

const techStack = [
    { name: "React / RN", icon: SiReact, color: "text-[#61DAFB]" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
    { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
    { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
    { name: "Redux", icon: SiRedux, color: "text-[#764ABC]" },
    { name: "Bootstrap 5", icon: SiBootstrap, color: "text-[#7952B3]" },
    { name: "HTML5", icon: SiHtml5, color: "text-[#E34F26]" },
    { name: "CSS3 / SASS", icon: SiCss3, color: "text-[#1572B6]" },
];

export default function AboutMe() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <Section id="about" className="relative">
            <div className="absolute top-40 right-10 w-64 h-64 bg-primary/10 rounded-full mix-blend-multiply blur-3xl -z-10 dark:mix-blend-lighten pointer-events-none"></div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="flex flex-col gap-4 mb-12"
            >
                <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold tracking-tight">
                    About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Me</span>
                </motion.h2>
                <motion.div variants={itemVariants} className="w-20 h-1 bg-gradient-to-r from-primary to-blue-500 rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Bio & Details */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="flex flex-col justify-center space-y-6"
                >
                    <motion.div variants={itemVariants} className="glass-card p-8 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <p className="text-lg leading-relaxed text-muted-foreground relative z-10 mb-6 font-medium">
                            Results-driven Frontend Software Engineer with 4+ years of experience designing, building, and deploying production-grade web and mobile applications.
                        </p>
                        <p className="text-muted-foreground relative z-10">
                            Expert in React.js and React Native, with a portfolio spanning admin dashboards, donation platforms, conferencing apps, and cross-platform mobile apps — all shipped to live users. Based in Ambalangoda, Sri Lanka.
                        </p>
                    </motion.div>

                    {/* Key Stats */}
                    <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
                        <div className="glass p-6 rounded-2xl flex flex-col items-center justify-center text-center">
                            <span className="text-4xl font-bold text-primary mb-2">4+</span>
                            <span className="text-sm font-medium text-muted-foreground">Years Experience</span>
                        </div>
                        <div className="glass p-6 rounded-2xl flex flex-col items-center justify-center text-center">
                            <span className="text-4xl font-bold text-blue-500 mb-2">15+</span>
                            <span className="text-sm font-medium text-muted-foreground">Projects Delivered</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Photo & Tech Grid */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-8"
                >
                    {/* Photo Placeholder */}
                    {/* <div className="relative w-full aspect-square md:aspect-video lg:aspect-square max-w-sm mx-auto rounded-3xl overflow-hidden glass-card group">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-500/20 mix-blend-overlay z-10 group-hover:opacity-10 transition-opacity duration-500"></div>
                        <Image
                            src="/images/praneeth2.png"
                            alt="Praneeth Geethanjana"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            priority
                        />
                    </div> */}

                    {/* Tech Stack Grid */}
                    <div className="glass-card p-6">
                        <h3 className="text-lg font-semibold mb-4 text-center">Core Tech Stack</h3>
                        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4">
                            {techStack.map((tech) => (
                                <div
                                    key={tech.name}
                                    className="flex flex-col items-center justify-center p-3 rounded-xl hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300 group cursor-pointer"
                                    title={tech.name}
                                >
                                    <tech.icon className={`h-8 w-8 mb-2 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 ${tech.color}`} />
                                    <span className="text-xs text-muted-foreground font-medium text-center w-full truncate">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
