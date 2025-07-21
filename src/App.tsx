import { motion } from "framer-motion";
import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
    useEffect(() => {
        const handleSmoothScroll = (e: Event) => {
            const target = e.target as HTMLAnchorElement;
            if (target.hash) {
                e.preventDefault();
                const element = document.querySelector(target.hash);
                if (element) {
                    element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }
            }
        };
        document.addEventListener("click", handleSmoothScroll);
        return () => document.removeEventListener("click", handleSmoothScroll);
    }, []);
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-[#424242]"
        >
            <Header />
            <main>
                <Hero />
            </main>
            <Footer />
        </motion.div>
    );
}

export default App;
