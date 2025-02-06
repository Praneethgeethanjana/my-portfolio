"use client";

import Link from "next/link";
import {useEffect, useState} from "react";

export default function Header() {
    // const [theme, setTheme] = useState<string>(
    //     typeof window !== "undefined" && localStorage.theme
    //         ? localStorage.theme
    //         : "light"
    // );
    const [theme, setTheme] = useState<string>(
        "dark"
    );

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme: string) => (prevTheme === "dark" ? "light" : "dark"));
    };

    const navLinks = [
        {href: "#about-me", label: "About Me"},
        {href: "#projects", label: "Projects"},
        {href: "#skills", label: "Skills"},
        {href: "#experience", label: "Experience"},
        {href: "#contact", label: "Contact"},
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md shadow-lg dark:bg-gray-900/50">
            <div className="container mx-auto flex justify-center items-center p-4">
                {/* Navigation */}
                <nav>
                    <ul className="flex space-x-8 text-lg">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    scroll={true}
                                    className="text-white dark:text-gray-200 font-medium hover:text-blue-400 transition duration-300"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Theme Toggle Button */}
                {/*<button*/}
                {/*    onClick={toggleTheme}*/}
                {/*    className="p-2 rounded-full absolute right-10 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition duration-300"*/}
                {/*    aria-label="Toggle Theme"*/}
                {/*>*/}
                {/*    {theme === "dark" ? "🌞" : "🌙"}*/}
                {/*</button>*/}
            </div>
        </header>
    );
}
