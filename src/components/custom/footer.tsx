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
import { useI18n } from "@/locales/client";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();
    const t = useI18n();

    const footerSections = [
        {
            title: t("footer.sections.services.title"),
            links: [
                { name: t("footer.sections.services.links.0"), href: "/services/software" },
                { name: t("footer.sections.services.links.1"), href: "/services/ai" },
                { name: t("footer.sections.services.links.2"), href: "/services/iot" },
                { name: t("footer.sections.services.links.3"), href: "/services/digital" },
                { name: t("footer.sections.services.links.4"), href: "/services/cybersecurity" },
                { name: t("footer.sections.services.links.5"), href: "/services/consulting" }
            ]
        },
        {
            title: t("footer.sections.company.title"),
            links: [
                { name: t("footer.sections.company.links.0"), href: "/about" },
                { name: t("footer.sections.company.links.1"), href: "/team" },
                { name: t("footer.sections.company.links.2"), href: "/careers" },
                { name: t("footer.sections.company.links.3"), href: "/case-studies" },
                { name: t("footer.sections.company.links.4"), href: "/blog" },
                { name: t("footer.sections.company.links.5"), href: "/contact" }
            ]
        },
        {
            title: t("footer.sections.solutions.title"),
            links: [
                { name: t("footer.sections.solutions.links.0"), href: "/solutions/vize" },
                { name: t("footer.sections.solutions.links.1"), href: "/solutions/allotech" },
                { name: t("footer.sections.solutions.links.2"), href: "/solutions/evote" },
                { name: t("footer.sections.solutions.links.3"), href: "/solutions/wdms" },
                { name: t("footer.sections.solutions.links.4"), href: "/solutions/fuelguard" },
                { name: t("footer.sections.solutions.links.5"), href: "/solutions/iot" }
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
                                    {t("footer.company.name")}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed max-w-md">
                                    {t("footer.company.description")}
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
                                <div className="flex items-center gap-3 text-muted-foreground">
                                    <MapPin className="w-4 h-4 text-primary" />
                                    <span>{t("footer.contact.address")}</span>
                                </div>
                                <div className="flex items-center gap-3 text-muted-foreground">
                                    <Phone className="w-4 h-4 text-primary" />
                                    <a href="tel:+237670000000" className="hover:text-primary transition-colors">
                                        {t("footer.contact.phone")}
                                    </a>
                                </div>
                                <div className="flex items-center gap-3 text-muted-foreground">
                                    <Mail className="w-4 h-4 text-primary" />
                                    <a href="mailto:info@dashtechafrica.com" className="hover:text-primary transition-colors">
                                        {t("footer.contact.email")}
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
                                            className="w-10 h-10 bg-background rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 border border-border"
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
                                                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
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
                                    {t("footer.newsletter.title")}
                                </h4>
                                <p className="text-muted-foreground">
                                    {t("footer.newsletter.description")}
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <input
                                    type="email"
                                    placeholder={t("footer.newsletter.placeholder")}
                                    className="flex-1 px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                                />
                                <motion.button
                                    className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300 whitespace-nowrap"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {t("footer.newsletter.button")}
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
                            className="flex items-center gap-2 text-muted-foreground text-sm"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <span>{t("footer.copyright", { year: currentYear })}</span>
                            <span className="flex items-center gap-1">
                                {t("footer.madeWith")} <Heart className="w-3 h-3 text-red-500" /> {t("footer.inAfrica")}
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
                            <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                                {t("footer.legal.privacy")}
                            </Link>
                            <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                                {t("footer.legal.terms")}
                            </Link>
                            <Link href="/cookies" className="text-muted-foreground hover:text-primary transition-colors">
                                {t("footer.legal.cookies")}
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