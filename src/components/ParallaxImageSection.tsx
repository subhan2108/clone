import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const ParallaxImageSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Scale: subtle zoom-out effect
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  // Overlay & Blur: Finish much earlier to bridge the gap with the next section
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.4, 0.7], [0.3, 0.3, 1]);
  const blur = useTransform(scrollYProgress, [0, 0.4, 0.7], ["blur(0px)", "blur(0px)", "blur(12px)"]);

  return (
    <section ref={containerRef} className="relative h-[150vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.div
          style={{ scale, filter: blur }}
          className="absolute inset-0 z-0 h-full w-full"
        >
          <img
            src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1920&auto=format&fit=crop"
            alt="Parallax community"
            className="w-full h-full object-cover opacity-70"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* The Black Blurryness Transition */}
        <motion.div
          className="absolute inset-0 z-10 bg-black pointer-events-none"
          style={{ opacity: overlayOpacity }}
        />

        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black to-transparent z-20" />
      </div>
    </section>
  );
};

export default ParallaxImageSection;
