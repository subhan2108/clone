import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="contact" className="bg-black text-white pt-32 pb-16 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Bottom Section: Locations and Links */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.4em] font-black mb-8 text-white/30" style={{ fontFamily: "'Poppins', sans-serif" }}>Locations</h4>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-bold uppercase tracking-widest text-reserve-accent">Gulmohar Park</span>
                  <span className="text-xs text-white/50 leading-relaxed uppercase tracking-widest">
                    Delhi, India <br />
                    info@thepad.in
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:gap-16">
            <ul className="flex flex-col gap-4 text-[10px] uppercase tracking-[0.3em] font-bold text-white/50" style={{ fontFamily: "'Poppins', sans-serif" }}>
              <li><Link to="/membership" className="hover:text-white cursor-pointer transition-colors block">Membership</Link></li>
              <li className="hover:text-white cursor-pointer transition-colors">Book a Court</li>
              <li><Link to="/our-story" className="hover:text-white cursor-pointer transition-colors block">Our Story</Link></li>
              <li className="hover:text-white cursor-pointer transition-colors">Events</li>
            </ul>
            <ul className="flex flex-col gap-4 text-[10px] uppercase tracking-[0.3em] font-bold text-white/50" style={{ fontFamily: "'Poppins', sans-serif" }}>
              <li className="hover:text-white cursor-pointer transition-colors"><a href="https://www.instagram.com/thepad.in?igsh=MTZhNGlmMG5uMWRxbA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li className="hover:text-white cursor-pointer transition-colors">LinkedIn</li>
              <li className="hover:text-white cursor-pointer transition-colors">WhatsApp</li>
            </ul>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-center text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-white/20 text-center md:text-left mb-12">
          <span>© 2025 The Pad. All Rights Reserved.</span>
          <div className="flex gap-8">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>

        {/* Large Branding Logo */}
        <div className="w-full text-center overflow-hidden pb-8">
          <h1 
            className="text-[15vw] md:text-[20vw] leading-none text-white/5 select-none pointer-events-none tracking-tighter"
            style={{ 
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic'
            }}
          >
            The Pad
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
