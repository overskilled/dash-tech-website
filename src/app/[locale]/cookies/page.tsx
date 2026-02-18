"use client";

import { motion } from "framer-motion";
import { Cookie, Settings, BarChart, Shield, AlertTriangle, CheckCircle } from "lucide-react";
import { useI18n } from "@/locales/client";

export default function CookiePolicyPage() {
    const t = useI18n();

    const sections = [
        {
            icon: Cookie,
            title: t('cookies.sections.whatAreCookies.title'),
            content: t('cookies.sections.whatAreCookies.content')
        },
        {
            icon: Settings,
            title: t('cookies.sections.cookieTypes.title'),
            content: t('cookies.sections.cookieTypes.content')
        },
        {
            icon: BarChart,
            title: t('cookies.sections.howWeUse.title'),
            content: t('cookies.sections.howWeUse.content')
        },
        {
            icon: Shield,
            title: t('cookies.sections.thirdParty.title'),
            content: t('cookies.sections.thirdParty.content')
        },
        {
            icon: AlertTriangle,
            title: t('cookies.sections.manageCookies.title'),
            content: t('cookies.sections.manageCookies.content')
        },
        {
            icon: CheckCircle,
            title: t('cookies.sections.consent.title'),
            content: t('cookies.sections.consent.content')
        }
    ];

    return (
        <div className="min-h-screen bg-background py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                        <Cookie className="w-10 h-10 text-primary" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
                        {t('cookies.title')}
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        {t('cookies.subtitle')}
                    </p>
                    <p className="text-sm text-muted-foreground mt-4">
                        {t('cookies.lastUpdated')}: February 18, 2026
                    </p>
                </motion.div>

                {/* Introduction */}
                <motion.div
                    className="prose prose-lg max-w-none mb-12 bg-card rounded-2xl p-8 border border-border"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <p className="text-muted-foreground leading-relaxed">
                        {t('cookies.introduction')}
                    </p>
                </motion.div>

                {/* Sections */}
                <div className="space-y-8">
                    {sections.map((section, index) => {
                        const IconComponent = section.icon;
                        return (
                            <motion.div
                                key={index}
                                className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 * index }}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                            <IconComponent className="w-6 h-6 text-primary" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-2xl font-bold text-foreground mb-4">
                                            {section.title}
                                        </h2>
                                        <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                                            {section.content}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Contact Information */}
                <motion.div
                    className="mt-16 bg-primary/5 rounded-2xl p-8 border border-primary/20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                        {t('cookies.contact.title')}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                        {t('cookies.contact.description')}
                    </p>
                    <div className="space-y-2 text-foreground">
                        <p><strong>Email:</strong> privacy@dashtechafrica.com</p>
                        <p><strong>Phone:</strong> +237 6 75 89 63 89</p>
                        <p><strong>Address:</strong> Douala, Cameroon</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
