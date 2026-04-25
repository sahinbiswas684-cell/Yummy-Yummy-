/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  MapPin, 
  ChevronRight, 
  Star, 
  Instagram, 
  Twitter, 
  Facebook, 
  Clock, 
  Phone, 
  ArrowRight,
  UtensilsCrossed,
  Map as MapIcon,
  ShoppingBag
} from 'lucide-react';

// --- Types ---
interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: 'standard' | 'secret';
  image: string;
}

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  quote: string;
}

interface Location {
  id: number;
  city: string;
  address: string;
  hours: string;
}

// --- Data ---
const MENU_ITEMS: MenuItem[] = [
  { id: 1, name: "Double-Double®", description: "Two 100% American beef patties, slice of real American cheese, onions, lettuce, tomato and spread.", price: "$4.95", category: 'standard', image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800" },
  { id: 2, name: "Cheeseburger", description: "Fresh beef patty, real American cheese, lettuce, tomato, onions and spread.", price: "$3.45", category: 'standard', image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=800" },
  { id: 3, name: "French Fries", description: "Fresh, hand-cut potatoes, fried in 100% vegetable oil.", price: "$2.15", category: 'standard', image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=80&w=800" },
  { id: 4, name: "Shakes", description: "Chocolate, Vanilla, or Strawberry. Real ice cream.", price: "$2.65", category: 'standard', image: "https://images.unsplash.com/photo-1579954115545-a95591f28bc0?q=80&w=800" },
  { id: 5, name: "Animal Style® Burger", description: "Mustard-cooked beef patty with extra spread and grilled onions.", price: "$5.25", category: 'secret', image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=800" },
  { id: 6, name: "4x4 Burger", description: "Four 100% American beef patties and four slices of cheese.", price: "$8.45", category: 'secret', image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=800" },
  { id: 7, name: "Animal Style® Fries", description: "Cheese, our signature spread, and grilled onions over fries.", price: "$4.15", category: 'secret', image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?q=80&w=800" },
];

const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: "Michael J.", rating: 5, quote: "The gold standard of fast food. Freshness you can actually taste every single time." },
  { id: 2, name: "Sarah L.", rating: 5, quote: "Nothing beats an Animal Style burger after a long day. It's the ultimate California experience!" },
  { id: 3, name: "David R.", rating: 5, quote: "Consistency is key, and In-N-Out nailed it. The fries are perfectly crisp and the service is always top-tier." },
];

const LOCATIONS: Location[] = [
  { id: 1, city: "Los Angeles", address: "9149 S Sepulveda Blvd, Los Angeles, CA 90045", hours: "10:30 AM - 1:00 AM" },
  { id: 2, city: "San Francisco", address: "333 Jefferson St, San Francisco, CA 94133", hours: "10:30 AM - 1:00 AM" },
  { id: 3, city: "Las Vegas", address: "4888 Dean Martin Dr, Las Vegas, NV 89103", hours: "10:30 AM - 1:30 AM" },
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-red shadow-md py-2 border-b-2 border-brand-yellow/20' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo Placeholder */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center border-2 border-white shadow-lg overflow-hidden transform group-hover:scale-110 transition-transform">
            <span className="text-brand-red font-black text-xl">IN</span>
          </div>
          <span className="text-white font-display text-2xl font-black tracking-tighter uppercase">In-N-Out Burger</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-white font-display uppercase tracking-widest font-bold text-sm">
          <a href="#menu" className="hover:text-brand-yellow transition-colors">Menu</a>
          <a href="#locations" className="hover:text-brand-yellow transition-colors">Locations</a>
          <a href="#story" className="hover:text-brand-yellow transition-colors">Quality</a>
          <button className="bg-brand-yellow text-brand-red px-6 py-2 rounded-md font-black hover:bg-white transition-all transform hover:translate-y-[-2px] flex items-center gap-2 shadow-xl uppercase">
            Order Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-red border-t-2 border-brand-yellow shadow-2xl md:hidden"
          >
            <div className="flex flex-col p-6 gap-6 text-white font-display uppercase font-black text-xl text-center">
              <a href="#menu" onClick={() => setIsOpen(false)}>Menu</a>
              <a href="#locations" onClick={() => setIsOpen(false)}>Locations</a>
              <a href="#story" onClick={() => setIsOpen(false)}>Our Story</a>
              <button className="bg-brand-yellow text-brand-red py-4 rounded-xl font-black text-lg shadow-xl uppercase">ORDER NOW</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-12">
    <div className="max-w-7xl mx-auto px-4 w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-brand-red rounded-[2rem] p-8 md:p-16 relative overflow-hidden flex flex-col justify-center border-4 border-brand-yellow shadow-2xl"
      >
        {/* Background Decorative Circles */}
        <div className="absolute -right-20 -bottom-20 opacity-10 pointer-events-none">
          <div className="w-96 h-96 bg-white rounded-full"></div>
        </div>
        <div className="absolute -left-10 -top-10 opacity-5 pointer-events-none">
          <div className="w-64 h-64 bg-brand-yellow rounded-full"></div>
        </div>

        <div className="relative z-10">
          <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] uppercase mb-8 tracking-tighter">
            Fresh. Never Frozen.<br/>
            <span className="text-brand-yellow">Always Delicious.</span>
          </h1>
          <p className="text-white text-xl md:text-2xl mb-10 max-w-xl font-sans font-medium leading-tight">
            Quality you can taste since 1948. Hand-leafed lettuce, sponge-dough buns, and 100% fresh, premium beef.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="bg-brand-yellow text-brand-red text-2xl font-black py-5 px-10 rounded-full shadow-2xl w-fit uppercase hover:scale-105 transition-transform flex items-center gap-3">
              Find a Location Near You
              <ArrowRight />
            </button>
            <a href="#menu" className="text-white border-b-4 border-brand-yellow text-xl font-black py-4 uppercase hover:text-brand-yellow transition-colors self-center">
              Discover the Menu
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const MenuSection = () => {
  const [showSecret, setShowSecret] = useState(false);
  
  const filteredItems = MENU_ITEMS.filter(item => 
    showSecret ? item.category === 'secret' : item.category === 'standard'
  );

  return (
    <section id="menu" className="py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-6">Our Iconic Crafted Menu</h2>
          <div className="w-32 h-2.5 bg-brand-yellow mx-auto mb-10 rounded-full"></div>
          
          {/* Toggle Switch */}
          <div className="flex items-center justify-center gap-6">
            <span className={`font-display font-black text-lg transition-colors ${!showSecret ? 'text-brand-red underline' : 'text-gray-300'}`}>CLASSIC FAVS</span>
            <button 
              onClick={() => setShowSecret(!showSecret)}
              className="relative w-20 h-10 bg-neutral-100 border-2 border-neutral-200 rounded-full p-1"
            >
              <div className={`w-7 h-7 bg-brand-red rounded-full shadow-lg transition-transform duration-300 ${showSecret ? 'translate-x-10' : ''}`}></div>
            </button>
            <span className={`font-display font-black text-lg transition-colors ${showSecret ? 'text-brand-red underline' : 'text-gray-300'}`}>SECRET MENU</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="wait">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`bg-white rounded-2xl p-6 flex flex-col items-center text-center border-2 shadow-sm hover:shadow-xl transition-all h-full ${item.category === 'secret' ? 'border-dashed border-brand-yellow' : 'border-gray-100'}`}
              >
                <div className="w-full h-40 bg-neutral-100 rounded-xl mb-6 relative overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                </div>
                <h3 className="font-black uppercase text-xl mb-2">{item.name}</h3>
                <p className="text-xs text-gray-500 font-semibold mb-4 flex-1">{item.description}</p>
                <div className="w-full flex items-center justify-between mt-auto pt-4 border-t border-neutral-50">
                  <span className="text-brand-red font-black text-2xl">{item.price}</span>
                  <button className="bg-brand-red text-white p-3 rounded-xl hover:bg-brand-black transition-colors">
                    <ShoppingBag size={20} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const SocialProof = () => (
  <section className="py-24 bg-brand-yellow overflow-hidden px-4">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t) => (
          <div key={t.id} className="bg-white rounded-2xl p-8 flex flex-col justify-center border-b-8 border-brand-red shadow-xl">
            <h3 className="text-brand-red font-black uppercase text-2xl italic mb-4 leading-tight">"{t.quote}"</h3>
            <div className="flex text-brand-red mb-4">
              {[...Array(t.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
            </div>
            <p className="text-brand-black font-black uppercase text-sm tracking-widest">- {t.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const LocationFinder = () => (
  <section id="locations" className="py-24 bg-neutral-50 px-4">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Sidebar search box style from design */}
      <div className="lg:col-span-4 bg-brand-black text-white rounded-2xl p-8 flex flex-col shadow-2xl">
        <h2 className="text-brand-yellow text-3xl font-black uppercase mb-6">Find Nearest</h2>
        <div className="space-y-6">
          <div className="relative group">
            <input 
              type="text" 
              placeholder="Enter your zip code" 
              className="w-full bg-white/10 border border-white/20 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-brand-yellow transition-colors font-bold"
            />
            <MapPin className="absolute right-6 top-1/2 -translate-y-1/2 text-brand-yellow" />
          </div>
          <div className="p-6 border-l-4 border-brand-yellow bg-white/5 rounded-r-xl">
            <p className="font-black text-xl mb-1 uppercase">Baldwin Park, CA</p>
            <p className="text-white/60 text-sm mb-2">13850 Francisquito Ave</p>
            <p className="text-brand-yellow font-black uppercase tracking-widest text-xs">Open until 1:00 AM</p>
          </div>
          <button className="w-full border-2 border-brand-yellow text-brand-yellow py-4 rounded-xl font-black uppercase text-sm hover:bg-brand-yellow hover:text-brand-black transition-all shadow-lg tracking-widest">
            Get Directions
          </button>
        </div>
      </div>

      <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {LOCATIONS.map((loc) => (
          <div key={loc.id} className="bg-white border-2 border-neutral-100 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all group">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-black uppercase text-brand-red">{loc.city}</h3>
              <div className="w-10 h-10 bg-neutral-50 rounded-full flex items-center justify-center text-brand-yellow group-hover:bg-brand-yellow group-hover:text-white transition-all">
                <MapIcon size={20} />
              </div>
            </div>
            <div className="space-y-3 mb-8">
              <p className="text-neutral-500 font-bold text-sm leading-tight">{loc.address}</p>
              <p className="text-brand-black font-black uppercase text-xs tracking-widest">{loc.hours}</p>
            </div>
            <button className="text-brand-red font-black uppercase text-sm border-b-2 border-brand-red hover:text-brand-black hover:border-brand-black transition-colors">
              Details & In-Store Order
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const BrandStory = () => (
  <section id="story" className="py-24 bg-neutral-100 px-4">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
      <div className="md:w-1/2 space-y-8">
        <h2 className="text-6xl font-black leading-none uppercase tracking-tighter">QUALITY YOU CAN<br/><span className="text-brand-red">TRUST.</span></h2>
        <p className="text-neutral-600 text-xl leading-relaxed font-sans font-medium">
          Founded in 1948, we remain family-owned and committed to serving the highest quality products. No heat lamps, no microwaves, and never, ever frozen.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-2xl border-2 border-brand-yellow shadow-sm">
            <h4 className="text-brand-red font-black text-3xl mb-1 uppercase">1948</h4>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest font-black">Est. Baldwin Park</p>
          </div>
          <div className="bg-brand-black p-6 rounded-2xl shadow-xl">
            <h4 className="text-brand-yellow font-black text-3xl mb-1 uppercase">100%</h4>
            <p className="text-[10px] text-white/50 uppercase tracking-widest font-black">Premium Beef</p>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 relative">
        <div className="bg-white p-4 rounded-3xl shadow-2xl border-2 border-neutral-100 rotate-2 hover:rotate-0 transition-transform duration-500">
          <img 
            src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800" 
            alt="In-N-Out Heritage" 
            className="rounded-xl grayscale"
          />
          <div className="mt-4 flex justify-between items-center px-2">
            <p className="text-xs font-black text-neutral-400 uppercase tracking-widest">Heritage Archive 01</p>
            <div className="flex gap-1 text-brand-yellow">
              {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const EmailCapture = () => (
  <section className="py-12 bg-neutral-100 px-4">
    <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 border-2 border-neutral-200 shadow-xl flex flex-col md:flex-row items-center gap-8">
      <div className="w-20 h-20 bg-brand-red rounded-full flex items-center justify-center text-white shrink-0 shadow-lg">
        <Mail size={40} />
      </div>
      <div className="flex-1 text-center md:text-left">
        <h4 className="text-2xl font-black uppercase text-brand-red tracking-tight">Join the Secret Club</h4>
        <p className="text-sm text-gray-600 font-semibold mb-6">Get secret menu deals and heritage deals straight to your inbox.</p>
        <form className="flex gap-3">
          <input 
            type="email" 
            placeholder="your@email.com" 
            className="flex-1 bg-neutral-50 border-2 border-neutral-100 rounded-xl px-6 py-4 text-brand-black focus:outline-none focus:border-brand-red transition-all font-bold"
          />
          <button className="bg-brand-red text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-brand-black transition-all shadow-lg text-sm">
            Join
          </button>
        </form>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white text-brand-black pt-16 pb-8 px-4 border-t-2 border-neutral-100">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center border-2 border-white shadow-xl">
            <UtensilsCrossed className="text-brand-red w-10 h-10" />
          </div>
          <div>
            <h4 className="text-2xl font-black uppercase tracking-tighter leading-none">In-N-Out Burger</h4>
            <p className="text-[10px] text-neutral-400 uppercase font-black tracking-widest mt-1">Family Owned Since 1948</p>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 text-xs font-black uppercase tracking-widest text-neutral-400">
          <a href="#menu" className="hover:text-brand-red transition-colors">Menu</a>
          <a href="#locations" className="hover:text-brand-red transition-colors">Locations</a>
          <a href="#" className="hover:text-brand-red transition-colors">Careers</a>
          <a href="#" className="hover:text-brand-red transition-colors">Press</a>
          <a href="#" className="hover:text-brand-red transition-colors">Contact</a>
        </div>

        <div className="flex gap-4">
          <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-400 hover:bg-brand-red hover:text-white transition-all cursor-pointer">
            <Instagram size={20} />
          </div>
          <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-400 hover:bg-brand-red hover:text-white transition-all cursor-pointer">
            <Twitter size={20} />
          </div>
          <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-400 hover:bg-brand-red hover:text-white transition-all cursor-pointer">
            <Facebook size={20} />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-neutral-50 text-[10px] font-bold text-neutral-300 uppercase tracking-tighter">
        <p>© {new Date().getFullYear()} IN-N-OUT BURGER. FRESHNESS FIRST.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#">Privacy</a>
          <span>|</span>
          <a href="#">Terms</a>
          <span>|</span>
          <a href="#">Accessibility</a>
        </div>
      </div>
    </div>
  </footer>
);

// Fallback Mail component since lucide-react might not have it in the specific import list
const Mail = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

export default function App() {
  return (
    <div className="relative font-sans text-brand-black selection:bg-brand-yellow selection:text-brand-red scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <MenuSection />
        <SocialProof />
        <LocationFinder />
        <BrandStory />
        <EmailCapture />
      </main>
      <Footer />
    </div>
  );
}
