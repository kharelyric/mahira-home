import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { WhoWeAre } from "@/components/who-we-are"
import { Team } from "@/components/team"
import { Philosophy } from "@/components/philosophy"
import { AcquisitionFocus } from "@/components/acquisition-focus"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <WhoWeAre />
      <Team />
      <Philosophy />
      <AcquisitionFocus />
      <Contact />
      <Footer />
    </main>
  )
}
