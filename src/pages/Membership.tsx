import { motion } from "motion/react";
import Footer from "../components/Footer";
import { MoveRight } from "lucide-react";

const Membership = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col pt-32 text-black font-sans">
      {/* Hero Section */}
      <section className="px-6 py-12 md:py-24 max-w-7xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="w-full flex justify-center"
        >
          <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-bold tracking-tight leading-[0.95] mb-12 flex flex-col items-center">
            <span>Always More Than</span>
            <span>Just Padel.</span>
          </h1>
        </motion.div>
      </section>

      {/* Intro Text */}
      <section className="px-6 pb-24 max-w-4xl mx-auto w-full text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl text-black/80 font-medium"
        >
          Each of our venues are built around a sense of community. <br className="hidden md:block" />
          Where everyone from die-hard players to first timers are <br className="hidden md:block" />
          welcome to play.
        </motion.p>
      </section>

      {/* Clubs Split Section */}
      <section className="w-full">
        {/* Earls Court Room */}
        <div className="grid grid-cols-1 md:grid-cols-2 bg-[#f4f4f4] items-center">
          <div className="w-full aspect-[4/3] md:aspect-auto md:h-[700px] p-6 lg:p-12 order-2 md:order-1 flex items-center justify-center">
             <img
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop"
              alt="Earls Court"
              className="w-full h-full object-cover rounded-md"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="p-12 md:p-24 order-1 md:order-2 flex justify-center">
            <div className="max-w-sm w-full">
              <h2 className="text-3xl md:text-5xl font-medium mb-6">Earls Court</h2>
              <h3 className="text-sm font-bold mb-4 uppercase tracking-widest">Our vibrant social hub.</h3>
              <p className="text-sm text-black/70 mb-10 leading-relaxed">
                Nestled in the heart of West London, our Earls Court club offers the ultimate on-and-off court experience.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 bg-[#111] text-white rounded-[40px] text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors">
                  View Club
                </button>
                <button className="px-8 py-3 bg-transparent border border-black/20 text-black rounded-[40px] text-xs font-bold uppercase tracking-widest hover:border-black transition-colors">
                  Book Court
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* The O2 Room */}
        <div className="grid grid-cols-1 md:grid-cols-2 bg-white items-center">
          <div className="p-12 md:p-24 flex justify-center">
            <div className="max-w-sm w-full">
              <h2 className="text-3xl md:text-5xl font-medium mb-6">The O2</h2>
              <h3 className="text-sm font-bold mb-4 uppercase tracking-widest">Full club serving soon.</h3>
              <p className="text-sm text-black/70 mb-10 leading-relaxed">
                Play goes on at our iconic riverside venue at The O2, where two temporary outdoor courts are now open.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 bg-[#111] text-white rounded-[40px] text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors">
                  View Club
                </button>
                <button className="px-8 py-3 bg-transparent border border-black/20 text-black rounded-[40px] text-xs font-bold uppercase tracking-widest hover:border-black transition-colors">
                  Book Court
                </button>
              </div>
            </div>
          </div>
          <div className="w-full aspect-[4/3] md:aspect-auto md:h-[700px] p-6 lg:p-12 flex items-center justify-center">
             <img
              src="https://images.unsplash.com/photo-1542323565-5b870e2817ee?q=80&w=1200&auto=format&fit=crop"
              alt="The O2"
              className="w-full h-full object-cover rounded-md"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Full Width Call to Action Section from Reference */}
      <section className="bg-[#0b3b24] text-white py-32 px-6 text-center relative overflow-hidden">
        {/* Decorative Lines mimicking the reference border */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-white/20" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6">The Original Social Net-Work</h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 font-medium max-w-2xl mx-auto">
            Our love for padel and the people who play it runs deep. This isn't just ordinary membership, it's an invitation to become part of the very fabric of the club.
          </p>
          <button className="px-10 py-4 bg-[#111] text-white rounded-[40px] text-xs font-bold uppercase tracking-[0.2em] hover:bg-black transition-colors inline-block text-center">
            Become A Member
          </button>
        </motion.div>
      </section>

      {/* Footer Prep: Stay in the game block */}
      <section className="bg-[#111] text-white py-24 px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 border-b border-white/20">
         <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Stay in the game</h2>
            <p className="text-sm text-white/70 mb-8 max-w-sm">Join our community for exclusive benefits, events and early access.</p>
            <button className="px-8 py-3 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-gray-200 transition-colors">
              Sign Up Now
            </button>
         </div>
      </section>

      <Footer />
    </div>
  );
};

export default Membership;
