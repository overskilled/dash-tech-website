"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/locales/client";

export default function TermsOfServicePage() {
    const t = useI18n();

    const sections = [
        { title: t('terms.sections.acceptance.title'), content: t('terms.sections.acceptance.content') },
        { title: t('terms.sections.services.title'), content: t('terms.sections.services.content') },
        { title: t('terms.sections.userResponsibilities.title'), content: t('terms.sections.userResponsibilities.content') },
        { title: t('terms.sections.intellectualProperty.title'), content: t('terms.sections.intellectualProperty.content') },
        { title: t('terms.sections.limitations.title'), content: t('terms.sections.limitations.content') },
        { title: t('terms.sections.termination.title'), content: t('terms.sections.termination.content') },
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
                        <h1 className="text-display font-semibold text-white mb-4">{t('terms.title')}</h1>
                        <p className="text-body-lg text-white/50 mb-4">{t('terms.subtitle')}</p>
                        <p className="text-xs text-white/30">{t('terms.lastUpdated')}: February 18, 2026</p>
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
                            {t('terms.introduction')}
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

                    {/* Governing Law */}
                    <motion.div
                        className="mt-16 pt-12 border-t border-border/50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <h2 className="text-xl font-semibold text-white mb-4">{t('terms.governingLaw.title')}</h2>
                        <p className="text-white/40 text-sm leading-relaxed">{t('terms.governingLaw.content')}</p>
                    </motion.div>

                    {/* Contact */}
                    <motion.div
                        className="mt-12 pt-12 border-t border-border/50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                    >
                        <h2 className="text-xl font-semibold text-white mb-4">{t('terms.contact.title')}</h2>
                        <p className="text-white/40 text-sm leading-relaxed mb-6">{t('terms.contact.description')}</p>
                        <div className="space-y-2 text-sm text-white/50">
                            <p>legal@dashtechafrica.com</p>
                            <p>+237 6 75 89 63 89</p>
                            <p>Douala, Cameroon</p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
