'use client'
import { AboutUs } from '@/components/AboutUs';
import CTAButton from '@/components/CTAButton';

// About page component for the multilingual website
// This component renders the content for the About page in the specified language
export default function About({ params: { lang } }: { params: { lang: string } }) {
    // Get translations for the specified language


    return (
        <div className="container mx-auto px-4 pb-16">
            <AboutUs params={{ lang }} />
            <CTAButton lang={lang} />
        </div>
    );
}