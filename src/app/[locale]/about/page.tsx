"use client";

import { motion } from "framer-motion";
import { Target, Users, Award, Zap, Shield, Heart } from "lucide-react";
import { useI18n } from "@/locales/client";

export default function AboutPage() {
    const t = useI18n();

    const values = [
        {
            icon: Target,
            title: "Our Mission",
            description: "To empower African businesses with cutting-edge digital solutions that drive growth, efficiency, and innovation across the continent."
        },
        {
            icon: Users,
            title: "Our Team",
            description: "A diverse team of experienced developers, designers, and strategists passionate about transforming Africa's digital landscape."
        },
        {
            icon: Award,
            title: "Our Excellence",
            description: "Committed to delivering world-class solutions with attention to detail, quality, and customer satisfaction."
        },
        {
            icon: Zap,
            title: "Innovation First",
            description: "Leveraging the latest technologies and methodologies to build future-ready solutions for modern businesses."
        },
        {
            icon: Shield,
            title: "Trust & Security",
            description: "Maintaining the highest standards of security and data protection in all our solutions and partnerships."
        },
        {
            icon: Heart,
            title: "Made in Africa",
            description: "Proudly African, building solutions tailored for African markets while meeting global standards."
        }
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
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
                        About <span className="text-primary">Dash Tech Africa</span>
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        We are a leading digital transformation company dedicated to empowering African businesses with innovative technology solutions.
                    </p>
                </motion.div>

                {/* Story Section */}
                <motion.div
                    className="mb-20 bg-card rounded-2xl p-8 md:p-12 border border-border"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
                    <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                        <p>
                            Founded with a vision to bridge the digital divide in Africa, Dash Tech Africa has grown from a small startup to a trusted technology partner for businesses across the continent.
                        </p>
                        <p>
                            We specialize in custom software development, AI & computer vision, IoT automation, and digital transformation solutions. Our team combines deep technical expertise with an understanding of African market dynamics to deliver solutions that truly make a difference.
                        </p>
                        <p>
                            From Cameroon to the rest of Africa, we've helped organizations modernize their operations, improve efficiency, and unlock new opportunities through technology.
                        </p>
                    </div>
                </motion.div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.map((value, index) => {
                        const IconComponent = value.icon;
                        return (
                            <motion.div
                                key={index}
                                className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 * index }}
                            >
                                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                                    <IconComponent className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {value.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Stats Section */}
                <motion.div
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    {[
                        { number: "50+", label: "Projects Delivered" },
                        { number: "30+", label: "Happy Clients" },
                        { number: "15+", label: "Team Members" },
                        { number: "5+", label: "Years Experience" }
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                                {stat.number}
                            </div>
                            <div className="text-muted-foreground">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
