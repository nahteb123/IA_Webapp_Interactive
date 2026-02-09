import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Destinations } from "@/components/destinations"
import { Approach } from "@/components/approach"
import { Chatbot } from "@/components/chatbot"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Destinations />
        <Approach />
      </main>
      <Footer />
      <Chatbot />
    </>
  )
}
