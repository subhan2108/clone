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
            <span>Reserved for the athlete who</span>
            <span>Makes sport a lifestyle</span>
          </h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <p className="text-base md:text-lg text-white/70 leading-relaxed font-medium">
              Reserve is pioneering a new sport across the United States by creating players, 
              fans and friends. This community, built on and around the court, will showcase 
              the world’s newest, most exciting game: padel. Through padel clubs, activations, pop-ups, 
              and tournaments, Reserve will propel to new heights by developing athletes throughout America.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Scroll-Animated Line Section */}
      <ScrollStatementSection />

      {/* Revolution Section */}
      <section className="bg-black py-24 px-6">
        {/* Quote & Large Title */}
        <div className="max-w-[1400px] mx-auto text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <h2 className="text-3xl md:text-5xl font-serif italic text-white/90 leading-tight max-w-5xl mx-auto mb-8">
              "Padel is more than a game; it's a community built on the spirit of competition and the pleasure of style."
            </h2>
            <div className="w-16 h-[1.5px] bg-[#c48f42] mx-auto" />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="text-6xl md:text-[10rem] font-serif leading-[0.8] tracking-tighter text-white/20 mb-32"
          >
            Join the Padel <br /> Revolution
          </motion.h2>
        </div>

        {/* CTA with Background Image */}
        <div className="relative max-w-[1400px] mx-auto min-h-[70vh] flex items-center justify-center text-center overflow-hidden rounded-sm mb-32 group">
          <div className="absolute inset-0 z-0 scale-105 group-hover:scale-100 transition-transform duration-[2s]">
            <img
              src="https://picsum.photos/seed/padelhero/1920/1080"
              alt="Join the Revolution"
              className="w-full h-full object-cover opacity-60"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative z-10 px-6"
          >
            <h3 className="text-5xl md:text-7xl font-serif text-white mb-6">Join the Padel Revolution</h3>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-medium tracking-tight">
              Be part of the fastest growing sport in the world. <br />
              Experience the Reserve difference.
            </p>
            <button 
              className="bg-white text-black px-10 py-4 rounded-full text-sm uppercase tracking-widest font-bold hover:bg-[#6f886c] hover:text-white transition-colors duration-300"
              onClick={() => onNavigate("membership")}
            >
              Become a Member
            </button>
          </motion.div>
        </div>

        {/* Massive Footer Statement */}
        <div className="max-w-[1400px] mx-auto text-center py-24">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="text-6xl md:text-[12rem] font-serif leading-[0.8] tracking-tighter text-white/20"
          >
            Become a <br /> Member
          </motion.h2>
        </div>
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
                RESERVE <br /> IS THE FUTURE OF <br /> PADEL
              </h3>
            </motion.div>
            
            <motion.div style={{ opacity: opacity2, y: y2 }} className="flex flex-col">
              <h3 className="text-3xl md:text-2xl lg:text-3xl font-bold uppercase tracking-[-0.04em] leading-[0.9] text-white">
                RESERVE <br /> IS PADEL
              </h3>
            </motion.div>
            
            <motion.div style={{ opacity: opacity3, y: y3 }} className="flex flex-col">
              <div className="group">
                <h3 className="text-3xl md:text-2xl lg:text-3xl font-bold uppercase tracking-[-0.04em] leading-[0.9] text-[#6f886c]">
                  RESERVE <br /> YOUR COURT
                </h3>
                <div className="mt-8 relative w-20 h-4">
                  <div className="absolute top-1/2 left-0 h-[1.5px] w-full bg-[#6f886c]" />
                  <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 border-t-[1.5px] border-r-[1.5px] border-[#6f886c]" />
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
