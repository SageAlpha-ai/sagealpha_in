import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X, Send, Sparkles, ChevronRight, Bot } from 'lucide-react'

const QUICK_PROMPTS = [
    "I want to implement Agentic AI",
    "Help me modernize my data platform",
    "Book a strategic consultation",
    "Explore AI use cases"
]

function ChatAssistant() {
    const [isOpen, setIsOpen] = useState(false)
    const [showWelcome, setShowWelcome] = useState(false)
    const [hasInteracted, setHasInteracted] = useState(false)
    const [messages, setMessages] = useState([
        { type: 'bot', text: 'Hello! I am the SageAlpha AI Assistant. How can I help accelerate your digital transformation today?' }
    ])
    const [inputValue, setInputValue] = useState('')
    const messagesEndRef = useRef(null)

    // Scroll to bottom of chat
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages, isOpen])

    // Handle initial welcome popup delay
    useEffect(() => {
        const hasSeenWelcome = localStorage.getItem('sagealpha_chat_welcome_seen')

        if (!hasSeenWelcome) {
            const timer = setTimeout(() => {
                setShowWelcome(true)
            }, 2500)
            return () => clearTimeout(timer)
        }
    }, [])

    const handleOpenChat = () => {
        setIsOpen(true)
        setShowWelcome(false)
        setHasInteracted(true)
        localStorage.setItem('sagealpha_chat_welcome_seen', 'true')
    }

    const handleCloseChat = () => {
        setIsOpen(false)
    }

    const handleDismissWelcome = (e) => {
        e.stopPropagation()
        setShowWelcome(false)
        localStorage.setItem('sagealpha_chat_welcome_seen', 'true')
    }

    const handleSendMessage = (text) => {
        if (!text.trim()) return

        // Add user message
        const newMessages = [...messages, { type: 'user', text }]
        setMessages(newMessages)
        setInputValue('')

        // Simulate AI response (UI only)
        setTimeout(() => {
            setMessages(prev => [...prev, {
                type: 'bot',
                text: 'Thank you for your inquiry. One of our AI strategists will analyze your request and get back to you shortly. In the meantime, feel free to explore our case studies.'
            }])
        }, 1000)
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleSendMessage(inputValue)
    }

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 font-sans">

            {/* Chat Interface Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="w-[90vw] sm:w-[400px] h-[600px] max-h-[80vh] flex flex-col bg-[#0B1221] border border-slate-700/50 rounded-2xl shadow-2xl overflow-hidden origin-bottom-right"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-[#0F172A]">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/20">
                                    <Bot className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-white">SageAlpha Assistant</h3>
                                    <div className="flex items-center gap-1.5">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                        </span>
                                        <span className="text-xs text-slate-400">Online</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={handleCloseChat}
                                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors"
                                aria-label="Close chat"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Chat Body */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-[#0B1221]/50 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
                            {/* Messages */}
                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${msg.type === 'user'
                                                ? 'bg-blue-600 text-white rounded-br-sm'
                                                : 'bg-slate-800 text-slate-200 border border-slate-700 rounded-bl-sm'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Prompts & Input */}
                        <div className="p-4 bg-[#0F172A] border-t border-slate-800 space-y-4">
                            {messages.length < 3 && (
                                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide mask-fade-right">
                                    {QUICK_PROMPTS.map((prompt, i) => (
                                        <button
                                            key={i}
                                            onClick={() => handleSendMessage(prompt)}
                                            className="flex-shrink-0 text-xs font-medium text-blue-300 bg-blue-900/20 hover:bg-blue-900/40 border border-blue-500/20 px-3 py-2 rounded-full transition-colors whitespace-nowrap"
                                        >
                                            {prompt}
                                        </button>
                                    ))}
                                </div>
                            )}

                            <div className="relative flex items-center gap-2">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Ask about AI strategy..."
                                    className="flex-1 bg-slate-900 border border-slate-700 hover:border-slate-600 focus:border-blue-500 rounded-full py-3 pl-5 pr-12 text-sm text-white placeholder-slate-500 outline-none transition-all shadow-inner"
                                />
                                <button
                                    onClick={() => handleSendMessage(inputValue)}
                                    disabled={!inputValue.trim()}
                                    className="absolute right-1.5 p-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full text-white shadow-md disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-transform"
                                >
                                    <Send className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Welcome Popup */}
            <AnimatePresence>
                {showWelcome && !isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="relative mb-2 w-80 bg-white/90 backdrop-blur-md border border-white/40 p-5 rounded-2xl shadow-xl shadow-slate-200/50 origin-bottom-right"
                    >
                        <button
                            onClick={handleDismissWelcome}
                            className="absolute top-2 right-2 text-slate-400 hover:text-slate-600"
                        >
                            <X className="h-3 w-3" />
                        </button>

                        <div className="flex items-start gap-3">
                            <div className="h-10 w-10 shrink-0 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-md">
                                <Sparkles className="h-5 w-5" />
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm font-semibold text-slate-900">
                                    Hi there 👋
                                </p>
                                <p className="text-sm text-slate-600 leading-snug">
                                    Welcome to SageAlpha. We are excited to turn your ideas into reality. What kind of development project are you thinking about?
                                </p>
                            </div>
                        </div>

                        <div className="mt-4 flex items-center justify-between">
                            <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wide">
                                AI Team • Just now
                            </span>
                            <button
                                onClick={handleOpenChat}
                                className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 group"
                            >
                                Let's talk
                                <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Trigger Button */}
            <motion.button
                onClick={isOpen ? handleCloseChat : handleOpenChat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative flex h-16 w-16 items-center justify-center rounded-full shadow-2xl shadow-blue-600/30 transition-all duration-500 ${isOpen ? 'bg-slate-800 rotate-90' : 'bg-gradient-to-r from-blue-600 to-indigo-600 rotate-0'
                    }`}
            >
                {isOpen ? (
                    <X className="h-7 w-7 text-white" />
                ) : (
                    <>
                        <MessageSquare className="h-7 w-7 text-white fill-white/20" />
                        {/* Notification Badge */}
                        {!hasInteracted && (
                            <span className="absolute top-0 right-0 flex h-5 w-5 -translate-y-1 translate-x-1 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-sm ring-2 ring-white">
                                1
                            </span>
                        )}
                    </>
                )}
            </motion.button>

        </div>
    )
}

export default ChatAssistant
