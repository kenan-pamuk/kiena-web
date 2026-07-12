import React from 'react';
import Link from 'next/link';
import NextImage from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-[#030315] text-[#94a3b8] font-sans pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Görseldeki Ana Yuvarlatılmış Kutu (Card Yapısı) */}
        <div className="bg-[#050714] border border-slate-900/50 rounded-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 items-start">
          
          {/* Sol Blok: Logo, Açıklama ve Yuvarlak Sosyal Medya İkonları */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center">
              <NextImage 
                src="/assets/kiena_logo_glowyn.png" 
                alt="Kiena Logo" 
                width={130} 
                height={32}
                className="object-contain"
              />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Yapay zekâ ve veri teknolojileriyle dijital dünyanın geleceğini şekillendiriyoruz.
            </p>
            {/* Görseldeki Yuvarlak Arka Planlı Sosyal İkonlar */}
            <div className="flex space-x-3 pt-2">
              <Link href="#" className="w-8 h-8 rounded-full bg-slate-900/60 hover:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-all" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full bg-slate-900/60 hover:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-all" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full bg-slate-900/60 hover:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-all" aria-label="X">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full bg-slate-900/60 hover:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-all" aria-label="YouTube">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Menü 1: Şirket */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-white font-medium text-xs tracking-wider">Şirket</h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/hakkimizda" className="hover:text-white transition-colors">Hakkımızda</Link></li>
              <li><Link href="/misyonumuz" className="hover:text-white transition-colors">Misyonumuz</Link></li>
              <li><Link href="/degerlerimiz" className="hover:text-white transition-colors">Değerlerimiz</Link></li>
              <li><Link href="/kariyer" className="hover:text-white transition-colors">Kariyer</Link></li>
            </ul>
          </div>

          {/* Menü 2: Çözümlerimiz */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-white font-medium text-xs tracking-wider">Çözümlerimiz</h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/cozumler/yapay-zeka" className="hover:text-white transition-colors">Yapay Zekâ</Link></li>
              <li><Link href="/cozumler/veri-analitigi" className="hover:text-white transition-colors">Veri Analitiği</Link></li>
              <li><Link href="/cozumler/mobil-uygulamalar" className="hover:text-white transition-colors">Mobil Uygulamalar</Link></li>
              <li><Link href="/cozumler/danismanlik" className="hover:text-white transition-colors">Danışmanlık</Link></li>
            </ul>
          </div>

          {/* Menü 3: Glowyn */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-white font-medium text-xs tracking-wider">Glowyn</h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/glowyn-nedir" className="hover:text-white transition-colors">Glowyn Nedir?</Link></li>
              <li><Link href="/ozellikler" className="hover:text-white transition-colors">Özellikler</Link></li>
              <li><Link href="/yakinda" className="hover:text-white transition-colors">Yakında</Link></li>
              <li><Link href="/sss" className="hover:text-white transition-colors">S.S.S.</Link></li>
            </ul>
          </div>

          {/* Menü 4: İletişim (Görseldeki Mor İkonlu Yapı) */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-white font-medium text-xs tracking-wider">İletişim</h3>
            <ul className="space-y-3 text-xs text-slate-400">
              {/* E-posta */}
              <li className="flex items-center space-x-2.5">
                <div className="text-[#a855f7] flex-shrink-0">
                  <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:hello@kiena.com" className="hover:text-white transition-colors truncate">
                  hello@kiena.com
                </a>
              </li>
              {/* Konum */}
              <li className="flex items-center space-x-2.5">
                <div className="text-[#a855f7] flex-shrink-0">
                  <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-slate-400">İstanbul, Türkiye</span>
              </li>
            </ul>
          </div>

        </div>

        {/* En Alt: Copyright Satırı */}
        <div className="pt-6 text-center text-[11px] text-slate-500 tracking-wide">
          <p>© 2024 Kiena Teknoloji A.Ş. Tüm hakları saklıdır.</p>
        </div>

      </div>
    </footer>
  );
}
