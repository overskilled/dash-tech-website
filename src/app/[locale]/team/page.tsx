"use client";

import { motion } from "framer-motion";
import { Users, Linkedin, Twitter, Mail } from "lucide-react";
import { useI18n } from "@/locales/client";

export default function TeamPage() {
    const t = useI18n();

    const team = [
        {
            name: "Diletta EGBE",
            role: "Chief Executive Officer",
            image: "/diletta.webp",
            bio: "Visionary leader with 10+ years of experience in digital transformation and technology innovation.",
            social: {
                linkedin: "#",
                twitter: "#",
                email: "diletta@dashtechafrica.com"
            }
        },
        // Add more team members as needed
    ];

    return (
        <div className="min-h-screen bg-background py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    className="text-center mb-16 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                        <Users className="w-10 h-10 text-primary" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
                        Meet Our <span className="text-primary">Team</span>
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        A passionate team of experts dedicated to transforming African businesses through innovative technology solutions.
                    </p>
                </motion.div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 * index }}
                        >
                            <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = '/logo-dash-tech.webp';
                                    }}
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-foreground mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-primary text-sm font-medium mb-3">
                                    {member.role}
                                </p>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {member.bio}
                                </p>
                                <div className="flex gap-3">
                                    <a
                                        href={member.social.linkedin}
                                        className="w-9 h-9 bg-background rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                                    >
                                        <Linkedin className="w-4 h-4" />
                                    </a>
                                    <a
                                        href={member.social.twitter}
                                        className="w-9 h-9 bg-background rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                                    >
                                        <Twitter className="w-4 h-4" />
                                    </a>
                                    <a
                                        href={`mailto:${member.social.email}`}
                                        className="w-9 h-9 bg-background rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                                    >
                                        <Mail className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Join Team CTA */}
                <motion.div
                    className="mt-20 bg-primary/5 rounded-2xl p-12 border border-primary/20 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                        Join Our Team
                    </h2>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                        We're always looking for talented individuals who are passionate about technology and making a difference in Africa.
                    </p>
                    <a
                        href="/careers"
                        className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                    >
                        View Open Positions
                    </a>
                </motion.div>
            </div>
        </div>
    );
}
