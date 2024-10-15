'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, Clock, Phone, Mail, MapPin } from 'lucide-react'
import { getTranslations } from '@/lib/utils';


export default function Footer({ lang }: { lang: string }) {

    const t = getTranslations(lang);

    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo Section */}
                    <div className="flex flex-col items-center md:items-start">
                        <Image
                            src={t.footer.logoSrc}
                            alt="Prietos Logo"
                            width={140}
                            height={70}
                            className="mb-4"
                        />
                        <p className="text-sm text-gray-400 text-center md:text-left">
                            {t.footer.title}
                        </p>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">{t.footer.contact}</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <Phone size={18} className="mr-2 text-[#35A30D]" />
                                <span>{t.footer.phone}</span>
                            </li>
                            <li className="flex items-center">
                                <Mail size={18} className="mr-2 text-[#35A30D]" />
                                <a href="mailto:info@prietos.se" className="hover:text-[#35A30D] transition-colors">
                                    {t.footer.email}
                                </a>
                            </li>
                            <li className="flex items-center">
                                <Clock size={18} className="mr-2 text-[#35A30D]" />
                                <span>{t.footer.openingHours}</span>
                            </li>
                            <li className="flex items-center">
                                <MapPin size={18} className="mr-2 text-[#35A30D]" />
                                <span>{t.footer.address}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">{t.footer.followUs}</h3>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com/prietos" target="_blank" rel="noopener noreferrer" className="hover:text-[#35A30D] transition-colors">
                                <Facebook size={24} />
                                <span className="sr-only">{t.footer.facebook}</span>
                            </a>
                            <a href="https://instagram.com/prietos" target="_blank" rel="noopener noreferrer" className="hover:text-[#35A30D] transition-colors">
                                <Instagram size={24} />
                                <span className="sr-only">{t.footer.instagram}</span>
                            </a>
                        </div>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">{t.footer.legal}</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/terms" className="hover:text-[#35A30D] transition-colors">
                                    {t.footer.termsAndConditions}
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="hover:text-[#35A30D] transition-colors">
                                    {t.footer.privacyPolicy}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-4 border-t border-gray-800 text-center text-sm text-gray-400">
                    © {new Date().getFullYear()} Prietos Kompaniet. {t.footer.allRightsReserved}
                </div>
            </div>
        </footer>
    )
}
