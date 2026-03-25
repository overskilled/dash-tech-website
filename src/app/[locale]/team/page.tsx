"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/locales/client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function TeamPage() {
    const t = useI18n();

    const leadership = [
        {
            name: "Bony Dashaco",
            role: "Chairman",
            image: "/team/Bony_Dashaco.jpg",
            bio: "Strategic visionary and founder leading Dash Tech Africa's mission to transform the continent's digital landscape through bold innovation and strategic partnerships.",
            social: {
                linkedin: "#",
                email: "bony@dashtechafrica.com"
            }
        },
        {
            name: "Diletta EGBE",
            role: "Chief Executive Officer",
            image: "/team/diletta.webp",
            bio: "Visionary leader with 10+ years of experience in digital transformation and technology innovation, driving Dash Tech Africa's growth across the continent.",
            social: {
                linkedin: "#",
                email: "diletta@dashtechafrica.com"
            }
        },
    ];

    const salesTeam = [
        {
            name: "Ibrahim Farris",
            role: "Corporate Sales",
            image: "/team/ibrahim.png",
            bio: "Driving enterprise partnerships and business development across West Africa."
        },
        {
            name: "Gabriella Momha",
            role: "Corporate Sales",
            image: "/team/gabriella.png",
            bio: "Building lasting client relationships and delivering tailored digital solutions."
        },
        {
            name: "Thierry Ambassa",
            role: "Corporate Sales",
            image: "/team/thierry.jpeg",
            bio: "Connecting businesses with the right technology solutions to accelerate growth."
        },
    ];

    const devTeam = [
        {
            name: "Yvan Ouatedem",
            role: "Lead Developer",
            image: "/team/yvan.jpg",
            bio: "Full-stack architect specializing in scalable enterprise systems and cloud infrastructure."
        },
        {
            name: "Stephane Djantio",
            role: "Software Developer",
            image: "/team/adrien.png",
            bio: "Building robust web and mobile applications with a focus on user experience."
        },
        {
            name: "Andy Nzoupet",
            role: "Software Developer",
            image: "/team/andy.jpg",
            bio: "Building robust web and mobile applications with a focus on user experience."
        },
    ];

    const ease = [0.16, 1, 0.3, 1] as const;

    return (
        <div className="min-h-screen bg-background">
            {/* Hero — full-bleed image with editorial overlay */}
            <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-end overflow-hidden -mt-20">
                <div className="absolute inset-0">
                    <img
                        src="/whyChooseUs/team.png"
                        alt="Dash Tech Africa team collaboration"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/services/smart-city.webp';
                        }}
                    />
                    <div className="absolute inset-0 bg-black/55" />
                </div>

                <div className="container-editorial relative z-10 pb-16 md:pb-20 lg:pb-24 pt-40">
                    <motion.div
                        className="max-w-3xl"
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease }}
                    >
                        <p className="text-white/50 text-xs sm:text-sm uppercase tracking-[0.2em] font-medium mb-4 md:mb-6">
                            Our People
                        </p>
                        <h1 className="text-display font-semibold text-white mb-4 md:mb-6">
                            The Minds Behind{" "}
                            <span className="text-primary">Dash Tech</span>
                        </h1>
                        <p className="text-body-lg text-white/50 max-w-xl">
                            A passionate team of experts dedicated to transforming African businesses through innovative technology solutions.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Leadership — editorial magazine layout */}
            <section className="section-padding">
                <div className="container-editorial">
                    <motion.div
                        className="flex items-end justify-between mb-12 md:mb-16 border-b border-border/50 pb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div>
                            <p className="text-white/30 text-xs uppercase tracking-[0.15em] mb-3">
                                Leadership
                            </p>
                            <h2 className="text-subheading font-semibold text-white">
                                Executive Team
                            </h2>
                        </div>
                        <p className="text-white/20 text-sm hidden sm:block">02 Members</p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
                        {leadership.map((member, index) => (
                            <motion.div
                                key={member.name}
                                className="group"
                                initial={{ opacity: 0, y: 32 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 + index * 0.15, ease }}
                            >
                                {/* Portrait */}
                                <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-6 md:mb-8">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = '/logo-dash-tech.webp';
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-700" />
                                </div>

                                {/* Details */}
                                <div className="space-y-3">
                                    <div className="flex items-baseline justify-between gap-4">
                                        <h3 className="text-white font-semibold text-lg sm:text-xl lg:text-2xl">
                                            {member.name}
                                        </h3>
                                        <span className="text-primary text-xs sm:text-sm uppercase tracking-wider flex-shrink-0">
                                            {member.role}
                                        </span>
                                    </div>
                                    <p className="text-white/40 text-sm sm:text-[0.9375rem] leading-relaxed max-w-md">
                                        {member.bio}
                                    </p>

                                    {member.social && (
                                        <div className="flex gap-5 pt-2">
                                            {member.social.linkedin && (
                                                <a href={member.social.linkedin} className="text-xs text-white/25 hover:text-white/60 transition-colors duration-500 uppercase tracking-[0.15em]">
                                                    LinkedIn
                                                </a>
                                            )}
                                            {member.social.email && (
                                                <a href={`mailto:${member.social.email}`} className="text-xs text-white/25 hover:text-white/60 transition-colors duration-500 uppercase tracking-[0.15em]">
                                                    Email
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Corporate Sales — horizontal card layout with image */}
            <section className="pb-24 md:pb-32 lg:pb-40">
                <div className="container-editorial">
                    <motion.div
                        className="flex items-end justify-between mb-12 md:mb-16 border-b border-border/50 pb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div>
                            <p className="text-white/30 text-xs uppercase tracking-[0.15em] mb-3">
                                Corporate Sales
                            </p>
                            <h2 className="text-subheading font-semibold text-white">
                                Business Development
                            </h2>
                        </div>
                        <p className="text-white/20 text-sm hidden sm:block">03 Members</p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {salesTeam.map((member, index) => (
                            <motion.div
                                key={member.name}
                                className="group"
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.5 + index * 0.1, ease }}
                            >
                                <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-5 md:mb-6">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = '/logo-dash-tech.webp';
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-700" />
                                </div>

                                <h3 className="text-white font-semibold text-base sm:text-lg">{member.name}</h3>
                                <p className="text-white/30 text-xs sm:text-sm mt-1">{member.role}</p>
                                <p className="text-white/25 text-xs sm:text-sm mt-3 leading-relaxed">{member.bio}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Development — same grid treatment */}
            <section className="pb-24 md:pb-32 lg:pb-40">
                <div className="container-editorial">
                    <motion.div
                        className="flex items-end justify-between mb-12 md:mb-16 border-b border-border/50 pb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <div>
                            <p className="text-white/30 text-xs uppercase tracking-[0.15em] mb-3">
                                Development
                            </p>
                            <h2 className="text-subheading font-semibold text-white">
                                Engineering Team
                            </h2>
                        </div>
                        <p className="text-white/20 text-sm hidden sm:block">03 Members</p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {devTeam.map((member, index) => (
                            <motion.div
                                key={member.name}
                                className="group"
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.7 + index * 0.1, ease }}
                            >
                                <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-5 md:mb-6">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = '/logo-dash-tech.webp';
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-700" />
                                </div>

                                <h3 className="text-white font-semibold text-base sm:text-lg">{member.name}</h3>
                                <p className="text-white/30 text-xs sm:text-sm mt-1">{member.role}</p>
                                <p className="text-white/25 text-xs sm:text-sm mt-3 leading-relaxed">{member.bio}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Full-width culture image band */}
            <section className="relative h[40vh] h-[60vh] md:h-[70vh] overflow-hidden">
                <img
                    src="/togeder.png"
                    alt="Team culture at Dash Tech Africa"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/services/crm.webp';
                    }}
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.p
                        className="text-white/70 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center px-6 max-w-2xl"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease }}
                    >
                        &ldquo;Together, we build the digital future of Africa.&rdquo;
                    </motion.p>
                </div>
            </section>

            {/* Join CTA */}
            <section className="section-padding">
                <div className="container-editorial">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease }}
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center border-t border-border/50 pt-12 md:pt-16">
                            <div>
                                <h2 className="text-subheading font-semibold text-white mb-3 md:mb-4">
                                    Join Our Team
                                </h2>
                                <p className="text-white/40 text-sm sm:text-[0.9375rem] leading-relaxed max-w-md">
                                    We&apos;re always looking for talented individuals who are passionate about technology and making a difference in Africa.
                                </p>
                            </div>
                            <div className="lg:text-right">
                                <Link href="/careers">
                                    <Button size="lg">View Open Positions</Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
