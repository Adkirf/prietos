'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Mail, Phone } from "lucide-react"
import { getTranslations } from "@/lib/utils"

export default function ContactForm({ params: { lang } }: { params: { lang: string } }) {
  const t = getTranslations(lang);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-card rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-foreground">{t.contactForm.title}</h2>
      <div className="mb-8 text-center">
        <div className="space-y-2">
          <p className="flex items-center justify-center text-sm text-foreground">
            <Mail className="mr-2 h-4 w-4" />
            <a href="mailto:info@prietos.se" className="text-primary hover:underline">info@prietos.se</a>
          </p>
          <p className="flex items-center justify-center text-sm text-foreground">
            <Phone className="mr-2 h-4 w-4" />
            <a href="tel:+46123456789" className="text-primary hover:underline">+46 123 456 789</a>
          </p>
          <p className="text-sm text-muted-foreground mb-4">{t.contactForm.or}</p>
          <Separator className="my-4" />
        </div>
      </div>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
            {t.contactForm.label.name}
          </label>
          <Input id="name" placeholder={t.contactForm.placeholder.name} required />
        </div>
        <div>
          <label htmlFor="number" className="block text-sm font-medium text-foreground mb-1">
            {t.contactForm.label.phone}
          </label>
          <Input id="number" type="tel" placeholder={t.contactForm.placeholder.phone} required />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
            {t.contactForm.label.email}
          </label>
          <Input id="email" type="email" placeholder={t.contactForm.placeholder.email} required />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
            {t.contactForm.label.message}
          </label>
          <Textarea id="message" placeholder={t.contactForm.placeholder.message} className="min-h-[100px]" required />
        </div>
        <div className="flex justify-end w-full">
          <Button type="submit" className="w-36 bg-primary hover:bg-secondary text-primary-foreground">
            {t.contactForm.label.send}
          </Button>
        </div>
      </form>
    </div>
  )
}
