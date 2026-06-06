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
    title: 'Fast Collection',
    description: 'Same-day and next-day collection available in 120+ cities across India.',
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
    description: 'Scheduled collection or drop at our collection centers across 120+ cities.',
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
    review: 'Green India transformed how our society handles waste. The collection service is super convenient and the team is very professional!',
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
  // ── Building & Facilities ───────────────────────────────────
  { id: 1,  src: '/office-building.jpg',         alt: 'Green India Head Office — Gurgaon',            category: 'Building' },
  { id: 6,  src: '/dlf-office-building.jpg',     alt: 'DLF IT Park Office Building — Gurgaon',        category: 'Building' },
  { id: 7,  src: '/plant-gate.jpg',              alt: 'Green India Recycling Plant Gate — Sonipat',    category: 'Building' },

  // ── Machines & Equipment ────────────────────────────────────
  { id: 2,  src: '/conveyor-belt.jpg',           alt: 'Waste Management Conveyor Belt',               category: 'Machines' },
  { id: 3,  src: '/wire-stripping-machine.jpg',  alt: 'Waste Management Wire Stripping Machine',      category: 'Machines' },
  { id: 4,  src: '/incinerator-machine.jpg',     alt: 'Incinerator Machine — Recycling of Materials', category: 'Machines' },
  { id: 5,  src: '/baghouse-dust-collector.jpg', alt: 'Baghouse Dust Collector System',               category: 'Machines' },
  { id: 8,  src: '/dust-collection-unit.jpg',    alt: 'Dust Collection Unit',                         category: 'Machines' },
  { id: 9,  src: '/gas-scrubber-unit.jpg',       alt: 'Gas Scrubber Unit',                            category: 'Machines' },
  { id: 10, src: '/shredder-machine.jpg',        alt: 'Shredder Machine',                             category: 'Machines' },
  { id: 11, src: '/double-shaft-shredder.jpg',   alt: 'Industrial Double Shaft Shredder',             category: 'Machines' },
  { id: 12, src: '/wire-stripper.jpg',           alt: 'Cable Wire Stripping Machine',                 category: 'Machines' },
  { id: 13, src: '/horizontal-bandsaw.jpg',      alt: 'Horizontal Bandsaw Machine',                   category: 'Machines' },
  { id: 14, src: '/trommel-screening.jpg',       alt: 'Trommel Screening Machine',                    category: 'Machines' },
  { id: 15, src: '/dust-collector.jpg',          alt: 'Cyclone Dust Collector',                       category: 'Machines' },
  { id: 16, src: '/electrical-control-panel.jpg',alt: 'Electrical Control Panel',                     category: 'Machines' },
  { id: 17, src: '/exhaust-scrubber.jpg',        alt: 'Exhaust Air Scrubber System',                  category: 'Machines' },
  { id: 18, src: '/exhaust-workstation.jpg',     alt: 'Exhaust & Work Station System',                category: 'Machines' },
  { id: 19, src: '/recycling-unit-header.jpg',   alt: 'Green India Recycling Unit',                   category: 'Machines' },
  { id: 20, src: '/vertical-exhaust.jpg',        alt: 'Vertical Exhaust Stack System',                category: 'Machines' },

  // ── Scrap ────────────────────────────────────────────────────
  { id: 21, src: '/scrap-cpu-stack.jpg',         alt: 'Stacked Computer CPU Towers — Scrap',          category: 'Scrap' },
  { id: 22, src: '/scrap-electronics-pile.jpg',  alt: 'Mixed Electronic Scrap — Printers & UPS',      category: 'Scrap' },
  { id: 23, src: '/scrap-monitors-heap.jpg',     alt: 'Old CRT Monitors & Keyboards — E-Scrap',       category: 'Scrap' },
  { id: 24, src: '/scrap-lcd-monitors.jpg',      alt: 'Stacked LCD Monitor Screens — Bulk Scrap',     category: 'Scrap' },
  { id: 25, src: '/scrap-cables-wires.png',      alt: 'Tangled Electronic Cables & Wires — Scrap',    category: 'Scrap' },
  { id: 26, src: '/scrap-slim-desktops-stack.png', alt: 'Slim Desktop PCs Stacked — Bulk CPU Scrap',  category: 'Scrap' },
  { id: 27, src: '/scrap-laptops-pile.png',      alt: 'Old Laptops Piled — E-Waste Scrap',             category: 'Scrap' },
  { id: 28, src: '/scrap-cpu-hdd-mix.png',       alt: 'CPUs & Hard Drives Mixed — E-Scrap Lot',        category: 'Scrap' },
  { id: 29, src: '/scrap-laptops-bulk.png',      alt: 'Bulk Laptop Scrap — Used Notebooks Collection', category: 'Scrap' },
  { id: 30, src: '/scrap-desktop-towers.png',    alt: 'Desktop Tower Computers — Scrap Collection',    category: 'Scrap' },
  { id: 31, src: '/scrap-warehouse-ewaste.png',  alt: 'Warehouse E-Waste Scrap — Laptops & Electronics', category: 'Scrap' },
  { id: 32, src: '/scrap-dell-laptops-heap.png', alt: 'Dell Laptops Heap — Used Laptop Scrap',          category: 'Scrap' },
  { id: 33, src: '/scrap-open-cpu-internals.png',alt: 'Open CPU Internals — Computer Parts Scrap',      category: 'Scrap' },
  { id: 34, src: '/scrap-cpu-towers-room.png',   alt: 'CPU Tower Computers — Bulk Scrap Room',          category: 'Scrap' },
  { id: 35, src: '/scrap-mixed-desktops-store.jpg', alt: 'Mixed Desktop Scrap Store — E-Waste Lot',     category: 'Scrap' },
  { id: 36, src: '/scrap-mixed-cables-yellow.jpg', alt: 'Mixed Yellow & Black Cables — Wire Scrap',    category: 'Scrap' },
  { id: 37, src: '/scrap-dell-monitors-room.jpg',  alt: 'Dell LCD Monitors Collected — Screen Scrap',  category: 'Scrap' },
  { id: 38, src: '/scrap-pcb-boards-box.jpg',      alt: 'PCB Circuit Boards in Box — Electronic Scrap',category: 'Scrap' },
  { id: 39, src: '/scrap-coloured-cables-heap.jpg',alt: 'Coloured Cables & Adapters — Cable Scrap',    category: 'Scrap' },
  { id: 40, src: '/scrap-laptop-batteries.jpg',    alt: 'Laptop Batteries & Chargers — Battery Scrap', category: 'Scrap' },
  { id: 41, src: '/scrap-dell-laptops-dusty.jpg',  alt: 'Dusty Dell Laptops Heap — Used Laptop Scrap', category: 'Scrap' },
  { id: 42, src: '/scrap-network-switches.jpg',    alt: 'Network Switches & Routers — Server Scrap',   category: 'Scrap' },
  { id: 43, src: '/scrap-cables-accessories.jpg',  alt: 'Cables & Accessories Mixed — E-Waste Scrap',  category: 'Scrap' },
  { id: 44, src: '/scrap-wire-motors-yard1.jpg',   alt: 'Wire Scrap & Motors — Scrap Yard Collection', category: 'Scrap' },
  { id: 45, src: '/scrap-wire-motors-yard2.jpg',   alt: 'Wire Scrap Yard — Motors & Metal Scrap',      category: 'Scrap' },
  { id: 46, src: '/scrap-thin-clients-dark.jpg',   alt: 'Thin Clients & Laptops — Dark Storage Scrap', category: 'Scrap' },
  { id: 47, src: '/scrap-cisco-routers2.jpg',      alt: 'Cisco Network Routers — Server Room Scrap',   category: 'Scrap' },
  { id: 48, src: '/scrap-cisco-routers3.jpg',      alt: 'Stacked Cisco Switches & Routers — IT Scrap', category: 'Scrap' },
  { id: 49, src: '/scrap-cpu-towers-rear.jpg',     alt: 'CPU Towers Rear View — Bulk Computer Scrap',  category: 'Scrap' },

];


export const wasteTypes = [
  'Plastic Waste', 'E-Waste', 'Industrial Waste', 'Organic Waste', 'Metal Scrap', 'Paper & Cardboard', 'Glass Waste', 'Hazardous Waste'
];

export const cities = [
  'Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Hyderabad', 'Pune', 'Kolkata', 'Ahmedabad', 'Jaipur', 'Lucknow', 'Noida', 'Gurgaon', 'Chandigarh', 'Surat', 'Kochi'
];
