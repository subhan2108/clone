import { motion } from "motion/react";
import Footer from "../components/Footer";

const Membership = () => {
  const solutions = [
    {
      title: "Elite Sports Club",
      description: "Give your sports club the edge with our top-tier courts. Integrated management and premium aesthetics.",
      image: "https://images.unsplash.com/photo-1542323565-5b870e2817ee?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Luxury Hotels",
      description: "Level up on Luxury: Take your hotel to new heights with our premium courts and guest experiences.",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Exclusive Villas",
      description: "Catapult your villas into a league of their own with our top-notch private court solutions.",
      image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=800&auto=format&fit=crop"
    }
  ];

  const centers = [
    { name: "THE PAD DELHI", location: "GULMOHAR PARK" }
  ];

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="px-6 max-w-7xl mx-auto mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-reserve-accent mb-8" style={{ fontFamily: "'Poppins', sans-serif" }}>Membership & Solutions</p>
          <h1 className="text-5xl md:text-8xl font-black uppercase leading-tight mb-8" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Premium Court <br /> Solutions.
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            Revamp your ventures with our courts, where every game leaps into a new realm of excitement!
            Perfect for those who play hard and dream big.
          </p>
        </motion.div>
      </section>

      {/* Solutions Grid */}
      <section className="px-6 max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden mb-8 rounded-sm">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
              <p className="text-white/50 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Innovation Section */}
      <section className="bg-white text-reserve-black py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-12" style={{ fontFamily: "'Poppins', sans-serif" }}>Elevating Padel Excellence Through Innovation</h2>
            <div className="text-lg text-black/70 space-y-6 leading-relaxed">
              <p>
                At The Pad, we believe that excellence begins with collaboration and innovation.
              We're proud to partner with industry leaders renowned for their cutting-edge manufacturing expertise.
              </p>
              <p>
                Our collaboration marks a pivotal moment in Padel's evolution, where tradition meets technology.
                The unwavering commitment to quality and craftsmanship aligns seamlessly with our vision to create world-class Padel experiences.
              </p>
              <p>
                Together, we are shaping the future of Padel, crafting courts that offer more than just a game –
                they offer an unforgettable experience.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="aspect-square bg-reserve-black/5 rounded-sm overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop"
              alt="Innovation"
              className="w-full h-full object-cover grayscale"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-32 px-6 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-12" style={{ fontFamily: "'Poppins', sans-serif" }}>Where Passion Meets Excellence.</h2>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Ready to Fuel your Padel Obsession? Whether you're dreaming of building courts,
            starting a club, or franchising — we've got you covered.
          </p>
          <button className="btn-primary">Learn More About Us</button>
        </motion.div>
      </section>

      {/* Foundation Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop"
            alt="Foundation"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-reserve-black/60" />
        </div>
        <div className="relative z-10 text-center px-6">
          <h2 className="text-4xl md:text-7xl font-black uppercase mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>Building the foundation,</h2>
          <p className="text-2xl md:text-4xl font-sans font-medium uppercase tracking-widest text-reserve-accent" style={{ fontFamily: "'Poppins', sans-serif" }}>one court at a time.</p>
        </div>
      </section>

      {/* Explore Courts */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-reserve-accent mb-4">Our Portfolio</p>
            <h2 className="text-4xl md:text-6xl font-black uppercase" style={{ fontFamily: "'Poppins', sans-serif" }}>Explore our Courts</h2>
            <p className="text-xl text-white/50 italic mt-4">Where precision meets innovation.</p>
          </div>
          <button className="btn-outline">View Gallery</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {centers.map((center) => (
            <motion.div
              key={center.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="border-b border-white/10 pb-8 group cursor-pointer"
            >
              <h3 className="text-2xl font-serif mb-2 group-hover:text-reserve-accent transition-colors">{center.name}</h3>
              <p className="text-white/40 uppercase tracking-widest text-xs">{center.location}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Coaches Section */}
      <section className="bg-reserve-accent text-reserve-black py-24 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-8" style={{ fontFamily: "'Poppins', sans-serif" }}>Uncover your winning advantage.</h2>
          <button className="px-12 py-5 bg-reserve-black text-white uppercase tracking-widest hover:bg-white hover:text-reserve-black transition-all">
            View Coaches' Profiles
          </button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Membership;
