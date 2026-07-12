import Image from "next/image";
import Link from "next/link";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { HiOutlineMail } from 'react-icons/hi';
import { IoLocationOutline } from 'react-icons/io5';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#030315] text-[#94a3b8] font-sans pt-16 pb-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Üst Kısım: Logo ve Link Grupları */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 xl:gap-12 pb-12">
          
          {/* Logo ve Hakkında Alanı */}
          <div className="lg:col-span-1 flex flex-col space-y-4">
            <div className="flex items-center">
              <Image 
                src="/assets/kiena_logo_glowyn.png" 
                alt="Kiena Logo" 
                width={130} 
                height={35}
                className="object-contain"
              />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Yapay zekâ ve veri teknolojileriyle dijital dünyanın geleceğini şekillendiriyoruz.
            </p>
            {/* Sosyal Medya İkonları */}
            <div className="flex space-x-4 pt-2">
              <Link href="#" className="hover:text-white transition-colors" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </Link>
              <Link href="#" className="hover:text-white transition-colors" aria-label="Instagram">
                <FaInstagram size={20} />
              </Link>
              <Link href="#" className="hover:text-white transition-colors" aria-label="X">
                <FaXTwitter size={18} />
              </Link>
              <Link href="#" className="hover:text-white transition-colors" aria-label="YouTube">
                <FaYoutube size={20} />
              </Link>
            </div>
          </div>

          {/* Menü 1: Şirket */}
          <div>
            <h3 className="text-white font-medium text-base mb-4">Şirket</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/hakkimizda" className="hover:text-white transition-colors">Hakkımızda</Link></li>
              <li><Link href="/misyonumuz" className="hover:text-white transition-colors">Misyonumuz</Link></li>
              <li><Link href="/degerlerimiz" className="hover:text-white transition-colors">Değerlerimiz</Link></li>
              <li><Link href="/kariyer" className="hover:text-white transition-colors">Kariyer</Link></li>
            </ul>
          </div>

          {/* Menü 2: Çözümlerimiz */}
          <div>
            <h3 className="text-white font-medium text-base mb-4">Çözümlerimiz</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/cozumler/yapay-zeka" className="hover:text-white transition-colors">Yapay Zekâ</Link></li>
              <li><Link href="/cozumler/veri-analitigi" className="hover:text-white transition-colors">Veri Analitiği</Link></li>
              <li><Link href="/cozumler/mobil-uygulamalar" className="hover:text-white transition-colors">Mobil Uygulamalar</Link></li>
              <li><Link href="/cozumler/danismanlik" className="hover:text-white transition-colors">Danışmanlık</Link></li>
            </ul>
          </div>

          {/* Menü 3: Glowyn */}
          <div>
            <h3 className="text-white font-medium text-base mb-4">Glowyn</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/glowyn-nedir" className="hover:text-white transition-colors">Glowyn Nedir?</Link></li>
              <li><Link href="/ozellikler" className="hover:text-white transition-colors">Özellikler</Link></li>
              <li><Link href="/yakinda" className="hover:text-white transition-colors">Yakında</Link></li>
              <li><Link href="/sss" className="hover:text-white transition-colors">S.S.S.</Link></li>
            </ul>
          </div>

          {/* Menü 4: İletişim */}
          <div>
            <h3 className="text-white font-medium text-base mb-4">İletişim</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <HiOutlineMail className="text-slate-400 flex-shrink-0" size={18} />
                <a href="mailto:hello@kiena.com" className="hover:text-white transition-colors truncate">
                  hello@kiena.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <IoLocationOutline className="text-slate-400 mt-0.5 flex-shrink-0" size={18} />
                <span className="text-slate-400">İstanbul, Türkiye</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Alt Kısım: Telif Hakkı (Copyright) */}
        <div className="border-t border-slate-900 pt-6 text-center text-xs text-slate-500">
          <p>© {currentYear} Kiena Teknoloji A.Ş. Tüm hakları saklıdır.</p>
        </div>

      </div>
    </footer>
  );
}
