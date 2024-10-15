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
                <div className="flex flex-col h-screen w-screen overflow-auto">
                    <div className="sticky top-0 left-0 w-full z-50">
                        <Header lang={params.lang} />
                    </div>
                    <div className="flex flex-col flex-grow">
                        <main className="flex-grow w-full bg-background">{children}</main>
                        <Footer lang={params.lang} />
                    </div>
                </div>
            </ThemeProvider>
        </>
    );
}
