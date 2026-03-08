"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/section-wrapper";
import { Button } from "@/components/button";
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheckCircle } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from '@emailjs/browser';

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formRef.current) return;

        try {
            setStatus("loading");

            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                formRef.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            setStatus("success");
            formRef.current.reset();

            // Reset success message after 5 seconds
            setTimeout(() => setStatus("idle"), 5000);
        } catch (error) {
            console.error("Failed to send email:", error);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    return (
        <Section id="contact" className="relative">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="flex flex-col gap-4 mb-16 items-center text-center"
            >
                <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold tracking-tight">
                    Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Touch</span>
                </motion.h2>
                <motion.div variants={itemVariants} className="w-20 h-1 bg-gradient-to-r from-primary to-blue-500 rounded-full mx-auto" />
                <motion.p variants={itemVariants} className="text-muted-foreground mt-4 max-w-2xl text-lg">
                    Whether you have a question, a project opportunity, or just want to say hi, my inbox is always open.
                </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
                {/* Contact Info */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="flex flex-col gap-8"
                >
                    <motion.div variants={itemVariants} className="glass-card p-8">
                        <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

                        <div className="flex flex-col gap-6">
                            <a href="mailto:contact@praneeth.com" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    <FiMail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-medium text-foreground">Email</p>
                                    <p>geethanjana10@gmail.com</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-4 text-muted-foreground">
                                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary">
                                    <FiMapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-medium text-foreground">Location</p>
                                    <p>Ambalangoda, Sri Lanka</p>
                                </div>
                            </div>
                        </div>

                        <hr className="my-8 border-border" />

                        <h4 className="text-lg font-bold mb-4">Connect on Socials</h4>
                        <div className="flex gap-4">
                            <a href="https://github.com/Praneethgeethanjana" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:-translate-y-1 transition-all" title="GitHub">
                                <FiGithub className="w-5 h-5" />
                            </a>
                            <a href="https://linkedin.com/in/praneeth-geethanjana" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-[#0A66C2] hover:-translate-y-1 transition-all" title="LinkedIn">
                                <FiLinkedin className="w-5 h-5" />
                            </a>
                            <a href="https://wa.me/94710156913" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-[#25D366] hover:-translate-y-1 transition-all" title="WhatsApp">
                                <FaWhatsapp className="w-6 h-6" />
                            </a>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <form ref={formRef} onSubmit={handleSubmit} className="glass p-8 rounded-3xl flex flex-col gap-6 relative overflow-hidden">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-sm font-medium text-foreground/80">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                placeholder="John Doe"
                                className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium placeholder:text-muted-foreground/50"
                                disabled={status === "loading" || status === "success"}
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-sm font-medium text-foreground/80">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder="john@example.com"
                                className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium placeholder:text-muted-foreground/50"
                                disabled={status === "loading" || status === "success"}
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-sm font-medium text-foreground/80">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                placeholder="How can I help you?"
                                className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium placeholder:text-muted-foreground/50 resize-none"
                                disabled={status === "loading" || status === "success"}
                            ></textarea>
                        </div>

                        {status === "error" && (
                            <p className="text-red-500 text-sm mb-2">Failed to send message. Please ensure your template keys are configured or email directly.</p>
                        )}

                        <Button
                            type="submit"
                            size="lg"
                            className={`w-full rounded-xl py-6 text-base group transition-all duration-300 ${status === "success" ? "bg-green-500 hover:bg-green-600 text-white" : ""}`}
                            disabled={status === "loading" || status === "success"}
                        >
                            {status === "idle" || status === "error" ? (
                                <>
                                    Send Message
                                    <FiSend className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </>
                            ) : status === "loading" ? (
                                <span className="flex items-center gap-2">
                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    Sending...
                                </span>
                            ) : (
                                <span className="flex items-center gap-2">
                                    <FiCheckCircle className="w-5 h-5" />
                                    Message Sent!
                                </span>
                            )}
                        </Button>
                    </form>
                </motion.div>
            </div>
        </Section>
    );
}
