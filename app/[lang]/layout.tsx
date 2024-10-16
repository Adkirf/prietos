'use client'

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Roboto, Lato, Open_Sans, Montserrat, Playfair_Display } from "next/font/google";
import React, { useState } from "react";

const roboto = Roboto({
    weight: ['400', '700'],
    subsets: ["latin"],
    display: 'swap',
});

const lato = Lato({
    weight: ['400', '700'],
    subsets: ["latin"],
    display: 'swap',
});

const openSans = Open_Sans({
    subsets: ["latin"],
    display: 'swap',
});

const montserrat = Montserrat({
    subsets: ["latin"],
    display: 'swap',
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    display: 'swap',
});

// Choose the font you want to use here
const chosenFont = playfair;

// Layout component for language-specific pages
// This component wraps the content of each page with a common header and footer
export default function LangLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { lang: string };
}) {
    const [currentFont, setCurrentFont] = useState(chosenFont);
    const fonts = [roboto, lato, openSans, montserrat, playfair];
    const fontNames = ['Roboto', 'Lato', 'Open Sans', 'Montserrat', 'Playfair Display'];

    const changeFont = () => {
        const currentIndex = fonts.indexOf(currentFont);
        const nextIndex = (currentIndex + 1) % fonts.length;
        setCurrentFont(fonts[nextIndex]);
    };

    return (
        <div className={currentFont.className}>
            <ThemeProvider>
                <div className="fixed top-0 left-0 w-full h-[12vh] z-50">
                    <Header lang={params.lang} />
                </div>
                <div className="flex flex-col h-[88vh]">
                    <main className="flex-grow w-full bg-background">
                        {children}
                        <button
                            onClick={changeFont}
                            className="fixed bottom-4 z-100 right-4 bg-primary text-primary-foreground px-4 py-2 rounded"
                        >
                            Change Font ({fontNames[fonts.indexOf(currentFont)]})
                        </button>
                    </main>
                    <Footer lang={params.lang} />
                </div>
            </ThemeProvider>
        </div>
    );
}
