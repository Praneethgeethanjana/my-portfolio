"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

import { HTMLMotionProps } from "framer-motion";

interface SectionProps extends Omit<HTMLMotionProps<"section">, "ref"> {
    children: React.ReactNode;
    id?: string;
    className?: string;
    delay?: number;
}

export function Section({ children, id, className, delay = 0, ...props }: SectionProps) {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            className={cn("py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-12", className)}
            {...props}
        >
            {children}
        </motion.section>
    );
}
