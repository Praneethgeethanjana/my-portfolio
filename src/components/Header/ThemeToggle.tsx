"use client";

import {useEffect, useState} from "react";

export default function ThemeToggle() {
    const [theme, setTheme] = useState<string>(
        typeof window !== "undefined" && localStorage.theme
            ? localStorage.theme
            : "light"
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

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
        >
            {theme === "dark" ? "🌞" : "🌙"}
        </button>
    );
}
