import { Button } from '@/components/ui/button';
import { ArrowRight } from "lucide-react";
import { getTranslations } from "@/lib/utils";

export default function CTAButton({ lang }: { lang: string }) {
    const t = getTranslations(lang);

    return (
        <div className="flex justify-center mt-12">
            <Button
                className="
                    h-12
                    bg-primary text-primary-foreground 
                    px-8 py-4 rounded-full text-xl font-bold 
                    hover:bg-secondary hover:scale-105 
                    transition-all duration-300 
                    shadow-lg hover:shadow-xl
                    flex items-center
                "
                onClick={() => window.location.href = `/${lang}/contact`}
            >
                {t.ourService.CTA}
                <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
        </div>
    )
}