'use client';

import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import LanguageSelector from '@/components/LanguageSelector';

const HamburgerIcon = ({ className, ...props }: React.SVGAttributes<SVGElement>) => (
  <svg
    className={cn('pointer-events-none', className)}
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 12L20 12"
      className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
    />
    <path
      d="M4 12H20"
      className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
    />
    <path
      d="M4 12H20"
      className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
    />
  </svg>
);

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'Team', href: '/team' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export const Navbar = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 20);
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
      const checkWidth = () => {
        if (containerRef.current) {
          setIsMobile(containerRef.current.offsetWidth < 1024);
        }
      };
      checkWidth();
      const resizeObserver = new ResizeObserver(checkWidth);
      if (containerRef.current) {
        resizeObserver.observe(containerRef.current);
      }
      return () => resizeObserver.disconnect();
    }, []);

    const combinedRef = React.useCallback((node: HTMLElement | null) => {
      containerRef.current = node;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    }, [ref]);

    return (
      <header
        ref={combinedRef}
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-500",
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
            : "bg-transparent",
          className
        )}
        {...props}
      >
        <div className="container-editorial flex h-20 sm:h-24 items-center justify-between">
          {/* Logo — enlarged */}
          <Link
            href="/"
            className="flex items-center transition-opacity duration-300 hover:opacity-80"
          >
            <Image
              src="/dash-logo-bg-white.webp"
              alt="Dash Tech Africa"
              width={160}
              height={160}
              className="rounded-md bg-transparent w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-[0.8125rem] font-medium text-white/60 hover:text-white transition-colors duration-500 uppercase tracking-[0.06em]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          )}

          {/* Right side */}
          <div className="flex items-center gap-3">
            <LanguageSelector />

            {!isMobile && (
              <Link href="/contact">
                <Button size="default">
                  Get in Touch
                </Button>
              </Link>
            )}

            {/* Mobile menu */}
            {isMobile && (
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    className="group h-11 w-11"
                    size="icon"
                    variant="ghost"
                  >
                    <HamburgerIcon className="w-5 h-5" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="end" className="w-64 p-3 bg-card border border-border">
                  <nav className="flex flex-col gap-1">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="flex w-full items-center rounded-lg px-4 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-all duration-300"
                      >
                        {link.label}
                      </Link>
                    ))}
                    <div className="h-px bg-border my-2" />
                    <Link href="/contact">
                      <Button size="default" className="w-full">
                        Get in Touch
                      </Button>
                    </Link>
                  </nav>
                </PopoverContent>
              </Popover>
            )}
          </div>
        </div>
      </header>
    );
  }
);

Navbar.displayName = 'Navbar';
