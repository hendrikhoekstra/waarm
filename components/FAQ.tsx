'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: 'Is mijn woning in Anjum geschikt voor een warmtepomp?',
    answer:
      'De meeste woningen in Anjum zijn geschikt voor een warmtepomp, al verschilt de ideale oplossing per woningtype. Goed geïsoleerde woningen (bouwjaar na 2000, of naderhand geïsoleerd) kunnen direct overstappen op een full-electric warmtepomp. Oudere rijtjeswoningen en boerderijen — die we goed kennen in Anjum — zijn vaak prima kandidaten voor een hybride warmtepomp. Tijdens onze gratis woningscan beoordelen we uw specifieke situatie en adviseren we de meest geschikte oplossing. Er zijn maar weinig woningen waarvoor helemaal niets mogelijk is.',
  },
  {
    question: 'Hoe zit het met het geluid van de buitenunit?',
    answer:
      'De Hitachi Yutaki die wij installeren produceert slechts 40 decibel — dat is stiller dan een gemiddelde koelkast (45 dB) en vergelijkbaar met het geluid van een rustig gesprek op afstand. In de praktijk horen de meeste bewoners de warmtepomp nauwelijks. We plaatsen de buitenunit altijd op een strategische plek: zo ver mogelijk van slaapkamerramen en naburige woningen. Bij twijfel tonen we u referentie-installaties bij klanten in de buurt.',
  },
  {
    question: 'Kan ik nog subsidie krijgen als ik al een nieuwe CV-ketel heb?',
    answer:
      'Ja, absoluut. Als u een relatief nieuwe CV-ketel heeft, is de hybride warmtepomp de ideale oplossing. De warmtepomp wordt naast uw bestaande ketel geplaatst en neemt het grootste deel van de verwarmingsvraag over. U kunt gewoon gebruik maken van de ISDE-subsidie voor hybride warmtepompen (tot €4.500) en de lokale Anjum-toeslag. Zo haalt u direct fors minder gas zonder dat uw investering verloren gaat.',
  },
  {
    question: 'Hoelang duurt de installatie?',
    answer:
      'De meeste installaties in Anjum zijn binnen 1 tot 2 werkdagen volledig afgerond. Op dag 1 plaatsen onze monteurs de buitenunit en leggen de leidingen. Op dag 2 (indien nodig) wordt alles aangesloten, getest en ingeregeld. We zorgen ervoor dat u tijdens de installatie zo min mogelijk overlast ervaart. Na afronding geven we u een uitgebreide uitleg over de bediening en instellingen van uw nieuwe systeem.',
  },
  {
    question: 'Wat als ik niet in Anjum woon?',
    answer:
      'Wij zijn gespecialiseerd in Anjum en de directe omgeving, maar werken ook in de bredere regio Noardeast-Fryslân — denk aan Ee, Metslawier, Wierum, Ternaard en omliggende dorpen. De beschikbaarheid van de lokale Anjum-toeslag geldt specifiek voor Anjum-bewoners, maar de ISDE-subsidie en BTW-verlaging gelden overal in Nederland. Neem gerust contact met ons op om te bespreken wat wij voor u kunnen betekenen.',
  },
  {
    question: 'Hoe lang duurt het voor de subsidie wordt uitbetaald?',
    answer:
      'De ISDE-subsidie via RVO.nl wordt doorgaans binnen 3 tot 6 maanden na de volledige aanvraag uitbetaald. Wij dienen de aanvraag in direct na de installatie en zorgen dat alle documentatie compleet en correct is, zodat er geen vertraging ontstaat. De lokale Anjum-toeslag heeft een eigen traject via de gemeente Noardeast-Fryslân. Wij begeleiden u bij beide aanvragen en houden u op de hoogte van de voortgang.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 rounded-xl bg-[#eff6ff] flex items-center justify-center">
              <HelpCircle size={24} className="text-[#1a4f8a]" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e293b] mb-4">
            Veelgestelde vragen
          </h2>
          <p className="text-lg text-slate-500">
            Alles wat u wilt weten over warmtepompen in Anjum
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-3"
        >
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.07 }}
              className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
                openIndex === i
                  ? 'border-[#1a4f8a]/30 shadow-md'
                  : 'border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md'
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-start gap-4 px-6 py-5 text-left"
              >
                <span
                  className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 transition-colors ${
                    openIndex === i
                      ? 'bg-[#1a4f8a] text-white'
                      : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  <span className="text-xs font-bold">{i + 1}</span>
                </span>
                <span
                  className={`flex-1 font-semibold text-sm sm:text-base leading-snug transition-colors ${
                    openIndex === i ? 'text-[#1a4f8a]' : 'text-[#1e293b]'
                  }`}
                >
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex-shrink-0 mt-0.5"
                >
                  <ChevronDown
                    size={18}
                    className={`transition-colors ${
                      openIndex === i ? 'text-[#1a4f8a]' : 'text-slate-400'
                    }`}
                  />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pl-16">
                      <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center bg-[#eff6ff] rounded-2xl p-7 border border-[#1a4f8a]/15"
        >
          <p className="text-[#1e293b] font-semibold mb-1">Staat uw vraag er niet bij?</p>
          <p className="text-slate-500 text-sm mb-4">
            Neem gerust contact met ons op. We beantwoorden al uw vragen graag persoonlijk.
          </p>
          <a
            href="mailto:info@waarm.nl"
            className="inline-flex items-center gap-2 bg-[#1a4f8a] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#163f70] transition-colors"
          >
            Stel uw vraag
          </a>
        </motion.div>
      </div>
    </section>
  )
}
