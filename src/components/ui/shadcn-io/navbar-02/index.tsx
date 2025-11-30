'use client';

import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import { BookOpenIcon, InfoIcon, LifeBuoyIcon, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import LanguageSelector from '@/components/LanguageSelector';

// Simple logo component for the navbar
const Logo = (props: React.SVGAttributes<SVGElement>) => {
  return (
    <svg width='1em' height='1em' viewBox='0 0 324 323' fill='currentColor' xmlns='http://www.w3.org/2000/svg' {...props}>
      <rect
        x='88.1023'
        y='144.792'
        width='151.802'
        height='36.5788'
        rx='18.2894'
        transform='rotate(-38.5799 88.1023 144.792)'
        fill='currentColor'
      />
      <rect
        x='85.3459'
        y='244.537'
        width='151.802'
        height='36.5788'
        rx='18.2894'
        transform='rotate(-38.5799 85.3459 244.537)'
        fill='currentColor'
      />
    </svg>
  );
};

// Hamburger icon component
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

// Types
export interface NavbarNavItem {
  href?: string;
  label: string;
  submenu?: boolean;
  type?: 'description' | 'simple' | 'icon';
  items?: Array<{
    href: string;
    label: string;
    description?: string;
    icon?: string;
  }>;
}

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  logoHref?: string;
  navigationLinks?: NavbarNavItem[];
  signInText?: string;
  signInHref?: string;
  ctaText?: string;
  ctaHref?: string;
  onSignInClick?: () => void;
  onCtaClick?: () => void;
}

// Default navigation links
const defaultNavigationLinks: NavbarNavItem[] = [
  // { href: '#', label: 'Home' },
  // {
  //   label: 'Features',
  //   submenu: true,
  //   type: 'description',
  //   items: [
  //     {
  //       href: '#components',
  //       label: 'Components',
  //       description: 'Browse all components in the library.',
  //     },
  //     {
  //       href: '#documentation',
  //       label: 'Documentation',
  //       description: 'Learn how to use the library.',
  //     },
  //     {
  //       href: '#templates',
  //       label: 'Templates',
  //       description: 'Pre-built layouts for common use cases.',
  //     },
  //   ],
  // },
  // {
  //   label: 'Pricing',
  //   submenu: true,
  //   type: 'simple',
  //   items: [
  //     { href: '#product-a', label: 'Product A' },
  //     { href: '#product-b', label: 'Product B' },
  //     { href: '#product-c', label: 'Product C' },
  //     { href: '#product-d', label: 'Product D' },
  //   ],
  // },
  // {
  //   label: 'About',
  //   submenu: true,
  //   type: 'icon',
  //   items: [
  //     { href: '#getting-started', label: 'Getting Started', icon: 'BookOpenIcon' },
  //     { href: '#tutorials', label: 'Tutorials', icon: 'LifeBuoyIcon' },
  //     { href: '#about-us', label: 'About Us', icon: 'InfoIcon' },
  //   ],
  // },
];

// Language options
const languages = [
  { value: 'en', label: 'English', flag: '🇺🇸' },
  { value: 'fr', label: 'Français', flag: '🇫🇷' },
  { value: 'es', label: 'Español', flag: '🇪🇸' },
  { value: 'pt', label: 'Português', flag: '🇵🇹' },
];

