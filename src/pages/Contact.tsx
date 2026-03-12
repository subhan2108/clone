import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, MapPin, ArrowRight, Instagram, Linkedin, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Use the identified WordPress endpoint
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
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-reserve-accent" />,
      label: "Email",
      value: "info@thepad.in",
      link: "mailto:info@thepad.in"
    },
    {
      icon: <Phone className="w-5 h-5 text-reserve-accent" />,
      label: "Phone",
      value: "+91 99999 99999",
      link: "tel:+919999999999"
    },
    {
      icon: <MapPin className="w-5 h-5 text-reserve-accent" />,
      label: "Address",
      value: "Gulmohar Park, Delhi, India",
      link: "#"
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-24 overflow-hidden">
      {/* Hero Section */}
      <section className="px-6 max-w-7xl mx-auto mb-20 text-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden"
        >
          <span className="text-[25vw] font-black uppercase tracking-tighter leading-none select-none">Contact</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-reserve-accent mb-6 font-bold" style={{ fontFamily: "'Poppins', sans-serif" }}>Get in Touch</p>
          <h1 className="text-5xl md:text-8xl font-black uppercase mb-8 tracking-tighter leading-[0.9]" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Step up your <br /> game
          </h1>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed font-medium">
            Contact us and let's embark on this journey together! We're here to answer any questions about our clubs, services, or partnerships.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start relative z-10">
        {/* Contact info & Socials */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          <div>
            <h2 className="text-4xl font-black uppercase mb-12 tracking-tighter italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Connect with us
            </h2>
            <div className="space-y-8">
              {contactInfo.map((info, idx) => (
                <a 
                  key={idx}
                  href={info.link} 
                  className="group flex items-start gap-6 p-6 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 rounded-sm"
                >
                  <div className="mt-1 p-3 bg-black border border-white/10 rounded-full group-hover:border-reserve-accent/50 transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold mb-1">{info.label}</p>
                    <p className="text-lg font-medium text-white group-hover:text-reserve-accent transition-colors">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] font-black mb-8 text-white/30">Follow our journey</h3>
            <div className="flex gap-4">
              {[
                { icon: <Instagram className="w-5 h-5" />, label: "Instagram", link: "https://www.instagram.com/thepad.in?igsh=MTZhNGlmMG5uMWRxbA%3D%3D&utm_source=qr" },
                { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", link: "#" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-white/10 rounded-full hover:bg-reserve-accent hover:border-reserve-accent hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10">
            <h3 className="text-2xl font-serif italic mb-4">Work with us</h3>
            <p className="text-white/50 mb-8 max-w-sm">Let's explore the opportunity to work together and grow the padel community in India.</p>
            <a href="mailto:people@thepad.in" className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-reserve-accent hover:gap-5 transition-all">
              Apply Now <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/[0.02] border border-white/10 p-8 md:p-12 rounded-sm relative"
        >
          {status === "success" ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full flex flex-col items-center justify-center text-center py-20"
            >
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-8">
                <ArrowRight className="w-10 h-10 text-green-500 -rotate-45" />
              </div>
              <h2 className="text-3xl font-black uppercase mb-4 tracking-tighter">Message Sent!</h2>
              <p className="text-white/50 mb-12">Thank you for reaching out. Our team will get back to you shortly.</p>
              <button 
                onClick={() => setStatus("idle")}
                className="btn-outline px-10"
              >
                Send Another
              </button>
            </motion.div>
          ) : (
            <>
              <h3 className="text-2xl font-black uppercase mb-10 tracking-tighter">Send a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-black text-white/30 ml-1">Name</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-black border border-white/10 px-6 py-4 outline-none focus:border-reserve-accent transition-colors text-white text-sm"
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-black text-white/30 ml-1">Email</label>
                    <input
                      required
                      type="email"
                      className="w-full bg-black border border-white/10 px-6 py-4 outline-none focus:border-reserve-accent transition-colors text-white text-sm"
                      placeholder="Your Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-black text-white/30 ml-1">Phone</label>
                    <input
                      type="tel"
                      className="w-full bg-black border border-white/10 px-6 py-4 outline-none focus:border-reserve-accent transition-colors text-white text-sm"
                      placeholder="Contact Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-black text-white/30 ml-1">Subject</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-black border border-white/10 px-6 py-4 outline-none focus:border-reserve-accent transition-colors text-white text-sm"
                      placeholder="Inquiry Topic"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-black text-white/30 ml-1">Message</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full bg-black border border-white/10 px-6 py-4 outline-none focus:border-reserve-accent transition-colors text-white text-sm resize-none"
                    placeholder="Tell us about your inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <button 
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full btn-primary py-5 flex items-center justify-center gap-3 disabled:opacity-50 mt-4 group"
                >
                  {status === "loading" ? "Sending..." : (
                    <>
                      Send Message 
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
                
                {status === "error" && (
                  <p className="text-red-500 text-xs text-center font-bold mt-4">An error occurred. Please try again or email us directly.</p>
                )}
              </form>
            </>
          )}
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
