import { motion, easeOut } from "framer-motion";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import {
    GithubLogoIcon,
    LinkedinLogoIcon,
    EnvelopeIcon,
} from "@phosphor-icons/react/dist/ssr";
import { CaretDownIcon } from "@phosphor-icons/react";
const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: easeOut,
            },
        },
    };
    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-[#212121] via-[#0D47A1] to-[#4A148C]"
        >
            <div className="absolute inset-0 bg-black/20" />
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="container mx-auto px-6 pt-16 relative z-10 text-center font-jakarta"
            >
                <motion.div variants={itemVariants}>
                    <h1 className="text-[38px] md:text-7xl font-bold text-[#FFFFFF] mb-6 leading-10">
                        Hi, I am{" "}
                        <TypingAnimation
                            as="span"
                            delay={300}
                            className="text-[38px] md:text-7xl font-bold bg-[#cecccc] bg-clip-text text-transparent"
                        >
                            Donatus Mennia-Quansah
                        </TypingAnimation>
                    </h1>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <p className="text-lg md:text-xl text-[#E0E0E0] mb-8 max-w-3xl mx-auto">
                        A dedicated{" "}
                        <span className="text-[#42A5F5]">
                            Software Developer
                        </span>{" "}
                        passionate about crafting reliable software solutions,
                        turning ideas into robust digital platforms, while
                        delivering impactful and seamless user experiences.
                    </p>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                >
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                            const section = document.querySelector("#projects");
                            section?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="bg-[#1E88E5] hover:bg-[#1976D2] text-[#FFFFFF] px-8 py-3 rounded-full font-semibold transition-all duration-200 cursor-pointer"
                    >
                        View My Work
                    </motion.button>

                    <motion.button
                        whileHover={{
                            scale: 1.03,
                        }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>
                            window.open(
                                "Donatus_Mennia-Quansah-CV.pdf",
                                "_blank"
                            )
                        }
                        className="border-2 border-[#42A5F5] text-[#42A5F5] hover:bg-[#42A5F5] hover:text-[#FFFFFF] px-8 py-2.5 rounded-full font-semibold transition-all duration-200 cursor-pointer"
                    >
                        Download CV
                    </motion.button>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="flex justify-center space-x-6 mb-12"
                >
                    {[
                        {
                            Icon: GithubLogoIcon,
                            href: "https://github.com/menniia",
                        },
                        {
                            Icon: LinkedinLogoIcon,
                            href: "https://www.linkedin.com/in/donatus-mennia-quansah",
                        },
                        {
                            Icon: EnvelopeIcon,
                            href: "mailto:mennia17@gmail.com",
                        },
                    ].map(({ Icon, href }, index) => {
                        const isExternal = !href.startsWith("mailto:");
                        return (
                            <motion.a
                                key={index}
                                href={href}
                                target={isExternal ? "_blank" : undefined}
                                rel={
                                    isExternal
                                        ? "noopener noreferrer"
                                        : undefined
                                }
                                whileHover={{ y: -5, scale: 1.1 }}
                                className="text-[#BDBDBD] hover:text-[#42A5F5] transition-colors duration-200"
                            >
                                <Icon size={28} />
                            </motion.a>
                        );
                    })}
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="text-white/60 cursor-pointer"
                    >
                        <CaretDownIcon size={32} />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
