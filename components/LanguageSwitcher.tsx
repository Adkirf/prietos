'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function LanguageSwitcher({ currentLang }: { currentLang: string }) {
    const router = useRouter();
    const pathname = usePathname();

    const switchLanguage = (lang: string) => {
        if (lang !== currentLang) {
            const newPath = pathname.replace(`/${currentLang}`, `/${lang}`);
            router.push(newPath);
        }
    };

    const languages = {
        en: { src: "/assets/englishLan.png", alt: "English" },
        sv: { src: "/assets/swedenLan.png", alt: "Swedish" }
    };

    // Check if currentLang is a valid key in languages
    const isValidLang = currentLang in languages;
    const defaultLang = isValidLang ? currentLang : 'en'; // Use 'en' as fallback

    return (
        <Select onValueChange={switchLanguage} defaultValue={defaultLang}>
            <SelectTrigger className="w-[70px] bg-transparent border-none focus:ring-0 focus:ring-offset-0">
                <SelectValue>
                    {isValidLang && (
                        <Image
                            src={languages[defaultLang as keyof typeof languages].src}
                            alt={languages[defaultLang as keyof typeof languages].alt}
                            width={24}
                            height={24}
                            className="w-6 h-4 object-cover"
                        />
                    )}
                </SelectValue>
            </SelectTrigger>
            <SelectContent>
                {Object.entries(languages).map(([lang, { src, alt }]) => (
                    <SelectItem key={lang} value={lang}>
                        <div className="flex items-center">
                            <Image
                                src={src}
                                alt={alt}
                                width={24}
                                height={24}
                                className="w-6 h-4 object-cover mr-2"
                            />
                            {alt}
                        </div>
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}