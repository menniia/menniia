import { CodeIcon, TerminalIcon } from "@phosphor-icons/react";
import {
    BoatIcon,
    CloudIcon,
    DatabaseIcon,
    DeviceMobileIcon,
    GitBranchIcon,
    HardDrivesIcon,
    LaptopIcon,
    LightningIcon,
    PaletteIcon,
    ShieldCheckIcon,
    WebhooksLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import { motion } from "framer-motion";

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend Development",
            icon: LaptopIcon,
            skills: [
                { name: "React", icon: CodeIcon },
                { name: "Angular", icon: CodeIcon },
                { name: "TypeScript", icon: CodeIcon },
                { name: "Tailwind CSS", icon: PaletteIcon },
                { name: "Framer Motion", icon: LightningIcon },
                { name: "React Native", icon: DeviceMobileIcon },
            ],
        },
        {
            title: "Backend Development",
            icon: DatabaseIcon,
            skills: [
                { name: "Node JS", icon: HardDrivesIcon },
                { name: "Python", icon: TerminalIcon },
                { name: "PostGreSql", icon: DatabaseIcon },
                { name: "MongoDB", icon: DatabaseIcon },
                { name: "Rest APIs", icon: WebhooksLogoIcon },
            ],
        },
        {
            title: "Tools & DevOps",
            icon: CloudIcon,
            skills: [
                { name: "Git", icon: GitBranchIcon },
                { name: "Docker", icon: BoatIcon },
                { name: "AWS", icon: CloudIcon },
                { name: "Vercel", icon: CloudIcon },
                { name: "Testing", icon: ShieldCheckIcon },
            ],
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
    };
    return (
        <section id="skills" className="py-20 bg-[#616161]">
            <div className="container mx-auto px-6 font-jakarta">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-6">
                        Skills and Technologies
                    </h2>
                    <p className="text-xl text-[#E0E0E0] max-w-2xl mx-auto">
                        Here are the tools and technologies I work with to bring
                        ideas to life
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: categoryIndex * 0.2,
                            }}
                            viewport={{ once: true }}
                            className="bg-[#212121]/50 backdrop-blur-sm p-8 rounded-2xl border border-[#757575] hover:border-[#2196F3]/70 transition-all duration-200"
                        >
                            <div className="flex items-center mb-6">
                                <div className="bg-[#1E88E5]/20 p-2 rounded-lg border border-[#1E88E5]/30 mr-4">
                                    <category.icon
                                        size={28}
                                        className="text-[#42A5F5]"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-[#FFFFFF]">
                                    {category.title}
                                </h3>
                            </div>

                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="grid grid-cols-2 gap-4"
                            >
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        variants={itemVariants}
                                        whileHover={{
                                            scale: 1.03,
                                            backgroundColor:
                                                "rgba(59, 130, 245, 0.1)",
                                        }}
                                        className="flex items-center p-3 rounded-lg bg-[#424242]/50 border border-[#757575]/30 hover:border-[#2196F3]/50 transition-all duration-200 cursor-default group"
                                    >
                                        <skill.icon
                                            size={18}
                                            className="text-[#BDBDBD] group-hover:text-[#42A5F5] transition-colors mr-3"
                                        />
                                        <span className="text-[#E0E0E0] group-hover:text-[#FFFFFF] transition-colors text-sm font-medium">
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* additional skills */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <h3 className="text-2xl font-bold text-[#FFFFFF] mb-8">
                        Additional Technologies
                    </h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            "Javascript",
                            "HTML",
                            "CSS",
                            "Redux",
                            "Express JS",
                            "Redis",
                            "Vite",
                            "Jest",
                        ].map((tech, index) => (
                            <motion.span
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.05,
                                }}
                                whileHover={{ scale: 1.1, y: -2 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-r from-[#1565C0]/30 to-[#9C27B0]/30 text-[#BBDEFB] px-4 py-2 rounded-full text-sm font-medium border border-[#1E88E5]/30 hover:border-[#2196F3]/80 transition-all duration-200 cursor-default"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
