import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface BecomeAMemberSectionProps {
  onNavigate: (page: "home" | "story" | "clubs" | "membership") => void;
}

const BecomeAMemberSection = ({ onNavigate }: BecomeAMemberSectionProps) => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Background text: Initially sharp, fades slightly as card approaches
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.15]);

  // The Card slides UP from the bottom to overlap the background text
  const cardY = useTransform(scrollYProgress, [0.1, 1], ["100vh", "0vh"]);
  const cardScale = useTransform(scrollYProgress, [0.1, 1], [0.85, 1]);

  return (
    <section ref={containerRef} className="relative h-[200vh] bg-black">
      {/* Sticky Content - Handles the text and the card overlap */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">

        {/* Background "Become a Member" Text layer */}
        <motion.div
          style={{ opacity: textOpacity }}
          className="text-center w-full select-none pointer-events-none mb-20"
        >
          <h2
            className="font-serif leading-[0.85] tracking-tighter"
            style={{
              color: '#f0ece2',
              fontSize: 'clamp(3.5rem, 18vw, 25rem)',
              textRendering: 'optimizeLegibility'
            }}
          >
            Become a <br /> Member
          </h2>
        </motion.div>

        {/* The Overlapping Footer Card (COME PLAY!) */}
        <motion.div
          className="absolute w-[92%] max-w-[650px] aspect-[1/1.1] rounded-[40px] p-8 md:p-16 flex flex-col items-center justify-center text-center shadow-[0_50px_100px_rgba(0,0,0,0.6)] overflow-hidden"
          style={{
            y: cardY,
            scale: cardScale,
            zIndex: 30,
            backgroundImage: 'url(/assets/mockup.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* dark overlay for text contrast */}
          <div className="absolute inset-0 bg-black/40 z-0" />

          <h2 className="relative z-10 text-4xl md:text-6xl font-black uppercase mb-8 text-white tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
            COME PLAY!
          </h2>
          <p className="relative z-10 text-lg md:text-2xl text-white font-medium leading-tight mb-14 max-w-lg">
            Built for a community of people that embrace a life of athletic elegance; the spirit of competition and the pleasure of style.
          </p>

          <button
            onClick={() => onNavigate("membership")}
            className="group relative flex items-center justify-center"
          >
            <div className="px-12 py-5 bg-reserve-accent rounded-full text-white uppercase tracking-[0.2em] text-xs font-bold transition-transform duration-300 group-hover:scale-105">
              Become a Member
            </div>
            <div className="absolute inset-[-8px] border border-reserve-accent/30 rounded-full transition-transform duration-500 group-hover:scale-110" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BecomeAMemberSection;
