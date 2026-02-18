"use client"

import { useState, useTransition } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useRouter } from 'next/navigation';
import { useChangeLocale, useCurrentLocale } from '@/locales/client';

type Language = {
    code: string;
    name: string;
    flag: string;
};

const languages: Language[] = [
    { code: 'en', name: 'English', flag: 'https://flagcdn.com/w20/gb.png' },
    { code: 'fr', name: 'Français', flag: 'https://flagcdn.com/w20/fr.png' },
];

const LanguageSelector = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

    const changeLocale = useChangeLocale()
    const locale = useCurrentLocale()

    const router = useRouter()

    const onLanguageChange = (item: Language) => {
        if (item.code == "en") {
            changeLocale('en')
        } else {
            changeLocale('fr')
        }
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="default"
                    className="h-10 px-4 gap-2 font-semibold border-2 hover:border-primary/50 transition-all duration-300"
                >
                    <span className="hidden sm:inline">
                        {locale === "en" ? languages[0].name : languages[1].name}
                    </span>
                    <span className="sm:hidden">
                        {locale === "en" ? "EN" : "FR"}
                    </span>
                    <ChevronDown className="w-4 h-4 opacity-70" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40 z-[9999]">
                {languages.map((lang) => (
                    <DropdownMenuItem
                        key={lang.code}
                        onSelect={() => onLanguageChange(lang)}
                        className="cursor-pointer font-medium"
                    >
                        <span className="flex items-center gap-2">
                            {/* <span className="text-lg">{lang.code === 'en' ? '🇬🇧' : '🇫🇷'}</span> */}
                            {lang.name}
                        </span>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default LanguageSelector;
