/* import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image'; */
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  englishFlag,
  swedishFlag,
  spanishFlag,
} from "../../public/assets/images";

export default function LanguageSwitcher({ currentLang }) {
  /* const router = useRouter();
  const pathname = usePathname(); */

  /* const switchLanguage = (lang) => {
    if (lang !== currentLang) {
      // Get the path without the language prefix
      const pathWithoutLang = pathname.replace(`/${currentLang}`, "");
      // Construct new path with selected language
      const newPath = `/${lang}${pathWithoutLang || ""}`;
      // Push the new route with locale
      router.push(newPath);
    }
  }; */

  const languages = {
    sv: swedishFlag,
    en: englishFlag,
    es: spanishFlag,
  };

  // Check if currentLang is a valid key in languages
  const isValidLang = currentLang in languages;
  const defaultLang = isValidLang ? currentLang : "sv"; // Changed fallback to 'sv'

  return (
    <Select onValueChange={() => {}} defaultValue={defaultLang}>
      <SelectTrigger className="w-[70px] bg-transparent border-none focus:ring-0 focus:ring-offset-0">
        <SelectValue>
          {isValidLang && (
            <img
              src={languages[defaultLang]}
              width={24}
              height={24}
              className="w-6 h-4 object-cover"
            />
          )}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {Object.entries(languages).map(([lang, src]) => (
          <SelectItem key={lang} value={lang}>
            <div className="flex items-center w-[20px]">
              <img
                src={src}
                width={24}
                height={24}
                className="w-6 h-4 object-cover mr-2"
              />
              {""}
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
