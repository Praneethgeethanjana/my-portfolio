import {ReactNode} from "react";

interface SectionWrapperProps {
    id: string; // To enable smooth scrolling or navigation
    title: string; // Section title
    children: ReactNode; // Content inside the section
}

export default function SectionWrapper({id, title, children}: SectionWrapperProps) {

    
    return (
        <section id={id} className="py-16 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 lg:px-20">
                {/* Section Title */}
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
                    {title}
                </h2>

                {/* Section Content */}
                <div className="space-y-6">{children}</div>
            </div>
        </section>
    );
}
