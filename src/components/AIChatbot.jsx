// src/components/AIChatbot.jsx
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane, FaLeaf, FaChevronDown } from 'react-icons/fa';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini
// Note: In production, API keys should be in env variables.
// For this demo, please ensure you use your own key or pass it safely.
// We'll set a placeholder but handle gracefully.
const genAI = new GoogleGenerativeAI("YOUR_API_KEY_HERE"); 

const initialMessages = [
  {
    role: 'ai',
    text: "Hello! 👋 I'm the Green India AI Assistant. I can help you with waste pickup, recycling guides, and our services. How can I assist you today?",
  }
];

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsTyping(true);

    try {
      // Setup Gemini Model
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      
      const prompt = `
        You are the Green India Waste Management AI Assistant.
        Your tone should be helpful, professional, and eco-friendly.
        Only answer questions related to:
        - Waste management & recycling
        - Our pickup services & locations (120+ cities in India)
        - E-waste, plastic, organic, industrial waste
        - Sustainability & zero-waste living
        - Company info
        
        If the user asks something completely unrelated, politely decline and steer them back to waste management.
        Keep answers relatively concise (max 3-4 short paragraphs). Use emojis occasionally.

        User Question: ${userMessage}
      `;

      // Fallback for demo if API key isn't set
      if (genAI.apiKey === "YOUR_API_KEY_HERE") {
          setTimeout(() => {
              const lowerMsg = userMessage.toLowerCase();
              let responseText = "I'm currently in demo mode without an API key! However, I can still tell you about Green India: We offer Plastic Waste Pickup, E-Waste Recycling, Industrial Waste management, and more. What would you like to know?";
              
              if (lowerMsg.includes("about") && (lowerMsg.includes("website") || lowerMsg.includes("green india"))) {
                  responseText = "Green India Waste Management is India's most trusted AI-powered waste management platform. We've been operating since 2015, helping households and businesses recycle plastic, e-waste, and organic materials across 120+ cities!";
              } else if (lowerMsg.includes("service") || lowerMsg.includes("what do you do")) {
                  responseText = "We provide comprehensive services including: 1) Plastic Waste Management, 2) E-Waste Recycling, 3) Industrial Waste disposal, 4) Doorstep Pickup, 5) Scrap Collection, and 6) Organic Waste Solutions.";
              } else if (lowerMsg.includes("pickup") || lowerMsg.includes("book")) {
                  responseText = "You can easily book a pickup! Just scroll down to the 'Contact' section or use the 'Book Pickup' button in the navigation bar. We offer same-day and next-day pickup in over 50 major cities.";
              } else if (lowerMsg.includes("contact") || lowerMsg.includes("phone") || lowerMsg.includes("email")) {
                  responseText = "You can reach us at hello@greenindiawm.com or call us at +91 98765 43210. Our head office is located in Connaught Place, New Delhi.";
              } else if (lowerMsg.includes("price") || lowerMsg.includes("cost") || lowerMsg.includes("fee")) {
                  responseText = "Our pickup fees vary based on the waste type and location. However, we often pay YOU for valuable scrap and e-waste! Please fill out the contact form for a free custom quote.";
              } else if (lowerMsg.includes("plastic") || lowerMsg.includes("e-waste") || lowerMsg.includes("organic")) {
                  responseText = "Yes! We specialize in that. We have state-of-the-art sorting facilities that ensure 98% of collected waste is diverted from landfills and properly recycled or composted.";
              } else if (lowerMsg.includes("hi") || lowerMsg.includes("hello") || lowerMsg.includes("hey")) {
                  responseText = "Hello there! Welcome to Green India. How can I help you make India cleaner today?";
              }

              setMessages(prev => [...prev, { role: 'ai', text: responseText }]);
              setIsTyping(false);
          }, 1000);
          return;
      }

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      setMessages(prev => [...prev, { role: 'ai', text }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { 
        role: 'ai', 
        text: "I'm sorry, I'm having trouble connecting to my servers right now. Please try again later or contact support." 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        id="ai-assistant"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 w-16 h-16 rounded-full bg-gradient-to-r from-primary-500 to-emerald-600 shadow-xl shadow-primary-500/40 flex items-center justify-center z-40 ${isOpen ? 'hidden' : ''}`}
      >
        <FaRobot className="text-white text-2xl" />
        {/* Pulse effect */}
        <span className="absolute w-full h-full rounded-full border-2 border-primary-400 animate-ping opacity-75" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-4 right-4 left-4 sm:left-auto sm:right-6 sm:bottom-6 md:right-8 md:bottom-8 sm:w-[400px] h-[500px] max-h-[80vh] bg-white border border-green-200/80 rounded-3xl shadow-green-2xl overflow-hidden z-50 flex flex-col"
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-4 border-b border-green-700/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <FaRobot className="text-white text-xl" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-emerald-600 rounded-full" />
                </div>
                <div>
                  <h3 className="text-white font-bold font-display text-sm">Green India AI</h3>
                  <p className="text-white/70 text-xs font-medium">Online • Ready to help</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-colors"
              >
                <FaChevronDown className="text-sm" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4" style={{ background: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%2322c55e\' fill-opacity=\'0.03\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")' }}>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] rounded-2xl p-3.5 text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-br from-green-600 to-emerald-600 text-white rounded-br-sm shadow-green-sm font-medium'
                      : 'bg-green-50/90 border border-green-100 text-gray-800 rounded-bl-sm shadow-green-sm'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-green-50/90 border border-green-100 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1 items-center shadow-green-sm">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full typing-dot" />
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full typing-dot" />
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full typing-dot" />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompts (Only show if few messages) */}
            {messages.length < 3 && !isTyping && (
              <div className="px-4 py-2.5 flex gap-2 overflow-x-auto no-scrollbar border-t border-green-100 bg-white/95">
                {['Book Pickup', 'E-Waste Info', 'Pricing'].map(prompt => (
                  <button
                    key={prompt}
                    onClick={() => {
                      setInput(prompt);
                      // Auto-trigger send in a bit
                      setTimeout(() => document.getElementById('chat-send-btn')?.click(), 100);
                    }}
                    className="whitespace-nowrap text-xs px-3.5 py-1.5 rounded-full bg-green-50 border border-green-200/60 text-green-700 hover:bg-green-100 transition-all font-medium"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}

            {/* Input Area */}
            <div className="p-4 bg-gray-50 border-t border-green-100">
              <form onSubmit={handleSend} className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500/20 transition-all placeholder-gray-400 shadow-sm"
                />
                <button
                  id="chat-send-btn"
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="w-12 h-12 flex-shrink-0 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-md shadow-green-200 flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed hover:from-green-600 hover:to-emerald-700 transition-all duration-300"
                >
                  <FaPaperPlane className="text-sm" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;
