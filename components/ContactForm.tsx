'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react'

type FormData = {
  naam: string
  email: string
  telefoon: string
  adres: string
  inAnjum: string
  woningType: string
  interesse: string
  bericht: string
}

const initialForm: FormData = {
  naam: '',
  email: '',
  telefoon: '',
  adres: '',
  inAnjum: '',
  woningType: '',
  interesse: '',
  bericht: '',
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {}
    if (!form.naam.trim()) newErrors.naam = 'Naam is verplicht'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = 'Voer een geldig e-mailadres in'
    if (!form.telefoon.trim()) newErrors.telefoon = 'Telefoonnummer is verplicht'
    if (!form.inAnjum) newErrors.inAnjum = 'Geef aan of u in Anjum woont'
    if (!form.woningType) newErrors.woningType = 'Selecteer uw woningtype'
    if (!form.interesse) newErrors.interesse = 'Selecteer uw interesse'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  const inputClass = (field: keyof FormData) =>
    `w-full px-4 py-3 rounded-xl border text-[#1e293b] text-sm placeholder-slate-400 focus:outline-none focus:ring-2 transition-all duration-200 ${
      errors[field]
        ? 'border-red-300 bg-red-50 focus:ring-red-200'
        : 'border-slate-200 bg-white focus:ring-[#1a4f8a]/30 focus:border-[#1a4f8a]'
    }`

  return (
    <section id="contact" className="py-20 bg-[#1a4f8a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-white/15 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Gratis woningscan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Plan uw gratis woningscan in Anjum
          </h2>
          <p className="text-lg text-white/75 max-w-xl mx-auto">
            Vul het formulier in en wij nemen binnen 1 werkdag contact met u op.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="bg-white/10 border border-white/15 rounded-2xl p-6">
              <h3 className="text-white font-bold text-base mb-4">Waarom kiezen voor Waarm?</h3>
              <ul className="space-y-3">
                {[
                  'Gratis en vrijblijvend adviesgesprek',
                  'Wij regelen alle subsidieaanvragen',
                  'Lokale kennis van Anjum-woningen',
                  'Erkend F-gassen installateur',
                  'Respons binnen 1 werkdag',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-white/85 text-sm">
                    <CheckCircle size={16} className="text-[#4ade80] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/10 border border-white/15 rounded-2xl p-6 space-y-4">
              <h3 className="text-white font-bold text-base mb-2">Direct contact</h3>
              <a href="tel:0519000000" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm group">
                <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors">
                  <Phone size={14} className="text-white" />
                </div>
                0519-XXX XXX
              </a>
              <a href="mailto:info@waarm.nl" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm group">
                <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors">
                  <Mail size={14} className="text-white" />
                </div>
                info@waarm.nl
              </a>
              <div className="flex items-center gap-3 text-white/80 text-sm">
                <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center">
                  <MapPin size={14} className="text-white" />
                </div>
                Anjum, Friesland
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="p-10 text-center flex flex-col items-center justify-center min-h-[500px]"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
                      className="w-20 h-20 rounded-full bg-[#f0fdf4] border-2 border-[#2d8a4f]/30 flex items-center justify-center mb-6"
                    >
                      <CheckCircle size={40} className="text-[#2d8a4f]" />
                    </motion.div>
                    <h3 className="text-2xl font-extrabold text-[#1e293b] mb-3">
                      Aanvraag ontvangen!
                    </h3>
                    <p className="text-slate-500 text-base max-w-sm mb-2">
                      Wij nemen binnenkort contact op!
                    </p>
                    <p className="text-slate-400 text-sm">
                      Doorgaans binnen 1 werkdag. Controleer ook uw spam-map.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false)
                        setForm(initialForm)
                      }}
                      className="mt-8 text-[#1a4f8a] text-sm font-medium hover:underline"
                    >
                      Nog een aanvraag indienen
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="p-7 sm:p-8"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      {/* Naam */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                          Naam <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="naam"
                          value={form.naam}
                          onChange={handleChange}
                          placeholder="Jan de Vries"
                          className={inputClass('naam')}
                        />
                        {errors.naam && <p className="text-red-500 text-xs mt-1">{errors.naam}</p>}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                          E-mailadres <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="jan@voorbeeld.nl"
                          className={inputClass('email')}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      {/* Telefoon */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                          Telefoonnummer <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="tel"
                          name="telefoon"
                          value={form.telefoon}
                          onChange={handleChange}
                          placeholder="06-12345678"
                          className={inputClass('telefoon')}
                        />
                        {errors.telefoon && <p className="text-red-500 text-xs mt-1">{errors.telefoon}</p>}
                      </div>

                      {/* Adres */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                          Adres in Anjum
                        </label>
                        <input
                          type="text"
                          name="adres"
                          value={form.adres}
                          onChange={handleChange}
                          placeholder="Dorpsstraat 1, Anjum"
                          className={inputClass('adres')}
                        />
                      </div>
                    </div>

                    {/* Woont u in Anjum? */}
                    <div className="mb-4">
                      <label className="block text-xs font-semibold text-slate-600 mb-2 uppercase tracking-wide">
                        Woont u in Anjum? <span className="text-red-400">*</span>
                      </label>
                      <div className="flex gap-4">
                        {['Ja', 'Nee'].map((opt) => (
                          <label
                            key={opt}
                            className={`flex items-center gap-2.5 cursor-pointer px-5 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                              form.inAnjum === opt
                                ? 'bg-[#eff6ff] border-[#1a4f8a] text-[#1a4f8a]'
                                : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                            }`}
                          >
                            <input
                              type="radio"
                              name="inAnjum"
                              value={opt}
                              checked={form.inAnjum === opt}
                              onChange={handleChange}
                              className="sr-only"
                            />
                            <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                              form.inAnjum === opt ? 'border-[#1a4f8a]' : 'border-slate-300'
                            }`}>
                              {form.inAnjum === opt && (
                                <span className="w-2 h-2 rounded-full bg-[#1a4f8a]" />
                              )}
                            </span>
                            {opt}
                          </label>
                        ))}
                      </div>
                      {errors.inAnjum && <p className="text-red-500 text-xs mt-1">{errors.inAnjum}</p>}
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      {/* Type woning */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                          Type woning <span className="text-red-400">*</span>
                        </label>
                        <select
                          name="woningType"
                          value={form.woningType}
                          onChange={handleChange}
                          className={inputClass('woningType')}
                        >
                          <option value="">Selecteer woningtype</option>
                          <option value="rijtjeswoning">Rijtjeswoning</option>
                          <option value="vrijstaand">Vrijstaande woning</option>
                          <option value="boerderij">Boerderij</option>
                          <option value="appartement">Appartement</option>
                          <option value="anders">Anders</option>
                        </select>
                        {errors.woningType && <p className="text-red-500 text-xs mt-1">{errors.woningType}</p>}
                      </div>

                      {/* Interesse */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                          Interesse in <span className="text-red-400">*</span>
                        </label>
                        <select
                          name="interesse"
                          value={form.interesse}
                          onChange={handleChange}
                          className={inputClass('interesse')}
                        >
                          <option value="">Selecteer optie</option>
                          <option value="hybride">Hybride warmtepomp</option>
                          <option value="fullelectric">Full electric warmtepomp</option>
                          <option value="onbekend">Ik weet het nog niet</option>
                        </select>
                        {errors.interesse && <p className="text-red-500 text-xs mt-1">{errors.interesse}</p>}
                      </div>
                    </div>

                    {/* Bericht */}
                    <div className="mb-6">
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                        Bericht <span className="text-slate-400 font-normal normal-case">(optioneel)</span>
                      </label>
                      <textarea
                        name="bericht"
                        value={form.bericht}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Eventuele opmerkingen of vragen..."
                        className={`${inputClass('bericht')} resize-none`}
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#1a4f8a] text-white font-bold py-4 px-6 rounded-xl hover:bg-[#163f70] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 text-base disabled:opacity-70 disabled:cursor-not-allowed disabled:translate-y-0"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                          </svg>
                          Bezig met verzenden...
                        </>
                      ) : (
                        <>
                          Plan gratis woningscan
                          <ArrowRight size={18} />
                        </>
                      )}
                    </button>

                    <p className="text-slate-400 text-xs text-center mt-3">
                      Door het formulier in te sturen gaat u akkoord met onze{' '}
                      <a href="#" className="underline hover:text-slate-600">privacyverklaring</a>.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
