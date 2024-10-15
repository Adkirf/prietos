import { Hero } from '@/components/Hero';
import { ImageComparisonComponent } from '@/components/ImageComparison';
import { InformationBoxes } from '@/components/InformationBoxes';
import { OurSerivce } from '@/components/OurService';
import WeCover from '@/components/WeCover';

// Home page component for the multilingual website
// This component renders the content for the home page in the specified language
export default function Home({ params: { lang } }: { params: { lang: string } }) {

    return (
        <div className="w-full h-full flex flex-col gap-10 overflow-auto">
            <Hero params={{ lang }} />
            <ImageComparisonComponent params={{ lang }} />
            <InformationBoxes params={{ lang }} />
            <WeCover params={{ lang }} />
            <OurSerivce params={{ lang }} />

        </div>
    );
}