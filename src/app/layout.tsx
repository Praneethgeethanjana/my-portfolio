import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer/page";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Praneeth Geethanjana | Frontend Software Engineer",
    description: "Portfolio of Praneeth Geethanjana, a results-driven Frontend Software Engineer with 4+ years of experience building modern web and mobile applications.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-primary/30 selection:text-primary transition-colors duration-300`}>
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
                    <Navbar />
                    <main className="min-h-screen">
                        {children}
                    </main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html >
    );
}
