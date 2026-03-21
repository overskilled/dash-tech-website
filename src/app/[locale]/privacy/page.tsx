"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/locales/client";

export default function PrivacyPolicyPage() {
    const t = useI18n();

    const sections = [
        { title: t('privacy.sections.dataCollection.title'), content: t('privacy.sections.dataCollection.content') },
        { title: t('privacy.sections.dataUsage.title'), content: t('privacy.sections.dataUsage.content') },
        { title: t('privacy.sections.dataSecurity.title'), content: t('privacy.sections.dataSecurity.content') },
        { title: t('privacy.sections.userRights.title'), content: t('privacy.sections.userRights.content') },
        { title: t('privacy.sections.cookies.title'), content: t('privacy.sections.cookies.content') },
        { title: t('privacy.sections.updates.title'), content: t('privacy.sections.updates.content') },
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <section className="pt-32 pb-16">
                <div className="container-editorial max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <p className="text-white/40 text-sm uppercase tracking-[0.2em] font-medium mb-4">Legal</p>
                        <h1 className="text-display font-semibold text-white mb-4">{t('privacy.title')}</h1>
                        <p className="text-body-lg text-white/50 mb-4">{t('privacy.subtitle')}</p>
                        <p className="text-xs text-white/30">{t('privacy.lastUpdated')}: February 18, 2026</p>
                    </motion.div>
                </div>
            </section>

            {/* Content */}
            <section className="pb-32">
                <div className="container-editorial max-w-3xl">
                    {/* Introduction */}
                    <motion.div
                        className="mb-12 pb-12 border-b border-border/50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p className="text-white/50 text-body-lg leading-relaxed">
                            {t('privacy.introduction')}
                        </p>
                    </motion.div>

                    {/* Sections */}
                    <div className="space-y-12">
                        {sections.map((section, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 + index * 0.08 }}
                            >
                                <h2 className="text-xl font-semibold text-white mb-4">{section.title}</h2>
                                <div className="text-white/40 text-sm leading-relaxed whitespace-pre-line">
                                    {section.content}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Contact */}
                    <motion.div
                        className="mt-16 pt-12 border-t border-border/50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <h2 className="text-xl font-semibold text-white mb-4">{t('privacy.contact.title')}</h2>
                        <p className="text-white/40 text-sm leading-relaxed mb-6">{t('privacy.contact.description')}</p>
                        <div className="space-y-2 text-sm text-white/50">
                            <p>privacy@dashtechafrica.com</p>
                            <p>+237 6 75 89 63 89</p>
                            <p>Douala, Cameroon</p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
