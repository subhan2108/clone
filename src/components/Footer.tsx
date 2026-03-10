interface FooterProps {
  onNavigate: (page: "home" | "story" | "clubs" | "membership") => void;
}

const Footer = ({ onNavigate }: FooterProps) => {
  return (
    <footer className="bg-black text-white pt-32 pb-16 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 border-b border-white/10 pb-20">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight">
              Join the newsletter and <br /> get access to exclusive news
            </h2>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest text-white/40">Email *</label>
              <div className="flex border-b border-white/20 pb-2 group focus-within:border-white transition-colors">
                <input 
                  type="email" 
                  className="bg-transparent border-none outline-none w-full text-lg placeholder:text-white/10" 
                  placeholder="Your Email"
                />
                <button className="text-[10px] uppercase tracking-[0.3em] font-bold hover:text-reserve-accent transition-colors">Submit</button>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <input type="checkbox" id="subscribe" className="mt-1 bg-transparent border-white/20 rounded-none cursor-pointer" />
              <label htmlFor="subscribe" className="text-[10px] uppercase tracking-widest text-white/40 cursor-pointer">
                Yes, subscribe me to your newsletter. *
              </label>
            </div>
          </div>
        </div>

        {/* Bottom Section: Locations and Links */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.4em] font-black mb-8 text-white/30">Locations</h4>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-bold uppercase tracking-widest">Solé Mia</span>
                  <span className="text-xs text-white/50 leading-relaxed">
                    15051 NE 146th St, North Miami, FL 33181 <br />
                    786-562-6189
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-bold uppercase tracking-widest">Miami Design District</span>
                  <span className="text-xs text-white/50 leading-relaxed">
                    163 NE 39th St, Miami, FL 33137 <br />
                    786-633-8742
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-bold uppercase tracking-widest">Reserve Cup</span>
                  <span className="text-xs text-white/50 leading-relaxed">
                    Miami-Seaplane Base <br />
                    1000 MacArthur Causeway, Miami, FL 33132
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:gap-16">
            <ul className="flex flex-col gap-4 text-[10px] uppercase tracking-[0.3em] font-bold text-white/50">
              <li onClick={() => onNavigate("membership")} className="hover:text-white cursor-pointer transition-colors">Membership</li>
              <li className="hover:text-white cursor-pointer transition-colors">Book a Court</li>
              <li onClick={() => onNavigate("story")} className="hover:text-white cursor-pointer transition-colors">Our Story</li>
              <li className="hover:text-white cursor-pointer transition-colors">All Pros</li>
              <li className="hover:text-white cursor-pointer transition-colors">Book Private Lesson</li>
              <li className="hover:text-white cursor-pointer transition-colors">Events</li>
              <li className="hover:text-white cursor-pointer transition-colors">Apply</li>
              <li className="hover:text-white cursor-pointer transition-colors">Shop</li>
              <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
            </ul>
            <ul className="flex flex-col gap-4 text-[10px] uppercase tracking-[0.3em] font-bold text-white/50">
              <li className="hover:text-white cursor-pointer transition-colors">Join the Team</li>
              <li className="hover:text-white cursor-pointer transition-colors">FAQ</li>
              <li className="hover:text-white cursor-pointer transition-colors">Booking and Cancellation Policy</li>
              <li className="hover:text-white cursor-pointer transition-colors">Accessibility</li>
            </ul>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-white/5 flex justify-between items-center text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-white/20">
          <span>© 2024 Reserve Padel. All Rights Reserved.</span>
          <div className="flex gap-8">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