export const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  (
    {
      className,
      logo = "/logo-dash-tech.webp",
      logoHref = '#',
      navigationLinks = defaultNavigationLinks,
      signInText = 'Sign In',
      signInHref = '#signin',
      ctaText = 'Get Started',
      ctaHref = '#get-started',
      onSignInClick,
      onCtaClick,
      ...props
    },
    ref
  ) => {
    const [isMobile, setIsMobile] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('en');
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
      const checkWidth = () => {
        if (containerRef.current) {
          const width = containerRef.current.offsetWidth;
          setIsMobile(width < 1024); // 1024px is lg breakpoint for centered layout
        }
      };

      checkWidth();

      const resizeObserver = new ResizeObserver(checkWidth);
      if (containerRef.current) {
        resizeObserver.observe(containerRef.current);
      }

      return () => {
        resizeObserver.disconnect();
      };
    }, []);

    // Combine refs
    const combinedRef = React.useCallback((node: HTMLElement | null) => {
      containerRef.current = node;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    }, [ref]);

    const renderIcon = (iconName: string) => {
      switch (iconName) {
        case 'BookOpenIcon':
          return <BookOpenIcon size={16} className="text-foreground opacity-60" aria-hidden={true} />;
        case 'LifeBuoyIcon':
          return <LifeBuoyIcon size={16} className="text-foreground opacity-60" aria-hidden={true} />;
        case 'InfoIcon':
          return <InfoIcon size={16} className="text-foreground opacity-60" aria-hidden={true} />;
        default:
          return null;
      }
    };

    const handleLanguageChange = (value: string) => {
      setSelectedLanguage(value);
      // Add your language change logic here
      console.log('Language changed to:', value);
    };

    const currentLanguage = languages.find(lang => lang.value === selectedLanguage);

    return (
      <header
        ref={combinedRef}
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300 bg-transparent border-b-0",
          className
        )}
        {...props}
      >
        <div className="container bg-transparent mx-auto flex h-16 items-center justify-between">
          {/* Left side - Logo */}
          <div className="flex items-center lg:flex-1">
            <button
              onClick={(e) => e.preventDefault()}
              className="flex items-center space-x-2 text-primary hover:text-primary/90 transition-colors cursor-pointer"
            >
              <Image
                src={"/dash-logo-bg-white.webp"}
                alt='logo'
                width={100}
                height={100}
                className='rounded-md'
              />
            </button>
          </div>

          {/* Center - Navigation Menu */}
          <div className="hidden lg:flex lg:justify-center lg:flex-1">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {navigationLinks.map((link, index) => (
                  <NavigationMenuItem key={index}>
                    {link.submenu ? (
                      <>
                        <NavigationMenuTrigger>
                          {link.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          {link.type === 'description' && link.label === 'Features' ? (
                            <div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                              <div className="row-span-3">
                                <NavigationMenuLink asChild>
                                  <button
                                    onClick={(e) => e.preventDefault()}
                                    className="flex h-full w-full select-none flex-col justify-center items-center text-center rounded-md bg-gradient-to-b from-primary/50 to-primary p-6 no-underline outline-none focus:shadow-md cursor-pointer"
                                  >
                                    <div className="mb-3 text-xl font-medium">
                                      Dash Tech
                                    </div>
                                    <p className="text-sm leading-tight text-white/100">
                                      At Dash Tech, we are commited to...
                                    </p>
                                  </button>
                                </NavigationMenuLink>
                              </div>
                              {link.items?.map((item, itemIndex) => (
                                <ListItem
                                  key={itemIndex}
                                  title={item.label}
                                  href={item.href}
                                  type={link.type}
                                >
                                  {item.description}
                                </ListItem>
                              ))}
                            </div>
                          ) : link.type === 'simple' ? (
                            <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                              {link.items?.map((item, itemIndex) => (
                                <ListItem
                                  key={itemIndex}
                                  title={item.label}
                                  href={item.href}
                                  type={link.type}
                                >
                                  {item.description}
                                </ListItem>
                              ))}
                            </div>
                          ) : link.type === 'icon' ? (
                            <div className="grid w-[400px] gap-3 p-4">
                              {link.items?.map((item, itemIndex) => (
                                <ListItem
                                  key={itemIndex}
                                  title={item.label}
                                  href={item.href}
                                  icon={item.icon}
                                  type={link.type}
                                >
                                  {item.description}
                                </ListItem>
                              ))}
                            </div>
                          ) : (
                            <div className="grid gap-3 p-4">
                              {link.items?.map((item, itemIndex) => (
                                <ListItem
                                  key={itemIndex}
                                  title={item.label}
                                  href={item.href}
                                  type={link.type}
                                >
                                  {item.description}
                                </ListItem>
                              ))}
                            </div>
                          )}
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink
                        href={link.href}
                        className={cn(navigationMenuTriggerStyle(), 'cursor-pointer')}
                        onClick={(e) => e.preventDefault()}
                      >
                        {link.label}
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right side - Language selector and Auth buttons */}
          <div className="flex items-center justify-end gap-3 lg:flex-1">
            {/* Language Selector - Desktop */}
            <LanguageSelector />

            {/* Mobile menu trigger and Language selector */}
            {isMobile && (
              <div className="flex items-center gap-2">
                {/* Language Selector - Mobile */}
                <LanguageSelector />

                {/* Mobile menu */}
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      className="group h-9 w-9 hover:bg-accent hover:text-accent-foreground"
                      size="icon"
                    >
                      <HamburgerIcon />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent align="end" className="w-64 p-1">
                    <NavigationMenu className="max-w-none">
                      <NavigationMenuList className="flex-col items-start gap-0">
                        {navigationLinks.map((link, index) => (
                          <NavigationMenuItem key={index} className="w-full">
                            {link.submenu ? (
                              <>
                                <div className="text-muted-foreground px-2 py-1.5 text-xs font-medium">
                                  {link.label}
                                </div>
                                <ul>
                                  {link.items?.map((item, itemIndex) => (
                                    <li key={itemIndex}>
                                      <button
                                        onClick={(e) => e.preventDefault()}
                                        className="flex w-full items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer no-underline"
                                      >
                                        {item.label}
                                      </button>
                                    </li>
                                  ))}
                                </ul>
                              </>
                            ) : (
                              <button
                                onClick={(e) => e.preventDefault()}
                                className="flex w-full items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer no-underline"
                              >
                                {link.label}
                              </button>
                            )}
                            {/* Add separator between different types of items */}
                            {index < navigationLinks.length - 1 &&
                              ((!link.submenu && navigationLinks[index + 1].submenu) ||
                                (link.submenu && !navigationLinks[index + 1].submenu) ||
                                (link.submenu &&
                                  navigationLinks[index + 1].submenu &&
                                  link.type !== navigationLinks[index + 1].type)) && (
                                <div
                                  role="separator"
                                  aria-orientation="horizontal"
                                  className="bg-border -mx-1 my-1 h-px w-full"
                                />
                              )}
                          </NavigationMenuItem>
                        ))}
                      </NavigationMenuList>
                    </NavigationMenu>
                  </PopoverContent>
                </Popover>
              </div>
            )}
          </div>
        </div>
      </header>
    );
  }
);

Navbar.displayName = 'Navbar';

// ListItem component for navigation menu items
const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'> & {
    title: string;
    href?: string;
    icon?: string;
    type?: 'description' | 'simple' | 'icon';
    children?: React.ReactNode;
  }
>(({ className, title, children, icon, type, ...props }, ref) => {
  const renderIconComponent = (iconName?: string) => {
    if (!iconName) return null;
    switch (iconName) {
      case 'BookOpenIcon':
        return <BookOpenIcon className="h-5 w-5" />;
      case 'LifeBuoyIcon':
        return <LifeBuoyIcon className="h-5 w-5" />;
      case 'InfoIcon':
        return <InfoIcon className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        onClick={(e) => e.preventDefault()}
        className={cn(
          'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer',
          className
        )}
        {...props}
      >
        {type === 'icon' && icon ? (
          <div className="flex items-start space-x-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
              {renderIconComponent(icon)}
            </div>
            <div className="space-y-1">
              <div className="text-base font-medium leading-tight">{title}</div>
              {children && (
                <p className="line-clamp-2 text-sm leading-snug text-white">
                  {children}
                </p>
              )}
            </div>
          </div>
        ) : (
          <>
            <div className="text-base font-medium leading-none">{title}</div>
            {children && (
              <p className="line-clamp-2 text-sm leading-snug text-white">
                {children}
              </p>
            )}
          </>
        )}
      </a>
    </NavigationMenuLink>
  );
});
ListItem.displayName = 'ListItem';

export { Logo, HamburgerIcon };