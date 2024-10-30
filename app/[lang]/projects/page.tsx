import { CTAButton } from '@/components/CTAButton';
import { ImageGallery } from '@/components/ImageGallery';
import { getDictionary } from '../dictionaries';

export default async function Projects({ params: { lang } }: { params: { lang: string } }) {
    const dict = await getDictionary(lang);

    return (
        <div className="container mx-auto px-4">
            <ImageGallery dict={dict} />
            <CTAButton dict={dict} lang={lang} />
        </div>
    );
}