"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/button";
import { Section } from "@/components/section-wrapper";
import { FiArrowRight, FiMail } from "react-icons/fi";

export default function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-full pt-20" id="hero">
            {/* Background animated blobs */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob dark:mix-blend-lighten"></div>
                <div className="absolute top-[30%] right-[10%] w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000 dark:mix-blend-lighten"></div>
                <div className="absolute -bottom-8 left-[40%] w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000 dark:mix-blend-lighten"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-3xl"
                >
                    <motion.div variants={itemVariants} className="mb-4">
                        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wider mb-4 border border-primary/20 glass">
                            Based in Sri Lanka 📍
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight"
                    >
                        Hi, I&apos;m{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
                            Praneeth Geethanjana
                        </span>
                    </motion.h1>

                    <motion.h2
                        variants={itemVariants}
                        className="text-2xl md:text-3xl text-foreground/80 font-medium mb-6"
                    >
                        Frontend Software Engineer
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg text-muted-foreground mb-10 max-w-2xl leading-relaxed"
                    >
                        I build modern, production-grade web and mobile applications.
                        Passionate about delivering exceptional user experiences through
                        clean code and beautiful, intuitive interfaces.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                        <Button size="lg" className="rounded-full shadow-lg group hover:scale-105 transition-transform" asChild>
                            <a href="#projects">
                                View Work
                                <FiArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </Button>
                        <Button size="lg" variant="glass" className="rounded-full group hover:scale-105 transition-transform" asChild>
                            <a href="#contact">
                                <FiMail className="mr-2 h-4 w-4" />
                                Contact Me
                            </a>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
            >
                <span className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent opacity-50"></div>
            </motion.div>
        </section>
    );
}
