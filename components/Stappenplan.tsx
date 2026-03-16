'use client'

import { motion } from 'framer-motion'
import { MessageSquare, FileText, Coins, Wrench, ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Gratis Adviesgesprek',
    description:
      'We komen bij u langs in Anjum voor een vrijblijvend gesprek over uw woning en wensen. We bekijken samen wat de beste oplossing is voor uw situatie.',
    duration: 'Vrijblijvend',
    iconBg: 'bg-[#1a4f8a]',
    numberColor: 'text-[#1a4f8a]',
    borderColor: 'border-[#1a4f8a]/20',
    bg: 'bg-[#eff6ff]',
  },
  {
    number: '02',
    icon: FileText,
    title: 'Maatwerk Offerte',
    description:
      'U ontvangt binnen 48 uur een gedetailleerde offerte op maat, inclusief een complete subsidieberekening. Transparant en zonder verborgen kosten.',
    duration: 'Binnen 48 uur',
    iconBg: 'bg-[#2d8a4f]',
    numberColor: 'text-[#2d8a4f]',
    borderColor: 'border-[#2d8a4f]/20',
    bg: 'bg-[#f0fdf4]',
  },
  {
    number: '03',
    icon: Coins,
    title: 'Hulp bij Subsidieaanvraag',
    description:
      'Wij regelen de complete subsidieaanvraag voor u — zowel de ISDE als de lokale Anjum-toeslag. Geen gedoe met formulieren, geen stress.',
    duration: 'Volledig ontzorgd',
    iconBg: 'bg-amber-500',
    numberColor: 'text-amber-600',
    borderColor: 'border-amber-200',
    bg: 'bg-amber-50',
  },
  {
    number: '04',
    icon: Wrench,
    title: 'Vakkundige Installatie',
    description:
      'Onze gecertificeerde F-gassen monteurs installeren uw Hitachi Yutaki netjes en efficiënt. Doorgaans klaar in 1 tot 2 dagen, inclusief oplevering en uitleg.',
    duration: '1–2 werkdagen',
    iconBg: 'bg-[#1a4f8a]',
    numberColor: 'text-[#1a4f8a]',
    borderColor: 'border-[#1a4f8a]/20',
    bg: 'bg-[#eff6ff]',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
  },
}

const stepVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function Stappenplan() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="stappenplan" className="py-20 bg-[#f0fdf4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-[#2d8a4f]/10 text-[#2d8a4f] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Hoe het werkt
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e293b] mb-4">
            Van aanvraag tot warme woning in 4 stappen
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Wij nemen u bij de hand van het eerste gesprek tot de eerste warme kamer.
          </p>
        </motion.div>

        {/* Steps Grid — Desktop timeline, mobile vertical */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 relative"
        >
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-10 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-0.5 bg-gradient-to-r from-[#1a4f8a]/30 via-[#2d8a4f]/30 to-[#1a4f8a]/30 z-0" />

          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                variants={stepVariants}
                whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                className={`relative ${step.bg} border ${step.borderColor} rounded-2xl p-6 shadow-lg cursor-default z-10`}
              >
                {/* Step Number */}
                <div className="flex items-center justify-between mb-5">
                  <span className={`text-4xl font-black ${step.numberColor} opacity-20 leading-none`}>
                    {step.number}
                  </span>
                  <div className={`${step.iconBg} w-11 h-11 rounded-xl flex items-center justify-center`}>
                    <Icon size={20} className="text-white" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-[#1e293b] mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{step.description}</p>

                {/* Duration Badge */}
                <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${step.borderColor}`}
                  style={{ background: 'rgba(255,255,255,0.7)' }}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${step.iconBg}`} />
                  {step.duration}
                </span>

                {/* Arrow connector for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-4 -mb-2">
                    <ArrowRight size={20} className="text-slate-400 rotate-90" />
                  </div>
                )}
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
          className="text-center"
        >
          <button
            onClick={() => handleNavClick('#contact')}
            className="inline-flex items-center gap-2 bg-[#2d8a4f] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#236b3e] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base"
          >
            Start vandaag met stap 1
            <ArrowRight size={18} />
          </button>
          <p className="text-slate-400 text-sm mt-3">100% vrijblijvend — geen verplichtingen</p>
        </motion.div>
      </div>
    </section>
  )
}
