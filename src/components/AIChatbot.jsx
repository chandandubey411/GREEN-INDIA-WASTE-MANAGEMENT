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
    text: "Hello! 👋 I'm the Green India AI Assistant. I can help you with waste collection, pricing, recycling guides, and information about our services. How can I assist you today?",
  }
];

// ── ENHANCED LOCAL KNOWLEDGE BASE FOR DOCKING WEBSITE FACTS ──
const localKB = [
  {
    keys: ['about', 'who are you', 'company', 'green india', 'what is this', 'background', 'detail', 'info', 'profile', 'work'],
    answer: `🌿 **Green India Waste Management** is India's leading AI-powered recycling and resource recovery platform. 

* **Founded:** 2023
* **Experience:** With **18+ years of hands-on experience** in the waste management and recycling industry.
* **Our Mission:** Achieving zero waste to landfill through responsible resource recovery, robust compliance, and clean tech innovation.
* **Scale:** Active in **120+ cities** across India, serving over **12,000+ happy clients**.
* **Certifications:** Authorized by the Ministry of Environment, ISO 14001:2015 certified, and strictly CPCB-compliant.

We help residential neighborhoods, corporate offices, and heavy industries recycle plastic, e-waste, metals, and organics responsibly. 🌍`
  },
  {
    keys: ['leader', 'founder', 'director', 'ceo', 'sonu', 'kumar', 'who runs', 'owner', 'boss', 'management', 'head'],
    answer: `👤 Green India is led by **Mr. Sonu Kumar**, our visionary **Director**.

Mr. Sonu Kumar possesses extensive industry knowledge and years of valuable experience in the field of waste management and material recycling. With deep expertise in identifying, segregating, and recycling E-waste materials through environmentally responsible methods, he has played a significant role in promoting sustainable waste management practices.

His strong leadership, operational excellence, and commitment to eco-friendly solutions continue to drive the company toward growth and innovation. Under his guidance, Green India Waste Management is committed to delivering safe, efficient, and sustainable recycling solutions for a cleaner and greener future. 🌿`
  },
  {
    keys: ['service', 'what do you do', 'what you do', 'facilities', 'features', 'help', 'offering'],
    answer: `🛠️ **Green India Waste Management** offers end-to-end eco-friendly services:

1. **Plastic Waste Management:** Certified collection and processing for all grades of plastics.
2. **E-Waste Recycling:** Safe disposal of old laptops, phones, and appliances with full data destruction certificates.
3. **Industrial Waste Solutions:** CPCB-compliant management, hazardous waste treatment, and factory scrap disposal.
4. **Scrap Collection:** Best market rates for copper, iron, paper, glass, and cardboard with instant digital payment.
5. **Organic Waste Solutions:** Advanced bio-composting setups that turn food and garden waste into premium organic compost in 21-30 days.

Which of these services can I describe in detail for you? ♻️`
  },
  {
    keys: ['plastic', 'bottle', 'polyethylene', 'bag', 'cup'],
    answer: `🥤 **Plastic Waste Management Services:**

We provide comprehensive plastic waste collection, segregation, and processing solutions:
* We collect and recycle all plastic grades (PET, HDPE, LDPE, PP, etc.).
* Materials are sent to our state-of-the-art facilities to be washed, sorted, and shredded into high-quality recycled granules.
* These granules are supplied back to manufacturers, helping conserve petroleum resources and build a circular economy! ♻️`
  },
  {
    keys: ['e-waste', 'electronic', 'phone', 'laptop', 'computer', 'gadget', 'appliance', 'mobile', 'keyboard', 'screen', 'tv'],
    answer: `💻 **Certified E-Waste Recycling:**

Improperly discarded electronics release lead, mercury, and toxic flame retardants into the ground.
* **Items Covered:** Laptops, desktop computers, mobile phones, servers, keyboards, wires, TVs, and appliances.
* **Data Security:** We ensure completely secure physical destruction or military-grade wiping of storage drives.
* **Compliance Certification:** We supply an official **Certificate of E-Waste Recycling** which is crucial for corporate compliance and ESG audits! 📱`
  },
  {
    keys: ['industrial', 'factory', 'hazardous', 'compliance', 'cpcb', 'corporate', 'commercial', 'manufacturing', 'contract', 'amc'],
    answer: `🏭 **Industrial & Corporate Waste Solutions:**

We partner with factories, warehouses, and IT parks to ensure 100% legal compliance and green practices:
* **CPCB Compliance:** We provide full documentation, tracking, and environmental compliance certificates.
* **Resource Recovery:** Maximize value recovery from industrial non-hazardous scrap and safe treatment of hazardous streams.
* **CSR & ESG Goals:** Helping your business achieve Net-Zero waste-to-landfill and solid CSR reporting.
* We offer custom Annual Maintenance Contracts (AMCs) for regular pick-ups! 🌿`
  },
  {
    keys: ['pickup', 'book', 'schedule', 'collect', 'appoint', 'rider', 'request', 'free', 'collection'],
    answer: `🚛 **Booking a Waste Collection is Quick and Easy!**

Here is how you can book:
1. **WhatsApp Support:** Click our green **WhatsApp Chat** widget in the bottom-right corner or text us at **+91 9650380888** to schedule immediately.
2. **Website Form:** Fill out the simple contact form in the **Contact** page of this website.
3. **The Process:** A certified green team will visit at the scheduled date, weigh the scrap using transparent digital scales, pay you instantly (Cash/UPI), and issue a receipt! 💵`
  },
  {
    keys: ['scrap', 'metal', 'glass', 'paper', 'cardboard', 'sell', 'buy', 'newspaper', 'iron', 'copper', 'aluminum', 'brass'],
    answer: `📰 **Scrap Collection & Instant Payouts:**

We pay premium market rates for valuable recyclables:
* **Metals:** Copper, iron, aluminum, brass, stainless steel.
* **Paper:** Old newspapers, schoolbooks, boxes, cardboard packaging.
* **Glass & Others:** Clean glass bottles, PET bottles, and bulk clean dry waste.
* **Instant Payment:** Our riders carry verified digital scales and pay you instantly on the spot via Cash, GPay, PhonePe, or Bank Transfer! 💳`
  },
  {
    keys: ['organic', 'compost', 'kitchen', 'food', 'garden', 'wet waste', 'biodegradable', 'waste solution'],
    answer: `🍂 **Organic Waste & Composting Solutions:**

We help schools, corporate cafeterias, and residential societies tackle food and organic wet waste:
* **Bio-Composters:** We supply and set up advanced bio-composting systems.
* **Zero Waste Bins:** Seamlessly separate wet kitchen scrap from dry recyclables.
* **Compost Production:** Convert organic waste into rich, nutrient-dense organic compost within 21-30 days, perfect for gardens! 🌸`
  },
  {
    keys: ['city', 'cities', 'location', 'where', 'coverage', 'delhi', 'mumbai', 'bangalore', 'noida', 'gurgaon', 'pune', 'hyderabad', 'chennai', 'kolkata', 'kochi', 'place', 'state'],
    answer: `📍 **Service Locations & Cities Covered:**

We operate in over **120+ cities across India**! Our major service hubs include:
* **Delhi NCR:** New Delhi, Noida, Gurgaon, Ghaziabad, Faridabad.
* **Maharashtra:** Mumbai, Pune, Thane.
* **Karnataka:** Bangalore.
* **Telangana:** Hyderabad.
* **Tamil Nadu:** Chennai.
* **West Bengal:** Kolkata.
* **Gujarat:** Ahmedabad, Surat.
* **Other Major Cities:** Jaipur, Lucknow, Kochi, Chandigarh, and Indore.

Same-day and next-day collections are standard in all hub cities. Text us on WhatsApp at **+91 9650380888** with your pincode to check instant coverage! 🗺️`
  },
  {
    keys: ['price', 'cost', 'fee', 'charge', 'rate', 'payment', 'how much', 'money', 'pay', 'expensive'],
    answer: `💰 **Pricing, Fees, and Earnings:**

* **Dry Waste & General Collection:** Completely **FREE**! There are no hidden call-out fees.
* **Scrap & E-Waste:** We **PAY YOU**! You earn competitive cash/UPI payouts based on weight and market scrap value.
* **Organic Composting Systems:** Billed at affordable equipment setup rates.
* **Industrial and Commercial Contracts:** Customized quotation packages are drafted after a free site audit. 📈`
  },
  {
    keys: ['impact', 'stat', 'number', 'result', 'saving', 'tree', 'co2', 'landfill', 'environment', 'greenhouse'],
    answer: `📈 **Our Environmental Impact & Achievements:**

Together with our amazing clients, we have made a lasting green footprint:
* **50,000+ Tons** of dry waste recycled and kept out of landfills.
* **120,000+ Trees saved** by recycling paper and cardboard.
* **30,000+ Tons of CO₂ emissions** reduced by replacing virgin materials.
* **30,000+ Tons of plastic** recycled into secondary resources.

Thank you for being a part of this green journey! 🌳`
  },
  {
    keys: ['contact', 'phone', 'mobile', 'email', 'support', 'address', 'office', 'headquarters', 'mail', 'write', 'location', 'map'],
    answer: `📞 **Contact Green India Support:**

We are here for you 24/7!
* **WhatsApp & Call:** +91 9650380888
* **Email:** hello@greenindiawm.com
* **Head Office:** Springboard Business Hub, Sector-18, Gurgaon — 122001, Haryana
* **Recycling Plant:** Plot No. 169, HSIIDC Kundli, Sonipat, Haryana — 131028
* **Customer Support:** Active round-the-clock in English, Hindi, and regional languages. ✉`
  },
  {
    keys: ['process', 'step', 'how it works', 'flow', 'work', 'method', 'procedure', 'segregation', 'sorting'],
    answer: `🔄 **Our 5-Step AI-Smart Recycling Process:**

1. **Scheduled Collection:** Book a collection on our website or text our WhatsApp bot.
2. **AI Segregation:** Waste is delivered to our Recovery Facility where smart optical sorting separates waste automatically.
3. **Advanced Processing:** Waste is washed, shredded, or composted in state-of-the-art facilities.
4. **Manufacturer Supply:** Shredded plastics, cleaned metals, and cardboard pulps are sold back to manufacturers.
5. **Circular Economy:** Reusable items return to the supply chain, ensuring **98% landfill diversion**! ♻️`
  },
  {
    keys: ['advantage', 'benefit', 'benefits', 'why recycle', 'importance', 'pros', 'good thing', 'positive'],
    answer: `✅ **Advantages of Recycling — Why It Matters:**

1. **Conserves Natural Resources:** Recycling reduces the need to extract virgin raw materials like timber, water, and minerals.
2. **Saves Energy:** Manufacturing from recycled materials uses significantly less energy (e.g., recycling aluminium saves 95% energy vs. virgin production).
3. **Reduces Environmental Pollution:** Keeps hazardous waste, chemicals, and toxins out of landfills, soil, and water bodies.
4. **Reduces Greenhouse Gas Emissions:** Less landfill waste = fewer methane emissions and lower carbon footprint.
5. **Creates Green Jobs:** The recycling industry generates employment in collection, sorting, processing, and logistics.
6. **Supports Circular Economy:** Materials re-enter the supply chain, reducing dependence on imports and virgin resources.
7. **Recovers Valuable Materials:** Precious metals like gold, silver, and copper are recovered from e-waste for reuse.
8. **Saves Landfill Space:** Diverts waste from overflowing landfills, extending their operational life.
9. **Promotes Sustainability:** Builds a cleaner, healthier planet for future generations. 🌍

At Green India, we are proud to champion all these benefits across **120+ cities in India**! ♻️`
  },
  {
    keys: ['challenge', 'challenges', 'problem', 'issue', 'difficulty', 'obstacles', 'drawback', 'cons', 'barrier', 'limitation'],
    answer: `⚠️ **Challenges in Recycling & E-Waste Management:**

1. **Lack of Awareness:** Many consumers don't know what is recyclable or how to dispose of e-waste safely.
2. **Inadequate Collection Infrastructure:** Insufficient collection points and reverse logistics systems reduce collection rates.
3. **Informal Sector Dominance:** Large portions of e-waste are handled by unregulated workers using unsafe methods.
4. **Weak Policy Enforcement:** Inconsistent regulations and poor enforcement hinder effective e-waste management.
5. **High Compliance Costs:** Proper treatment facilities and certifications require significant capital investment.
6. **Data Security Concerns:** Securely wiping storage devices before disposal is a major challenge for businesses.
7. **Limited Recycling Technology:** Lack of advanced sorting and processing facilities leads to low material recovery rates.
8. **Short Product Lifecycles:** Rapid tech upgrades generate more e-waste faster than recycling systems can handle.
9. **Consumer Behavior:** Convenience and lack of incentives make people less likely to segregate or recycle responsibly.

🌿 **How Green India Addresses These:** Through AI-powered sorting, 120+ city coverage, government-certified data destruction, and community awareness — we tackle every one of these challenges head-on!`
  }
];

