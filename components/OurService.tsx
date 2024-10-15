'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { getTranslations } from "@/lib/utils";
import CTAButton from "@/components/CTAButton";

export function OurSerivce({ params: { lang } }: { params: { lang: string } }) {

  const t = getTranslations(lang);

  return (
    <div className="bg-background text-foreground min-h-screen py-8 flex flex-col  justify-center px-8 md:px-12 lg:px-16">
      <h1 className="mb-4">
        {t.ourService.title}
      </h1>
      <Card className="w-full max-w-4xl mx-auto overflow-hidden">
        <div className="md:flex">
          <div className="flex-1 p-6 bg-primary/5">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold text-left">{t.ourService.leftSection.title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-2">
              <p className="text-muted-foreground">
                {t.ourService.leftSection.description}
              </p>
            </CardContent>
          </div>
          <Separator orientation="vertical" className="" />
          <div className="flex-1 p-6 bg-secondary/5">
            <div className="h-full flex flex-col justify-between">
              <CardContent className="pt-0">
                <p className="mt-4 text-muted-foreground">
                  {t.ourService.rightSection.description}
                </p>
              </CardContent>
              <CardHeader className="pt-2">
                <CardTitle className="text-2xl font-bold text-right">{t.ourService.rightSection.title}</CardTitle>
              </CardHeader>
            </div>
          </div>
        </div>
      </Card>
      <CTAButton lang={lang} />
    </div>
  )
}