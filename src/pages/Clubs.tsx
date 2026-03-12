import { useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

const Clubs = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const clubs = [
    {
      name: "The Pad Delhi",
      description: "Experience the intersection of community, sport, and urban energy at Delhi’s premier Padel and Pickleball destination. Featuring 6 world-class Padel courts and 4 professional Pickleball courts, we combine high-performance play with a vibrant social atmosphere.",
      image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=1200&auto=format&fit=crop",
      status: "Opening Soon: Gulmohar Park"
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
          <p className="text-xs uppercase tracking-[0.4em] text-reserve-accent mb-8" style={{ fontFamily: "'Poppins', sans-serif" }}>Locations</p>
          <h1 className="text-5xl md:text-8xl font-black uppercase leading-tight mb-8" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Always More Than <br /> Just Padel.
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
          <h2 className="text-5xl md:text-7xl font-black uppercase mb-8" style={{ fontFamily: "'Poppins', sans-serif" }}>The Original Social Net-Work.</h2>
          <p className="text-xl text-black/60 mb-12 leading-relaxed">
            Join our community for exclusive benefits, events and early access to new locations.
          </p>
          <button
            onClick={() => navigate("/services")}
            className="px-12 py-5 bg-reserve-black text-white uppercase tracking-widest hover:bg-reserve-accent transition-all"
          >
            Become a Member
          </button>
        </motion.div>
      </section>

      {/* Signup Section */}
      <section className="py-32 px-6 max-w-3xl mx-auto text-center">
        <h3 className="text-3xl font-black uppercase mb-8" style={{ fontFamily: "'Poppins', sans-serif" }}>Stay in the game</h3>
        <p className="text-white/50 mb-12">Join our community for exclusive benefits, events and early access.</p>
        
        {status === 'success' ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 border border-reserve-accent/30 bg-reserve-accent/5 rounded-xl"
          >
            <h4 className="text-2xl font-black uppercase text-reserve-accent mb-2">YOU'RE IN!</h4>
            <p className="text-white/60 font-medium">We'll keep you posted on our grand opening.</p>
          </motion.div>
        ) : (
          <form 
            onSubmit={async (e) => {
              e.preventDefault();
              setLoading(true);
              try {
                // Remove /wp/v2 and use our custom endpoint
                const wpUrl = import.meta.env.VITE_WP_API_URL.replace('/wp/v2', '');
                const response = await fetch(`${wpUrl}/thepad/v1/submit-inquiry`, {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ email: email })
                });
                
                if (response.ok) {
                  setStatus('success');
                } else {
                  console.error("Server responded with:", await response.text());
                  setStatus('error');
                }
              } catch (err) {
                console.error("Submission failed", err);
                setStatus('error');
              } finally {
                setLoading(false);
              }
            }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="flex-1 bg-white/5 border border-white/10 px-6 py-4 outline-none focus:border-reserve-accent transition-colors text-white"
            />
            <button 
              disabled={loading}
              className="btn-primary px-12 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Sign Up Now"}
            </button>
          </form>
        )}
      </section>
    </div>
  );
};

export default Clubs;
