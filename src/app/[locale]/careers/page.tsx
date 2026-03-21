"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/locales/client";
import { Button } from "@/components/ui/button";

const CAREERS_EMAIL = "careers@dashtechafrica.com";

function buildMailtoLink(position: { title: string }) {
    const subject = encodeURIComponent(`Application — ${position.title}`);
    const body = encodeURIComponent(
        `Hello Dash Tech Africa,\n\nI am writing to express my interest in the ${position.title} position.\n\nPlease find my resume attached.\n\nBest regards,\n[Your Name]`
    );
    return `mailto:${CAREERS_EMAIL}?subject=${subject}&body=${body}`;
}

export default function CareersPage() {
    const t = useI18n();
    const ease = [0.16, 1, 0.3, 1] as const;

    const openPositions = [
        {
            title: "Business Developer",
            department: "Sales & Strategy",
            location: "Douala, Cameroon",
            type: "Full-time",
            description: "Drive strategic partnerships, identify new market opportunities, and expand Dash Tech Africa's footprint across the continent. You will be responsible for prospecting, pitching, and closing deals with enterprise clients in key sectors such as government, logistics, and manufacturing.",
            responsibilities: [
                "Identify and pursue new business opportunities across Africa",
                "Build and maintain relationships with C-level decision-makers",
                "Develop proposals, pitches, and go-to-market strategies",
                "Collaborate with engineering to scope technical solutions for clients"
            ],
            requirements: [
                "3+ years in B2B business development or enterprise sales",
                "Strong understanding of the African tech ecosystem",
                "Excellent negotiation and presentation skills",
                "Fluent in English and French"
            ]
        },
        {
            title: "Corporate Sales Manager",
            department: "Sales",
            location: "Douala, Cameroon",
            type: "Full-time",
            description: "Lead and grow our corporate sales pipeline, managing key accounts and driving revenue growth. You will own the full sales cycle from outreach through contract signing, working closely with leadership to hit quarterly targets.",
            responsibilities: [
                "Manage and expand a portfolio of corporate accounts",
                "Lead the end-to-end sales cycle from prospecting to close",
                "Develop and execute sales strategies aligned with company goals",
                "Mentor junior sales team members and share best practices"
            ],
            requirements: [
                "5+ years of experience in corporate or enterprise sales",
                "Proven track record of meeting or exceeding revenue targets",
                "Experience selling technology solutions or SaaS products",
                "Strong CRM and pipeline management skills"
            ]
        },
        // {
        //     title: "Senior Full Stack Developer",
        //     department: "Engineering",
        //     location: "Douala, Cameroon",
        //     type: "Full-time",
        //     description: "Architect and build scalable web applications and enterprise platforms that power digital transformation across Africa. You will work on complex projects ranging from ERP systems to IoT dashboards.",
        //     responsibilities: [
        //         "Design and implement full-stack features using React/Next.js and Node.js",
        //         "Architect database schemas and API integrations",
        //         "Conduct code reviews and mentor junior developers",
        //         "Collaborate with product and design teams on technical decisions"
        //     ],
        //     requirements: [
        //         "5+ years of experience with modern JavaScript/TypeScript frameworks",
        //         "Proficiency with React, Next.js, Node.js, and SQL/NoSQL databases",
        //         "Experience deploying and managing cloud infrastructure (AWS/GCP)",
        //         "Strong problem-solving skills and attention to code quality"
        //     ]
        // },
        {
            title: "UI/UX Designer",
            department: "Design",
            location: "Remote",
            type: "Full-time",
            description: "Shape the visual identity and user experience of our digital products. You will design intuitive interfaces for web and mobile applications used by businesses and governments across Africa.",
            responsibilities: [
                "Create wireframes, prototypes, and high-fidelity designs in Figma",
                "Conduct user research and usability testing",
                "Develop and maintain design systems across products",
                "Collaborate with developers to ensure pixel-perfect implementation"
            ],
            requirements: [
                "3+ years of product design experience (web and mobile)",
                "Strong portfolio demonstrating UX thinking and visual design skills",
                "Proficiency with Figma and modern prototyping tools",
                "Familiarity with design systems and component-based design"
            ]
        },
        {
            title: "AI/ML Engineer",
            department: "Engineering",
            location: "Douala, Cameroon",
            type: "Full-time",
            description: "Build cutting-edge AI and machine learning solutions for computer vision, predictive analytics, and intelligent automation across industrial and government sectors.",
            responsibilities: [
                "Develop and train ML models for computer vision and NLP tasks",
                "Deploy models to production with monitoring and versioning",
                "Collaborate with domain experts to define problem statements",
                "Optimize model performance for edge deployment and low-resource environments"
            ],
            requirements: [
                "3+ years of experience in applied ML/AI engineering",
                "Strong Python skills with PyTorch, TensorFlow, or similar frameworks",
                "Experience with computer vision (OpenCV, YOLO, etc.)",
                "Understanding of MLOps practices and model deployment"
            ]
        }
    ];

    const benefits = [
        {
            title: "Competitive Compensation",
            description: "Market-rate salary with performance bonuses"
        },
        {
            title: "Professional Growth",
            description: "Training budget and conference attendance"
        },
        {
            title: "Flexible Schedule",
            description: "Flexible hours and remote work options"
        },
        {
            title: "Health Coverage",
            description: "Comprehensive health insurance for you and your family"
        },
        {
            title: "Modern Tools",
            description: "Latest hardware and software to do your best work"
        },
        {
            title: "Impact Projects",
            description: "Work on solutions that transform businesses across Africa"
        },
        {
            title: "Team Culture",
            description: "Collaborative, supportive, and innovation-driven environment"
        },
        {
            title: "Career Path",
            description: "Clear growth trajectory with mentorship from senior leadership"
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Hero — full-bleed image */}
            <section className="relative min-h-[55vh] lg:min-h-[65vh] flex items-end overflow-hidden -mt-20">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80"
                        alt="Join Dash Tech Africa team"
                        className="w-full h-full object-cover"
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
                            Careers
                        </p>
                        <h1 className="text-display font-semibold text-white mb-4 md:mb-6">
                            Build the Future <span className="text-primary">With Us</span>
                        </h1>
                        <p className="text-body-lg text-white/50 max-w-xl">
                            Join Africa&apos;s leading digital transformation company. Work on meaningful projects, grow your career, and make a real impact on the continent.
                        </p>
                        <div className="mt-8 md:mt-10">
                            <a href={`mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent("Spontaneous Application — Dash Tech Africa")}`}>
                                <Button size="lg">Apply Now</Button>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Benefits — visual cards */}
            <section className="section-padding border-b border-border/50">
                <div className="container-editorial">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-16">
                            <div className="lg:col-span-5">
                                <p className="text-white/30 text-xs uppercase tracking-[0.15em] mb-4">Why Work With Us</p>
                                <h2 className="text-heading font-semibold text-white">
                                    A Place to Grow & Thrive
                                </h2>
                            </div>
                            <div className="lg:col-span-7 flex items-end">
                                <p className="text-white/40 text-sm sm:text-[0.9375rem] leading-relaxed max-w-lg">
                                    We invest in our people because great technology starts with great teams. Here&apos;s what you can expect when you join Dash Tech Africa.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={benefit.title}
                                    className="border border-border/50 rounded-xl p-5 sm:p-6 hover:border-white/10 transition-all duration-500"
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 + index * 0.06 }}
                                >
                                    <h4 className="text-white font-semibold text-sm sm:text-[0.9375rem] mb-2">{benefit.title}</h4>
                                    <p className="text-white/35 text-xs sm:text-sm leading-relaxed">{benefit.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Culture image band */}
            <section className="relative h-[30vh] md:h-[40vh] overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80"
                    alt="Dash Tech Africa team culture"
                    className="w-full h-full object-cover"
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
                        &ldquo;We don&apos;t just build software. We build careers.&rdquo;
                    </motion.p>
                </div>
            </section>

            {/* Open Positions */}
            <section className="section-padding">
                <div className="container-editorial">
                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-16"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div className="lg:col-span-7">
                            <p className="text-white/30 text-xs uppercase tracking-[0.15em] mb-4">Open Positions</p>
                            <h2 className="text-heading font-semibold text-white">
                                Current Openings
                            </h2>
                        </div>
                        <div className="lg:col-span-5 flex items-end">
                            <p className="text-white/40 text-xs sm:text-sm leading-relaxed">
                                Click &ldquo;Apply&rdquo; on any position to send your application directly to our hiring team at{" "}
                                <a href={`mailto:${CAREERS_EMAIL}`} className="text-white/60 hover:text-white transition-colors duration-500 underline underline-offset-4 decoration-white/20">
                                    {CAREERS_EMAIL}
                                </a>
                            </p>
                        </div>
                    </motion.div>

                    <div className="space-y-4">
                        {openPositions.map((position, index) => (
                            <motion.div
                                key={position.title}
                                className="group border border-border/50 rounded-xl p-5 sm:p-6 md:p-8 hover:border-white/10 transition-all duration-500"
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 + index * 0.08 }}
                            >
                                {/* Header row */}
                                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-5">
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-white/90 transition-colors">
                                            {position.title}
                                        </h3>
                                        <div className="flex flex-wrap gap-3 mt-2">
                                            <span className="text-xs text-white/25 border border-border/50 px-2.5 py-0.5 rounded-md">{position.department}</span>
                                            <span className="text-xs text-white/25 border border-border/50 px-2.5 py-0.5 rounded-md">{position.location}</span>
                                            <span className="text-xs text-white/25 border border-border/50 px-2.5 py-0.5 rounded-md">{position.type}</span>
                                        </div>
                                    </div>
                                    <a href={buildMailtoLink(position)} className="flex-shrink-0">
                                        <Button size="default">Apply</Button>
                                    </a>
                                </div>

                                {/* Description */}
                                <p className="text-white/45 text-xs sm:text-sm leading-relaxed mb-6">
                                    {position.description}
                                </p>

                                {/* Responsibilities & Requirements — two columns */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                    <div>
                                        <p className="text-white/30 text-xs uppercase tracking-[0.15em] mb-3">Responsibilities</p>
                                        <ul className="space-y-2.5">
                                            {position.responsibilities.map((item) => (
                                                <li key={item} className="flex items-start gap-3 text-xs sm:text-sm text-white/50">
                                                    <span className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="text-white/30 text-xs uppercase tracking-[0.15em] mb-3">Requirements</p>
                                        <ul className="space-y-2.5">
                                            {position.requirements.map((item) => (
                                                <li key={item} className="flex items-start gap-3 text-xs sm:text-sm text-white/50">
                                                    <span className="w-1 h-1 rounded-full bg-white/30 mt-1.5 flex-shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Spontaneous Application CTA */}
            <section className="pb-24 md:pb-32 lg:pb-40">
                <div className="container-editorial">
                    <motion.div
                        className="border border-border/50 rounded-xl p-8 sm:p-10 md:p-12 lg:p-16"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease }}
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                            <div>
                                <p className="text-white/30 text-xs uppercase tracking-[0.15em] mb-4">Spontaneous Application</p>
                                <h3 className="text-subheading font-semibold text-white mb-3 md:mb-4">
                                    Don&apos;t See Your Role?
                                </h3>
                                <p className="text-white/40 text-sm sm:text-[0.9375rem] leading-relaxed max-w-md">
                                    We&apos;re always looking for exceptional talent. Send your resume and a short introduction to our hiring team — we&apos;ll reach out when the right opportunity opens up.
                                </p>
                            </div>
                            <div className="lg:text-right space-y-4">
                                <a
                                    href={`mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent("Spontaneous Application — Dash Tech Africa")}&body=${encodeURIComponent("Hello Dash Tech Africa,\n\nI am reaching out to express my interest in joining your team.\n\nPlease find my resume attached.\n\nBest regards,\n[Your Name]")}`}
                                >
                                    <Button size="lg">Send Your Application</Button>
                                </a>
                                <p className="text-white/25 text-xs">
                                    Or email us directly at{" "}
                                    <a href={`mailto:${CAREERS_EMAIL}`} className="text-white/40 hover:text-white/60 transition-colors duration-500 underline underline-offset-4 decoration-white/15">
                                        {CAREERS_EMAIL}
                                    </a>
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
