"use client";
import Image from "next/image";
import {motion} from "framer-motion";

export default function Hero() {
    return (
        <div
            className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-screen flex items-center justify-center px-8 md:px-16 lg:px-24">
            {/* Background Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

            {/* Content Wrapper */}
            <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-between">

                {/* Left Side: Image Section */}
                <motion.div
                    initial={{opacity: 0, x: -50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 1}}
                    className="flex-1 flex justify-center border-b-2 border-blanchedalmond items-end"
                >
                    <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg">
                        {/* Full Image */}
                        <Image
                            src="/images/img.png"
                            alt="Praneeth"
                            width={400}
                            height={500}
                            priority
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </motion.div>

                {/* Right Side: Text Section */}
                <motion.div
                    initial={{opacity: 0, x: 50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 1.2, delay: 0.2}}
                    className="flex-1 text-center md:text-left md:ml-12 mt-5 md:mt-0 max-w-lg"
                >
                    <h1 className="text-5xl md:text-6xl font-bold text-white">
                        Hi, I'm Praneeth!
                    </h1>
                    <p className="text-xl text-gray-200 mt-6 leading-relaxed">
                        A passionate Front-End Developer specializing in React.js, Next.js, and modern web development.
                    </p>

                    {/* Primary Button - Main CTA */}
                    <motion.a
                        href="#about-me"
                        initial={{opacity: 0, scale: 0.9}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{duration: 1.2, delay: 0.4}}
                        className="mt-6 inline-block px-8 py-4 border border-white text-white rounded-lg shadow-lg hover:bg-white hover:text-gray-900 transition duration-300"
                    >
                        Know More About Me
                    </motion.a>


                    {/*<a href="#projects" className="flex mt-25 absolute bottom-10 items-center space-x-2">*/}
                    {/*    <span className="text-xl text-white font-medium">See My Works</span>*/}
                    {/*    <div className={"rounded-full border-white border p-4"}>*/}
                    {/*        <HiArrowNarrowRight className="text-2xl text-white"/>*/}
                    {/*    </div>*/}
                    {/*</a>*/}
                </motion.div>
            </div>


        </div>
    );
}
