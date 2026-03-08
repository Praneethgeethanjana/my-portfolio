"use client";

import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-border py-8 md:py-12 mt-20 relative z-10">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">

                <div className="flex flex-col items-center md:items-start">
                    <a href="#" className="text-xl font-bold tracking-tighter mb-2">
                        PG<span className="text-primary">.</span>
                    </a>
                    <p className="text-muted-foreground text-sm font-medium">
                        &copy; {currentYear} Praneeth Geethanjana. All rights reserved.
                    </p>
                </div>

                <div className="flex gap-4">
                    <a
                        href="https://github.com/Praneethgeethanjana"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors p-2"
                        aria-label="GitHub"
                    >
                        <FiGithub className="w-5 h-5" />
                    </a>
                    <a
                        href="https://linkedin.com/in/praneeth-geethanjana"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-[#0A66C2] transition-colors p-2"
                        aria-label="LinkedIn"
                    >
                        <FiLinkedin className="w-5 h-5" />
                    </a>
                    <a
                        href="mailto:geethanjana10@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors p-2"
                        aria-label="Email"
                    >
                        <FiMail className="w-5 h-5" />
                    </a>
                    <a
                        href="https://wa.me/94710156913"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-[#25D366] transition-colors p-2"
                        aria-label="WhatsApp"
                    >
                        <FaWhatsapp className="w-5 h-5" />
                    </a>
                </div>

            </div>
        </footer>
    );
}
