"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/section-wrapper";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
    {
        title: "Karuna.lk",
        description: "Sri Lanka's largest online donation platform. Led the frontend development to deliver a seamless and secure donation experience.",
        tech: ["React.js", "Bootstrap 5", "REST APIs"],
        link: "#", // Placeholder
    },
    {
        title: "Apartner Apps",
        description: "Complex admin and user mobile application featuring push notifications. Handled critical bug fixes and relaunched the platform on App Store & Play Store.",
        tech: ["React Native", "Redux", "Mobile UI"],
        link: "#",
    },
    {
        title: "Alpha Accounting Dashboard",
        description: "A comprehensive accounting dashboard for financial management and reporting. Built for performance and extensive data handling.",
        tech: ["React.js", "Vite", "Redux", "Yup"],
        link: "#",
    },
    {
        title: "Conference App",
        description: "A secure cross-platform conferencing mobile app utilizing the Jitsi SDK. Includes real-time video, audio, and room management features.",
        tech: ["React Native", "Jitsi SDK", "WebRTC"],
        link: "#",
    }
];

export default function FeaturedProjects() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    return (
        <Section id="projects" className="relative z-10">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply blur-3xl -z-10 dark:mix-blend-lighten pointer-events-none transform -translate-y-1/2 -translate-x-1/2"></div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="flex flex-col gap-4 mb-16"
            >
                <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold tracking-tight">
                    Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Projects</span>
                </motion.h2>
                <motion.div variants={itemVariants} className="w-20 h-1 bg-gradient-to-r from-primary to-blue-500 rounded-full" />
                <motion.p variants={itemVariants} className="text-muted-foreground mt-4 max-w-2xl text-lg">
                    A selection of major applications I&apos;ve built and delivered to production.
                </motion.p>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="group relative h-full"
                    >
                        {/* Hover Glow Effect */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>

                        <div className="relative h-full glass-card p-8 flex flex-col justify-between group-hover:-translate-y-2 transition-transform duration-500">
                            <div>

                                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground mb-8 leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-auto text-sm font-medium">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="px-3 py-1 rounded-full bg-background/50 border border-border text-foreground/80">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </Section>
    );
}
