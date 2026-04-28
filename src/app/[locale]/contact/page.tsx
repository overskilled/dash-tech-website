"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useI18n } from "@/locales/client";
import { Button } from "@/components/ui/button";

type FormMode = "message" | "meeting";

export default function ContactPage() {
    const t = useI18n();
    const ease = [0.16, 1, 0.3, 1] as const;
    const [mode, setMode] = useState<FormMode>("message");
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        preferredDate: "",
        preferredTime: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError(null);
        setSuccess(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        setError(null);
        setSuccess(null);

        if (mode === "meeting") {
            try {
                const res = await fetch("/api/book-meeting", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData),
                });
                const data = await res.json();
                if (res.ok) {
                    setSuccess(
                        data.meetLink
                            ? `Meeting scheduled! A calendar invite with Google Meet link has been sent to ${formData.email}.`
                            : `Meeting scheduled! Calendar invitations have been sent to all participants.`
                    );
                    setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        subject: "",
                        message: "",
                        preferredDate: "",
                        preferredTime: "",
                    });
                } else {
                    setError(data.error || "Failed to schedule meeting.");
                }
            } catch {
                setError("Network error. Please try again or email us directly.");
            }
        } else {
            // For basic contact form, open mailto
            const mailSubject = encodeURIComponent(formData.subject);
            const mailBody = encodeURIComponent(
                `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || "N/A"}\n\n${formData.message}`
            );
            window.open(
                `mailto:contact@dashtechafrica.com?subject=${mailSubject}&body=${mailBody}`,
                "_self"
            );
            setSuccess("Opening your email client...");
        }

        setSubmitting(false);
    };

    // Generate time slots (8AM to 6PM WAT, 30min intervals)
    const timeSlots: string[] = [];
    for (let h = 8; h <= 17; h++) {
        timeSlots.push(`${String(h).padStart(2, "0")}:00`);
        timeSlots.push(`${String(h).padStart(2, "0")}:30`);
    }

    // Minimum date is tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const minDate = tomorrow.toISOString().split("T")[0];

    const inputClasses =
        "w-full px-4 py-3.5 bg-transparent border border-border/50 rounded-md text-white text-sm placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors duration-500";

    return (
        <div className="min-h-screen bg-background">
            {/* Hero */}
            <section className="relative min-h-[50vh] lg:min-h-[55vh] flex items-end overflow-hidden -mt-20">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
                        alt="Contact Dash Tech Africa"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/55" />
                </div>

                <div className="container-editorial relative z-10 pb-16 md:pb-20 lg:pb-24 pt-40">
                    <motion.div
                        className="max-w-2xl"
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease }}
                    >
                        <p className="text-white/50 text-xs sm:text-sm uppercase tracking-[0.2em] font-medium mb-4 md:mb-6">
                            Contact
                        </p>
                        <h1 className="text-display font-semibold text-white mb-4 md:mb-6">
                            Get in <span className="text-primary">Touch</span>
                        </h1>
                        <p className="text-body-lg text-white/50">
                            Have a project in mind? Send us a message or book a Google Meet consultation with our team.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="section-padding">
                <div className="container-editorial">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
                        {/* Contact Info */}
                        <motion.div
                            className="lg:col-span-4"
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="space-y-6 md:space-y-8">
                                <div>
                                    <p className="text-white/30 text-xs uppercase tracking-[0.15em] mb-3">
                                        Email
                                    </p>
                                    <a
                                        href="mailto:contact@dashtechafrica.com"
                                        className="text-white hover:text-white/70 transition-colors duration-500 text-base sm:text-lg"
                                    >
                                        contact@dashtechafrica.com
                                    </a>
                                </div>
                                <div>
                                    <p className="text-white/30 text-xs uppercase tracking-[0.15em] mb-3">
                                        Phone
                                    </p>
                                    <a
                                        href="tel:+237675896389"
                                        className="text-white hover:text-white/70 transition-colors duration-500 text-base sm:text-lg"
                                    >
                                        +237 6 75 89 63 89
                                    </a>
                                </div>
                                <div>
                                    <p className="text-white/30 text-xs uppercase tracking-[0.15em] mb-3">
                                        Location
                                    </p>
                                    <p className="text-white text-base sm:text-lg">
                                        Douala, Cameroon
                                    </p>
                                </div>
                                <div>
                                    <p className="text-white/30 text-xs uppercase tracking-[0.15em] mb-3">
                                        Business Hours
                                    </p>
                                    <p className="text-white text-base sm:text-lg">
                                        Mon - Fri: 8AM - 6PM (WAT)
                                    </p>
                                </div>
                            </div>

                            {/* Map / Image */}
                            <div className="mt-10 md:mt-12 relative aspect-[4/3] rounded-xl overflow-hidden">
                                <img
                                    src="/localisation.webp"
                                    alt="Douala, Cameroon"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/30" />
                                <div className="absolute bottom-4 left-4">
                                    <p className="text-white text-sm font-semibold">
                                        Douala, Cameroon
                                    </p>
                                    <p className="text-white/50 text-xs mt-1">
                                        Central Africa
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            className="lg:col-span-8"
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            {/* Mode Toggle */}
                            <div className="flex gap-0 mb-8 md:mb-10 border border-border/50 rounded-lg p-1 w-fit">
                                <button
                                    onClick={() => setMode("message")}
                                    className={`px-5 sm:px-6 py-2.5 rounded-md text-xs sm:text-sm font-medium uppercase tracking-[0.06em] transition-all duration-300 cursor-pointer ${
                                        mode === "message"
                                            ? "bg-primary text-white"
                                            : "text-white/50 hover:text-white/80"
                                    }`}
                                >
                                    Send Message
                                </button>
                                <button
                                    onClick={() => setMode("meeting")}
                                    className={`px-5 sm:px-6 py-2.5 rounded-md text-xs sm:text-sm font-medium uppercase tracking-[0.06em] transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                                        mode === "meeting"
                                            ? "bg-primary text-white"
                                            : "text-white/50 hover:text-white/80"
                                    }`}
                                >
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <rect
                                            x="2"
                                            y="3"
                                            width="20"
                                            height="18"
                                            rx="2"
                                        />
                                        <path d="M16 2v4M8 2v4M2 10h20" />
                                    </svg>
                                    Book a Meeting
                                </button>
                            </div>

                            {/* Meeting info banner */}
                            {mode === "meeting" && (
                                <div className="mb-6 md:mb-8 border border-border/50 rounded-xl p-4 sm:p-5 flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-white/60"
                                        >
                                            <path d="M15.6 11.6L22 7v10l-6.4-4.5v-1z" />
                                            <rect
                                                x="1"
                                                y="5"
                                                width="15"
                                                height="14"
                                                rx="2"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-white text-sm font-semibold mb-1">
                                            Google Meet Consultation
                                        </p>
                                        <p className="text-white/40 text-xs sm:text-sm leading-relaxed">
                                            Book a 30-minute video call with our team. A Google Calendar event with a Meet link will be sent to you and our team for approval.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Success / Error messages */}
                            {success && (
                                <div className="mb-6 border border-green-500/20 bg-green-500/5 rounded-xl p-4 sm:p-5">
                                    <p className="text-green-400 text-sm">{success}</p>
                                </div>
                            )}
                            {error && (
                                <div className="mb-6 border border-red-500/20 bg-red-500/5 rounded-xl p-4 sm:p-5">
                                    <p className="text-red-400 text-sm">{error}</p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                                    <div>
                                        <label className="block text-xs uppercase tracking-[0.15em] text-white/30 mb-3">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className={inputClasses}
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs uppercase tracking-[0.15em] text-white/30 mb-3">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className={inputClasses}
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                                    <div>
                                        <label className="block text-xs uppercase tracking-[0.15em] text-white/30 mb-3">
                                            Phone
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className={inputClasses}
                                            placeholder="+237 6XX XX XX XX"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs uppercase tracking-[0.15em] text-white/30 mb-3">
                                            Subject *
                                        </label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className={inputClasses}
                                            placeholder="Project Inquiry"
                                        />
                                    </div>
                                </div>

                                {/* Meeting-specific fields */}
                                {mode === "meeting" && (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                                        <div>
                                            <label className="block text-xs uppercase tracking-[0.15em] text-white/30 mb-3">
                                                Preferred Date *
                                            </label>
                                            <input
                                                type="date"
                                                name="preferredDate"
                                                value={formData.preferredDate}
                                                onChange={handleChange}
                                                required={mode === "meeting"}
                                                min={minDate}
                                                className={`${inputClasses} [color-scheme:dark]`}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs uppercase tracking-[0.15em] text-white/30 mb-3">
                                                Preferred Time (WAT) *
                                            </label>
                                            <select
                                                name="preferredTime"
                                                value={formData.preferredTime}
                                                onChange={handleChange}
                                                required={mode === "meeting"}
                                                className={`${inputClasses} appearance-none cursor-pointer`}
                                            >
                                                <option value="" className="bg-background">
                                                    Select a time
                                                </option>
                                                {timeSlots.map((slot) => (
                                                    <option
                                                        key={slot}
                                                        value={slot}
                                                        className="bg-background"
                                                    >
                                                        {slot} WAT
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                )}

                                <div>
                                    <label className="block text-xs uppercase tracking-[0.15em] text-white/30 mb-3">
                                        {mode === "meeting"
                                            ? "What would you like to discuss?"
                                            : "Message *"}
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required={mode === "message"}
                                        rows={mode === "meeting" ? 4 : 6}
                                        className={`${inputClasses} resize-none`}
                                        placeholder={
                                            mode === "meeting"
                                                ? "Brief description of your project or questions..."
                                                : "Tell us about your project..."
                                        }
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full sm:w-auto"
                                    disabled={submitting}
                                >
                                    {submitting
                                        ? "Processing..."
                                        : mode === "meeting"
                                        ? "Book Google Meet"
                                        : "Send Message"}
                                </Button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
