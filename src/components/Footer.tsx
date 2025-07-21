import {
    GithubLogoIcon,
    LinkedinLogoIcon,
    EnvelopeIcon,
} from "@phosphor-icons/react/dist/ssr";
import { motion } from "framer-motion";
const Footer = () => {
    const socialLinks = [
        {
            icon: GithubLogoIcon,
            href: "https://github.com/menniia",
            label: "GitHub",
        },
        {
            icon: LinkedinLogoIcon,
            href: "https://www.linkedin.com/in/donatus-mennia-quansah",
            label: "LinkedIn",
        },
        {
            icon: EnvelopeIcon,
            href: "mailto:mennia17@gmail.com",
            label: "Email",
        },
    ];

    return (
        <footer className="bg-[#424242] border-t border-[#616161] font-jakarta">
            <div className="container mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-6 md:mb-0"
                    >
                        <h3 className="text-2xl font-bold text-[#FFFFFF]">
                            <button
                                onClick={() => {
                                    const heroSection =
                                        document.querySelector("#hero");
                                    if (heroSection) {
                                        heroSection.scrollIntoView({
                                            behavior: "smooth",
                                            block: "start",
                                        });
                                    }
                                }}
                                className="hover:text-[#42A5F5] transition-colors duration-200 cursor-pointer"
                            >
                                &lt;Menniia/&gt;
                            </button>
                        </h3>
                        <p className="text-[#BDBDBD]">
                            Building software solutions, one line of code at a
                            time
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="flex space-x-6"
                    >
                        {socialLinks.map((link, index) => {
                            const isMailto = link.href.startsWith("mailto:");
                            return (
                                <motion.a
                                    key={index}
                                    href={link.href}
                                    whileHover={{ y: -3, scale: 1.1 }}
                                    className="text-[#BDBDBD] hover:text-[#42A5F5] transition-colors duration-200"
                                    {...(!isMailto && {
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                    })}
                                    aria-label={link.label}
                                >
                                    <link.icon size={27} />
                                </motion.a>
                            );
                        })}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="border-t border-[#616161] mt-8 pt-8 text-center"
                >
                    <p className="text-[#BDBDBD] flex items-center justify-center space-x-2">
                        <span>Made by Menniia</span>
                        <span>•</span>
                        <span>&copy; {new Date().getFullYear()}</span>
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
