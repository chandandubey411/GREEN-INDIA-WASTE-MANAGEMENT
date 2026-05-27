// src/data/index.js
// Centralized data for Green India Waste Management

export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Recycling', href: '/recycling' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export const stats = [
  { label: 'Waste Recycled', value: '50K+', unit: 'Tons' },
  { label: 'Happy Clients', value: '12K+', unit: '' },
  { label: 'Cities Covered', value: '120+', unit: '' },
  { label: 'CO₂ Saved', value: '30K+', unit: 'Tons' },
];

export const services = [
  {
    id: 1,
    icon: 'FaRecycle',
    title: 'Plastic Waste Management',
    description: 'Comprehensive plastic waste collection, segregation and recycling solutions for homes and businesses.',
    image: 'https://www.shaktiplasticinds.com/wp-content/uploads/2022/12/Add-a-heading-29.png',
    color: '#22c55e',
  },
  {
    id: 2,
    icon: 'FaMobileAlt',
    title: 'E-Waste Recycling',
    description: 'Safe disposal of electronic waste including phones, laptops, and appliances with certified recycling.',
    image: 'https://testingpython.skvewaste.com/media/E-Waste%20Recycling_11zon_zS8f1Rx.webp',
    color: '#3b82f6',
  },
  {
    id: 3,
    icon: 'FaIndustry',
    title: 'Industrial Waste',
    description: 'Tailored solutions for industrial waste management ensuring regulatory compliance and safety.',
    image: '/recycling-unit-header.jpg',
    color: '#f59e0b',
  },
  {
    id: 4,
    icon: 'FaTruck',
    title: 'Doorstep Pickup',
    description: 'Schedule convenient doorstep waste collection at your preferred date and time.',
    image: 'https://cdn.catf.us/wp-content/uploads/2025/10/01080255/Methane_ExchangeBlog_1-1400x1055.jpg',
    color: '#8b5cf6',
  },
  {
    id: 5,
    icon: 'FaBoxes',
    title: 'Scrap Collection',
    description: 'Best prices for metal, paper, glass and other scrap with instant payment.',
    image: 'https://cleanriver.com/wp-content/uploads/2023/09/jessica-palomo-l7LmUdkrANQ-unsplash-scaled.jpg',
    color: '#ef4444',
  },
  {
    id: 6,
    icon: 'FaLeaf',
    title: 'Organic Waste Solutions',
    description: 'Convert organic kitchen and garden waste into valuable compost through our bio-composting process.',
    image: 'https://news.uga.edu/wp-content/uploads/2022/04/organic_waster.jpg',
    color: '#14b8a6',
  },
];

export const whyChooseUs = [
  {
    icon: 'FaLeaf',
    title: 'Eco Friendly',
    description: 'All our processes follow strict environmental guidelines to minimize ecological footprint.',
    color: '#22c55e',
  },
  {
    icon: 'FaBrain',
    title: 'AI Smart Recycling',
    description: 'AI-powered waste classification and routing for maximum recycling efficiency.',
    color: '#8b5cf6',
  },
  {
    icon: 'FaBolt',
    title: 'Fast Pickup',
    description: 'Same-day and next-day pickup available in 120+ cities across India.',
    color: '#f59e0b',
  },
  {
    icon: 'FaShieldAlt',
    title: 'Safe Disposal',
    description: 'Certified hazardous waste disposal with full tracking and compliance reports.',
    color: '#3b82f6',
  },
  {
    icon: 'FaCertificate',
    title: 'Government Certified',
    description: 'Authorized by Ministry of Environment with ISO 14001:2015 certification.',
    color: '#ef4444',
  },
  {
    icon: 'FaHeadset',
    title: '24/7 Support',
    description: 'Round-the-clock customer support via chat, call and email in 10+ languages.',
    color: '#06b6d4',
  },
];

export const recyclingSteps = [
  {
    step: '01',
    title: 'Waste Collection',
    description: 'Scheduled doorstep pickup or drop at our collection centers across 120+ cities.',
    icon: 'FaTruck',
    color: '#22c55e',
  },
  {
    step: '02',
    title: 'Segregation',
    description: 'AI-powered waste sorting separates materials into plastic, metal, organic, and e-waste.',
    icon: 'FaSortAmountDown',
    color: '#3b82f6',
  },
  {
    step: '03',
    title: 'Recycling',
    description: 'State-of-the-art processing plants transform waste into reusable raw materials.',
    icon: 'FaRecycle',
    color: '#8b5cf6',
  },
  {
    step: '04',
    title: 'Reuse',
    description: 'Processed materials are supplied to manufacturers, closing the circular economy loop.',
    icon: 'FaSync',
    color: '#f59e0b',
  },
  {
    step: '05',
    title: 'Sustainable Future',
    description: 'Every item recycled reduces landfill, saves energy, and builds a greener India.',
    icon: 'FaGlobe',
    color: '#14b8a6',
  },
];

export const impactStats = [
  { label: 'Tons Recycled', value: 50000, suffix: '+', icon: 'FaRecycle', color: '#22c55e', progress: 85 },
  { label: 'Trees Saved', value: 120000, suffix: '+', icon: 'FaTree', color: '#4ade80', progress: 72 },
  { label: 'Plastic Reduced', value: 30, suffix: 'K+ Tons', icon: 'FaLeaf', color: '#3b82f6', progress: 68 },
  { label: 'Active Clients', value: 12000, suffix: '+', icon: 'FaUsers', color: '#8b5cf6', progress: 90 },
];

