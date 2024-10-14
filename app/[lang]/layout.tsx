'use client'

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

// Layout component for language-specific pages
// This component wraps the content of each page with a common header and footer
export default function LangLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { lang: string };
}) {
    return (
        <>
            <ThemeProvider>
                <Header lang={params.lang} />
                <main className="min-h-screen w-screen bg-background">{children}</main>
                <Footer lang={params.lang} />
            </ThemeProvider>
        </>
    );
}
