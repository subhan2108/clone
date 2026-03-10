import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onNavigate: (page: "home" | "story" | "clubs" | "membership") => void;
  currentPage: string;
}

const Navbar = ({ onNavigate, currentPage }: NavbarProps) => {
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
    // { name: "Book", id: "book" },
    { name: "Clubs", id: "clubs" },
    // { name: "Events", id: "events" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled || currentPage !== "home" ? "bg-black/95 backdrop-blur-md py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex items-center">

        {/* Left Section: Logo (flex-1 ensures it takes equal space) */}
        <div className="flex-1 flex justify-start">
          <button
            onClick={() => onNavigate("home")}
            className="text-4xl font-serif italic tracking-tighter cursor-pointer hover:opacity-70 transition-opacity"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
          >
            R
          </button>
        </div>

        {/* Middle Section: Navigation Links (centered via flex-1 and justify-center) */}
        <div className="hidden lg:flex flex-1 justify-center gap-8 xl:gap-12">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => {
                if (link.id === "story") onNavigate("story");
                else if (link.id === "clubs") onNavigate("clubs");
                else if (link.id === "membership") onNavigate("membership");
              }}
              className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-all cursor-pointer whitespace-nowrap ${currentPage === link.id ? "text-white opacity-100" : "text-white/60 hover:text-white hover:opacity-100"}`}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Right Section: CTA Button (flex-1 ensures it occupies equal space as the left) */}
        <div className="flex-1 flex justify-end">
          <button
            onClick={() => onNavigate("membership")}
            className="hidden lg:block text-[9px] uppercase tracking-[0.25em] font-black py-2.5 px-7 rounded-full border border-white/30 hover:bg-white hover:text-black transition-all text-white whitespace-nowrap"
          >
            Become a Member
          </button>

          {/* Mobile Toggle inside the right section */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="lg:hidden absolute top-0 left-0 w-full h-screen bg-black z-50 p-8 flex flex-col"
        >
          <div className="flex justify-between items-center mb-12">
            <span className="text-4xl font-serif italic">R</span>
            <button onClick={() => setIsMobileMenuOpen(false)}><X size={32} /></button>
          </div>
          <div className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  if (link.id === "story") onNavigate("story");
                  else if (link.id === "clubs") onNavigate("clubs");
                  else if (link.id === "membership") onNavigate("membership");
                  setIsMobileMenuOpen(false);
                }}
                className="text-3xl uppercase tracking-widest font-serif text-left"
              >
                {link.name}
              </button>
            ))}
          </div>
          <div className="mt-auto pb-12">
            <button className="w-full py-5 rounded-full border border-white/20 text-[10px] uppercase tracking-[0.3em] font-bold text-white">
              Become a Member
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
