import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = ["About", "Skills", "Projects", "Contact"];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed w-full top-0 z-50 transition-all duration-300 font-jakarta ${
                scrolled
                    ? "bg-gray-800/50 backdrop-blur-md shadow-lg"
                    : "bg-transparent"
            }`}
        >
            <nav className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="text-2xl font-bold text-[#FFFFFF]"
                    >
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
                    </motion.div>

                    {/* desktop menu */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <motion.a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                whileHover={{ y: -2 }}
                                className="text-[#E0E0E0] hover:text-[#42A5F5]"
                            >
                                {item}
                            </motion.a>
                        ))}
                    </div>

                    {/* mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-[#FFFFFF] p-2"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* mobile menu */}
                <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0 }}
                    className="md:hidden overflow-hidden"
                >
                    <div className="pt-4 pb-2 space-y-4">
                        {navItems.map((item) => (
                            <motion.a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                whileHover={{ x: 10 }}
                                onClick={() => setIsOpen(false)}
                                className="block text-[#E0E0E0] hover:text-[#42A5F5] transition-colors duration-200"
                            >
                                {item}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </nav>
        </motion.header>
    );
};

export default Header;
