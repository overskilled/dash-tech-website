"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

const COOKIE_KEY = "dash_cookie_consent";
const COOKIE_MAX_AGE = 365 * 24 * 60 * 60 * 1000; // 1 year

function getCookieConsent(): CookiePreferences | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = localStorage.getItem(COOKIE_KEY);
    if (!stored) return null;
    const parsed = JSON.parse(stored);
    // Check if consent has expired
    if (parsed.expiry && Date.now() > parsed.expiry) {
      localStorage.removeItem(COOKIE_KEY);
      return null;
    }
    return parsed.preferences;
  } catch {
    return null;
  }
}

function saveCookieConsent(preferences: CookiePreferences) {
  localStorage.setItem(
    COOKIE_KEY,
    JSON.stringify({
      preferences,
      expiry: Date.now() + COOKIE_MAX_AGE,
      savedAt: new Date().toISOString(),
    })
  );
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Small delay to avoid layout shift on page load
    const timer = setTimeout(() => {
      const consent = getCookieConsent();
      if (!consent) {
        setVisible(true);
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleAcceptAll = useCallback(() => {
    const all: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    saveCookieConsent(all);
    setVisible(false);
  }, []);

  const handleRejectAll = useCallback(() => {
    const minimal: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    saveCookieConsent(minimal);
    setVisible(false);
  }, []);

  const handleSavePreferences = useCallback(() => {
    saveCookieConsent(preferences);
    setVisible(false);
  }, [preferences]);

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === "necessary") return; // Can't disable necessary cookies
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const ease = [0.16, 1, 0.3, 1] as const;

  const cookieTypes = [
    {
      key: "necessary" as const,
      label: "Essential",
      description:
        "Required for the website to function properly. These cannot be disabled.",
      locked: true,
    },
    {
      key: "analytics" as const,
      label: "Analytics",
      description:
        "Help us understand how visitors interact with our website to improve the experience.",
      locked: false,
    },
    {
      key: "marketing" as const,
      label: "Marketing",
      description:
        "Used to deliver relevant advertisements and track campaign effectiveness.",
      locked: false,
    },
  ];

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop — subtle, non-blocking */}
          <motion.div
            className="fixed inset-0 z-[998] pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>

          {/* Cookie Banner */}
          <motion.div
            className="fixed bottom-0 left-0 right-0 z-[999] p-4 sm:p-6"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <div className="max-w-4xl mx-auto bg-[#141719] border border-border/50 rounded-2xl shadow-2xl shadow-black/40 overflow-hidden">
              {/* Main content */}
              <div className="p-5 sm:p-6 md:p-8">
                <div className="flex items-start gap-4 mb-5">
                  {/* Cookie icon — subtle, monochrome */}
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white/50"
                    >
                      <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                      <path d="M8.5 8.5v.01" />
                      <path d="M16 15.5v.01" />
                      <path d="M12 12v.01" />
                      <path d="M11 17v.01" />
                      <path d="M7 14v.01" />
                    </svg>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold text-sm sm:text-[0.9375rem] mb-1.5">
                      We value your privacy
                    </h3>
                    <p className="text-white/40 text-xs sm:text-sm leading-relaxed">
                      We use cookies to enhance your browsing experience, analyze
                      site traffic, and personalize content. You can choose which
                      cookies to allow.{" "}
                      <Link
                        href="/cookies"
                        className="text-white/60 hover:text-white underline underline-offset-4 decoration-white/20 transition-colors duration-300"
                      >
                        Learn more
                      </Link>
                    </p>
                  </div>
                </div>

                {/* Expandable preferences */}
                <AnimatePresence>
                  {showDetails && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-3 mb-6 pt-4 border-t border-border/50">
                        {cookieTypes.map((type) => (
                          <div
                            key={type.key}
                            className="flex items-start justify-between gap-4 p-3 sm:p-4 rounded-xl bg-white/[0.02] border border-border/30"
                          >
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <p className="text-white text-xs sm:text-sm font-semibold">
                                  {type.label}
                                </p>
                                {type.locked && (
                                  <span className="text-[0.625rem] text-white/30 uppercase tracking-wider border border-border/50 px-1.5 py-0.5 rounded">
                                    Required
                                  </span>
                                )}
                              </div>
                              <p className="text-white/30 text-xs leading-relaxed">
                                {type.description}
                              </p>
                            </div>

                            {/* Toggle */}
                            <button
                              onClick={() => togglePreference(type.key)}
                              disabled={type.locked}
                              className={`relative w-11 h-6 rounded-full transition-colors duration-300 flex-shrink-0 mt-0.5 ${
                                type.locked
                                  ? "cursor-not-allowed"
                                  : "cursor-pointer"
                              } ${
                                preferences[type.key]
                                  ? "bg-primary"
                                  : "bg-white/10"
                              }`}
                              aria-label={`Toggle ${type.label} cookies`}
                            >
                              <span
                                className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform duration-300 ${
                                  preferences[type.key]
                                    ? "translate-x-5"
                                    : "translate-x-0"
                                }`}
                              />
                            </button>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
                  <button
                    onClick={handleAcceptAll}
                    className="h-10 sm:h-11 px-6 rounded-md bg-primary text-white text-xs sm:text-sm font-medium uppercase tracking-[0.06em] hover:bg-primary/85 transition-colors duration-300 cursor-pointer order-1"
                  >
                    Accept All
                  </button>

                  {showDetails ? (
                    <button
                      onClick={handleSavePreferences}
                      className="h-10 sm:h-11 px-6 rounded-md border border-white/20 text-white text-xs sm:text-sm font-medium uppercase tracking-[0.06em] hover:bg-white/[0.04] hover:border-white/40 transition-all duration-300 cursor-pointer order-2"
                    >
                      Save Preferences
                    </button>
                  ) : (
                    <button
                      onClick={() => setShowDetails(true)}
                      className="h-10 sm:h-11 px-6 rounded-md border border-white/20 text-white text-xs sm:text-sm font-medium uppercase tracking-[0.06em] hover:bg-white/[0.04] hover:border-white/40 transition-all duration-300 cursor-pointer order-2"
                    >
                      Customize
                    </button>
                  )}

                  <button
                    onClick={handleRejectAll}
                    className="h-10 sm:h-11 px-6 rounded-md text-white/40 text-xs sm:text-sm font-medium uppercase tracking-[0.06em] hover:text-white/70 hover:bg-white/[0.03] transition-all duration-300 cursor-pointer order-3 sm:ml-auto"
                  >
                    Reject All
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
