import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router-dom";
import { useRef } from "react";

/* Animated L-shaped line.
   - align="left":  └────── (vertical grows down, then horizontal grows right)
   - align="right": ──────┐ (horizontal grows left, then vertical grows down) */
const ScrollLine = ({ align = 'left' }: { align?: 'left' | 'right' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.7", "end 0.3"]
  });

  // Vertical stub grows first (0→30%), then horizontal bar (30→100%)
  const verticalHeight = useTransform(scrollYProgress, [0, 0.3], [0, 24]);
  const horizontalWidth = useTransform(scrollYProgress, [0.3, 1], [0, 160]);

  return (
    <div
      ref={ref}
      className={`w-full flex ${align === 'right' ? 'justify-end' : 'justify-start'} px-8 md:px-16 lg:px-24`}
      style={{ height: '120px', alignItems: 'flex-end', paddingBottom: '20px' }}
    >
      {align === 'left' ? (
        /* └────── shape */
        <div className="flex items-end">
          <motion.div
            style={{ height: verticalHeight }}
            className="w-[2px] bg-black"
          />
          <motion.div
            style={{ width: horizontalWidth }}
            className="h-[2px] bg-black"
          />
        </div>
      ) : (
        /* ──────┐ shape */
        <div className="flex items-end">
          <motion.div
            style={{ width: horizontalWidth }}
            className="h-[2px] bg-black"
          />
          <motion.div
            style={{ height: verticalHeight }}
            className="w-[2px] bg-black"
          />
        </div>
      )}
    </div>
  );
};

/* Green CTA section with scroll-animated diagonal lines */
const GreenCTASection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.2"]
  });

  const horizontalReveal = {
    hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0 },
    visible: { 
      clipPath: "inset(0 0 0 0)", 
      opacity: 1,
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
    }
  };

  // Each line grows at a staggered pace
  const line1H = useTransform(scrollYProgress, [0, 0.5], [0, 800]);
  const line2H = useTransform(scrollYProgress, [0.05, 0.55], [0, 900]);
  const line3H = useTransform(scrollYProgress, [0.1, 0.6], [0, 800]);
  const line4H = useTransform(scrollYProgress, [0.15, 0.65], [0, 900]);

  return (
    <section ref={sectionRef} className="bg-[#1a4d2e] text-white py-28 md:py-36 px-6 relative overflow-hidden">
      {/* Staggered diagonal lines */}
      <motion.div
        className="absolute bg-white/80"
        style={{
          width: '4px',
          height: line1H,
          top: '-200px',
          right: '18%',
          transform: 'rotate(-30deg)',
          transformOrigin: 'top center'
        }}
      />
      <motion.div
        className="absolute bg-black/35"
        style={{
          width: '5px',
          height: line2H,
          top: '-100px',
          left: '-5%',
          transform: 'rotate(25deg)',
          transformOrigin: 'top center'
        }}
      />
      <motion.div
        className="absolute bg-black/35"
        style={{
          width: '5px',
          height: line3H,
          bottom: '-200px',
          right: '2%',
          transform: 'rotate(-50deg)',
          transformOrigin: 'bottom center'
        }}
      />
      <motion.div
        className="absolute bg-black/25"
        style={{
          width: '4px',
          height: line4H,
          bottom: '-250px',
          left: '6%',
          transform: 'rotate(35deg)',
          transformOrigin: 'bottom center'
        }}
      />

      <motion.div
        variants={horizontalReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center relative z-10"
      >
        <h2
          className="text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: 'italic', fontWeight: 500 }}
        >
          The Original Social Net-Work
        </h2>
        <p className="text-xs md:text-sm text-white/70 mb-10 max-w-lg mx-auto leading-relaxed">
          Our love for padel and the people who play it runs deep. This isn't just ordinary membership, it's an invitation to become part of the very fabric of the club.
        </p>
        <Link
          to="/membership"
          className="inline-block px-8 py-3 bg-[#111] text-white rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-black transition-colors"
        >
          Become A Member
        </Link>
      </motion.div>
    </section>
  );
};

const Membership = () => {
  const horizontalReveal = {
    hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0 },
    visible: { 
      clipPath: "inset(0 0 0 0)", 
      opacity: 1,
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <div className="min-h-screen flex flex-col text-black font-sans bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1646649853517-e2f75cde1908?q=80&w=2070&auto=format&fit=crop"
          alt="Padel Club"
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/30" />
        <motion.div
          variants={horizontalReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative z-10 text-center text-white px-6"
        >
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tight leading-[0.95]">
            Always More Than<br />Just Padel.
          </h1>
        </motion.div>
      </section>

      {/* Intro Text */}
      <section className="bg-white px-6 py-16 md:py-20 text-center">
        <motion.p
          variants={horizontalReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-base md:text-lg text-black/80 font-medium max-w-2xl mx-auto leading-relaxed"
        >
          Each of our venues are built around a sense of community.
          Where everyone from die-hard players to first timers are
          welcome to play.
        </motion.p>
      </section>

      {/* Club Sections */}
      <section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px] md:min-h-[600px]">
          <motion.div 
            variants={horizontalReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative overflow-hidden h-[350px] md:h-auto order-2 md:order-1"
          >
            <img
              src="https://images.unsplash.com/photo-1646649851780-d9701b7c3c04?q=80&w=1200&auto=format&fit=crop"
              alt="Earls Court"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="flex items-center px-8 py-12 md:px-16 lg:px-24 order-1 md:order-2">
            <motion.div
              variants={horizontalReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-md"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">Earls Court</h2>
              <h3 className="text-xs font-bold uppercase tracking-[0.15em] mb-4">Our vibrant social hub.</h3>
              <p className="text-sm text-black/60 mb-8 leading-relaxed">
                Nestled in the heart of West London, our Earls Court club offers the ultimate on-and-off court experience.
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="px-7 py-2.5 bg-[#111] text-white rounded-full text-[10px] font-bold uppercase hover:bg-black transition-colors">View Club</button>
                <button className="px-7 py-2.5 bg-transparent border border-black/20 text-black rounded-full text-[10px] font-bold uppercase hover:border-black transition-colors">Book Court</button>
              </div>
            </motion.div>
          </div>
        </div>
        <ScrollLine align="right" />
      </section>

      <section className="bg-white">
        <ScrollLine align="left" />
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px] md:min-h-[600px]">
          <div className="flex items-center px-8 py-12 md:px-16 lg:px-24">
            <motion.div
              variants={horizontalReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-md"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">The O2</h2>
              <h3 className="text-xs font-bold uppercase tracking-[0.15em] mb-4">Full club serving soon.</h3>
              <p className="text-sm text-black/60 mb-8 leading-relaxed">
                Play goes on at our iconic riverside venue at The O2, where two temporary outdoor courts are now open.
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="px-7 py-2.5 bg-[#111] text-white rounded-full text-[10px] font-bold uppercase hover:bg-black transition-colors">View Club</button>
                <button className="px-7 py-2.5 bg-transparent border border-black/20 text-black rounded-full text-[10px] font-bold uppercase hover:border-black transition-colors">Book Court</button>
              </div>
            </motion.div>
          </div>
          <motion.div 
            variants={horizontalReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative overflow-hidden h-[350px] md:h-auto"
          >
            <img
              src="https://images.unsplash.com/photo-1646649852365-3e89e23dee7b?q=80&w=1200&auto=format&fit=crop"
              alt="The O2"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      <GreenCTASection />
    </div>
  );
};

export default Membership;
