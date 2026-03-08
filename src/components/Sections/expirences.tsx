"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/section-wrapper";
import { FiBriefcase, FiAward } from "react-icons/fi";

const experiences = [
    {
        role: "Frontend Software Engineer",
        company: "Ceyentra Technologies",
        period: "2022 – Present",
        achievements: [
            "Designed, developed & deployed Apartner – Complex Admins (React Native) with push notifications, published on Play Store & App Store.",
            "Debugged and relaunched Apartner user app, resolving critical production issues.",
            "Built a conference app using Jitsi React Native SDK, published on both app stores.",
            "Lead Frontend Developer for Karuna.lk — Sri Lanka's largest online donation platform (React.js, Bootstrap 5).",
            "Built Alpha Accounting Dashboard (React.js, Vite, Redux, Yup).",
            "Improved Gatsby.js site SEO from 35% to 90%.",
            "Delivered 2 React Native apps and 5+ React.js web apps.",
            "Contributed to 2 Construct 3 game projects."
        ],
        icon: FiBriefcase
    },
    {
        role: "BSc (Hons) Software Engineering",
        company: "Cardiff Metropolitan University (via ICBT Campus, Sri Lanka)",
        period: "Education",
        achievements: [
            "Graduated with honors in Software Engineering.",
            "Gained strong foundations in core computer science, software design patterns, and engineering principles.",
            "Covered modules: The Ethical and Legal Implications of Information Systems, Analytics and Business Intelligence, Advanced Programming, and Computational Intelligence."
        ],
        icon: FiAward
    },
    {
        role: "Graduate Diploma in Software Engineering",
        company: "Institute of Software Engineering (IJSE)",
        period: "Education",
        achievements: [
            "Specialized in Software Engineering methodologies and practices.",
            "Learned JAVA with OOP, MySQL, JavaFX, Hibernate, SpringBoot, HTML, CSS, and Javascript."
        ],
        icon: FiAward
    },
    {
        role: "GCE Advanced Level",
        company: "G/Dharmasoka College Ambalangoda",
        period: "2018",
        achievements: [
            "Completed A/L in the Physical Science stream.",
            "Results: Physics - C, Combined Maths - S, Chemistry - S."
        ],
        icon: FiAward
    }
];

export default function Experiences() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    return (
        <Section id="experience" className="relative">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="flex flex-col gap-4 mb-16 items-center text-center"
            >
                <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold tracking-tight">
                    My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Journey</span>
                </motion.h2>
                <motion.div variants={itemVariants} className="w-20 h-1 bg-gradient-to-r from-primary to-blue-500 rounded-full mx-auto" />
            </motion.div>

            <div className="relative max-w-4xl mx-auto">
                {/* Vertical Line */}
                <div className="absolute left-6 md:left-1/2 md:-ml-[1px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-blue-500/50 to-transparent"></div>

                <div className="flex flex-col gap-12 relative z-10">
                    {experiences.map((exp, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: 0.1 * index }}
                                className={`flex flex-col md:flex-row gap-8 items-start relative ${isEven ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Timeline Node */}
                                <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center border-primary shadow-[0_0_15px_rgba(var(--primary),0.3)] z-20">
                                        <exp.icon className="h-5 w-5 text-primary" />
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className={`w-full md:w-1/2 pl-20 md:pl-0 pt-2 ${isEven ? "md:pr-16 text-left md:text-right" : "md:pl-16 text-left"
                                    }`}>
                                    <div className={`glass-card p-8 group hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden ${isEven ? "md:items-end" : "md:items-start"
                                        }`}>
                                        {/* Hover Glow */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        <div className="relative z-10">
                                            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider mb-4 border border-primary/20">
                                                {exp.period}
                                            </span>
                                            <h3 className="text-xl md:text-2xl font-bold mb-1 text-foreground">{exp.role}</h3>
                                            <h4 className="text-lg text-muted-foreground mb-6 font-medium">{exp.company}</h4>

                                            <ul className={`flex flex-col gap-3 text-muted-foreground text-sm leading-relaxed ${isEven ? "md:items-end text-left md:text-right" : "text-left"
                                                }`}>
                                                {exp.achievements.map((achievement, i) => (
                                                    <li key={i} className={`flex items-start gap-2 ${isEven ? "md:flex-row-reverse" : ""}`}>
                                                        <span className="text-primary mt-1 flex-shrink-0">▹</span>
                                                        <span>{achievement}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
}
