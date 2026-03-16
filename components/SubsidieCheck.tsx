'use client'

import { motion } from 'framer-motion'
import { Home, MapPin, Percent, ArrowRight } from 'lucide-react'

const subsidyCards = [
  {
    icon: Home,
    title: 'ISDE (Landelijk)',
    subtitle: 'Investeringssubsidie Duurzame Energie',
    amount: 'tot €4.500',
    description:
      'De landelijke ISDE-subsidie van de Rijksoverheid voor iedereen die een warmtepomp installeert. Aanvraag via RVO.nl, wij helpen u hierbij.',
    bg: 'bg-[#eff6ff]',
    border: 'border-[#1a4f8a]/20',
    iconBg: 'bg-[#1a4f8a]',
    amountColor: 'text-[#1a4f8a]',
    badge: 'Rijksoverheid',
    badgeBg: 'bg-[#1a4f8a]/10 text-[#1a4f8a]',
  },
  {
    icon: MapPin,
    title: 'Anjum-toeslag (Lokaal)',
    subtitle: 'Specifieke bijdrage voor Anjum bewoners',
    amount: 'tot €2.500',
    description:
      'Bewoners van Anjum kunnen aanvullend aanspraak maken op een lokale bijdrage via de gemeente Noardeast-Fryslân als onderdeel van het aardgasvrij-programma.',
    bg: 'bg-[#f0fdf4]',
    border: 'border-[#2d8a4f]/20',
    iconBg: 'bg-[#2d8a4f]',
    amountColor: 'text-[#2d8a4f]',
    badge: 'Gemeente',
    badgeBg: 'bg-[#2d8a4f]/10 text-[#2d8a4f]',
  },
  {
    icon: Percent,
    title: 'Btw-verlaging',
    subtitle: '9% BTW op installatie (was 21%)',
    amount: '~€800 besparing',
    description:
      'Sinds 2023 geldt een verlaagd BTW-tarief van 9% op zonnepanelen en warmtepompen. Dit scheelt direct op de totale installatiekosten.',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    iconBg: 'bg-amber-500',
    amountColor: 'text-amber-600',
    badge: 'Belastingdienst',
    badgeBg: 'bg-amber-100 text-amber-700',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function SubsidieCheck() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="subsidie" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-[#eff6ff] text-[#1a4f8a] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Subsidiestapeling
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e293b] mb-4">
            Zo werkt de subsidiestapeling
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Combineer landelijke en lokale subsidie voor de laagste investering ooit
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {subsidyCards.map((card) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                variants={cardVariants}
                whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                className={`${card.bg} border ${card.border} rounded-2xl p-6 shadow-lg cursor-default`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`${card.iconBg} w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${card.badgeBg}`}>
                    {card.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#1e293b] mb-1">{card.title}</h3>
                <p className="text-xs text-slate-500 mb-3">{card.subtitle}</p>
                <p className={`text-2xl font-extrabold ${card.amountColor} mb-3`}>{card.amount}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{card.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Calculation Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="bg-gradient-to-r from-[#1a4f8a] to-[#2d8a4f] rounded-2xl p-8 sm:p-10 text-white text-center shadow-xl"
        >
          <p className="text-white/80 text-sm font-medium uppercase tracking-wider mb-3">Resultaat voor Anjum-bewoners</p>
          <div className="flex items-center justify-center gap-4 mb-4 flex-wrap">
            <span className="text-3xl sm:text-4xl text-white/40 line-through font-bold">€12.500</span>
            <span className="text-white/60 text-2xl">→</span>
            <span className="text-4xl sm:text-5xl font-extrabold text-white">€5.500</span>
          </div>
          <p className="text-lg font-semibold text-white/90 mb-2">
            Uw warmtepomp hoeft maar <strong className="text-white">€5.500</strong> te kosten
          </p>
          <p className="text-white/65 text-sm max-w-lg mx-auto mb-8">
            Door slimme combinatie van ISDE-subsidie, Anjum-toeslag en verlaagd BTW-tarief. Indicatieve berekening — exacte bedragen afhankelijk van uw situatie.
          </p>
          <button
            onClick={() => handleNavClick('#contact')}
            className="inline-flex items-center gap-2 bg-white text-[#1a4f8a] font-bold px-7 py-3.5 rounded-xl hover:bg-[#f0f9ff] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Doe de subsidie-check
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
