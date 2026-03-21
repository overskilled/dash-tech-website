"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useI18n } from "@/locales/client";

function FooterLogo() {
  const [imgSrc, setImgSrc] = useState('/logo-dash-tech.webp');
  const [hasError, setHasError] = useState(false);

  return (
    <img
      src={imgSrc}
      alt="Dash Tech Africa Logo"
      className="w-full h-full object-contain"
      onError={() => {
        if (!hasError) {
          setHasError(true);
          setImgSrc('/dash-logo-bg-white.webp');
        }
      }}
    />
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const t = useI18n();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: t("footer.sections.services.title"),
      links: [
        { name: t("footer.sections.services.links.0"), href: "/services/software" },
        { name: t("footer.sections.services.links.1"), href: "/services/ai" },
        { name: t("footer.sections.services.links.2"), href: "/services/iot" },
        { name: t("footer.sections.services.links.3"), href: "/services/digital" },
        { name: t("footer.sections.services.links.4"), href: "/services/cybersecurity" },
        { name: t("footer.sections.services.links.5"), href: "/services/consulting" }
      ]
    },
    {
      title: t("footer.sections.company.title"),
      links: [
        { name: t("footer.sections.company.links.0"), href: "/about" },
        { name: t("footer.sections.company.links.1"), href: "/team" },
        { name: t("footer.sections.company.links.2"), href: "/careers" },
        { name: t("footer.sections.company.links.3"), href: "/case-studies" },
        { name: t("footer.sections.company.links.4"), href: "/blog" },
        { name: t("footer.sections.company.links.5"), href: "/contact" }
      ]
    },
    {
      title: t("footer.sections.solutions.title"),
      links: [
        { name: t("footer.sections.solutions.links.0"), href: "/solutions/vize" },
        { name: t("footer.sections.solutions.links.1"), href: "/solutions/allotech" },
        { name: t("footer.sections.solutions.links.2"), href: "/solutions/evote" },
        { name: t("footer.sections.solutions.links.3"), href: "/solutions/wdms" },
        { name: t("footer.sections.solutions.links.4"), href: "/solutions/fuelguard" },
        { name: t("footer.sections.solutions.links.5"), href: "/solutions/iot" }
      ]
    }
  ];

  return (
    <footer className="border-t border-border/50">
      <div className="container-editorial">
        {/* Main footer */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Company info — 5 cols */}
            <div className="lg:col-span-5 space-y-6">
              {/* Enlarged logo */}
              <div className="w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 bg-white rounded-xl flex items-center justify-center p-3">
                <FooterLogo />
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
                  {t("footer.company.name")}
                </h3>
                <p className="text-white/40 text-xs sm:text-sm leading-relaxed max-w-sm">
                  {t("footer.company.description")}
                </p>
              </div>

              {/* Contact */}
              <div className="space-y-2 text-xs sm:text-sm text-white/40">
                <p>{t("footer.contact.address")}</p>
                <a href="tel:+237675896389" className="block hover:text-white/60 transition-colors duration-500">
                  {t("footer.contact.phone")}
                </a>
                <a href="mailto:contact@dashtechafrica.com" className="block hover:text-white/60 transition-colors duration-500">
                  {t("footer.contact.email")}
                </a>
              </div>
            </div>

            {/* Links — 7 cols */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                {footerSections.map((section) => (
                  <div key={section.title}>
                    <h4 className="text-xs uppercase tracking-[0.15em] text-white/30 font-medium mb-4">
                      {section.title}
                    </h4>
                    <ul className="space-y-3">
                      {section.links.map((link) => (
                        <li key={link.name}>
                          <Link
                            href={link.href}
                            className="text-xs sm:text-sm text-white/50 hover:text-white transition-colors duration-500"
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-border/50 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-white font-semibold text-sm sm:text-base mb-1">
                {t("footer.newsletter.title")}
              </h4>
              <p className="text-white/40 text-xs sm:text-sm">
                {t("footer.newsletter.description")}
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder={t("footer.newsletter.placeholder")}
                className="flex-1 px-4 py-3 bg-transparent border border-border/50 rounded-md text-white text-sm placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors duration-500"
              />
              <button className="bg-primary text-white px-6 py-3 rounded-md text-xs sm:text-sm font-medium uppercase tracking-[0.06em] hover:bg-primary/85 transition-colors duration-500">
                {t("footer.newsletter.button")}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/50 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            {t("footer.copyright")} {t("footer.madeWith")} {t("footer.inAfrica")}
          </p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-6 text-xs">
              <Link href="/privacy" className="text-white/30 hover:text-white/50 transition-colors duration-500">
                {t("footer.legal.privacy")}
              </Link>
              <Link href="/terms" className="text-white/30 hover:text-white/50 transition-colors duration-500">
                {t("footer.legal.terms")}
              </Link>
              <Link href="/cookies" className="text-white/30 hover:text-white/50 transition-colors duration-500">
                {t("footer.legal.cookies")}
              </Link>
            </div>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-md border border-border/50 flex items-center justify-center text-white/30 hover:text-white/60 hover:border-white/20 transition-all duration-500 cursor-pointer"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 15l-6-6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
