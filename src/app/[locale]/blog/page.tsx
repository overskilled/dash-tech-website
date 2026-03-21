"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/locales/client";
import { Button } from "@/components/ui/button";

export default function BlogPage() {
    const t = useI18n();
    const ease = [0.16, 1, 0.3, 1] as const;

    const blogPosts = [
        {
            title: "The Future of AI in African Businesses",
            excerpt: "Exploring how artificial intelligence is transforming business operations across Africa and what the future holds.",
            category: "AI & Technology",
            date: "Feb 15, 2026",
            readTime: "5 min read",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
        },
        {
            title: "Building Scalable IoT Solutions for Smart Cities",
            excerpt: "A comprehensive guide to implementing IoT infrastructure for urban development in Africa.",
            category: "IoT",
            date: "Feb 10, 2026",
            readTime: "8 min read",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80"
        },
        {
            title: "Digital Transformation: A Guide for African SMEs",
            excerpt: "Practical steps for small and medium enterprises to embrace digital transformation and stay competitive.",
            category: "Business",
            date: "Feb 5, 2026",
            readTime: "6 min read",
            image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
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
        <div className="min-h-screen bg-background">
            {/* Hero Header */}
            <section className="pt-28 sm:pt-32 pb-16 md:pb-20">
                <div className="container-editorial">
                    <motion.div
                        className="max-w-2xl"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease }}
                    >
                        <p className="text-white/40 text-xs sm:text-sm uppercase tracking-[0.2em] font-medium mb-4">
                            Blog
                        </p>
                        <h1 className="text-display font-semibold text-white mb-4 md:mb-6">
                            Our <span className="text-primary">Blog</span>
                        </h1>
                        <p className="text-body-lg text-white/50 max-w-xl">
                            Insights, tutorials, and stories about digital transformation, technology, and innovation in Africa.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Categories */}
            <section className="pb-10 md:pb-12">
                <div className="container-editorial">
                    <motion.div
                        className="flex flex-wrap gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                className={`px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-all duration-500 cursor-pointer uppercase tracking-[0.06em] ${
                                    index === 0
                                        ? "bg-primary text-white"
                                        : "text-white/30 border border-border/50 hover:text-white/60 hover:border-white/20"
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="pb-24 md:pb-32">
                <div className="container-editorial">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                        {blogPosts.map((post, index) => (
                            <motion.article
                                key={index}
                                className="group cursor-pointer"
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                            >
                                {/* Image */}
                                <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-4 md:mb-5">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = '/logo-dash-tech.webp';
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/15 transition-colors duration-700" />
                                </div>

                                {/* Meta */}
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-xs text-primary font-medium uppercase tracking-[0.06em]">{post.category}</span>
                                    <span className="text-xs text-white/15">|</span>
                                    <span className="text-xs text-white/30">{post.date}</span>
                                    <span className="text-xs text-white/30">{post.readTime}</span>
                                </div>

                                {/* Title & Excerpt */}
                                <h3 className="text-base sm:text-lg font-semibold text-white mb-2 group-hover:text-white/80 transition-colors duration-500 line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-white/40 text-xs sm:text-sm leading-relaxed line-clamp-2">
                                    {post.excerpt}
                                </p>
                            </motion.article>
                        ))}
                    </div>

                    {/* Newsletter */}
                    <motion.div
                        className="mt-16 md:mt-20 border-t border-border/50 pt-12 md:pt-16"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
                            <div>
                                <h3 className="text-subheading font-semibold text-white mb-2">Stay Updated</h3>
                                <p className="text-white/40 text-xs sm:text-sm">Subscribe to get the latest insights on digital transformation in Africa.</p>
                            </div>
                            <div className="flex gap-3">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-3 bg-transparent border border-border/50 rounded-md text-white text-sm placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors duration-500"
                                />
                                <Button>Subscribe</Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
