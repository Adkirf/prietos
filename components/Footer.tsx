'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, Clock, Phone, Mail, MapPin } from 'lucide-react'
import { useFont } from './context/FontProvider';

import { prietosLogo } from '@/lib/assets';
import { Dictionary } from '@/app/[lang]/dictionaries'

export default function Footer({ dict, lang }: { dict: Dictionary, lang: string }) {

    const { font } = useFont();

    return (
        <footer className={`bg-black text-white py-8 ${font.className}`}>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_2fr_1fr_1.5fr] gap-8">
                    {/* Logo Section */}
                    <div className="flex flex-col items-center md:items-start">
                        <Image
                            src={prietosLogo.src}
                            alt={prietosLogo.alt}
                            width={140}
                            height={70}
                            className="mb-4"
                        />
                        <p className="text-sm text-gray-400 text-center md:text-left">
                            {dict.footer.title}
                        </p>
                    </div>

                    {/* Contact Information */}
                    <div className="max-w-xs">
                        <h3 className="text-lg font-semibold mb-4">{dict.footer.contact}</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                                <Phone size={18} className="flex-shrink-0 text-[#35A30D]" />
                                <span>{dict.footer.phone}</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail size={18} className="flex-shrink-0 text-[#35A30D]" />
                                <a href="mailto:info@prietos.se" className="hover:text-[#35A30D] transition-colors">
                                    {dict.footer.email}
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Clock size={18} className="flex-shrink-0 text-[#35A30D]" />
                                <span>{dict.footer.openingHours}</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin size={18} className="flex-shrink-0 text-[#35A30D]" />
                                <span>{dict.footer.address}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">{dict.footer.followUs}</h3>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/people/Prietos-Kompaniet/100063936199530/" target="_blank" rel="noopener noreferrer" className="hover:text-[#35A30D] transition-colors">
                                <Facebook size={24} />
                                <span className="sr-only">{dict.footer.facebook}</span>
                            </a>
                            <a href="https://www.instagram.com/prietoskompaniet/" target="_blank" rel="noopener noreferrer" className="hover:text-[#35A30D] transition-colors">
                                <Instagram size={24} />
                                <span className="sr-only">{dict.footer.instagram}</span>
                            </a>
                        </div>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">{dict.footer.legal}</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href={`/${lang}`} className="hover:text-[#35A30D] transition-colors">
                                    {dict.footer.termsAndConditions}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${lang}/privacy`} className="hover:text-[#35A30D] transition-colors">
                                    {dict.footer.privacyPolicy}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-4 border-t border-gray-800 text-center text-sm text-gray-400">
                    © {new Date().getFullYear()} Prietos Kompaniet. {dict.footer.allRightsReserved}
                </div>
            </div>
        </footer>
    )
}
