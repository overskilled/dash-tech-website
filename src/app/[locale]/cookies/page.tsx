"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/locales/client";

export default function CookiePolicyPage() {
    const t = useI18n();

    const sections = [
        { title: t('cookies.sections.whatAreCookies.title'), content: t('cookies.sections.whatAreCookies.content') },
        { title: t('cookies.sections.cookieTypes.title'), content: t('cookies.sections.cookieTypes.content') },
        { title: t('cookies.sections.howWeUse.title'), content: t('cookies.sections.howWeUse.content') },
        { title: t('cookies.sections.thirdParty.title'), content: t('cookies.sections.thirdParty.content') },
        { title: t('cookies.sections.manageCookies.title'), content: t('cookies.sections.manageCookies.content') },
        { title: t('cookies.sections.consent.title'), content: t('cookies.sections.consent.content') },
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
                        <h1 className="text-display font-semibold text-white mb-4">{t('cookies.title')}</h1>
                        <p className="text-body-lg text-white/50 mb-4">{t('cookies.subtitle')}</p>
                        <p className="text-xs text-white/30">{t('cookies.lastUpdated')}: February 18, 2026</p>
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
                            {t('cookies.introduction')}
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
                        <h2 className="text-xl font-semibold text-white mb-4">{t('cookies.contact.title')}</h2>
                        <p className="text-white/40 text-sm leading-relaxed mb-6">{t('cookies.contact.description')}</p>
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
