import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import en from '@/public/locales/en.json';
import sv from '@/public/locales/sv.json';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const translations = { en, sv };

export function getTranslations(lang: string) {
  return translations[lang as keyof typeof translations] || en;
}