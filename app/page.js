// Força SSR pra não explodir memória no build estático (tools.js é grande)
export const dynamic = 'force-dynamic'

import Nav from '@/components/Nav'
import Marquee from '@/components/Marquee'
import Hero from '@/components/Hero'
import Directory from '@/components/Directory'
import Bridge from '@/components/Bridge'
import Skills from '@/components/Skills'
import Marketplace from '@/components/Marketplace'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Marquee />
        <Hero />
        <div className="divider" />
        {/* Marketplace de ferramentas — seção principal */}
        <Directory />
        <div className="divider" />
        <Bridge />
        <div className="divider" />
        <Skills />
        <div className="divider" />
        <Marketplace />
        <div className="divider" />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
