import AboutMe from "@/components/Sections/about-me";
import FeaturedProjects from "@/components/Sections/projects";
import Skills from "@/components/Sections/skills";
import Contact from "@/components/Sections/contact";
import Experiences from "@/components/Sections/expirences";
import Hero from "@/components/Sections/hero";

export default function Home() {
    return (
        <div className="">
            <Hero/>
            <AboutMe/>
            <FeaturedProjects/>
            <Skills/>
            <Experiences/>
            {/*<Education/>*/}
            <Contact/>
        </div>
    );
}
