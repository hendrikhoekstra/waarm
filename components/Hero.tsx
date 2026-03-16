'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight } from 'lucide-react'

const subsidyItems = [
  { label: 'Aanschaf warmtepomp', amount: '-€12.500', color: 'text-red-300', prefix: '' },
  { label: 'ISDE subsidie', amount: '+€4.500', color: 'text-green-300', prefix: '' },
  { label: 'Anjum-toeslag', amount: '+€2.500', color: 'text-green-300', prefix: '' },
  { label: 'Netto investering', amount: '€5.500', color: 'text-white font-bold text-xl', prefix: '', divider: true },
]

const trustBadges = [
  'Erkend installateur',
  'Subsidie-hulp inbegrepen',
  'Lokaal in Anjum',
]

function FloatingCircle({ size, top, left, delay, opacity }: { size: number; top: string; left: string; delay: number; opacity: number }) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        top,
        left,
        background: `rgba(255,255,255,${opacity})`,
      }}
      animate={{
        y: [0, -20, 0],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 6 + delay,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    />
  )
}

export default function Hero() {
  const [cardVisible, setCardVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setCardVisible(true), 600)
    return () => clearTimeout(timer)
  }, [])

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, x: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.7, ease: 'easeOut', delay: 0.4 },
    },
  }

  const rowVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: 'easeOut', delay: 0.8 + i * 0.15 },
    }),
  }

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 60%, #1a1a1a 100%)',
      }}
    >
      {/* Floating background circles */}
      <FloatingCircle size={300} top="10%" left="-5%" delay={0} opacity={0.04} />
      <FloatingCircle size={200} top="60%" left="5%" delay={2} opacity={0.05} />
      <FloatingCircle size={150} top="20%" left="85%" delay={1} opacity={0.06} />
      <FloatingCircle size={400} top="50%" left="60%" delay={3} opacity={0.03} />
      <FloatingCircle size={100} top="80%" left="75%" delay={1.5} opacity={0.07} />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-white"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-[#ed6f1e] animate-pulse" />
                Officieel installateur in Anjum
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-5xl font-extrabold leading-tight mb-6 text-balance"
            >
              Anjum gaat Aardgasvrij:{' '}
              <span className="text-[#ed6f1e]">Waarm</span> helpt u de overstap te maken.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-white/85 mb-8 leading-relaxed max-w-lg"
            >
              Profiteer van lokale expertise en de maximale subsidie van{' '}
              <span className="font-bold text-white">€7.000,-</span> voor uw nieuwe warmtepomp.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
                onClick={() => handleNavClick('#contact')}
                className="flex items-center justify-center gap-2 bg-[#ed6f1e] text-white font-bold px-6 py-3.5 hover:bg-[#d4611a] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm sm:text-base uppercase tracking-wide"
                style={{ fontFamily: 'Archivo, Arial, sans-serif' }}
              >
                Plan een gratis woningscan in Anjum
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => handleNavClick('#subsidie')}
                className="flex items-center justify-center gap-2 border-2 border-white/50 text-white font-semibold px-6 py-3.5 hover:bg-white/10 hover:border-white/70 transition-all duration-200 text-sm sm:text-base uppercase tracking-wide"
                style={{ fontFamily: 'Archivo, Arial, sans-serif' }}
              >
                Bekijk subsidiemogelijkheden
              </button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-x-6 gap-y-2">
              {trustBadges.map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-white/90 text-sm">
                  <CheckCircle size={16} className="text-[#ed6f1e] flex-shrink-0" />
                  <span>{badge}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Subsidy Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="lg:justify-self-end w-full max-w-sm mx-auto lg:mx-0"
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 bg-[#ed6f1e] flex items-center justify-center">
                  <span className="text-white text-sm font-bold">€</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Subsidieberekening</p>
                  <p className="text-white/60 text-xs">Typische situatie Anjum</p>
                </div>
              </div>

              <div className="space-y-0">
                {subsidyItems.map((item, i) => (
                  <div key={item.label}>
                    {item.divider && (
                      <div className="border-t border-white/20 my-3" />
                    )}
                    <motion.div
                      custom={i}
                      variants={rowVariants}
                      initial="hidden"
                      animate={cardVisible ? 'visible' : 'hidden'}
                      className="flex items-center justify-between py-2"
                    >
                      <span className="text-white/80 text-sm">{item.label}</span>
                      <span className={`text-sm font-semibold ${item.color}`}>{item.amount}</span>
                    </motion.div>
                  </div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={cardVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.6, duration: 0.5, type: 'spring' }}
                className="mt-5 bg-[#ed6f1e] rounded-xl p-4 flex items-center gap-3"
              >
                <CheckCircle size={24} className="text-white flex-shrink-0" />
                <div>
                  <p className="text-white/80 text-xs">U betaalt effectief slechts</p>
                  <p className="text-white text-2xl font-extrabold">€5.500</p>
                </div>
              </motion.div>

              <p className="text-white/50 text-xs mt-4 text-center">
                Indicatieve berekening. Exacte subsidie afhankelijk van woning & situatie.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80L48 70C96 60 192 40 288 35C384 30 480 40 576 45C672 50 768 50 864 45C960 40 1056 30 1152 28C1248 26 1344 32 1392 35L1440 38V80H0Z" fill="#fafafa"/>
        </svg>
      </div>
    </section>
  )
}
