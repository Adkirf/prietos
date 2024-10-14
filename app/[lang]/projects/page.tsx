import { ImageGallery } from '@/components/ImageGallery';

// Projects page component for the multilingual website
// This component renders a list of projects with translated titles
export default function Projects({ params: { lang } }: { params: { lang: string } }) {
    // Get translations for the specified language

    return (
        <div className="container mx-auto px-4">
            <ImageGallery params={{ lang }} />
        </div>
    );
}