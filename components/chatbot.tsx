"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send } from "lucide-react"

interface Message {
  role: "bot" | "user"
  content: string
}

const initialMessages: Message[] = [
  {
    role: "bot",
    content:
      "Bienvenue chez Chronos. Comment puis-je vous aider a planifier votre prochain voyage temporel ?",
  },
]

const botReplies = [
  "Excellent choix ! Nos voyages vers la Renaissance sont parmi les plus populaires. Souhaitez-vous plus de details ?",
  "Nous garantissons une securite absolue. Chaque voyage est encadre par nos experts temporels certifies.",
  "Le Cretace est une experience incomparable. Je vous recommande notre forfait \"Observateur\" pour une immersion totale.",
  "Nos tarifs commencent a partir de 9 500 euros. Souhaitez-vous un devis personnalise ?",
  "Bien sur ! Je peux vous mettre en relation avec un conseiller dedie. Quel creneau vous conviendrait ?",
]

export function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState("")
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  function handleSend() {
    if (!input.trim()) return
    const userMsg: Message = { role: "user", content: input.trim() }
    setMessages((prev) => [...prev, userMsg])
    setInput("")

    // Simulate bot reply
    setTimeout(() => {
      const reply = botReplies[Math.floor(Math.random() * botReplies.length)]
      setMessages((prev) => [...prev, { role: "bot", content: reply }])
    }, 800)
  }

  return (
    <>
      {/* Floating button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 flex items-center justify-center bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all duration-300 rounded-full"
        aria-label={open ? "Fermer le chat" : "Ouvrir le chat"}
      >
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-card border border-border/50 shadow-2xl flex flex-col max-h-[28rem] rounded-lg overflow-hidden">
          {/* Header */}
          <div className="px-5 py-4 border-b border-border/50 bg-secondary/50">
            <p className="font-serif text-lg text-foreground">Concierge Chronos</p>
            <p className="text-xs text-muted-foreground">
              En ligne - Temps de reponse {'<'} 1 min
            </p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
            {messages.map((msg, i) => (
              <div
                key={`msg-${i}-${msg.role}`}
                className={`max-w-[85%] px-4 py-3 text-sm leading-relaxed ${
                  msg.role === "bot"
                    ? "self-start bg-secondary text-secondary-foreground rounded-tr-lg rounded-br-lg rounded-bl-lg"
                    : "self-end bg-primary text-primary-foreground rounded-tl-lg rounded-bl-lg rounded-br-lg"
                }`}
              >
                {msg.content}
              </div>
            ))}
            <div ref={endRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSend()
            }}
            className="flex items-center gap-2 p-3 border-t border-border/50"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Votre message..."
              className="flex-1 bg-secondary text-foreground text-sm px-4 py-2.5 border-none outline-none placeholder:text-muted-foreground rounded-md"
            />
            <button
              type="submit"
              className="h-10 w-10 flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 transition-colors rounded-md"
              aria-label="Envoyer"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  )
}
