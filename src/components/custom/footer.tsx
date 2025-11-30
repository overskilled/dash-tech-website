"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    MapPin,
    Phone,
    Mail,
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    Youtube,
    ArrowUp,
    Heart
} from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    const footerSections = [
        {
            title: "Services",
            links: [
                { name: "Custom Software & ERP", href: "/services/software" },
                { name: "AI & Computer Vision", href: "/services/ai" },
                { name: "IoT & Automation", href: "/services/iot" },
                { name: "Digital Transformation", href: "/services/digital" },
                { name: "Cybersecurity", href: "/services/cybersecurity" },
                { name: "IT Consulting", href: "/services/consulting" }
            ]
        },
        {
            title: "Company",
            links: [
                { name: "About Us", href: "/about" },
                { name: "Our Team", href: "/team" },
                { name: "Careers", href: "/careers" },
                { name: "Case Studies", href: "/case-studies" },
                { name: "Blog", href: "/blog" },
                { name: "Contact", href: "/contact" }
            ]
        },
        {
            title: "Solutions",
            links: [
                { name: "VIIZE AI", href: "/solutions/vize" },
                { name: "AlloTech", href: "/solutions/allotech" },
                { name: "EVote", href: "/solutions/evote" },
                { name: "WDMS Pro", href: "/solutions/wdms" },
                { name: "FuelGuard AI", href: "/solutions/fuelguard" },
                { name: "Smart IoT", href: "/solutions/iot" }
            ]
        }
    ];

    const socialLinks = [
        { icon: Facebook, href: "https://facebook.com/dashtech", label: "Facebook" },
        { icon: Twitter, href: "https://twitter.com/dashtech", label: "Twitter" },
        { icon: Linkedin, href: "https://linkedin.com/company/dashtech", label: "LinkedIn" },
        { icon: Instagram, href: "https://instagram.com/dashtech", label: "Instagram" },
        { icon: Youtube, href: "https://youtube.com/dashtech", label: "YouTube" }
    ];

    return (
        <footer className="bg-card border-t border-border">
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                        {/* Company Info */}
                        <div className="space-y-6">

                            <div className="w-40 h-40 bg-white rounded-xl flex items-center justify-center p-2">
                                <img
                                    src="/logo-dash-tech.webp"
                                    alt="Dash Tech Africa Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-2xl font-bold text-foreground mb-4">
                                    Dash Tech
                                </h3>
                                <p className="text-gray-300 leading-relaxed max-w-md">
                                    Empowering Africa's digital future through innovative technology
                                    solutions. We transform businesses with cutting-edge software,
                                    AI, and IoT systems tailored for African markets.
                                </p>
                            </motion.div>

                            {/* Contact Info */}
                            <motion.div
                                className="space-y-3"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center gap-3 text-gray-300">
                                    <MapPin className="w-4 h-4 text-primary" />
                                    <span>Douala, Cameroon | Remote Across Africa</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-300">
                                    <Phone className="w-4 h-4 text-primary" />
                                    <a href="tel:+237670000000" className="hover:text-primary transition-colors">
                                        +237 6 75 89 63 89
                                    </a>
                                </div>
                                <div className="flex items-center gap-3 text-gray-300">
                                    <Mail className="w-4 h-4 text-primary" />
                                    <a href="mailto:info@dashtechafrica.com" className="hover:text-primary transition-colors">
                                        info@dashtechafrica.com
                                    </a>
                                </div>
                            </motion.div>

                            {/* Social Links */}
                            <motion.div
                                className="flex gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                {socialLinks.map((social, index) => {
                                    const IconComponent = social.icon;
                                    return (
                                        <motion.a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 bg-background rounded-lg flex items-center justify-center text-gray-400 hover:text-primary hover:bg-primary/10 transition-all duration-300 border border-border"
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.4, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                        >
                                            <IconComponent className="w-4 h-4" />
                                        </motion.a>
                                    );
                                })}
                            </motion.div>
                        </div>

                        {/* Links Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {footerSections.map((section, sectionIndex) => (
                                <motion.div
                                    key={section.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <h4 className="text-lg font-semibold text-foreground mb-4">
                                        {section.title}
                                    </h4>
                                    <ul className="space-y-3">
                                        {section.links.map((link, linkIndex) => (
                                            <motion.li
                                                key={link.name}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.4, delay: (sectionIndex * 0.1) + (linkIndex * 0.05) }}
                                                viewport={{ once: true }}
                                            >
                                                <Link
                                                    href={link.href}
                                                    className="text-gray-300 hover:text-primary transition-colors duration-300 text-sm"
                                                >
                                                    {link.name}
                                                </Link>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Newsletter Subscription */}
                    <motion.div
                        className="bg-background rounded-2xl p-8 border border-border"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <h4 className="text-xl font-bold text-foreground mb-2">
                                    Stay Updated
                                </h4>
                                <p className="text-gray-300">
                                    Get the latest insights on digital transformation in Africa and updates on our innovative solutions.
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                                />
                                <motion.button
                                    className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300 whitespace-nowrap"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Subscribe
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-border">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                        {/* Copyright */}
                        <motion.div
                            className="flex items-center gap-2 text-gray-400 text-sm"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <span>© {currentYear} Dash Tech. All rights reserved.</span>
                            <span className="flex items-center gap-1">
                                Made with <Heart className="w-3 h-3 text-red-500" /> in Africa
                            </span>
                        </motion.div>

                        {/* Legal Links */}
                        <motion.div
                            className="flex items-center gap-6 text-sm"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Link href="/privacy" className="text-gray-400 hover:text-primary transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-gray-400 hover:text-primary transition-colors">
                                Terms of Service
                            </Link>
                            <Link href="/cookies" className="text-gray-400 hover:text-primary transition-colors">
                                Cookie Policy
                            </Link>
                        </motion.div>

                        {/* Scroll to Top */}
                        <motion.button
                            onClick={scrollToTop}
                            className="w-10 h-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center hover:bg-primary/90 transition-colors duration-300"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <ArrowUp className="w-4 h-4" />
                        </motion.button>
                    </div>
                </div>
            </div>
        </footer>
    );
}