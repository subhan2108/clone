import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, ArrowRight, Star, Shield, Award, Globe } from "lucide-react";

/**
 * SERVICES PAGE: COMPREHENSIVE COURT SOLUTIONS
 * Combined Design: User-requested services + Technical Expertise + Global Leadership
 */

const Services = () => {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const services = [
    {
      title: "Padel Courts",
      image: "https://i.postimg.cc/xCBKNGNh/cr5.jpg",
      location: "India's Premiere Choice"
    },
    {
      title: "Pickleball Courts",
      image: "https://i.postimg.cc/Pq3bTnXG/cr3.jpg",
      location: "Fast-Paced Community Play"
    },
    {
      title: "Tennis Courts",
      image: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?q=80&w=2000&auto=format&fit=crop",
      location: "Professional Surface Standards"
    },
    {
      title: "Cricket & Football Turf",
      image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=2000&auto=format&fit=crop",
      location: "High-Density Multi-Purpose Turf"
    },
    {
      title: "Basketball Courts",
      image: "https://i.postimg.cc/JnFx8D3V/ball-courts-500x500.webp",
      location: "Performance Hardwood & Acrylic"
    },
    {
      title: "Badminton Courts",
      image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=1200&auto=format&fit=crop",
      location: "BWF Compliant Indoor Solutions"
    }
  ];

  const verticalRevealVariants = {
    hidden: { clipPath: "inset(100% 0 0 0)", opacity: 0 },
    visible: (i: number) => ({
      clipPath: "inset(0 0 0 0)",
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
        delay: i * 0.15
      }
    })
  };

  return (
    <div className="bg-[#0a0a0a] text-[#f0ece2] min-h-screen font-sans overflow-x-hidden pt-20 transition-all duration-300">

      {/* 1. HERO SECTION */}
      <section ref={heroRef} className="relative h-[80vh] w-full flex flex-col items-center justify-center overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1592910129841-3b8d1b1f092b?q=80&w=2070&auto=format&fit=crop"
            alt="Sports Infrastructure"
            className="w-full h-full object-cover grayscale brightness-30 contrast-125 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-transparent to-[#0a0a0a] z-10" />
        </motion.div>

        <div className="relative z-20 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-reserve-accent text-[10px] md:text-xs uppercase tracking-[0.5em] mb-6 font-black"
          >
            Infrastructure Excellence
          </motion.p>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={verticalRevealVariants}
            custom={1}
            className="text-6xl md:text-8xl lg:text-[11rem] font-black leading-[0.8] tracking-tighter mb-12 uppercase italic"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: '#f0ece2',
              letterSpacing: '-0.04em'
            }}
          >
            MASTERING <br /> THE GAME
          </motion.h1>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={verticalRevealVariants}
            custom={2}
            className="max-w-xl mx-auto border-t border-white/10 pt-8"
          >
            <p className="text-white/40 text-sm md:text-base uppercase tracking-widest font-medium leading-relaxed">
              From elite Padel clubs to professional multi-sport turfs, we design and build the future of Indian sports.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. OUR EXPERTISE SECTION (Technical Foundation) */}
      <section className="py-24 md:py-40 px-6 md:px-12 bg-white text-black">
        <div className="max-w-[1400px] w-[94%] mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={verticalRevealVariants}
            custom={0}
          >
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="h-px w-8 bg-reserve-accent" />
              <span className="text-[10px] font-black tracking-[0.4em] text-reserve-accent uppercase">Technical Standards</span>
              <div className="h-px w-8 bg-reserve-accent" />
            </div>
            <h2
              className="font-heading font-black uppercase leading-[1.1] mb-8"
              style={{
                fontSize: 'clamp(2rem, 5vw, 4.5rem)',
                letterSpacing: '-0.05em',
              }}
            >
              ELEVATING COURT EXCELLENCE <br /> THROUGH GLOBAL PARTNERSHIP.
            </h2>
            <p
              className="mx-auto leading-relaxed text-black/60 font-medium"
              style={{
                fontSize: '1.1rem',
                maxWidth: '850px',
                lineHeight: 1.8,
              }}
            >
              We take pride in our global partnership with world-renowned sports infrastructure manufacturers.
              Our alliance brings together years of craftsmanship and technical expertise
              to provide state-of-the-art court installations across India.
              From initial consultancy to final construction, we ensure every project meets
              international professional standards.
            </p>
          </motion.div>

          {/* Partner Indicators */}
          <div className="mt-20 flex flex-wrap justify-center gap-12 md:gap-24 items-center opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            <div className="flex flex-col items-center gap-2">
              <Globe size={40} />
              <span className="text-[9px] font-black tracking-[0.2em]">GLOBAL PARTNER</span>
            </div>
            <div className="text-2xl font-black italic tracking-tighter uppercase">Sky Padel</div>
            <div className="text-2xl font-black italic tracking-tighter uppercase">Royal Padel</div>
            <div className="text-2xl font-black italic tracking-tighter uppercase">Elite Turf</div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES GRID */}
      <section className="py-24 md:py-40 bg-[#0a0a0a] px-6 md:px-12">
        <div className="max-w-[1700px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={verticalRevealVariants}
                custom={idx}
                className="group flex flex-col"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-10 transition-transform duration-1000 group-hover:scale-[0.98]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
                </div>

                {/* Content */}
                <div className="flex flex-col items-start px-2">
                  <div className="flex items-center gap-3 mb-6">
                    <MapPin size={18} className="text-reserve-accent" />
                    <span className="text-reserve-accent text-[10px] font-black tracking-[0.3em] uppercase leading-none">
                      {service.location}
                    </span>
                  </div>

                  <h3
                    className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {service.title}
                  </h3>

                  <div className="h-px w-full bg-white/10 mb-10" />

                  {/* Build Your Court Now Button */}
                  <button
                    onClick={() => navigate("/contact")}
                    className="flex items-center gap-4 group/btn"
                  >
                    <span className="text-[11px] font-black uppercase tracking-[0.3em] group-hover/btn:text-reserve-accent transition-colors">
                      Build Your Court Now
                    </span>
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:border-reserve-accent group-hover/btn:bg-reserve-accent transition-all">
                      <ArrowRight size={16} className="text-white group-hover/btn:scale-110 transition-transform" />
                    </div>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. REGIONAL HUBS (Location Cards) */}
      <section className="py-24 md:py-48 bg-[#0a0a0a] px-6 md:px-12 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <h3 className="text-center text-reserve-accent text-[11px] font-black tracking-[0.6em] mb-24">REGIONAL HUBS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { name: "THE PAD GULMOHAR", location: "South Delhi", address: "Gulmohar Park, New Delhi, India" },
              { name: "THE PAD CHATTARPUR", location: "South Delhi", address: "Chattarpur, New Delhi, India" },
              { name: "THE PAD GURUGRAM", location: "Haryana", address: "Sector 43, Gurugram, India" }
            ].map((loc, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={verticalRevealVariants}
                custom={idx}
                className="group bg-zinc-950 p-12 rounded-[2rem] border border-white/5 hover:border-reserve-accent/50 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-10 group-hover:bg-reserve-accent/10 transition-colors">
                  <MapPin size={24} className="text-reserve-accent" />
                </div>
                <h4 className="text-3xl font-black uppercase italic tracking-tighter mb-4" style={{ fontFamily: "'Inter', sans-serif", color: '#f0ece2' }}>{loc.name}</h4>
                <p className="text-reserve-accent text-[10px] font-black tracking-[0.3em] uppercase mb-8">{loc.location}</p>
                <div className="h-px w-full bg-white/5 mb-8" />
                <p className="text-white/40 text-sm leading-relaxed mb-10 font-medium">{loc.address}</p>
                <button
                  onClick={() => navigate("/contact")}
                  className="flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.25em] group-hover:text-reserve-accent transition-all"
                >
                  Consultation Request <ArrowRight size={16} className="-rotate-45" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA FOOTER SECTION */}
      <section className="relative py-48 bg-[#f0ece2] flex flex-col items-center justify-center overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={verticalRevealVariants}
          custom={0}
          className="relative z-10 text-center px-6 text-black"
        >
          <h2 className="text-6xl md:text-[8rem] font-black uppercase italic tracking-tighter leading-[0.8] mb-12">
            BUILD YOUR <br /> LEGACY
          </h2>
          <p className="text-black/60 text-lg md:text-xl font-medium mb-16 max-w-2xl mx-auto uppercase">
            Partner with India’s premier sports architects to bring world-class facilities to your community.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="px-20 py-8 bg-black text-[#f0ece2] rounded-full text-xs font-black uppercase tracking-[0.4em] hover:bg-reserve-accent transition-all shadow-2xl"
          >
            Consult With Us
          </button>
        </motion.div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[45vw] font-black text-black/[0.03] uppercase pointer-events-none select-none italic tracking-tighter leading-none">
          LEGACY
        </div>
      </section>

    </div>
  );
};

export default Services;
