'use client'

import Image from 'next/image'
import { Phone, Mail, MapPin, Shield } from 'lucide-react'

const footerLinks = [
  { label: 'Subsidie', href: '#subsidie' },
  { label: 'Oplossingen', href: '#oplossingen' },
  { label: 'Over ons', href: '#lokaal' },
  { label: 'Stappenplan', href: '#stappenplan' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

const legalLinks = [
  { label: 'Privacyverklaring', href: '#' },
  { label: 'Algemene voorwaarden', href: '#' },
  { label: 'Cookiebeleid', href: '#' },
]

export default function Footer() {
  const handleNavClick = (href: string) => {
    if (href === '#') return
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-1.5 mb-4">
              <Image src="/logo.svg" alt="WAARM." width={130} height={44} />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5 max-w-sm">
              Waarm is uw lokale specialist voor warmtepompen in Anjum en omgeving. Wij zorgen voor een zorgeloze overstap naar aardgasvrij wonen — van subsidieaanvraag tot installatie.
            </p>

            {/* F-gassen badge */}
            <div className="inline-flex items-center gap-2.5 bg-white/8 border border-white/15 rounded-xl px-4 py-2.5">
              <Shield size={16} className="text-[#4ade80]" />
              <div>
                <p className="text-white text-xs font-semibold">Erkend F-gassen installateur</p>
                <p className="text-slate-400 text-xs">Gecertificeerd & verzekerd</p>
              </div>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Navigatie</h3>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-slate-400 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5 text-slate-400 text-sm">
                <MapPin size={15} className="text-slate-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white text-sm font-medium">Waarm B.V.</p>
                  <p>Anjum, Friesland</p>
                  <p>9145 AX Anjum</p>
                </div>
              </div>
              <a
                href="tel:0519000000"
                className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors text-sm"
              >
                <Phone size={15} className="text-slate-500 flex-shrink-0" />
                0519-XXX XXX
              </a>
              <a
                href="mailto:info@waarm.nl"
                className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors text-sm"
              >
                <Mail size={15} className="text-slate-500 flex-shrink-0" />
                info@waarm.nl
              </a>
            </div>

            {/* Opening hours */}
            <div className="mt-5 bg-white/6 rounded-xl p-3.5">
              <p className="text-white text-xs font-semibold mb-1.5">Openingstijden</p>
              <p className="text-slate-400 text-xs">Ma–Vr: 08:00 – 17:30</p>
              <p className="text-slate-400 text-xs">Za: op afspraak</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-slate-500 text-xs">
              © 2025 Waarm B.V. — Alle rechten voorbehouden. KvK: 12345678
            </p>
            <div className="flex items-center gap-5">
              {legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-slate-500 text-xs hover:text-slate-300 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
