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
                <div className="fixed top-0 left-0 w-full h-[12vh] z-50">
                    <Header lang={params.lang} />
                </div>
                <div className="flex flex-col h-[88vh]">
                    <main className="flex-grow w-full bg-background">{children}</main>
                    <Footer lang={params.lang} />
                </div>

            </ThemeProvider>
        </>
    );
}
