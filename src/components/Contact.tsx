import {
    EnvelopeIcon,
    MapPinIcon,
    PaperPlaneTiltIcon,
    PhoneIcon,
} from "@phosphor-icons/react/dist/ssr";
import { motion } from "framer-motion";
import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // handle form submission here
        console.log("Submitting form", formData);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const contactInfo = [
        {
            icon: EnvelopeIcon,
            title: "Email",
            value: "mennia17@gmail.com",
            href: "mailto:mennia17@gmail.com",
        },
        {
            icon: PhoneIcon,
            title: "Phone",
            value: "+233 20 744 7010",
            href: "tel:+233207447010",
        },
        {
            icon: MapPinIcon,
            title: "Location",
            value: "Accra, Ghana",
            href: "#",
        },
    ];
    return (
        <section id="contact" className="py-20 bg-[#616161]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-6">
                        Get in touch
                    </h2>
                    <p className="text-xl text-[#E0E0E0] max-w-2xl mx-auto">
                        Have a project in mind or want to collaborate? I'd love
                        to hear from you
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-[#FFFFFF] mb-6">
                                Let's Connect
                            </h3>
                            <p className="text-[#E0E0E0] mb-8">
                                I am always open to new opportunities
                                collaborations. Whether you have a project in
                                mind or just want to chat about technology, free
                                free to reach me
                            </p>
                        </div>

                        <div className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <motion.a
                                    key={index}
                                    href={info.href}
                                    whileHover={{ x: 7, scale: 1.01 }}
                                    className="flex items-center space-x-4 p-4 bg-[#424242]/70 backdrop-blur-sm rounded-xl border border-[#757575] hover:border-[#42A5F5] transition-all duration-200 group"
                                >
                                    <div className="text-[#42A5F5] group-hover:text-[#64B5F6] transition-colors">
                                        <info.icon size={24} />
                                    </div>
                                    <div>
                                        <p className="text-[#BDBDBD] text-sm">
                                            {info.title}
                                        </p>
                                        <p className="text-[#FFFFFF] font-medium">
                                            {info.value}
                                        </p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* name */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-[#E0E0E0] text-sm font-medium mb-2"
                                >
                                    Your Name
                                </label>
                                <motion.input
                                    whileFocus={{ scale: 1.01 }}
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-[#424242]/70 backdrop-blur-sm rounded-xl border border-[#757575] text-[#FFFFFF] placeholder:text-[#BDBDBD]"
                                    placeholder="Your Name"
                                ></motion.input>
                            </div>

                            {/* email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-[#E0E0E0] text-sm font-medium mb-2"
                                >
                                    Email Address
                                </label>
                                <motion.input
                                    whileFocus={{ scale: 1.01 }}
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-[#424242]/70 backdrop-blur-sm rounded-xl border border-[#757575] text-[#FFFFFF] placeholder:text-[#BDBDBD]"
                                    placeholder="youremail@email.com"
                                ></motion.input>
                            </div>

                            {/* message */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-[#E0E0E0] text-sm font-medium mb-2"
                                >
                                    Message
                                </label>
                                <motion.textarea
                                    whileFocus={{ scale: 1.01 }}
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 bg-[#424242]/70 backdrop-blur-sm rounded-xl border border-[#757575] text-[#FFFFFF] placeholder:text-[#BDBDBD] resize-none"
                                    placeholder="Tell me about your project..."
                                ></motion.textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className="w-full bg-gradient-to-r from-[#1E88E5]/30 via-[#1E88E5]/50 to-[#1E88E5]/70 hover:from-[#1E88E5]/50 hover:via-[#1E88E5]/70 hover:to-[#1E88E5]/90 text-[#FFFFFF] font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer"
                            >
                                <span>Submit</span>
                                <PaperPlaneTiltIcon size={18} />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
