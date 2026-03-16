import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import SubsidieCheck from '@/components/SubsidieCheck'
import Oplossingen from '@/components/Oplossingen'
import LokaalBetrokken from '@/components/LokaalBetrokken'
import Stappenplan from '@/components/Stappenplan'
import ContactForm from '@/components/ContactForm'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SubsidieCheck />
      <Oplossingen />
      <LokaalBetrokken />
      <Stappenplan />
      <ContactForm />
      <FAQ />
      <Footer />
    </main>
  )
}
