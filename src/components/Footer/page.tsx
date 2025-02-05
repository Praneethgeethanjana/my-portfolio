export default function Footer() {
    const currentYear = new Date().getFullYear();
    const socialLinks = [
        { href: "https://github.com/yourgithub", label: "GitHub" },
        { href: "https://linkedin.com/in/yourlinkedin", label: "LinkedIn" },
        { href: "mailto:youremail@example.com", label: "Email" },
    ];

    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto flex flex-col items-center space-y-4">
                {/* Social Links */}
                <nav>
                    <ul className="flex space-x-6">
                        {socialLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-blue-400 transition"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                {/* Copyright */}
                <p className="text-sm text-gray-400">
                    © {currentYear} Praneeth. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
