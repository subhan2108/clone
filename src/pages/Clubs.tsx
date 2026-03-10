import { motion } from "motion/react";
import Footer from "../components/Footer";

interface ClubsProps {
  onNavigate: (page: "home" | "story" | "clubs" | "membership") => void;
}

const Clubs = ({ onNavigate }: ClubsProps) => {
  const clubs = [
    {
      name: "Miami Seaplane",
      description: "Our vibrant social hub. Nestled in the heart of Miami, our Seaplane club offers the ultimate on-and-off court experience.",
      image: "https://picsum.photos/seed/seaplane/1200/800",
      status: "Open Now"
    },
    {
      name: "Hudson Yards",
      description: "Full club serving soon. Play goes on at our iconic riverside venue at Hudson Yards, where temporary outdoor courts are now open.",
      image: "https://picsum.photos/seed/hudson/1200/800",
      status: "Coming Soon"
    },
    {
      name: "Design District",
      description: "The intersection of art and sport. A boutique padel experience in the heart of Miami's most creative neighborhood.",
      image: "https://picsum.photos/seed/design/1200/800",
      status: "Open Now"
    }
  ];

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="px-6 max-w-7xl mx-auto mb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-reserve-accent mb-8">Locations</p>
          <h1 className="text-5xl md:text-8xl font-serif leading-tight mb-8">
            Always More Than <br /> <span className="italic">Just Padel.</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Discover our collection of premier padel clubs, each designed to offer
            a unique blend of athletic excellence and social connection.
          </p>
        </motion.div>
      </section>

      {/* Clubs Grid */}
      <section className="px-6 max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 gap-24">
          {clubs.map((club, index) => (
            <motion.div
              key={club.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}
            >
              <div className="w-full lg:w-3/5 aspect-[16/10] overflow-hidden rounded-sm group">
                <img
                  src={club.image}
                  alt={club.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="w-full lg:w-2/5 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-px bg-reserve-accent" />
                  <p className="text-xs uppercase tracking-widest text-reserve-accent font-bold">{club.status}</p>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif">{club.name}</h2>
                <p className="text-lg text-white/60 leading-relaxed">
                  {club.description}
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <button className="btn-primary">View Club</button>
                  <button className="btn-outline">Book Court</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Membership CTA */}
      <section className="bg-white text-reserve-black py-32 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-serif mb-8">The Original <br /> <span className="italic">Social Net-Work.</span></h2>
          <p className="text-xl text-black/60 mb-12 leading-relaxed">
            Join our community for exclusive benefits, events and early access to new locations.
          </p>
          <button 
            onClick={() => onNavigate("membership")}
            className="px-12 py-5 bg-reserve-black text-white uppercase tracking-widest hover:bg-reserve-accent transition-all"
          >
            Become a Member
          </button>
        </motion.div>
      </section>

      {/* Signup Section */}
      <section className="py-32 px-6 max-w-3xl mx-auto text-center">
        <h3 className="text-3xl font-serif mb-8">Stay in the game</h3>
        <p className="text-white/50 mb-12">Join our community for exclusive benefits, events and early access.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Email Address"
            className="flex-1 bg-white/5 border border-white/10 px-6 py-4 outline-none focus:border-reserve-accent transition-colors"
          />
          <button className="btn-primary px-12">Sign Up Now</button>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default Clubs;
