"use client";

import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-gray-900 text-white fixed w-full z-10">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-lg font-bold">
                    <a href="#about">Praneeth's Portfolio</a>
                </h1>
                <nav>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden block focus:outline-none"
                    >
                        ☰
                    </button>
                    <ul
                        className={`md:flex md:items-center space-y-2 md:space-y-0 md:space-x-6 ${
                            isOpen ? "block" : "hidden"
                        }`}
                    >
                        <li>
                            <a href="#about" className="hover:text-gray-400">
                                About Me
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="hover:text-gray-400">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#skills" className="hover:text-gray-400">
                                Skills
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-gray-400">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
