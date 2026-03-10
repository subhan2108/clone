import { motion, useScroll, useTransform } from "motion/react";
import { ReactLenis } from "lenis/react";
import { 
  Menu, 
  X, 
  ChevronRight, 
  MapPin, 
  Calendar, 
  Users, 
  Coffee, 
  Wind, 
  Droplets, 
  Waves,
  Instagram,
  Facebook,
  Twitter
} from "lucide-react";
import { useState, useEffect } from "react";
import { ImagesScrollingAnimation } from "./components/ui/images-scrolling-animation";

const Navbar = ({ onNavigate, currentPage }: { onNavigate: (page: "home" | "story" | "clubs" | "membership") => void, currentPage: string }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Our Story", id: "story" },
    { name: "Membership", id: "membership" },
    { name: "Courts", id: "courts" },
    { name: "Clubs", id: "clubs" },
    { name: "Events", id: "events" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled || currentPage !== "home" ? "glass-nav py-4" : "bg-transparent py-8"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-12">
          <button onClick={() => onNavigate("home")} className="text-3xl font-serif font-bold tracking-tighter uppercase cursor-pointer">
            Reserve
          </button>
          <div className="hidden lg:flex gap-8">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => {
                  if (link.id === "story") onNavigate("story");
                  else if (link.id === "clubs") onNavigate("clubs");
                  else if (link.id === "membership") onNavigate("membership");
                }}
                className={`text-xs uppercase tracking-[0.2em] font-medium hover:text-reserve-accent transition-colors cursor-pointer ${currentPage === link.id ? "text-reserve-accent" : ""}`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="hidden lg:flex gap-6">
          <button onClick={() => onNavigate("membership")} className="text-xs uppercase tracking-[0.2em] font-medium border-b border-white/30 pb-1 hover:border-reserve-accent transition-all cursor-pointer">
            Become a Member
          </button>
          <button className="text-xs uppercase tracking-[0.2em] font-medium border-b border-white/30 pb-1 hover:border-reserve-accent transition-all cursor-pointer">
            Book a Court
          </button>
        </div>

        <button 
          className="lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden absolute top-full left-0 w-full bg-reserve-black border-t border-white/10 p-8 flex flex-col gap-6"
        >
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => {
                if (link.id === "story") onNavigate("story");
                else if (link.id === "clubs") onNavigate("clubs");
                else onNavigate("home");
                setIsMobileMenuOpen(false);
              }}
              className="text-lg uppercase tracking-widest font-serif text-left"
            >
              {link.name}
            </button>
          ))}
          <div className="flex flex-col gap-4 pt-4 border-t border-white/10">
            <button className="btn-primary w-full">Become a Member</button>
            <button className="btn-outline w-full">Book a Court</button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src="https://picsum.photos/seed/padel/1920/1080" 
          alt="Reserve Padel Court" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>
      
      <div className="relative z-20 text-center px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-[10rem] font-serif font-light leading-tight tracking-tighter mb-8"
        >
          Athletic <br /> <span className="italic">Elegance</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col md:flex-row gap-6 justify-center"
        >
          <button className="btn-primary">Become a Member</button>
          <button className="btn-outline">Book a Court</button>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-px h-12 bg-white/30 mx-auto" />
      </div>
    </section>
  );
};

