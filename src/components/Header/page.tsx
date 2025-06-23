"use client";

import Link from "next/link";
import {useEffect, useState} from "react";
import {FiMenu, FiX} from "react-icons/fi";

export default function Header() {
    const [theme, setTheme] = useState<string>("dark");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    // const toggleTheme = () => {
    //     setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    // };

    const navLinks = [
        {href: "#about-me", label: "About Me"},
        {href: "#projects", label: "Projects"},
        {href: "#skills", label: "Skills"},
        {href: "#experience", label: "Experience"},
        {href: "#contact", label: "Contact"},
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md shadow-md dark:bg-gray-900/60">
            <div
                className="container mx-auto flex justify-end  md:justify-center items-center px-6 py-4">
                {/*<h1 className="text-white text-xl font-bold">Praneeth</h1>*/}

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            scroll
                            className="text-white dark:text-gray-200 hover:text-blue-400 transition duration-300"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Theme Toggle (Optional) */}
                {/*
        <button
          onClick={toggleTheme}
          className="hidden md:block ml-6 text-white dark:text-gray-200"
        >
          {theme === "dark" ? "🌞" : "🌙"}
        </button>
        */}

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden text-white"
                    aria-label="Toggle Menu"
                >
                    {isMobileMenuOpen ? <FiX size={28}/> : <FiMenu size={28}/>}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden px-6 pb-4 bg-black/90 text-white">
                    <ul className="flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    scroll
                                    className="block hover:text-blue-400 transition duration-300"
                                    onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
}
