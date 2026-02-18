"use client";

import { motion } from "framer-motion";
import { BookOpen, Calendar, Clock, ArrowRight } from "lucide-react";
import { useI18n } from "@/locales/client";

export default function BlogPage() {
    const t = useI18n();

    const blogPosts = [
        {
            title: "The Future of AI in African Businesses",
            excerpt: "Exploring how artificial intelligence is transforming business operations across Africa and what the future holds.",
            category: "AI & Technology",
            date: "Feb 15, 2026",
            readTime: "5 min read",
            image: "/banner.png"
        },
        {
            title: "Building Scalable IoT Solutions for Smart Cities",
            excerpt: "A comprehensive guide to implementing IoT infrastructure for urban development in Africa.",
            category: "IoT",
            date: "Feb 10, 2026",
            readTime: "8 min read",
            image: "/banner.png"
        },
        {
            title: "Digital Transformation: A Guide for African SMEs",
            excerpt: "Practical steps for small and medium enterprises to embrace digital transformation and stay competitive.",
            category: "Business",
            date: "Feb 5, 2026",
            readTime: "6 min read",
            image: "/banner.png"
        }
    ];

    const categories = [
        "All Posts",
        "AI & Technology",
        "IoT",
        "Business",
        "Case Studies",
        "Tutorials"
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
                        <BookOpen className="w-10 h-10 text-primary" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
                        Our <span className="text-primary">Blog</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Insights, tutorials, and stories about digital transformation, technology, and innovation in Africa.
                    </p>
                </motion.div>

                {/* Categories */}
                <motion.div
                    className="flex flex-wrap gap-3 justify-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                                index === 0
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-card text-muted-foreground hover:text-foreground border border-border"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Blog Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={index}
                            className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 * index }}
                        >
                            <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = '/logo-dash-tech.webp';
                                    }}
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                                        {post.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                                    <span className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        {post.date}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        {post.readTime}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <button className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                                    Read More
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Newsletter Signup */}
                <motion.div
                    className="mt-20 bg-primary/5 rounded-2xl p-12 border border-primary/20 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                        Stay Updated
                    </h3>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                        Subscribe to our newsletter to get the latest insights on digital transformation in Africa.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                        />
                        <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap">
                            Subscribe
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
