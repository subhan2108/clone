import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useSpring } from "motion/react";
import { Mail, MapPin, ArrowRight, Instagram, Linkedin, Phone, X, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * CONTACT PAGE
 * Hero -> Combined Info/Form -> Looping Drag Slider -> Full Width Banner
 */
const Contact = () => {
  const formSectionRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Dragging Implementation
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [selectedImgIndex, setSelectedImgIndex] = useState<number | null>(null);
  const [isHoveringSlider, setIsHoveringSlider] = useState(false);

  // Smooth Cursor using useSpring for better performance
  const cursorX = useSpring(0, { damping: 20, stiffness: 150 });
  const cursorY = useSpring(0, { damping: 20, stiffness: 150 });

  // Collage Images from local assets
  const baseImages = [
    "/assets/cr1.jpeg",
    "/assets/cr2.jpeg",
    "/assets/cr3.jpeg",
    "/assets/cr4.jpeg",
    "/assets/cr5.jpeg",
    "/assets/cr6.jpeg",
    "/assets/cr7.jpeg"
  ];

  // Tripled array for infinite seamless loop
  const images = [...baseImages, ...baseImages, ...baseImages];

  useEffect(() => {
    // Start slider in the middle set of images
    if (sliderRef.current) {
      const singleSetWidth = sliderRef.current.scrollWidth / 3;
      sliderRef.current.scrollLeft = singleSetWidth;
    }

    // Robust Cursor Tracking (Fixes lightbox disappearance)
    const handleGlobalMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      if (!sliderRef.current) return;
      const rect = sliderRef.current.getBoundingClientRect();
      const isInside = (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      );

      setIsHoveringSlider(isInside);
    };

    window.addEventListener("mousemove", handleGlobalMouseMove);
    window.addEventListener("scroll", () => {
      // Redetect on scroll to ensure circle hides if element moves away
      const rect = sliderRef.current?.getBoundingClientRect();
      if (rect) {
        const isInside = (
          cursorX.get() >= rect.left &&
          cursorX.get() <= rect.right &&
          cursorY.get() >= rect.top &&
          cursorY.get() <= rect.bottom
        );
        setIsHoveringSlider(isInside);
      }
    });

    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove);
    };
  }, []);

  // Infinite Loop Logic
  const handleScroll = () => {
    if (!sliderRef.current || isDragging) return;
    const { scrollLeft, scrollWidth } = sliderRef.current;
    const singleSetWidth = scrollWidth / 3;

    // Reset loop if near boundaries
    if (scrollLeft < 50) {
      sliderRef.current.scrollLeft = singleSetWidth + scrollLeft;
    } else if (scrollLeft > (singleSetWidth * 2) - 50) {
      sliderRef.current.scrollLeft = scrollLeft - singleSetWidth;
    }
  };

  const startDragging = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  const moveSlider = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;

    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;

    // Loop check during drag
    const { scrollLeft: sLeft, scrollWidth } = sliderRef.current;
    const singleSetWidth = scrollWidth / 3;
    if (sLeft < 10) {
      sliderRef.current.scrollLeft = singleSetWidth + sLeft;
      setStartX(e.pageX - sliderRef.current.offsetLeft);
      setScrollLeft(sliderRef.current.scrollLeft);
    } else if (sLeft > (singleSetWidth * 2) - 10) {
      sliderRef.current.scrollLeft = sLeft - singleSetWidth;
      setStartX(e.pageX - sliderRef.current.offsetLeft);
      setScrollLeft(sliderRef.current.scrollLeft);
    }
  };

  const scrollToForm = () => {
    formSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImgIndex !== null) {
      setSelectedImgIndex((selectedImgIndex + 1) % baseImages.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImgIndex !== null) {
      setSelectedImgIndex((selectedImgIndex - 1 + baseImages.length) % baseImages.length);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const wpUrl = import.meta.env.VITE_WP_API_URL.replace('/wp/v2', '');
      const response = await fetch(`${wpUrl}/thepad/v1/submit-inquiry`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col overflow-x-hidden relative">
      <style>
        {`
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}
      </style>

      {/* 1. HERO SECTION */}
      <section className="relative h-[80vh] md:h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src="https://images.unsplash.com/photo-1657704358775-ed705c7388d2?q=80&w=2070&auto=format&fit=crop"
          alt="Contact Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 text-center"
        >
          <h1 className="text-[18vw] md:text-[15vw] font-black uppercase tracking-tighter leading-none" style={{ fontFamily: "'Inter', sans-serif" }}>
            CONTACT
          </h1>
        </motion.div>
      </section>

      {/* 2. COMBINED: GET IN TOUCH + FORM SECTION */}
      <section ref={formSectionRef} className="py-24 md:py-40 px-6 md:px-12 bg-white text-black">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">

          {/* LEFT: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-16"
          >
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9]" style={{ fontFamily: "'Inter', sans-serif" }}>
              GET IN <br /> TOUCH
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              <div className="space-y-1">
                <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-black/40">Our Location</h4>
                <p className="text-lg md:text-xl font-medium leading-tight">
                  Gulmohar Park, <br />
                  New Delhi, Delhi, India
                </p>
                <a href="#" className="inline-block text-[10px] border-b border-black/30 pb-0.5 mt-0.5 hover:border-black transition-all">Get Directions</a>
              </div>

              <div className="space-y-1">
                <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-black/40">Email</h4>
                <a href="mailto:info@thepad.in" className="text-lg md:text-xl font-medium underline block hover:opacity-70 transition-opacity">
                  info@thepad.in
                </a>
              </div>

              <div className="space-y-1">
                <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-black/40">Phone</h4>
                <a href="tel:+919999999999" className="text-lg md:text-xl font-medium underline block hover:opacity-70 transition-opacity">
                  +91 99999 99999
                </a>
              </div>

              <div className="space-y-1">
                <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-black/40">WhatsApp</h4>
                <div className="flex flex-col gap-0.5">
                  <a href="#" className="text-lg font-medium underline hover:opacity-70 transition-opacity">Chat with Padel</a>
                  <a href="#" className="text-lg font-medium underline hover:opacity-70 transition-opacity">Chat with Movement</a>
                </div>
              </div>
            </div>

            <div className="pt-8 flex gap-8">
              <a href="https://www.instagram.com/thepad.in?igsh=MTZhNGlmMG5uMWRxbA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity"><Instagram size={24} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity"><Linkedin size={24} /></a>
            </div>
          </motion.div>

          {/* RIGHT: Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-black/5 p-8 md:p-14 lg:p-20 rounded-3xl"
          >
            <div className="mb-12">
              <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4">Stay in the loop</h3>
              <p className="text-black/50 text-base md:text-lg">Sign up to receive news and updates.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="border-b-[1px] border-black/20 focus-within:border-black transition-all">
                  <input
                    required
                    type="text"
                    placeholder="NAME"
                    className="w-full bg-transparent pt-4 pb-1 px-0 outline-none text-base font-bold placeholder:text-black/20 uppercase tracking-widest"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="border-b-[1px] border-black/20 focus-within:border-black transition-all">
                  <input
                    required
                    type="email"
                    placeholder="EMAIL"
                    className="w-full bg-transparent pt-4 pb-1 px-0 outline-none text-base font-bold placeholder:text-black/20 uppercase tracking-widest"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="border-b-[1px] border-black/20 focus-within:border-black transition-all">
                  <input
                    type="tel"
                    placeholder="PHONE"
                    className="w-full bg-transparent pt-4 pb-1 px-0 outline-none text-base font-bold placeholder:text-black/20 uppercase tracking-widest"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="border-b-[1px] border-black/20 focus-within:border-black transition-all">
                <textarea
                  required
                  rows={2}
                  placeholder="MESSAGE"
                  className="w-full bg-transparent pt-4 pb-1 px-0 outline-none text-base font-bold placeholder:text-black/20 uppercase tracking-widest resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full px-12 py-5 bg-black text-white rounded-full text-xs font-black uppercase tracking-[0.4em] hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
                >
                  {status === "loading" ? "Processing..." : "Submit Inquiry"}
                </button>
              </div>

              {status === "success" && (
                <p className="text-green-600 font-bold text-center uppercase tracking-widest text-xs">Message sent successfully.</p>
              )}
              {status === "error" && (
                <p className="text-red-500 font-bold text-center uppercase tracking-widest text-xs">Something went wrong. Try again.</p>
              )}
            </form>
          </motion.div>

        </div>
      </section>

      {/* 3. COLLAGE SLIDER SECTION */}
      <section className="bg-white py-12 relative overflow-hidden">
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          onMouseDown={startDragging}
          onMouseUp={stopDragging}
          onMouseLeave={stopDragging}
          onMouseMove={moveSlider}
          className={`flex gap-4 overflow-x-auto no-scrollbar px-6 md:px-12 py-8 select-none transition-all duration-300 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
        >
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              className="flex-shrink-0 w-[300px] md:w-[450px] aspect-[3/4] overflow-hidden rounded-xl shadow-lg pointer-events-auto"
              onClick={() => {
                if (!isDragging) setSelectedImgIndex(idx % baseImages.length);
              }}
            >
              <img
                src={src}
                alt={`Collage ${idx}`}
                className="w-full h-full object-cover pointer-events-none"
              />
            </motion.div>
          ))}
        </div>

        {/* Custom Cursor Circle */}
        <AnimatePresence mode="wait">
          {isHoveringSlider && !isDragging && selectedImgIndex === null && (
            <motion.div
              key="custom-cursor"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="fixed z-[60] pointer-events-none w-20 h-20 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center border border-black/10 mix-blend-difference"
              style={{
                left: cursorX,
                top: cursorY,
                translateX: '-50%',
                translateY: '-50%'
              }}
            >
              <div className="flex gap-2">
                <ChevronLeft size={20} className="text-black" />
                <ChevronRight size={20} className="text-black" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* 4. LIGHTBOX / MODAL */}
      <AnimatePresence>
        {selectedImgIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImgIndex(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110]"
              onClick={() => setSelectedImgIndex(null)}
            >
              <X size={40} />
            </button>

            {/* Navigation Arrows */}
            <button
              className="absolute left-4 md:left-8 w-16 h-16 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors z-[110]"
              onClick={nextImage}
            >
              <ChevronLeft size={32} />
            </button>
            <button
              className="absolute right-4 md:right-8 w-16 h-16 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors z-[110]"
              onClick={prevImage}
            >
              <ChevronRight size={32} />
            </button>

            {/* Main Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="max-w-5xl max-h-full aspect-[4/5] md:aspect-auto overflow-hidden rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={baseImages[selectedImgIndex]}
                alt="Enlarged view"
                className="w-full h-full object-contain md:object-cover"
              />
            </motion.div>

            {/* Index Display */}
            <div className="absolute bottom-8 text-[11px] uppercase tracking-[0.5em] font-black opacity-40">
              {selectedImgIndex + 1} / {baseImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 5. FULL WIDTH BANNER */}
      <section className="relative h-[80vh] w-full group overflow-hidden bg-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative h-full w-full overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1612534847738-b3af9bc31f0c?q=80&w=2070&auto=format&fit=crop"
            alt="Padel Action"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-700" />

          <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center text-white">
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-8 max-w-2xl">
              READY TO STEP <br /> UP YOUR GAME?
            </h3>
            <p className="text-white/80 text-lg md:text-xl max-w-md mb-12 font-medium">
              Connect with our team to organize events, join the club, or explore career opportunities.
            </p>
            <button
              onClick={scrollToForm}
              className="px-16 py-6 bg-white text-black rounded-full text-xs font-black uppercase tracking-[0.4em] hover:bg-black hover:text-white transition-all flex items-center gap-3 shadow-2xl"
            >
              Learn More <ArrowRight className="w-5 h-5 -rotate-45" />
            </button>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default Contact;
