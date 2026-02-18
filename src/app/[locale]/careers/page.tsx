"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, DollarSign, ArrowRight } from "lucide-react";
import { useI18n } from "@/locales/client";

export default function CareersPage() {
    const t = useI18n();

    const openPositions = [
        {
            title: "Senior Full Stack Developer",
            department: "Engineering",
            location: "Douala, Cameroon",
            type: "Full-time",
            salary: "Competitive",
            description: "We're looking for an experienced Full Stack Developer to join our team and help build innovative solutions for African businesses."
        },
        {
            title: "UI/UX Designer",
            department: "Design",
            location: "Remote",
            type: "Full-time",
            salary: "Competitive",
            description: "Join our design team to create beautiful, user-friendly interfaces for our digital products and solutions."
        },
        {
            title: "AI/ML Engineer",
            department: "Engineering",
            location: "Douala, Cameroon",
            type: "Full-time",
            salary: "Competitive",
            description: "Help us build cutting-edge AI and machine learning solutions for computer vision and intelligent automation."
        },
        {
            title: "DevOps Engineer",
            department: "Infrastructure",
            location: "Hybrid",
            type: "Full-time",
            salary: "Competitive",
            description: "Manage and optimize our cloud infrastructure, CI/CD pipelines, and ensure smooth deployment processes."
        }
    ];

    const benefits = [
        "Competitive salary and benefits",
        "Professional development opportunities",
        "Flexible working hours",
        "Remote work options",
        "Health insurance coverage",
        "Collaborative team environment",
        "Latest tools and technologies",
        "Impact-driven projects"
    ];

    return (
        <div className="min-h-screen bg-background py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                        <Briefcase className="w-10 h-10 text-primary" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
                        Join Our <span className="text-primary">Team</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Build your career with Africa's leading digital transformation company. Work on exciting projects that make a real impact.
                    </p>
                </motion.div>

                {/* Benefits */}
                <motion.div
                    className="mb-16 bg-card rounded-2xl p-8 md:p-12 border border-border"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h2 className="text-3xl font-bold text-foreground mb-8">Why Work With Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <span className="text-primary mt-1">✓</span>
                                <span className="text-muted-foreground">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Open Positions */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-foreground mb-8">Open Positions</h2>
                    <div className="space-y-6">
                        {openPositions.map((position, index) => (
                            <motion.div
                                key={index}
                                className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-sm hover:shadow-md transition-all duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 * index }}
                            >
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-foreground mb-2">
                                            {position.title}
                                        </h3>
                                        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                                            <span className="flex items-center gap-1">
                                                <Briefcase className="w-4 h-4" />
                                                {position.department}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <MapPin className="w-4 h-4" />
                                                {position.location}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                {position.type}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <DollarSign className="w-4 h-4" />
                                                {position.salary}
                                            </span>
                                        </div>
                                    </div>
                                    <button className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap flex items-center gap-2">
                                        Apply Now
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    {position.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* No Position? */}
                <motion.div
                    className="bg-primary/5 rounded-2xl p-12 border border-primary/20 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                        Don't See a Perfect Fit?
                    </h3>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                        We're always interested in meeting talented people. Send us your resume and we'll keep you in mind for future opportunities.
                    </p>
                    <a
                        href="mailto:careers@dashtechafrica.com"
                        className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                    >
                        Send Your Resume
                    </a>
                </motion.div>
            </div>
        </div>
    );
}
