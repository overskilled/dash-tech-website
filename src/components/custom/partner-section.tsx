"use client";

import React, { useState } from "react";
import { Marquee, MarqueeContent, MarqueeItem } from "@/components/ui/shadcn-io/marquee";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useI18n } from "@/locales/client";

export default function PartnerSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = useI18n();

  const partners = [
    { title: "Cadyst Group", image: "/cadyst.webp" },
    { title: "DGI", image: "/Logo_DGI_Cameroun.webp" },
    { title: "Panzani", image: "/Logo_PANZANI.webp" },
    { title: "MINT", image: "/logo_mint.webp" },
    { title: "SIC", image: "/SIC.webp" },
    { title: "FOCALI", image: "/focali.webp" },
  ];

  return (
    <section ref={ref} className="py-20 border-b border-border/50">
      <div className="container-editorial">
        {/* Label */}
        <motion.p
          className="text-white/40 text-sm uppercase tracking-[0.2em] font-medium text-center mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t('partners.title.line1')} {t('partners.title.line2')}
        </motion.p>
      </div>

      {/* Partners Marquee - edge to edge */}
      <motion.div
        className="overflow-hidden"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Marquee className="[&>div]:overflow-hidden">
          <MarqueeContent className="overflow-hidden">
            {partners.map((item, index) => (
              <MarqueeItem
                key={index}
                className="group mx-8 sm:mx-12 lg:mx-16"
              >
                <PartnerImage alt={item.title} src={item.image} />
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </Marquee>
      </motion.div>
    </section>
  );
}

function PartnerImage({ src, alt }: { src: string; alt: string }) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc('/logo-dash-tech.webp');
    }
  };

  return (
    <img
      alt={alt}
      className="h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 object-contain img-mono opacity-50 group-hover:opacity-100 transition-all duration-500"
      src={imgSrc}
      onError={handleError}
    />
  );
}
