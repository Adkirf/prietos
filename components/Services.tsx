import Image from 'next/image'
import { HousePlus, Leaf, PiggyBank } from 'lucide-react'
import { getTranslations } from '@/lib/utils';

export default function Services({ params: { lang } }: { params: { lang: string } }) {

    const t = getTranslations(lang);

    return (
        <section className="w-full min-h-screen py-12 md:py-24 lg:py-32 bg-background">
            <div className="container px-4 md:px-6 relative">
                <div className="flex relative flex-col lg:flex-row gap-6 lg:gap-12">
                    <div className="lg:w-auto">
                        <div className="md:aspect-video w-full lg:w-[300px] overflow-hidden rounded-xl ">
                            <div className="inset-0 flex h-[75px] md:h-full items-center justify-center">
                                <h2 className="text-3xl font-bold text-foreground text-center">{t.services.title}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="flex-grow flex flex-col justify-center space-y-4 text-muted-foreground">
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-10 h-10 mr-4">
                                    <HousePlus className="h-6 w-6 mt-1 text-primary" />
                                </div>
                                <div className="flex-grow">
                                    <h3 className="font-bold text-foreground">{t.services.service1Title}</h3>
                                    <p className="mt-2 space-y-1 text-muted-foreground">
                                        {t.services.service1Description}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-10 h-10 mr-4">
                                    <Leaf className="h-6 w-6 mt-1 text-primary" />
                                </div>
                                <div className="flex-grow">
                                    <h3 className="font-bold text-foreground">{t.services.service2Title}</h3>
                                    <p className='mt-2 space-y-1 text-muted-foreground'>
                                        {t.services.service2Description}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-10 h-10 mr-4">
                                    <PiggyBank className="h-6 w-6 mt-1 text-primary" />
                                </div>
                                <div className="flex-grow">
                                    <h3 className="font-bold text-foreground">{t.services.service3Title}</h3>
                                    <p className="mt-2 space-y-1 text-muted-foreground">
                                        {t.services.service3Description}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <button className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                            {t.services.CTA}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
