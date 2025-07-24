import {
    ArrowRightIcon,
    ArrowSquareOutIcon,
    GithubLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import { motion } from "framer-motion";

const Projects = () => {
    const projects = [
        {
            title: "Company Website",
            description:
                "A modern, responsive corporate website built from scratch with clean design principles. Features include dynamic content sections, smooth animations, and optimized performance",
            image: "images/websiteImage.jpeg",
            technologies: ["React", "Javascript", "Tailwind CSS"],
            gitHub: "",
            live: "https://mojo-pay.com/",
        },
        {
            title: "Employee Leave Management System",
            description:
                "A comprehensive employee leave management system with user authentication, leave tracking, approval workflows, and administrative dashboard for HR management.",
            image: "images/leaveImage.webp",
            technologies: ["React", "Javascript", "Tailwind CSS"],
            gitHub: "https://github.com/menniia/employee-management-system",
            live: "https://orbithr.netlify.app/",
        },
        {
            title: "New Aggregator API",
            description:
                "A backend service that aggregates news from multiple sources, processes data, and provides clean API endpoints with filtering and search capabilities.",
            image: "images/newsImage.webp",
            technologies: ["Node.js", "Express.js", "Axios"],
            gitHub: "https://github.com/menniia/news-api",
            live: "",
        },
    ];
    return (
        <section id="projects" className="py-20 bg-[#424242]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-6">
                        Featured Projects
                    </h2>
                    <p className="text-xl text-[#E0E0E0] max-w-2xl mx-auto">
                        Here are some of my recent projects that showcase my
                        skills and experience
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                            }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="bg-[#616161] rounded-2xl overflow-hidden border border-[#757575] hover:border-[#2196F3]/70 transition-all duration-200 group"
                        >
                            <div className="relative overflow-hidden">
                                <motion.img
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#212121]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <motion.a
                                        whileHover={{ scale: 1.1 }}
                                        href={project.gitHub}
                                        target="_blank"
                                        className="bg-[#212121]/80 backdrop-blur-sm p-2 rounded-full text-[#FFFFFF] hover:text-[#42A5F5] transition-colors"
                                    >
                                        <GithubLogoIcon size={18} />
                                    </motion.a>
                                    <motion.a
                                        whileHover={{ scale: 1.1 }}
                                        href={project.live}
                                        target="_blank"
                                        className="bg-[#212121]/80 backdrop-blur-sm p-2 rounded-full text-[#FFFFFF] hover:text-[#42A5F5] transition-colors"
                                    >
                                        <ArrowSquareOutIcon size={18} />
                                    </motion.a>
                                </div>
                            </div>

                            <div className="p-6 cursor-default">
                                <h3 className="text-xl font-bold text-[#FFFFFF] mb-3 group-hover:text-[#42A5F5] transition-colors duration-200">
                                    {project.title}
                                </h3>
                                <p className="text-[#E0E0E0] mb-4 leading-relaxed text-sm">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map(
                                        (tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="bg-[#1E88E5]/20 text-[#42A5F5] text-xs px-3 py-1 font-medium rounded-full border border-[#1E88E5]/30"
                                            >
                                                {tech}
                                            </span>
                                        )
                                    )}
                                </div>

                                <motion.a
                                    whileHover={{ x: 5 }}
                                    href={project.live}
                                    target="_blank"
                                    className="flex items-center text-[#42A5F5] font-medium cursor-pointer group"
                                >
                                    View Project
                                    <ArrowRightIcon
                                        size={16}
                                        className="ml-2 group-hover:translate-x-1 transition-transform"
                                    />
                                </motion.a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
