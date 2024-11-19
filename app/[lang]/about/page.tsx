import { AboutUs } from '@/components/AboutUs';
import { CTAButton } from '@/components/CTAButton';
import { getDictionary } from "../dictionaries"

export default async function About({ params: { lang } }: { params: { lang: string } }) {
    const dict = await getDictionary(lang)


    return (
        <div className={`container mx-auto px-4 pb-16`}>
            <AboutUs dict={dict} />
            <CTAButton dict={dict} lang={lang} />
        </div>
    );
}