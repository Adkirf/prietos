import { getDictionary } from "./dictionaries"
import { Hero } from "@/components/Hero"
import { ImageComparison } from "@/components/ImageComparison"
import { InformationBoxes } from "@/components/InformationBoxes"
import { WeCover } from "@/components/WeCover"
import { OurSerivce } from "@/components/OurService"
import { CTAButton } from "@/components/CTAButton"
import FlipCubeShort from "@/components/FlipCupeShort"

export default async function Home({
    params: { lang },
}: {
    params: { lang: string }
}) {
    const dict = await getDictionary(lang)

    return (
        <div className="w-full h-full flex flex-col gap-10 pb-16 overflow-auto">
            <Hero dict={dict} />
            <ImageComparison dict={dict} />
            <InformationBoxes dict={dict} />
            <FlipCubeShort dict={dict} />
            <WeCover dict={dict} />
            <OurSerivce dict={dict} />
            <CTAButton dict={dict} lang={lang} />
        </div>
    )
} 