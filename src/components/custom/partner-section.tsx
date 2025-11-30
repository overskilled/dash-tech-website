"use client";

import React, { forwardRef } from "react";
import { Marquee, MarqueeContent, MarqueeItem } from "@/components/ui/shadcn-io/marquee";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedBeam } from "../ui/shadcn-io/animated-beam";
import { cn } from "@/lib/utils";
import { useI18n } from "@/locales/client";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-20 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});
Circle.displayName = "Circle";

export default function PartnerSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const containerRef = useRef<HTMLDivElement>(null);
    const div1Ref = useRef<HTMLDivElement>(null);
    const div2Ref = useRef<HTMLDivElement>(null);
    const t = useI18n();

    const partners = [
        { title: "Cadyst Group", image: "/cadyst.webp" },
        { title: "DGI", image: "/Logo_DGI_Cameroun.webp" },
        { title: "Panzani", image: "/Logo_PANZANI.webp" },
        { title: "MINT", image: "/logo_mint.webp" },
        { title: "Société Immobilière du Cameroun", image: "/SIC.webp" },
        { title: "FOCALI", image: "/focali.webp" },
    ];

    // Get marquee texts as array
    const partnerTexts = [
        t('partners.marqueeTexts.line1'),
        t('partners.marqueeTexts.line2'),
        t('partners.marqueeTexts.line3'),
        t('partners.marqueeTexts.line4')
    ];

    return (
        <section ref={ref} className="py-20">
            <div className="">
                {/* Header Section - Centered */}
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                        {t('partners.title.line1')}{" "}
                        <span className="text-primary relative inline-block">
                            {t('partners.title.line2')}
                            <motion.span
                                className="absolute bottom-0 left-0 w-full h-1 bg-primary"
                                initial={{ scaleX: 0 }}
                                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                            />
                            <motion.span
                                className="absolute -bottom-1 left-1/2 w-2 h-2 bg-primary rounded-full transform -translate-x-1/2"
                                initial={{ scale: 0 }}
                                animate={isInView ? { scale: 1 } : { scale: 0 }}
                                transition={{ duration: 0.4, delay: 0.8, ease: "easeOut" }}
                            />
                        </span>
                    </h2>

                    <motion.p
                        className="text-lg sm:text-xl text-gray-300 leading-relaxed"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        {t('partners.description')}
                    </motion.p>
                </motion.div>

                {/* Partners Marquee Section */}
                <motion.div
                    className="py-8 overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                >
                    <Marquee className="[&>div]:overflow-hidden">
                        <MarqueeContent className="overflow-hidden">
                            {partners.map((item, index) => (
                                <MarqueeItem
                                    key={index}
                                    className="group relative mx-4 sm:mx-6 lg:mx-8 hover:cursor-pointer"
                                >
                                    <div className="flex flex-col items-center space-y-4">
                                        {/* Logo Container */}
                                        <div className="relative">
                                            {/* Logo Image */}
                                            <div className="relative overflow-hidden rounded-full">
                                                <img
                                                    alt={item.title}
                                                    className="h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 ease-out"
                                                    src={item.image}
                                                />
                                            </div>
                                        </div>

                                        {/* Company Name */}
                                        <div className="text-center">
                                            <span className="text-base font-semibold text-gray-400 group-hover:text-white group-hover:bg-primary/20 group-hover:px-3 group-hover:py-1 group-hover:rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 block">
                                                {item.title}
                                            </span>
                                        </div>
                                    </div>
                                </MarqueeItem>
                            ))}
                        </MarqueeContent>
                    </Marquee>
                </motion.div>

                {/* Centered Beam Component */}
                <motion.div
                    className="flex justify-center items-center w-full py-12"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                >
                    <div
                        className="relative flex w-full max-w-md items-center justify-center overflow-hidden"
                        ref={containerRef}
                    >
                        <div className="flex w-full items-center justify-between gap-8">
                            <Circle ref={div1Ref}>
                                <Icons.globe />
                            </Circle>
                            <Circle ref={div2Ref}>
                                <img 
                                    src="/logo-dash-tech.webp" 
                                    alt="Dash Tech Africa" 
                                    className="w-12 h-12 object-contain"
                                />
                            </Circle>
                        </div>
                        
                        <AnimatedBeam
                            duration={3}
                            containerRef={containerRef}
                            fromRef={div1Ref}
                            toRef={div2Ref}
                        />
                    </div>
                </motion.div>

                {/* Text Marquee Section */}
                <motion.div
                    className="mt-8 overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                >
                    <Marquee className="[&>div]:overflow-hidden" >
                        <MarqueeContent className="overflow-hidden">
                            {partnerTexts.map((text: string, index: number) => (
                                <MarqueeItem
                                    key={index}
                                    className="mx-8 py-4"
                                >
                                    <div className="flex items-center space-x-8">
                                        <span className="text-lg font-medium text-gray-400 whitespace-nowrap">
                                            {text}
                                        </span>
                                        <div className="w-2 h-2 bg-primary rounded-full" />
                                    </div>
                                </MarqueeItem>
                            ))}
                        </MarqueeContent>
                    </Marquee>
                </motion.div>
            </div>
        </section>
    );
}

const Icons = {
  globe: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000000"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
};