const AIChatbot = ({ activeChat, setActiveChat }) => {
  const isOpen = activeChat === 'ai';
  const setIsOpen = (open) => setActiveChat(open ? 'ai' : null);
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

        Here are the certified facts about our company from the website. ONLY use these facts to answer the user:
        - Company Name: Green India Waste Management (Founded: 2023, with 18+ years of industry experience)
        - Director: Mr. Sonu Kumar
        - About Mr. Sonu Kumar: Mr. Sonu Kumar possesses extensive industry knowledge and years of valuable experience in the field of waste management and material recycling. With deep expertise in identifying, segregating, and recycling E-waste materials through environmentally responsible methods, he has played a significant role in promoting sustainable waste management practices. His strong leadership, operational excellence, and commitment to eco-friendly solutions continue to drive the company toward growth and innovation. Under his guidance, Green India Waste Management is committed to delivering safe, efficient, and sustainable recycling solutions for a cleaner and greener future.
        - Our Contact: WhatsApp & Call at +91 9650380888, Email at hello@greenindiawm.com, Headquarters in Gurgaon, Haryana.
        - Core Services: Plastic Waste Management (recycling grades into granules), E-Waste Recycling (certified data wipe & destruction), Industrial Waste Solutions (CPCB-compliant treatment), Scrap Collection (instant UPI/cash payouts for metals/paper/glass), Organic Waste Solutions (bio-composting wet waste to compost).
        - Service Coverage: 120+ cities in India including Delhi NCR, Mumbai, Bangalore, Pune, Chennai, Hyderabad, Kolkata, Ahmedabad, Surat, Jaipur, Lucknow, Kochi, Chandigarh.
        - Pricing: General collections are FREE. Scrap & E-waste earn instant cash payouts based on verified weight. AMCs are customized.
        - Achievements: 50,000+ Tons waste recycled, 120,000+ Trees saved, 30K+ Tons CO2 saved, 12,000+ happy clients.
        - Certifications: ISO 14001:2015 certified, Ministry of Environment authorized, 100% CPCB compliance.

        If the user asks something completely unrelated to our company or waste management, politely decline and steer them back.
        Keep answers relatively concise (max 2-3 paragraphs). Use emojis occasionally.

        User Question: ${userMessage}
      `;

      // Fallback for demo if API key isn't set (incorporates smart matching engine)
      if (genAI.apiKey === "YOUR_API_KEY_HERE") {
          setTimeout(() => {
              const lowerMsg = userMessage.toLowerCase().trim();
              
              // Standard conversational greetings
              if (lowerMsg === 'hi' || lowerMsg === 'hello' || lowerMsg === 'hey' || lowerMsg === 'help') {
                  const reply = "Hello! 👋 Welcome to **Green India Waste Management**. I am your AI Eco-Assistant. \n\nI can help you with: \n* 👤 Info about our Founder, Sonu Kumar\n* 🛠️ Our services (Plastic, E-waste, Scrap)\n* 📍 Cities we cover (120+ cities)\n* 💰 Rates & pricing\n* ✅ Advantages & challenges of recycling\n\nWhat can I help you with today? ♻️";
                  setMessages(prev => [...prev, { role: 'ai', text: reply }]);
                  setIsTyping(false);
                  return;
              }

              // Simple ranking matching algorithm
              let bestMatch = null;
              let highestScore = 0;

              for (const item of localKB) {
                  let score = 0;
                  for (const key of item.keys) {
                      if (lowerMsg.includes(key)) {
                          // Grant higher score for exact word matches or longer keys
                          score += key.split(' ').length;
                      }
                  }
                  if (score > highestScore) {
                      highestScore = score;
                      bestMatch = item;
                  }
              }

              let responseText = "";
              if (bestMatch && highestScore > 0) {
                  responseText = bestMatch.answer;
              } else {
                  responseText = "I'm not completely sure about that. 🌍 However, I can definitely help you with our **Services**, **Pricing**, **Cities Covered (120+)**, **Advantages & Challenges of Recycling**, or our **Founder Sonu Kumar**! \n\nPlease choose one of these topics or ask me a related question, and I'll gladly guide you. 🌿";
              }

              setMessages(prev => [...prev, { role: 'ai', text: responseText }]);
              setIsTyping(false);
          }, 800);
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
        className={`fixed bottom-[4.25rem] sm:bottom-[5.25rem] right-4 sm:right-5 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-primary-500 to-emerald-600 shadow-xl shadow-primary-500/40 flex items-center justify-center z-[199] ${isOpen || activeChat === 'whatsapp' ? 'hidden' : ''}`}
      >
        <FaRobot className="text-white text-lg sm:text-2xl" />
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
            className="fixed bottom-4 right-4 left-4 sm:left-auto sm:right-5 sm:bottom-5 sm:w-[400px] h-[500px] max-h-[80vh] bg-white border border-green-200/80 rounded-3xl shadow-green-2xl overflow-hidden z-50 flex flex-col"
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
                {['Book Collection', 'E-Waste Info', 'Pricing'].map(prompt => (
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