const LatestNews = () => {
  const news = [
    {
      title: "RESERVE COURTS",
      subtitle: "MIAMI SEAPLANE",
      image: "https://picsum.photos/seed/miami/800/1000",
    },
    {
      title: "COURT TO CORE",
      subtitle: "WELLNESS PROGRAM",
      image: "https://picsum.photos/seed/wellness/800/1000",
    },
    {
      title: "RESERVE SOLÉ MIA",
      subtitle: "NORTH MIAMI",
      image: "https://picsum.photos/seed/northmiami/800/1000",
    }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-reserve-accent mb-4">The Latest</p>
          <h2 className="text-4xl md:text-5xl font-serif">What's New at Reserve</h2>
        </div>
        <button className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest hover:text-reserve-accent transition-colors">
          View All <ChevronRight size={16} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {news.map((item, index) => (
          <motion.div 
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[3/4] overflow-hidden mb-6">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
            </div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/50 mb-2">{item.subtitle}</p>
            <h3 className="text-xl font-serif tracking-widest group-hover:text-reserve-accent transition-colors">{item.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ElevateSection = () => {
  return (
    <section className="py-24 bg-white text-reserve-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="z-10"
        >
          <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">Elevate <br /> <span className="italic">Your Game.</span></h2>
          <p className="text-lg text-black/70 mb-10 leading-relaxed max-w-lg">
            Private Lessons offer one-on-one instruction with our professional coaches, 
            tailored to your level and focused on refining technique, strategy, 
            and overall performance on court.
          </p>
          <button className="px-10 py-4 bg-reserve-black text-white uppercase tracking-widest hover:bg-reserve-accent transition-all">
            Inquire Today
          </button>
        </motion.div>
        
        <div className="relative h-[600px] w-full lg:h-[800px]">
          <ImagesScrollingAnimation />
        </div>
      </div>
    </section>
  );
};

const Amenities = () => {
  const amenities = [
    { icon: <Users size={32} />, name: "New Equipment" },
    { icon: <Waves size={32} />, name: "Showers & Lockers" },
    { icon: <Coffee size={32} />, name: "Coffee & Snacks" },
    { icon: <Droplets size={32} />, name: "Juice Bar" },
    { icon: <Wind size={32} />, name: "Cold Plunge" },
    { icon: <Waves size={32} />, name: "Sauna & Steam" },
  ];

  return (
    <section className="py-24 px-6 bg-reserve-black">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <p className="text-xs uppercase tracking-[0.3em] text-reserve-accent mb-4">Experience</p>
        <h2 className="text-4xl md:text-6xl font-serif mb-8">Our Club Amenities</h2>
        <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
          At Reserve, each of our clubs offers a unique selection of amenities from locker rooms, 
          showers and cold plunges to a wellness center that features a steam room and sauna.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {amenities.map((item, index) => (
          <motion.div 
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4 group"
          >
            <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:border-reserve-accent group-hover:text-reserve-accent transition-all duration-500">
              {item.icon}
            </div>
            <p className="text-[10px] uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">{item.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Footer = ({ onNavigate }: { onNavigate: (page: "home" | "story" | "clubs" | "membership") => void }) => {
  return (
    <footer className="bg-reserve-black border-t border-white/10 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
        <div className="col-span-1 lg:col-span-1">
          <button onClick={() => onNavigate("home")} className="text-3xl font-serif font-bold tracking-tighter uppercase mb-8 cursor-pointer">Reserve</button>
          <p className="text-white/50 text-sm leading-relaxed mb-8">
            Built for a community of people that embrace a life of athletic elegance; 
            the spirit of competition and the pleasure of style.
          </p>
          <div className="flex gap-4">
            <Instagram size={20} className="text-white/50 hover:text-reserve-accent cursor-pointer" />
            <Facebook size={20} className="text-white/50 hover:text-reserve-accent cursor-pointer" />
            <Twitter size={20} className="text-white/50 hover:text-reserve-accent cursor-pointer" />
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-8">Clubs</h4>
          <ul className="flex flex-col gap-4 text-sm text-white/50">
            <li onClick={() => onNavigate("clubs")} className="hover:text-white cursor-pointer">Miami Seaplane</li>
            <li onClick={() => onNavigate("clubs")} className="hover:text-white cursor-pointer">Design District</li>
            <li onClick={() => onNavigate("clubs")} className="hover:text-white cursor-pointer">Solé Mia</li>
            <li onClick={() => onNavigate("clubs")} className="hover:text-white cursor-pointer">Hudson Yards</li>
            <li onClick={() => onNavigate("clubs")} className="hover:text-white cursor-pointer">Upper East Side</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-8">Company</h4>
          <ul className="flex flex-col gap-4 text-sm text-white/50">
            <li onClick={() => onNavigate("story")} className="hover:text-white cursor-pointer">Our Story</li>
            <li onClick={() => onNavigate("membership")} className="hover:text-white cursor-pointer">Membership</li>
            <li className="hover:text-white cursor-pointer">Events</li>
            <li className="hover:text-white cursor-pointer">Shop</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-8">Newsletter</h4>
          <p className="text-sm text-white/50 mb-6">Stay updated with the latest news and events.</p>
          <div className="flex border-b border-white/30 pb-2">
            <input 
              type="email" 
              placeholder="EMAIL ADDRESS" 
              className="bg-transparent border-none outline-none text-xs w-full tracking-widest placeholder:text-white/30"
            />
            <button className="text-xs uppercase tracking-widest hover:text-reserve-accent">Join</button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 pt-12">
        <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
          © 2024 Reserve Padel. All Rights Reserved.
        </p>
        <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] text-white/30">
          <span className="hover:text-white cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

const MeetThePros = () => {
  const pros = [
    {
      name: "Juan Martín Diaz",
      title: "Padel Legend",
      image: "https://picsum.photos/seed/pro1/600/800",
    },
    {
      name: "Gabi Meana",
      title: "Head Coach",
      image: "https://picsum.photos/seed/pro2/600/800",
    },
    {
      name: "Diego Ramos",
      title: "Professional Player",
      image: "https://picsum.photos/seed/pro3/600/800",
    }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-xs uppercase tracking-[0.3em] text-reserve-accent mb-4">The Experts</p>
        <h2 className="text-4xl md:text-6xl font-serif">Meet the Pros</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {pros.map((pro, index) => (
          <motion.div 
            key={pro.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="text-center group"
          >
            <div className="relative aspect-[4/5] overflow-hidden mb-6 grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                src={pro.image} 
                alt={pro.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="text-2xl font-serif mb-1">{pro.name}</h3>
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">{pro.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Locations = () => {
  const locations = [
    { name: "Miami Seaplane", city: "Miami", type: "Outdoor" },
    { name: "Design District", city: "Miami", type: "Indoor/Outdoor" },
    { name: "Solé Mia", city: "North Miami", type: "Indoor" },
    { name: "Hudson Yards", city: "New York", type: "Outdoor" },
    { name: "Upper East Side", city: "New York", type: "Indoor" },
  ];

  return (
    <section className="py-24 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-reserve-accent mb-4">Destinations</p>
            <h2 className="text-4xl md:text-6xl font-serif">Our Clubs</h2>
          </div>
          <p className="text-white/50 max-w-md leading-relaxed">
            Reserve clubs are strategically located in the most iconic neighborhoods, 
            offering unparalleled access to the sport of padel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {locations.map((loc, index) => (
            <motion.div 
              key={loc.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-reserve-black p-12 hover:bg-zinc-900 transition-colors group cursor-pointer"
            >
              <div className="flex justify-between items-start mb-12">
                <MapPin size={20} className="text-reserve-accent" />
                <span className="text-[10px] uppercase tracking-widest text-white/30">{loc.type}</span>
              </div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-2">{loc.city}</p>
              <h3 className="text-2xl font-serif group-hover:text-reserve-accent transition-colors">{loc.name}</h3>
              <div className="mt-12 pt-8 border-t border-white/5 flex items-center gap-2 text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                Explore Club <ChevronRight size={12} />
              </div>
            </motion.div>
          ))}
          <div className="bg-reserve-black p-12 flex flex-col justify-center items-center text-center border-l border-white/10">
            <h3 className="text-xl font-serif mb-4 italic">More Coming Soon</h3>
            <p className="text-[10px] uppercase tracking-widest text-white/30">Global Expansion 2024</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "story" | "clubs" | "membership">("home");

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <ReactLenis root>
      <div className="min-h-screen">
        <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
        
        {currentPage === "home" ? (
          <>
            <Hero />
            <LatestNews />
            <ElevateSection />
            <MeetThePros />
            <Locations />
            <Amenities />
            
            {/* Membership CTA */}
            <section className="relative py-32 px-6 overflow-hidden">
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://picsum.photos/seed/community/1920/1080" 
                  alt="Community" 
                  className="w-full h-full object-cover opacity-40"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-reserve-black via-transparent to-reserve-black" />
              </div>
              
              <div className="relative z-10 max-w-4xl mx-auto text-center">
                <h2 className="text-5xl md:text-7xl font-serif mb-8">Come Play!</h2>
                <p className="text-xl text-white/70 mb-12 leading-relaxed">
                  Join the most exclusive padel community in the world. 
                  Experience athletic elegance at its finest.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button onClick={() => setCurrentPage("membership")} className="btn-primary">Become a Member</button>
                  <button className="btn-outline">Shop the Collection</button>
                </div>
              </div>
            </section>
          </>
        ) : currentPage === "story" ? (
          <OurStory />
        ) : currentPage === "clubs" ? (
          <Clubs />
        ) : (
          <Membership />
        )}

        <Footer onNavigate={setCurrentPage} />
      </div>
    </ReactLenis>
  );
}

const OurStory = () => {
  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="px-6 max-w-7xl mx-auto mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-reserve-accent mb-8">Our Story</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-tight mb-16 max-w-5xl">
            Reserved for the athlete who makes <span className="italic">sport a lifestyle.</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/70 leading-relaxed space-y-8"
          >
            <p>
              Reserve is pioneering a new sport across the United States by creating players, 
              fans and friends. This community, built on and around the court, will showcase 
              the world’s newest, most exciting game: padel.
            </p>
            <p>
              Through padel clubs, activations, pop-ups, and tournaments, Reserve will propel 
              to new heights by developing athletes throughout America.
            </p>
            <div className="pt-8">
              <button className="btn-primary">Reserve Your Court</button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="aspect-[4/5] overflow-hidden"
          >
            <img 
              src="https://picsum.photos/seed/story-hero/1000/1250" 
              alt="Reserve Lifestyle" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="bg-white text-reserve-black py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <img 
              src="https://picsum.photos/seed/founder/1000/1000" 
              alt="Wayne Boich" 
              className="w-full aspect-square object-cover rounded-sm grayscale"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-black/40 mb-4">Leadership</p>
            <h2 className="text-4xl md:text-6xl font-serif mb-12">About Our Founder</h2>
            <div className="text-lg text-black/70 space-y-6 leading-relaxed">
              <p>
                Wayne Boich, a former top-ranked junior tennis player and US Open Junior Competitor, 
                first experienced padel in 2013. The sport quickly became part of his daily routine, 
                and he passionately shared his love for padel with friends, family, and the community.
              </p>
              <p>
                Inspired by his passion, Wayne Boich is expanding the world of padel by sharing this 
                fast-paced, thrilling sport across multiple verticals, continuing to be the catalyst 
                behind its growth.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-32 px-6 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-serif mb-12 italic">"Padel is more than a game; it's a community built on the spirit of competition and the pleasure of style."</h2>
          <div className="w-24 h-px bg-reserve-accent mx-auto" />
        </motion.div>
      </section>

      {/* Join Section */}
      <section className="relative py-48 px-6 overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/revolution/1920/1080" 
            alt="Padel Revolution" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-reserve-black via-transparent to-reserve-black" />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="text-5xl md:text-8xl font-serif mb-8">Join the Padel Revolution</h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            Be part of the fastest growing sport in the world. 
            Experience the Reserve difference.
          </p>
          <button className="btn-primary">Become a Member</button>
        </motion.div>
      </section>
    </div>
  );
};

const Clubs = () => {
  const clubs = [
    {
      name: "Miami Seaplane",
      description: "Our vibrant social hub. Nestled in the heart of Miami, our Seaplane club offers the ultimate on-and-off court experience.",
      image: "https://picsum.photos/seed/seaplane/1200/800",
      status: "Open Now"
    },
    {
      name: "Hudson Yards",
      description: "Full club serving soon. Play goes on at our iconic riverside venue at Hudson Yards, where temporary outdoor courts are now open.",
      image: "https://picsum.photos/seed/hudson/1200/800",
      status: "Coming Soon"
    },
    {
      name: "Design District",
      description: "The intersection of art and sport. A boutique padel experience in the heart of Miami's most creative neighborhood.",
      image: "https://picsum.photos/seed/design/1200/800",
      status: "Open Now"
    }
  ];

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="px-6 max-w-7xl mx-auto mb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-reserve-accent mb-8">Locations</p>
          <h1 className="text-5xl md:text-8xl font-serif leading-tight mb-8">
            Always More Than <br /> <span className="italic">Just Padel.</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Discover our collection of premier padel clubs, each designed to offer 
            a unique blend of athletic excellence and social connection.
          </p>
        </motion.div>
      </section>

      {/* Clubs Grid */}
      <section className="px-6 max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 gap-24">
          {clubs.map((club, index) => (
            <motion.div
              key={club.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}
            >
              <div className="w-full lg:w-3/5 aspect-[16/10] overflow-hidden rounded-sm group">
                <img 
                  src={club.image} 
                  alt={club.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="w-full lg:w-2/5 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-px bg-reserve-accent" />
                  <p className="text-xs uppercase tracking-widest text-reserve-accent font-bold">{club.status}</p>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif">{club.name}</h2>
                <p className="text-lg text-white/60 leading-relaxed">
                  {club.description}
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <button className="btn-primary">View Club</button>
                  <button className="btn-outline">Book Court</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Membership CTA */}
      <section className="bg-white text-reserve-black py-32 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-serif mb-8">The Original <br /> <span className="italic">Social Net-Work.</span></h2>
          <p className="text-xl text-black/60 mb-12 leading-relaxed">
            Join our community for exclusive benefits, events and early access to new locations.
          </p>
          <button className="px-12 py-5 bg-reserve-black text-white uppercase tracking-widest hover:bg-reserve-accent transition-all">
            Become a Member
          </button>
        </motion.div>
      </section>

      {/* Signup Section */}
      <section className="py-32 px-6 max-w-3xl mx-auto text-center">
        <h3 className="text-3xl font-serif mb-8">Stay in the game</h3>
        <p className="text-white/50 mb-12">Join our community for exclusive benefits, events and early access.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <input 
            type="email" 
            placeholder="Email Address" 
            className="flex-1 bg-white/5 border border-white/10 px-6 py-4 outline-none focus:border-reserve-accent transition-colors"
          />
          <button className="btn-primary px-12">Sign Up Now</button>
        </div>
      </section>
    </div>
  );
};

const Membership = () => {
  const solutions = [
    {
      title: "Elite Sports Club",
      description: "Give your sports club the edge with our top-tier courts. Integrated management and premium aesthetics.",
      image: "https://picsum.photos/seed/elite-club/800/600"
    },
    {
      title: "Luxury Hotels",
      description: "Level up on Luxury: Take your hotel to new heights with our premium courts and guest experiences.",
      image: "https://picsum.photos/seed/luxury-hotel/800/600"
    },
    {
      title: "Exclusive Villas",
      description: "Catapult your villas into a league of their own with our top-notch private court solutions.",
      image: "https://picsum.photos/seed/private-villa/800/600"
    }
  ];

  const centers = [
    { name: "Reserve Seaplane", location: "Miami, FL" },
    { name: "Reserve Solé Mia", location: "North Miami, FL" },
    { name: "Reserve Hudson Yards", location: "New York, NY" },
    { name: "Reserve Design District", location: "Miami, FL" },
    { name: "Reserve Upper East Side", location: "New York, NY" }
  ];

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="px-6 max-w-7xl mx-auto mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-reserve-accent mb-8">Membership & Solutions</p>
          <h1 className="text-5xl md:text-8xl font-serif leading-tight mb-8">
            Premium Court <br /> <span className="italic">Solutions.</span>
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            Revamp your ventures with our courts, where every game leaps into a new realm of excitement! 
            Perfect for those who play hard and dream big.
          </p>
        </motion.div>
      </section>

      {/* Solutions Grid */}
      <section className="px-6 max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden mb-8 rounded-sm">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
              <p className="text-white/50 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Innovation Section */}
      <section className="bg-white text-reserve-black py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-serif mb-12">Elevating Padel Excellence Through Innovation</h2>
            <div className="text-lg text-black/70 space-y-6 leading-relaxed">
              <p>
                At Reserve, we believe that excellence begins with collaboration and innovation. 
                We're proud to partner with industry leaders renowned for their cutting-edge manufacturing expertise.
              </p>
              <p>
                Our collaboration marks a pivotal moment in Padel's evolution, where tradition meets technology. 
                The unwavering commitment to quality and craftsmanship aligns seamlessly with our vision to create world-class Padel experiences.
              </p>
              <p>
                Together, we are shaping the future of Padel, crafting courts that offer more than just a game – 
                they offer an unforgettable experience.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="aspect-square bg-reserve-black/5 rounded-sm overflow-hidden"
          >
            <img 
              src="https://picsum.photos/seed/innovation/1000/1000" 
              alt="Innovation" 
              className="w-full h-full object-cover grayscale"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-32 px-6 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-serif mb-12">Where Passion for Padel Meets a Partnership with Excellence.</h2>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Ready to Fuel your Padel Obsession? Whether you're dreaming of building courts, 
            starting a club, or franchising — we've got you covered.
          </p>
          <button className="btn-primary">Learn More About Us</button>
        </motion.div>
      </section>

      {/* Foundation Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/foundation/1920/1080" 
            alt="Foundation" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-reserve-black/60" />
        </div>
        <div className="relative z-10 text-center px-6">
          <h2 className="text-4xl md:text-7xl font-serif mb-4">Building the foundation for champions,</h2>
          <p className="text-2xl md:text-4xl font-serif italic text-reserve-accent">one court at a time.</p>
        </div>
      </section>

      {/* Explore Courts */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-reserve-accent mb-4">Our Portfolio</p>
            <h2 className="text-4xl md:text-6xl font-serif">Explore our Padel Courts</h2>
            <p className="text-xl text-white/50 italic mt-4">Where precision meets innovation.</p>
          </div>
          <button className="btn-outline">View Gallery</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {centers.map((center) => (
            <motion.div
              key={center.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="border-b border-white/10 pb-8 group cursor-pointer"
            >
              <h3 className="text-2xl font-serif mb-2 group-hover:text-reserve-accent transition-colors">{center.name}</h3>
              <p className="text-white/40 uppercase tracking-widest text-xs">{center.location}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Coaches Section */}
      <section className="bg-reserve-accent text-reserve-black py-24 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-serif mb-8">Dive into the coaches' profiles and uncover your winning advantage.</h2>
          <button className="px-12 py-5 bg-reserve-black text-white uppercase tracking-widest hover:bg-white hover:text-reserve-black transition-all">
            View Coaches' Profiles
          </button>
        </motion.div>
      </section>
    </div>
  );
};
