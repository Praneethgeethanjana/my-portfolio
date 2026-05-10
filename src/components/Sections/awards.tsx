"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/section-wrapper";
import { FiAward, FiStar } from "react-icons/fi";
import Image from "next/image";

export default function Awards() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <Section id="awards" className="relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />
            
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
                {/* Text Content */}
                <div className="order-2 lg:order-1">
                    <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
                        <div className="p-2 rounded-lg bg-orange-500/10 text-orange-500">
                            <FiAward className="h-6 w-6" />
                        </div>
                        <span className="text-sm font-bold uppercase tracking-widest text-orange-500">Recognition & Excellence</span>
                    </motion.div>

                    <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        Digital Learning <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">Excellence Award</span>
                    </motion.h2>

                    <motion.p variants={itemVariants} className="text-muted-foreground text-lg mb-8 leading-relaxed">
                        LearnFi.lk was recognized as the <span className="text-foreground font-semibold">Best Education Website</span> at <span className="text-foreground font-semibold">BestWeb.LK 2025</span>. This prestigious recognition highlights our commitment to innovation, design, and delivering significant impact on digital learning across Sri Lanka.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-col gap-4">
                        <div className="flex items-center gap-3 glass-card p-4 rounded-2xl border border-orange-500/20 bg-orange-500/5">
                            <div className="h-10 w-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 shrink-0">
                                <FiStar className="h-5 w-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-foreground">Iconic Awards 2025</h4>
                                <p className="text-sm text-muted-foreground">Recognizing excellence in the digital landscape</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Image Content */}
                <motion.div 
                    variants={itemVariants}
                    className="order-1 lg:order-2 relative group"
                >
                    <div className="absolute -inset-4 bg-gradient-to-tr from-orange-500/20 to-primary/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
                    
                    <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
                        <Image
                            src="/images/award.jpeg"
                            alt="LearnFi Team winning Digital Learning Excellence Award at BestWeb.LK 2025"
                            width={800}
                            height={600}
                            className="w-full h-auto object-cover"
                            priority
                        />
                        
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                            <p className="text-white font-medium text-lg">LearnFi Team at Iconic Awards 2025</p>
                        </div>
                    </div>

                    {/* Decorative badge */}
                    <div className="absolute -bottom-6 -right-6 h-24 w-24 bg-background border-4 border-orange-500/20 rounded-full flex items-center justify-center shadow-xl z-20 hidden md:flex animate-bounce-subtle">
                         <FiAward className="h-10 w-10 text-orange-500" />
                    </div>
                </motion.div>
            </motion.div>
        </Section>
    );
}
