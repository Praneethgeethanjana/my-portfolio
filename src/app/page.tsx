import AboutMe from "@/components/Sections/about-me";
import FeaturedProjects from "@/components/Sections/projects";
import Skills from "@/components/Sections/skills";
import Contact from "@/components/Sections/contact";
import Experiences from "@/components/Sections/expirences";
import Hero from "@/components/Sections/hero";
import PersonalProjects from "@/components/Sections/personal-projects";
import Awards from "@/components/Sections/awards";


export default function Home() {
    return (
        <div className="">
            <Hero />
            <AboutMe />
            <PersonalProjects />
            <Awards />
            <FeaturedProjects />

            <Skills />
            <Experiences />
            <Contact />
        </div>
    );
}
