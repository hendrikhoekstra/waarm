'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Home, Users, Star, Quote } from 'lucide-react'

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1800
    const step = 16
    const increment = target / (duration / step)

    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, step)

    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

const stats = [
  {
    icon: Home,
    value: 47,
    suffix: '+',
    label: 'woningen verduurzaamd',
    sub: 'in Anjum en omgeving',
    iconBg: 'bg-[#1a4f8a]',
  },
  {
    icon: Users,
    value: 7000,
    prefix: '€',
    suffix: '',
    label: 'gemiddelde subsidie',
    sub: 'voor onze klanten',
    iconBg: 'bg-[#2d8a4f]',
    isEuro: true,
  },
  {
    icon: Star,
    value: 49,
    suffix: '★',
    label: 'klantwaardering',
    sub: 'op basis van klantreviews',
    iconBg: 'bg-amber-500',
    isDivide10: true,
  },
]

const textBlocks = [
  {
    icon: Home,
    title: 'Bekend met Anjum-woningen',
    text: 'Anjum heeft een diverse woningvoorraad — van naoorlogse jaren \'50-\'70 rijtjeswoningen tot authentieke Friese boerderijen en moderne nieuwbouw. Elk type vraagt om een andere aanpak. Wij kennen elke straat en weten precies welke oplossing bij uw woning past.',
  },
  {
    icon: Users,
    title: 'Nauwe samenwerking met de energiecoöperatie',
    text: 'Waarm werkt nauw samen met de lokale energiecoöperatie van Anjum. Zo kunnen wij u niet alleen de beste technische oplossing bieden, maar ook de weg wijzen naar alle lokale subsidies en regelingen die beschikbaar zijn voor Anjum-bewoners.',
  },
]

export default function LokaalBetrokken() {
  return (
    <section id="lokaal" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-[#f0fdf4] text-[#2d8a4f] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Lokaal betrokken
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e293b] mb-4">
            Waarm in het dorp
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Wij zijn geen anoniem installatiebedrijf. Wij kennen Anjum.
          </p>
        </motion.div>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-14">
          {/* Left: Text blocks */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-8"
          >
            {textBlocks.map((block, i) => {
              const Icon = block.icon
              return (
                <motion.div
                  key={block.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.15 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#f0fdf4] border border-[#2d8a4f]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={18} className="text-[#2d8a4f]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#1e293b] mb-2">{block.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{block.text}</p>
                  </div>
                </motion.div>
              )
            })}

            {/* Stat highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
              className="bg-[#f0fdf4] border border-[#2d8a4f]/20 rounded-2xl p-6"
            >
              <p className="text-4xl font-extrabold text-[#2d8a4f] mb-1">47+</p>
              <p className="text-[#1e293b] font-semibold mb-1">woningen in Anjum verduurzaamd</p>
              <p className="text-slate-500 text-sm">
                En elke woning was anders. Van vrijstaande boerderijen tot smalle rijtjeswoningen — we hebben het allemaal gedaan.
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Stat Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-4"
          >
            {stats.map((stat, i) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.12 }}
                  whileHover={{ y: -3, boxShadow: '0 12px 30px rgba(0,0,0,0.08)' }}
                  className="bg-white border border-slate-100 rounded-2xl p-6 shadow-lg flex items-center gap-5"
                >
                  <div className={`${stat.iconBg} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="text-3xl font-extrabold text-[#1e293b]">
                      {stat.isEuro && <span>€</span>}
                      {stat.isDivide10 ? (
                        <span>4.9</span>
                      ) : stat.isEuro ? (
                        <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                      ) : (
                        <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                      )}
                    </p>
                    <p className="text-[#1e293b] font-semibold text-sm">{stat.label}</p>
                    <p className="text-slate-400 text-xs">{stat.sub}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="bg-gradient-to-r from-[#eff6ff] to-[#f0fdf4] border border-slate-200 rounded-2xl p-8 sm:p-10"
        >
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 rounded-full bg-[#1a4f8a] flex items-center justify-center">
                <span className="text-white text-xl font-bold">JV</span>
              </div>
            </div>
            <div>
              <Quote size={28} className="text-[#1a4f8a]/30 mb-3" />
              <blockquote className="text-lg text-[#1e293b] font-medium leading-relaxed mb-4 italic">
                "Waarm heeft alles geregeld, van subsidieaanvraag tot installatie. Binnen een week van het gesprek tot het contract. De monteurs waren netjes en de warmtepomp werkt perfect. Al onze buren willen nu ook."
              </blockquote>
              <div>
                <p className="font-bold text-[#1e293b]">Jan de Vries</p>
                <p className="text-slate-500 text-sm">Anjum — hybride warmtepomp geïnstalleerd in 2024</p>
                <div className="flex gap-0.5 mt-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
