'use client'

import { useState, useEffect, useRef } from 'react'
import MeetingBooking from './MeetingBooking'
import { getContactInfo } from '@/utils/contactInfo'

interface Message {
  id: string
  text: string
  isBot: boolean
  timestamp: Date
}

interface FAQ {
  question: string
  answer: string
  keywords: string[]
}

const getFaqs = (contactInfo: any): FAQ[] => [
  {
    question: "What services do you offer?",
    answer: "We offer comprehensive logistics services including freight forwarding, warehousing, customs clearance, express delivery, supply chain analytics, and global tracking.",
    keywords: ["services", "what", "offer", "do", "freight", "shipping", "logistics"]
  },
  {
    question: "How can I track my shipment?",
    answer: `You can track your shipment using our global tracking system. Simply provide your tracking number through our contact form or call us at ${contactInfo.contact.phone.display}.`,
    keywords: ["track", "tracking", "shipment", "where", "package", "delivery"]
  },
  {
    question: "What countries do you ship to?",
    answer: "We provide logistics services to over 50 countries worldwide through our extensive network of global partners.",
    keywords: ["countries", "international", "global", "worldwide", "ship", "deliver"]
  },
  {
    question: "How much does shipping cost?",
    answer: "Shipping costs depend on various factors including destination, weight, dimensions, and service type. Contact us for a personalized quote.",
    keywords: ["cost", "price", "expensive", "cheap", "rate", "quote", "pricing"]
  },
  {
    question: "How long does delivery take?",
    answer: "Delivery times vary by destination and service type. Standard freight typically takes 5-15 business days, while express delivery takes 1-3 business days.",
    keywords: ["time", "long", "delivery", "fast", "quick", "when", "duration"]
  },
  {
    question: "Do you handle customs clearance?",
    answer: "Yes, we provide expert customs clearance services to ensure smooth international trade compliance and avoid delays.",
    keywords: ["customs", "clearance", "import", "export", "duties", "taxes", "documentation"]
  },
  {
    question: "What are your business hours?",
    answer: `Our business hours are ${contactInfo.businessHours.weekdays}, ${contactInfo.businessHours.hours}. ${contactInfo.businessHours.support}`,
    keywords: ["hours", "open", "time", "support", "available", "24/7"]
  },
  {
    question: "How can I get a quote?",
    answer: `You can get a quote by filling out our contact form, calling us at ${contactInfo.contact.phone.display}, or emailing us at ${contactInfo.contact.email.primary} with your shipment details.`,
    keywords: ["quote", "estimate", "price", "cost", "how", "get"]
  },
  {
    question: "What documents do I need for shipping?",
    answer: "Required documents typically include commercial invoice, packing list, bill of lading, and any necessary permits or certificates. Our team will guide you through the specific requirements for your shipment.",
    keywords: ["documents", "paperwork", "invoice", "bill", "lading", "requirements"]
  },
  {
    question: "Do you provide insurance for shipments?",
    answer: "Yes, we offer comprehensive cargo insurance options to protect your shipments against loss or damage during transit.",
    keywords: ["insurance", "protection", "damage", "loss", "coverage", "protect"]
  },
  {
    question: "Can you handle oversized or special cargo?",
    answer: "Yes, we specialize in handling oversized, heavy, and special cargo including machinery, vehicles, and hazardous materials with proper certifications.",
    keywords: ["oversized", "heavy", "special", "machinery", "vehicles", "hazardous", "large"]
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept various payment methods including bank transfers, credit cards, and letters of credit. Payment terms can be discussed based on your business needs.",
    keywords: ["payment", "pay", "methods", "credit", "bank", "transfer", "money"]
  }
]

export default function Chatbot() {
  const contactInfo = getContactInfo()
  const [isOpen, setIsOpen] = useState(false)
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: `Hi! I'm your ${contactInfo.company.name} assistant. I can help answer questions about our logistics services. How can I help you today?`,
      isBot: true,
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const findBestMatch = (userMessage: string): FAQ | null => {
    const faqs = getFaqs(contactInfo)
    const lowercaseMessage = userMessage.toLowerCase()
    let bestMatch: FAQ | null = null
    let maxMatches = 0

    faqs.forEach(faq => {
      const matches = faq.keywords.filter(keyword => 
        lowercaseMessage.includes(keyword.toLowerCase())
      ).length

      if (matches > maxMatches && matches > 0) {
        maxMatches = matches
        bestMatch = faq
      }
    })

    return bestMatch
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const bestMatch = findBestMatch(inputValue)
      
      let botResponse: Message

      if (bestMatch) {
        botResponse = {
          id: (Date.now() + 1).toString(),
          text: bestMatch.answer,
          isBot: true,
          timestamp: new Date()
        }
      } else {
        botResponse = {
          id: (Date.now() + 1).toString(),
          text: "I'm not sure about that specific question. Would you like to book a meeting with one of our logistics experts? They can provide detailed answers to your questions and help with your specific needs.",
          isBot: true,
          timestamp: new Date()
        }
      }

      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)

      // If no match found, add a booking button after a delay
      if (!bestMatch) {
        setTimeout(() => {
          const bookingButton: Message = {
            id: (Date.now() + 2).toString(),
            text: "BOOK_MEETING_BUTTON",
            isBot: true,
            timestamp: new Date()
          }
          setMessages(prev => [...prev, bookingButton])
        }, 500)
      }
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const quickQuestions = [
    "What services do you offer?",
    "How can I track my shipment?", 
    "How much does shipping cost?",
    "What are your business hours?"
  ]

  const handleQuickQuestion = (question: string) => {
    setInputValue(question)
    setTimeout(() => handleSendMessage(), 100)
  }

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[60] w-16 h-16 bg-primary hover:bg-orange-600 text-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center group"
        aria-label="Open chat"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
        
        {/* Notification dot */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-[60] w-96 h-[500px] bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col">
          {/* Header */}
          <div className="bg-primary text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">{contactInfo.company.name} Assistant</h3>
                <p className="text-xs text-orange-100">Online now</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-orange-100 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] ${
                    message.text === 'BOOK_MEETING_BUTTON' ? '' : 'p-3 rounded-lg'
                  } ${
                    message.isBot && message.text !== 'BOOK_MEETING_BUTTON'
                      ? 'bg-gray-100 text-gray-800'
                      : message.text !== 'BOOK_MEETING_BUTTON'
                      ? 'bg-primary text-white'
                      : ''
                  }`}
                >
                  {message.text === 'BOOK_MEETING_BUTTON' ? (
                    <button
                      onClick={() => setIsBookingOpen(true)}
                      className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium"
                    >
                      📅 Book a Meeting
                    </button>
                  ) : (
                    <>
                      <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.isBot ? 'text-gray-500' : 'text-orange-100'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </>
                  )}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length === 1 && (
            <div className="p-4 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-2">Quick questions:</p>
              <div className="space-y-2">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="w-full text-left text-sm p-2 bg-gray-50 hover:bg-gray-100 rounded transition-colors text-gray-700"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Meeting Booking Modal */}
      <MeetingBooking
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  )
}
