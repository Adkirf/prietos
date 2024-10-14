import { AboutUs } from '@/components/AboutUs';
import { getTranslations } from '@/lib/utils';

// About page component for the multilingual website
// This component renders the content for the About page in the specified language
export default function About({ params: { lang } }: { params: { lang: string } }) {
    // Get translations for the specified language


    return (
        <div className="container mx-auto px-4">
            <AboutUs params={{ lang }} />
        </div>
    );
}