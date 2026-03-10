import { motion, useScroll, useTransform } from "motion/react";

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-black">
      {/* Background Image: Moody Padel Court */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src="https://images.unsplash.com/photo-1622279457486-640fc294f258?q=80&w=1920&auto=format&fit=crop"
          alt="Reserve Padel Court Atmosphere"
          className="w-full h-full object-cover grayscale brightness-75 scale-110"
          referrerPolicy="no-referrer"
        />
        {/* Deep bottom gradient to blend into next section */}
        <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-black via-black/20 to-transparent z-20" />
      </motion.div>

      {/* Main Hero Content */}
      <div className="relative z-30 text-center px-6 mt-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="text-7xl md:text-9xl lg:text-[14rem] font-serif font-medium leading-[0.8] tracking-tighter mb-16 italic"
          style={{
            color: '#f0ece2',
            textShadow: '0 20px 40px rgba(0,0,0,0.5)',
            letterSpacing: '-0.04em'
          }}
        >
          Reserve
        </motion.h1>

        {/* The Pill-Shaped Button Group */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="inline-flex flex-col md:flex-row items-center border border-white/20 rounded-[50px] p-1.5 backdrop-blur-sm bg-white/5"
        >
          <button className="px-12 py-3.5 text-[11px] font-bold uppercase tracking-[0.25em] text-white hover:bg-white hover:text-black transition-all rounded-[40px] duration-500 whitespace-nowrap">
            Book a Court
          </button>
          <button className="px-12 py-3.5 text-[11px] font-bold uppercase tracking-[0.25em] text-white hover:bg-white hover:text-black transition-all rounded-[40px] duration-500 whitespace-nowrap">
            Become a Member
          </button>
        </motion.div>
      </div>

      {/* Down arrow indicator scroll trigger anim */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-4 opacity-30 group"
      >
        <div className="w-px h-16 bg-gradient-to-b from-white to-transparent overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="w-full h-full bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
