import {
    CodeIcon,
    LightbulbIcon,
    UsersIcon,
    LightningIcon,
} from "@phosphor-icons/react/dist/ssr";
import { motion } from "framer-motion";
const About = () => {
    const highlights = [
        {
            icon: CodeIcon,
            title: "Clean Code",
            description: "Writing maintainable, scalable and efficient code",
        },
        {
            icon: LightbulbIcon,
            title: "Problem Solving",
            description:
                "Analyzing complex problems and creating innovative solutions",
        },
        {
            icon: UsersIcon,
            title: "Team Player",
            description: "Collaborate seamlessly with cross-functional teams",
        },
        {
            icon: LightningIcon,
            title: "Fast Learner",
            description: "Quickly adapting to new technologies and frameworks",
        },
    ];
    return (
        <section id="about" className="py-20 bg-[#424242]">
            <div className="container mx-auto px-6 font-jakarta">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-6">
                        About Me
                    </h2>
                    <p className="text-xl text-[#E0E0E0] max-w-3xl mx-auto">
                        I am Software Developer with{" "}
                        <span className="text-3xl text-[#42A5F5]">3+</span>{" "}
                        years of building web applications, and solving complex
                        technical challenges.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-gradient-to-br from-[#616161] via-[#757575]/30 to-[#424242] p-0.5 rounded-2xl">
                            <div className="bg-[#212121]/85 p-8 rounded-2xl">
                                <h3 className="text-2xl font-bold text-[#EEEEEE] mb-4">
                                    My Journey
                                </h3>
                                <p className="text-[#E0E0E0] mb-4">
                                    Started my journey in Mathematics and
                                    Statistics, learning about basic HTML and
                                    CSS, developing a passion for creating
                                    digital solutions to build on friend's
                                    ideas, fast-forward, I have worked with
                                    startups, and contributed to products used
                                    by thousands of users.
                                </p>
                                <p className="text-[#E0E0E0]">
                                    When I am not writing code, you'll find me
                                    exploring new technologies, or playing
                                    sports of some sort.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-6"
                    >
                        {highlights.map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.03, rotateY: 5 }}
                                className="bg-[#424242]/50 backdrop-blur-md p-6 rounded-xl border border-[#616161] hover:border-[#2196F3] transition-all duration-200"
                            >
                                <div className="text-[#42A5F5] mb-3">
                                    <item.icon size={32} />
                                </div>
                                <h4 className="text-[#EEEEEE] font-semibold mb-2">
                                    {item.title}
                                </h4>
                                <p className="text-[#BDBDBD] text-sm">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
