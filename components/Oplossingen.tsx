'use client'

import { motion } from 'framer-motion'
import { Flame, Zap, Volume2, Thermometer, BarChart2, Shield } from 'lucide-react'

const solutions = [
  {
    icon: Flame,
    title: 'Hybride Warmtepomp',
    subtitle: 'Voor wie nog niet volledig van het gas af kan',
    badge: 'Aanbevolen voor rijtjeswoningen',
    badgeColor: 'bg-orange-100 text-orange-700',
    features: [
      'Werkt samen met uw bestaande CV-ketel',
      'Ideale tussenstap richting volledig aardgasvrij',
      'Lager gasverbruik direct merkbaar',
      'Geschikt voor oudere en slecht geïsoleerde woningen',
    ],
    bg: 'bg-white',
    border: 'border-orange-100',
    iconBg: 'bg-orange-500',
    accentColor: 'text-orange-600',
    description:
      'De hybride warmtepomp is de perfecte keuze als uw woning nog niet optimaal geïsoleerd is of als u de overstap geleidelijk wilt maken. De warmtepomp werkt samen met uw huidige CV-ketel: bij mild weer verwarmt de warmtepomp, bij extreme kou springt de ketel bij. Direct minder gasverbruik, geen grote investering in isolatie vereist.',
  },
  {
    icon: Zap,
    title: 'Full Electric',
    subtitle: 'Volledig aardgasvrij wonen',
    badge: 'Maximale subsidie',
    badgeColor: 'bg-[#2d8a4f]/10 text-[#2d8a4f]',
    features: [
      '100% aardgasvrij — geen gasaansluiting meer nodig',
      'Maximale ISDE-subsidie + Anjum-toeslag',
      'Structureel lagere energierekening',
      'Volledig toekomstbestendig',
    ],
    bg: 'bg-[#f0fdf4]',
    border: 'border-[#2d8a4f]/20',
    iconBg: 'bg-[#2d8a4f]',
    accentColor: 'text-[#2d8a4f]',
    description:
      'De full-electric warmtepomp maakt u volledig onafhankelijk van aardgas. Met de juiste isolatie haalt u een COP van 4 of hoger — dat betekent dat u voor elke euro aan stroom vier euro aan warmte krijgt. Combineer met zonnepanelen voor minimale energiekosten. Geschikt voor goed geïsoleerde woningen in Anjum.',
  },
]

const hitachiFeatures = [
  { icon: Volume2, label: 'Fluisterstil', value: 'slechts 40dB', sub: 'Stiller dan uw koelkast (45dB)' },
  { icon: Thermometer, label: 'Koudeprestaties', value: 'Werkt tot -20°C', sub: 'Optimaal voor Friese winters' },
  { icon: BarChart2, label: 'Efficiëntie', value: 'COP tot 4.8', sub: 'Zeer efficiënt warmtepompsysteem' },
  { icon: Shield, label: 'Garantie', value: '10 jaar', sub: 'Volledige fabrieksgarantie' },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
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

export default function Oplossingen() {
  return (
    <section id="oplossingen" className="py-20 bg-[#eff6ff]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-[#1a4f8a]/10 text-[#1a4f8a] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Onze oplossingen
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e293b] mb-4">
            Onze oplossingen voor Anjum-woningen
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            De Hitachi Yutaki: de stilste en meest efficiënte warmtepomp voor Friese woningen
          </p>
        </motion.div>

        {/* Solution Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 mb-10"
        >
          {solutions.map((sol) => {
            const Icon = sol.icon
            return (
              <motion.div
                key={sol.title}
                variants={cardVariants}
                whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                className={`${sol.bg} border ${sol.border} rounded-2xl p-7 shadow-lg cursor-default`}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className={`${sol.iconBg} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon size={22} className="text-white" />
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${sol.badgeColor}`}>
                    {sol.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#1e293b] mb-1">{sol.title}</h3>
                <p className="text-slate-500 text-sm mb-4">{sol.subtitle}</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">{sol.description}</p>

                <ul className="space-y-2.5">
                  {sol.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <span className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${sol.iconBg}`}>
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Hitachi Highlight Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="bg-[#1a4f8a] rounded-2xl p-8 sm:p-10 shadow-xl"
        >
          <div className="text-center mb-8">
            <span className="inline-block bg-white/15 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
              Aanbevolen product
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Waarom de Hitachi Yutaki?
            </h3>
            <p className="text-white/70 text-sm max-w-xl mx-auto">
              Na jarenlange ervaring met warmtepompen in Friesland kiezen wij bewust voor de Hitachi Yutaki — de meest betrouwbare en stille warmtepomp op de markt.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {hitachiFeatures.map((feat) => {
              const Icon = feat.icon
              return (
                <motion.div
                  key={feat.label}
                  whileHover={{ y: -3 }}
                  className="bg-white/10 border border-white/15 rounded-xl p-5 text-center hover:bg-white/15 transition-colors cursor-default"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center mx-auto mb-3">
                    <Icon size={20} className="text-white" />
                  </div>
                  <p className="text-white/70 text-xs font-medium mb-1">{feat.label}</p>
                  <p className="text-white font-bold text-base mb-1">{feat.value}</p>
                  <p className="text-white/55 text-xs">{feat.sub}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
