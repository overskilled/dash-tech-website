"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useChangeLocale, useCurrentLocale } from '@/locales/client';

type Language = {
    code: string;
    name: string;
    short: string;
};

const languages: Language[] = [
    { code: 'en', name: 'English', short: 'EN' },
    { code: 'fr', name: 'Francais', short: 'FR' },
];

const LanguageSelector = () => {
    const changeLocale = useChangeLocale()
    const locale = useCurrentLocale()

    const onLanguageChange = (item: Language) => {
        if (item.code == "en") {
            changeLocale('en')
        } else {
            changeLocale('fr')
        }
    }

    const currentLang = locale === "en" ? languages[0] : languages[1];

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size="sm"
                    className="text-white/50 hover:text-white text-xs font-medium tracking-wide"
                >
                    {currentLang.short}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-32 z-[9999] bg-card border-border">
                {languages.map((lang) => (
                    <DropdownMenuItem
                        key={lang.code}
                        onSelect={() => onLanguageChange(lang)}
                        className={`cursor-pointer text-sm ${
                            locale === lang.code ? "text-white" : "text-white/50"
                        }`}
                    >
                        {lang.name}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default LanguageSelector;