export const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Homeowner, Delhi',
    review: 'Green India transformed how our society handles waste. The doorstep pickup is super convenient and the team is very professional!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face',
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    role: 'Factory Owner, Mumbai',
    review: 'Best industrial waste management service. Compliance reports are detailed and the AI assistant helps track everything in real time.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
  },
  {
    id: 3,
    name: 'Anjali Mehta',
    role: 'School Principal, Pune',
    review: 'We installed composting units in our school through Green India. Students love it and we have reduced 90% of our organic waste.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
  },
  {
    id: 4,
    name: 'Vikram Singh',
    role: 'IT Manager, Bangalore',
    review: 'Excellent e-waste recycling service. They provided certificates for all disposed equipment which is crucial for our compliance.',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face',
  },
  {
    id: 5,
    name: 'Nisha Patel',
    role: 'Restaurant Owner, Hyderabad',
    review: 'The organic waste solutions are fantastic! We now compost all kitchen waste and even get organic fertilizer back. Win-win!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face',
  },
];

export const blogs = [
  {
    id: 1,
    title: 'How AI is Revolutionizing Waste Management in India',
    excerpt: 'From smart bins to autonomous sorting robots, artificial intelligence is transforming how India handles its 277 million tons of annual waste.',
    date: 'May 15, 2026',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&h=250&fit=crop',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'The Complete Guide to E-Waste Recycling at Home',
    excerpt: 'Your old phone, laptop and gadgets contain valuable metals and toxic substances. Here is how to dispose them responsibly.',
    date: 'May 8, 2026',
    category: 'Recycling',
    image: 'https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?w=400&h=250&fit=crop',
    readTime: '7 min read',
  },
  {
    id: 3,
    title: 'Zero Waste Living: 30-Day Challenge for Indian Households',
    excerpt: 'Join thousands of Indian families in the zero-waste movement. Simple daily habits that make a massive environmental impact.',
    date: 'April 28, 2026',
    category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=250&fit=crop',
    readTime: '6 min read',
  },
];
export const galleryImages = [
  { id: 1,  src: 'https://i.pinimg.com/1200x/f4/32/32/f43232b24966d22f64f68c3d2a8c8b34.jpg', alt: 'Industrial Double Shaft Shredder', category: 'Recycling' },
  { id: 2,  src: 'https://5.imimg.com/data5/SELLER/Default/2023/3/RC/OA/YI/15821040/mini-horizontal-bandsaw-machine-ohb24.jpg', alt: 'Horizontal Bandsaw Machine', category: 'Recycling' },
  { id: 3,  src: 'https://i.pinimg.com/736x/28/23/19/282319d1545d0635707cdc69f3ca8863.jpg', alt: 'Trommel Screening Machine', category: 'Facility' },
  { id: 4,  src: 'https://i.pinimg.com/736x/e4/32/7f/e4327fe19c2c3abf54ed7c2a6d55fe15.jpg', alt: 'Cable Wire Stripping Machine', category: 'Recycling' },
  { id: 5,  src: 'https://i.pinimg.com/736x/d2/d5/6c/d2d56c67e51000893573ae3aa9859898.jpg', alt: 'Cyclone Dust Collector', category: 'Facility' },
  { id: 6,  src: 'https://i.pinimg.com/736x/dd/35/6c/dd356ccb78ea4847f5c7ae5c40799e89.jpg', alt: 'Electrical Control Panel', category: 'Facility' },
  { id: 7,  src: 'https://p-cdn-sfpi.azureedge.net/global/en/-/media/NEU/Delta-NEU-BE/Readmore/Solutions/solution-ventilation-poste-de-travail-table-aspirante.jpg?h=552&iar=0&w=700&modified=20201001152711', alt: 'Exhaust & Work Station System', category: 'Facility' },
  { id: 8,  src: 'https://webcontent.greenheck.com/atg-cms-v2-prod/images/default-source/blog/understanding-exhaust-system-stack-design-and-plume-rise-hero.png?sfvrsn=b510b05b_1', alt: 'Vertical Exhaust Stack System', category: 'Facility' },
  { id: 9,  src: 'https://i.pinimg.com/1200x/70/60/87/7060873280c0229c754fde4884bd942f.jpg', alt: 'Exhaust Air Scrubber System', category: 'Facility' },
  { id: 10, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlapQbEtScVsnlYgr6wDM0sgvfTBMvh8IFZQ&s', alt: 'Green India Recycling Plant Unit', category: 'Facility' },
  { id: 11, src: 'https://www.bine.world/assets/images/recycling_solutions/bine.webp', alt: 'Smart Waste Sorting Bins', category: 'Recycling' },
  { id: 12, src: '/sonu-kumar.jpg', alt: 'Director & Founder Sonu Kumar', category: 'Team' },
];


export const wasteTypes = [
  'Plastic Waste', 'E-Waste', 'Industrial Waste', 'Organic Waste', 'Metal Scrap', 'Paper & Cardboard', 'Glass Waste', 'Hazardous Waste'
];

export const cities = [
  'Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Hyderabad', 'Pune', 'Kolkata', 'Ahmedabad', 'Jaipur', 'Lucknow', 'Noida', 'Gurgaon', 'Chandigarh', 'Surat', 'Kochi'
];
