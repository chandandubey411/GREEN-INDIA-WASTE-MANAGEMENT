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
    image: 'https://images.unsplash.com/photo-1611270629569-8b357cb88da9?w=400&h=300&fit=crop',
    color: '#22c55e',
  },
  {
    id: 2,
    icon: 'FaMobileAlt',
    title: 'E-Waste Recycling',
    description: 'Safe disposal of electronic waste including phones, laptops, and appliances with certified recycling.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',
    color: '#3b82f6',
  },
  {
    id: 3,
    icon: 'FaIndustry',
    title: 'Industrial Waste',
    description: 'Tailored solutions for industrial waste management ensuring regulatory compliance and safety.',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=300&fit=crop',
    color: '#f59e0b',
  },
  {
    id: 4,
    icon: 'FaTruck',
    title: 'Doorstep Pickup',
    description: 'Schedule convenient doorstep waste collection at your preferred date and time.',
    image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=400&h=300&fit=crop',
    color: '#8b5cf6',
  },
  {
    id: 5,
    icon: 'FaBoxes',
    title: 'Scrap Collection',
    description: 'Best prices for metal, paper, glass and other scrap with instant payment.',
    image: 'https://images.unsplash.com/photo-1605600659873-d808a13e4d9a?w=400&h=300&fit=crop',
    color: '#ef4444',
  },
  {
    id: 6,
    icon: 'FaLeaf',
    title: 'Organic Waste Solutions',
    description: 'Convert organic kitchen and garden waste into valuable compost through our bio-composting process.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop',
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
  { id: 1,  src: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=600&fit=crop', alt: 'Recycling Plant', category: 'Facility' },
  { id: 2,  src: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=800&h=600&fit=crop', alt: 'Garbage Truck', category: 'Operations' },
  { id: 3,  src: 'https://images.unsplash.com/photo-1611270629569-8b357cb88da9?w=800&h=600&fit=crop', alt: 'Plastic Recycling', category: 'Recycling' },
  { id: 4,  src: 'https://images.unsplash.com/photo-1605600659873-d808a13e4d9a?w=800&h=600&fit=crop', alt: 'Sorting Workers', category: 'Team' },
  { id: 5,  src: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop', alt: 'Green Environment', category: 'Environment' },
  { id: 6,  src: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop', alt: 'Industrial Facility', category: 'Facility' },
  { id: 7,  src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop', alt: 'E-Waste Electronics', category: 'E-Waste' },
  { id: 8,  src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop', alt: 'Organic Composting', category: 'Organic' },
  { id: 9,  src: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=600&fit=crop', alt: 'AI Technology', category: 'Technology' },
  { id: 10, src: 'https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?w=800&h=600&fit=crop', alt: 'Circuit Boards', category: 'E-Waste' },
  { id: 11, src: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop', alt: 'Solar Energy', category: 'Environment' },
  { id: 12, src: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=600&fit=crop', alt: 'Green Technology', category: 'Technology' },
  { id: 13, src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop', alt: 'Team Member', category: 'Team' },
  { id: 14, src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&h=600&fit=crop', alt: 'Eco Products', category: 'Recycling' },
  { id: 15, src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop', alt: 'Team Working', category: 'Team' },
  { id: 16, src: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800&h=600&fit=crop', alt: 'Forest Trees', category: 'Environment' },
  { id: 17, src: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&h=600&fit=crop', alt: 'Eco Building', category: 'Facility' },
  { id: 18, src: 'https://images.unsplash.com/photo-1574607383077-ac7e8b5c3f3f?w=800&h=600&fit=crop', alt: 'Recycling Bins', category: 'Operations' },
  { id: 19, src: 'https://images.unsplash.com/photo-1558618048-fbd3c72e43eb?w=800&h=600&fit=crop', alt: 'Water Conservation', category: 'Environment' },
  { id: 20, src: 'https://images.unsplash.com/photo-1503596476-1c12a8ba09a9?w=800&h=600&fit=crop', alt: 'Green Landscape', category: 'Environment' },
  { id: 21, src: 'https://images.unsplash.com/photo-1572205097515-4bbe9c3d793a?w=800&h=600&fit=crop', alt: 'Metal Scrap', category: 'Recycling' },
  { id: 22, src: 'https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?w=800&h=600&fit=crop', alt: 'Plant Saplings', category: 'Environment' },
  { id: 23, src: 'https://images.unsplash.com/photo-1589674781759-c21c37956a44?w=800&h=600&fit=crop', alt: 'Waste Collection', category: 'Operations' },
  { id: 24, src: 'https://images.unsplash.com/photo-1523540939399-141cbff6a8d7?w=800&h=600&fit=crop', alt: 'Paper Recycling', category: 'Recycling' },
  { id: 25, src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=600&fit=crop', alt: 'Nature Aerial', category: 'Environment' },
  { id: 26, src: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop', alt: 'Green Energy Wind', category: 'Technology' },
  { id: 27, src: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=800&h=600&fit=crop', alt: 'Lab Testing', category: 'Technology' },
  { id: 28, src: 'https://images.unsplash.com/photo-1517404215738-15263e9f9178?w=800&h=600&fit=crop', alt: 'Workers Safety', category: 'Team' },
  { id: 29, src: 'https://images.unsplash.com/photo-1581093577421-f561a654a353?w=800&h=600&fit=crop', alt: 'Factory Inside', category: 'Facility' },
  { id: 30, src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop', alt: 'Community Drive', category: 'Team' },
  { id: 31, src: 'https://images.unsplash.com/photo-1612630741022-b29ec5d4c1e6?w=800&h=600&fit=crop', alt: 'Old Electronics', category: 'E-Waste' },
  { id: 32, src: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&h=600&fit=crop', alt: 'Plastic Bottles', category: 'Recycling' },
  { id: 33, src: 'https://images.unsplash.com/photo-1592982537447-6f2a6a0c7c10?w=800&h=600&fit=crop', alt: 'Green Roof', category: 'Facility' },
  { id: 34, src: 'https://images.unsplash.com/photo-1545231097-cbd7f6a32f14?w=800&h=600&fit=crop', alt: 'River Clean', category: 'Environment' },
  { id: 35, src: 'https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?w=800&h=600&fit=crop', alt: 'Tree Planting', category: 'Environment' },
  { id: 36, src: 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=800&h=600&fit=crop', alt: 'Sustainable City', category: 'Technology' },
];

export const wasteTypes = [
  'Plastic Waste', 'E-Waste', 'Industrial Waste', 'Organic Waste', 'Metal Scrap', 'Paper & Cardboard', 'Glass Waste', 'Hazardous Waste'
];

export const cities = [
  'Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Hyderabad', 'Pune', 'Kolkata', 'Ahmedabad', 'Jaipur', 'Lucknow', 'Noida', 'Gurgaon', 'Chandigarh', 'Surat', 'Kochi'
];
