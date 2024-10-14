import ContactForm from '@/components/ContactForm';

// Contact page component for the multilingual website
// This component renders a contact form with translated labels and button text
export default function Contact({ params: { lang } }: { params: { lang: string } }) {
    // Get translations for the specified language

    return (
        <div className="container mx-auto py-12 px-2">
            <ContactForm params={{ lang }} />
        </div>
    );
}