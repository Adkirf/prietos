import { getTranslations } from '@/lib/utils';
import { Hero } from '@/components/Hero';
import { ImageComparisonComponent } from '@/components/ImageComparison';
import Services from '@/components/Services';

// Home page component for the multilingual website
// This component renders the content for the home page in the specified language
export default function Home({ params: { lang } }: { params: { lang: string } }) {

    const ImageComparison = {
        beforeImage: '/assets/before.jpg',
        afterImage: '/assets/after.jpg',
        beforeAlt: 'Before',
        afterAlt: 'After'
    }

    return (
        <div className="w-full flex flex-col gap-10">
            <Hero params={{ lang }} />
            <ImageComparisonComponent {...ImageComparison} params={{ lang }} />
            <Services params={{ lang }} />
        </div>
    );
}