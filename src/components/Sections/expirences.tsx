import SectionWrapper from "@/components/SectionWrapper";

// Job component to display each job's information
type JobProps = {
    title: string;
    company: string;
    duration: string;
    responsibilities: string[];
};

const Job = ({title, company, duration, responsibilities}: JobProps) => {
    return (
        <div
            className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-blue-700 rounded-lg shadow-md hover:shadow-xl transition-all p-6">
            <div className="flex items-center space-x-2 mb-4">
                {/*<FaCircle className="text-blue-500 text-sm"/>*/}
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {title} <br/> <span className="text-blue-500 text-xl">{company}</span>
                </h3>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400">{duration}</p>
            <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-600 dark:text-gray-300">
                {responsibilities.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    );
};

export default function Experiences() {
    const jobs = [
        {
            title: "Software Engineer",
            company: "Ceyentra Technologies (Pvt) Ltd",
            duration: "October 2024 - Present",
            responsibilities: [
                "Developed scalable full-stack applications using React, Node.js, and PostgreSQL",
                "Collaborated with cross-functional teams to implement new features and resolve bugs",
                "Optimized app performance and reduced loading time by refactoring components and state management",
                "Led code reviews and mentored junior developers"
            ]
        },
        {
            title: "Associate Software Engineer",
            company: "Ceyentra Technologies (Pvt) Ltd",
            duration: "July 2022 - August 2024",
            responsibilities: [
                "Assisted in building user interfaces using React and TypeScript",
                "Improved UI responsiveness and mobile optimization",
                "Worked closely with UX/UI designers to implement new designs"
            ]
        },
        {
            title: "Trainee Associate Software Engineer",
            company: "Ceyentra Technologies (Pvt) Ltd",
            duration: "January 2022 - July 2022",
            responsibilities: [
                "Assisted in building user interfaces using React and TypeScript",
                "Improved UI responsiveness and mobile optimization",
                "Worked closely with UX/UI designers to implement new designs"
            ]
        }
        // Add more job experiences here as needed
    ];

    return (
        <SectionWrapper id="experience" title="Experience">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {jobs.map((job, index) => (
                    <Job
                        key={index}
                        title={job.title}
                        company={job.company}
                        duration={job.duration}
                        responsibilities={job.responsibilities}
                    />
                ))}
            </div>
        </SectionWrapper>
    );
}
