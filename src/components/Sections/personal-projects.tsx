"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/section-wrapper";
import { FiExternalLink, FiLayout, FiAward } from "react-icons/fi";

const personalProjects = [
    {
        title: "Learnfi",
        url: "https://learnfi.lk",
        category: "Online Education Platform",
        description: "Contributed UI development and mobile responsive design for an award-winning online education platform serving learners across Sri Lanka.",
        tech: ["React.js", "Vite", "Bootstrap 5"],
        awards: [
            "Best Mobile User Experience Website — Global Business Excellence Awards 2025",
            "Educational Technology Provider of the Year — Global Business Excellence Awards 2025",
            "Digital Learning Excellence Award & Gold Award for Best Education Website at BestWeb.LK 2025 – Sri Lanka's Premier Web Design Competition"
        ],
        highlights: [
            "Award-winning mobile responsive UI",
            "Built with accessibility and cross-device usability as a priority",
            "Recognised internationally for educational technology excellence"
        ]
    },
    {
        title: "Luminous Gems & Jewellery",
        url: "https://gems-and-jewellery.vercel.app/",
        category: "Jewellery Showcase / Portfolio",
        description: "A premium, fully responsive modern UI for a gems and jewellery brand. Developed efficiently using AI assistance (Google Antigravity) to ensure pixel-perfect design and clean code.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Antigravity AI"],
        highlights: [
            "Developed using Google Antigravity AI for high-performance code",
            "Fully responsive modern UI with premium aesthetics",
            "Optimized for performance and SEO using Next.js"
        ]
    },
    {
        title: "Villa & Kabana Templates",
        urls: [
            { label: "Villa Kabana", link: "https://villa-kabana.vercel.app/" },
            { label: "Serenity Villa", link: "https://serenityvilla.vercel.app/" }
        ],
        category: "Hospitality & Real Estate",
        description: "Premium web templates for luxury villas and kabanas. Built with a focus on visual storytelling and conversion, featuring integrated inquiry systems powered by EmailJS.",
        tech: ["Next.js", "Tailwind CSS", "EmailJS", "TypeScript"],
        highlights: [
            "Includes multiple design variants (Villa Kabana & Serenity Villa)",
            "Seamless inquiry handling via direct EmailJS integration",
            "Highly customizable, performance-optimized, and fully responsive"
        ]
    },
    {
        title: "Bare Feelings",
        url: "https://barefeelings.lk",
        category: "Sexual Wellness Brand & E-commerce",
        description: "Designed and developed a full e-commerce web application for a sexual wellness brand, handling product listings, user authentication, and integrated payment processing.",
        tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "Firebase", "Payhere SDK"],
        highlights: [
            "Integrated Payhere SDK for secure local payment processing",
            "Firebase backend for authentication and real-time database",
            "Sensitive niche handled with tasteful, professional UI design",
            "Fully responsive across all devices"
        ]
    },
    {
        title: "Prime Weigh Holding",
        url: "https://primeweighholding.lk",
        category: "Industrial / Corporate Website",
        description: "Developed a clean, fast-loading static corporate website for an industrial weighing scale company, showcasing their full product catalogue and company information.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS"],
        highlights: [
            "Static site generation (SSG) for maximum performance and SEO",
            "Professional corporate design tailored to an industrial audience",
            "Fully responsive with clean product detail layout"
        ]
    },
    {
        title: "Simona Crochet",
        url: "https://simonacrochet.netlify.app",
        category: "Handmade Products / Small Business",
        description: "Designed and developed a charming product showcase website for a crochet small business, presenting handmade items in an elegant, browsable layout.",
        tech: ["Next.js 15", "TypeScript", "Tailwind CSS"],
        highlights: [
            "Warm, boutique aesthetic tailored to the handmade goods niche",
            "Clean product gallery with responsive grid layout",
            "Deployed on Netlify with fast global CDN delivery"
        ]
    }
];

export default function PersonalProjects() {
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
        <Section id="personal-projects" className="relative z-10">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="flex flex-col gap-4 mb-16"
            >
                <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold tracking-tight">
                    Client & Independent <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Work</span>
                </motion.h2>
                <motion.div variants={itemVariants} className="w-20 h-1 bg-gradient-to-r from-primary to-blue-500 rounded-full" />
                <motion.p variants={itemVariants} className="text-muted-foreground mt-4 max-w-2xl text-lg">
                    Focusing on Next.js independent client projects involving App Router, SSR, API routes, and dynamic routing.
                </motion.p>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
                {personalProjects.map((project: any, index: number) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="group relative h-full flex flex-col"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        <div className="relative h-full glass-card p-8 flex flex-col justify-between group-hover:-translate-y-2 transition-transform duration-500 border border-border group-hover:border-primary/30">
                            <div>
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex flex-col gap-2">
                                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide w-fit">
                                            {project.category}
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        {project.urls ? (
                                            project.urls.map((u: any, i: number) => (
                                                <a
                                                    key={i}
                                                    href={u.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-10 h-10 rounded-full flex items-center justify-center bg-background/50 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300 group-hover:scale-110 shrink-0 border border-border/50"
                                                    title={u.label}
                                                    aria-label={`Visit ${u.label}`}
                                                >
                                                    <FiExternalLink className="h-4 w-4" />
                                                </a>
                                            ))
                                        ) : (
                                            <a
                                                href={project.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 rounded-full flex items-center justify-center bg-background/50 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300 group-hover:scale-110 shrink-0 border border-border/50"
                                                aria-label={`Visit ${project.title}`}
                                            >
                                                <FiExternalLink className="h-4 w-4" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                {project.awards && (
                                    <div className="mb-6 p-4 rounded-xl bg-orange-500/10 border border-orange-500/20">
                                        <div className="flex items-center gap-2 mb-2 text-orange-500 font-bold">
                                            <FiAward className="h-5 w-5" />
                                            <span>Awards & Recognition</span>
                                        </div>
                                        <ul className="space-y-2">
                                            {project.awards.map((award: string, i: number) => (
                                                <li key={i} className="text-sm font-medium text-orange-500/90 flex items-start">
                                                    <span className="mr-2 mt-0.5">•</span>
                                                    <span>{award}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {project.highlights && (
                                    <div className="mb-8">
                                        <h4 className="text-sm font-semibold text-foreground/80 mb-3 uppercase tracking-wider">Key Highlights</h4>
                                        <ul className="space-y-2">
                                            {project.highlights.map((highlight: string, i: number) => (
                                                <li key={i} className="text-muted-foreground text-sm flex flex-start">
                                                    <span className="text-primary mr-2 mt-0.5 shrink-0">{"→"}</span>
                                                    <span className="leading-snug">{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-border/50">
                                {project.tech.map((tech: string, i: number) => (
                                    <span key={i} className="px-3 py-1 rounded-full bg-background/50 border border-border text-foreground/80 text-xs font-medium">
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

