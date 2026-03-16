import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
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
    { name: "Home", id: "home", path: "/" },
    { name: "Our Story", id: "story", path: "/our-story" },
    { name: "Services", id: "services", path: "/services" },
    { name: "Clubs", id: "clubs", path: "/clubs" },
    { name: "Contact", id: "contact", path: "/contact" }
  ];

  const location = useLocation();
  const navigate = useNavigate();
  
  // Pages that feature a full-screen hero and should start with a transparent navbar
  const pagesWithHero = ["/", "/contact"];
  const isTransparentPage = pagesWithHero.includes(location.pathname);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled || !isTransparentPage ? "bg-black/95 backdrop-blur-md py-0" : "bg-transparent py-0"}`}>
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex items-center">

        {/* Left Section: Logo (flex-1 ensures it takes equal space) */}
        <div className="flex-1 flex justify-start">
          <Link
            to="/"
            className="flex items-center gap-2 cursor-pointer hover:opacity-70 transition-opacity"
          >
            <img src="/assets/logo.png" alt="The Pad Logo" className="h-24 md:h-32 w-auto" />
          </Link>
        </div>

        {/* Middle Section: Navigation Links (centered via flex-1 and justify-center) */}
        <div className="hidden lg:flex flex-1 justify-center gap-8 xl:gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-[13px] uppercase tracking-[0.25em] font-black transition-all cursor-pointer whitespace-nowrap ${location.pathname === link.path ? "text-reserve-accent opacity-100" : "text-white/60 hover:text-white hover:opacity-100"}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Section: CTA Button (flex-1 ensures it occupies equal space as the left) */}
        <div className="flex-1 flex justify-end">
          <button
            onClick={() => window.open("https://hudle.in/venues/the-pad-gulmohar-club/267531", "_blank")}
            className="hidden lg:block text-[12px] uppercase tracking-[0.3em] font-black py-4 px-12 rounded-full border border-reserve-accent hover:bg-reserve-accent hover:text-white transition-all text-white whitespace-nowrap"
          >
            Book Your Court
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
            <img src="/assets/logo.png" alt="The Pad Logo" className="h-28 w-auto" />
            <button onClick={() => setIsMobileMenuOpen(false)}><X size={32} /></button>
          </div>
          <div className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl uppercase tracking-widest font-serif text-left block"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="mt-auto pb-12">
            <button 
              onClick={() => window.open("https://hudle.in/venues/the-pad-gulmohar-club/267531", "_blank")}
              className="w-full py-5 rounded-full border border-white/20 text-[10px] uppercase tracking-[0.3em] font-bold text-white"
            >
              Book Your Court
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
