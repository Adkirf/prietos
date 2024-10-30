import ContactForm from '@/components/ContactForm';
import { getDictionary } from "../dictionaries"

// Contact page component for the multilingual website
// This component renders a contact form with translated labels and button text
export default async function Contact({ params: { lang } }: { params: { lang: string } }) {
    const dict = await getDictionary(lang);

    return (
        <div className="container mx-auto pt-[15vh] pb-6 px-4">
            <ContactForm dict={dict} />
        </div>
    );
}