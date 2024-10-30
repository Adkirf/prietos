'use client'

import { Button } from '@/components/ui/button';
import { ArrowRight } from "lucide-react";

export function CTAButton({ dict, lang }: { dict: any, lang: string }) {

    return (
        <div className="flex justify-center h-[12vh] items-center">
            <Button
                className="
                    h-12
                    border border-primary bg-transparent text-primary-foreground 
                    px-8 py-4 rounded-full text-xl font-bold 
                    hover:bg-secondary hover:scale-105 
                    transition-all duration-300 
                    shadow-lg hover:shadow-xl
                    flex items-center
                "
                onClick={() => window.location.href = `/${lang}/contact`}
            >
                {dict.ourService.CTA}
                <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
        </div>
    )
}