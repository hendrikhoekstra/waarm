'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const navLinks = [
  { label: 'Subsidie', href: '#subsidie' },
  { label: 'Oplossingen', href: '#oplossingen' },
  { label: 'Over ons', href: '#lokaal' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            <Image
              src="/logo.svg"
              alt="WAARM. warmtepompen & airconditioning"
              width={160}
              height={55}
              priority
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-[#2d2d2d] text-sm font-bold uppercase tracking-wide hover:text-[#ed6f1e] transition-colors duration-200"
                style={{ fontFamily: 'Arial, sans-serif', letterSpacing: '0.06em' }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNavClick('#contact')}
              className="text-white text-sm font-bold px-5 py-2.5 uppercase tracking-wide transition-colors duration-200"
              style={{
                fontFamily: 'Arial Black, Arial, sans-serif',
                backgroundColor: '#ed6f1e',
                letterSpacing: '0.06em',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#d4611a')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#ed6f1e')}
            >
              Plan gratis scan
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 text-[#2d2d2d] hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-[#2d2d2d] font-bold py-3 px-3 hover:bg-orange-50 hover:text-[#ed6f1e] transition-colors duration-200 uppercase text-sm tracking-wide"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('#contact')}
                className="mt-3 text-white font-bold py-3 px-4 text-center uppercase tracking-wide text-sm"
                style={{ fontFamily: 'Arial Black, Arial, sans-serif', backgroundColor: '#ed6f1e' }}
              >
                Plan gratis scan
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
