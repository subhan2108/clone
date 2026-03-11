import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Footer from "../components/Footer";

interface OurStoryProps {
  onNavigate: (page: "home" | "story" | "clubs" | "membership") => void;
}

const OurStory = ({ onNavigate }: OurStoryProps) => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col pt-32">
      {/* Hero Section */}
      <section className="px-6 py-24 md:py-48 flex flex-col items-center justify-center text-center max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="w-full"
        >
          <h1 className="text-4xl md:text-7xl lg:text-[5.5rem] font-bold uppercase tracking-[-0.04em] leading-[0.9] mb-12 flex flex-col items-center">
            <span>Delhi’s premier destination for</span>
            <span>Padel and Pickleball</span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <p className="text-base md:text-lg text-white/70 leading-relaxed font-medium">
              The Pad is pioneering a new sports culture across India by creating players,
              fans and friends. Featuring 6 world-class Padel courts and 4 professional Pickleball courts,
              this community built on and around the court will showcase the world’s newest, 
              most exciting games. Through our clubs and tournaments at Gulmohar Park, 
              The Pad is the catalyst behind India's Padel revolution.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Scroll-Animated Line Section */}
      <ScrollStatementSection />

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
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1000&auto=format&fit=crop"
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
            <p className="text-xs uppercase tracking-[0.3em] text-black/40 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>Leadership</p>
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-12" style={{ fontFamily: "'Poppins', sans-serif" }}>About Our Founder</h2>
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
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-12" style={{ fontFamily: "'Poppins', sans-serif" }}>"Padel is more than a game; it's a community built on the spirit of competition and the pleasure of style."</h2>
          <div className="w-24 h-px bg-reserve-accent mx-auto" />
        </motion.div>
      </section>

      {/* Join Section */}
      <section className="relative py-48 px-6 overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1587280590050-0c2400ee00ab?q=80&w=1920&auto=format&fit=crop"
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
          <h2 className="text-5xl md:text-8xl font-black uppercase mb-8" style={{ fontFamily: "'Poppins', sans-serif" }}>Join the Revolution</h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            Be part of the fastest growing sport in the world.
            Experience the The Pad difference.
          </p>
          <button className="btn-primary" onClick={() => onNavigate("membership")}>Become a Member</button>
        </motion.div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
};

const ScrollStatementSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Line grows from 0% to 100% as the section enters (0.1 to 0.3 range)
  const scaleX = useTransform(scrollYProgress, [0.1, 0.35], [0, 1]);

  // Words reveal sequentially after the line has significant progress
  const opacity1 = useTransform(scrollYProgress, [0.35, 0.45], [0, 1]);
  const y1 = useTransform(scrollYProgress, [0.35, 0.45], [20, 0]);

  const opacity2 = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
  const y2 = useTransform(scrollYProgress, [0.5, 0.6], [20, 0]);

  const opacity3 = useTransform(scrollYProgress, [0.65, 0.75], [0, 1]);
  const y3 = useTransform(scrollYProgress, [0.65, 0.75], [20, 0]);

  return (
    <section ref={containerRef} className="relative h-[200vh] bg-black">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-6 md:px-12 overflow-hidden">
        <div className="max-w-[1400px] mx-auto w-full relative pt-12">
          {/* The Growing Line - Starts growing as soon as it enters viewport */}
          <motion.div
            className="absolute top-0 left-0 h-[1.5px] bg-white w-full origin-left"
            style={{ scaleX }}
          />

          {/* Three Columns - Animated One by One */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 pt-16">
            <motion.div style={{ opacity: opacity1, y: y1 }} className="flex flex-col">
              <h3 className="text-3xl md:text-2xl lg:text-3xl font-bold uppercase tracking-[-0.04em] leading-[0.9] text-white">
                THE PAD <br /> IS THE FUTURE OF <br /> PADEL
              </h3>
            </motion.div>

            <motion.div style={{ opacity: opacity2, y: y2 }} className="flex flex-col">
              <h3 className="text-3xl md:text-2xl lg:text-3xl font-bold uppercase tracking-[-0.04em] leading-[0.9] text-white">
                THE PAD <br /> IS PADEL
              </h3>
            </motion.div>

            <motion.div style={{ opacity: opacity3, y: y3 }} className="flex flex-col">
              <div className="group">
                <h3 className="text-3xl md:text-2xl lg:text-3xl font-bold uppercase tracking-[-0.04em] leading-[0.9] text-reserve-accent">
                  THE PAD <br /> AT GULMOHAR PARK
                </h3>
                <div className="mt-8 relative w-20 h-4">
                  <div className="absolute top-1/2 left-0 h-[1.5px] w-full bg-reserve-accent" />
                  <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 border-t-[1.5px] border-r-[1.5px] border-reserve-accent" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
