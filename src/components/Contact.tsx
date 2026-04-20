import { motion } from 'motion/react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-paper">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-gold text-[10px] uppercase tracking-[0.4em] mb-6 block font-bold">
              Connect With Us
            </span>
            <h2 className="serif text-5xl md:text-6xl text-ink leading-[1.1] mb-8">
              Begin your <br />
              <span className="italic">partnership</span>
            </h2>
            <p className="text-ink/60 font-sans text-lg font-light leading-relaxed mb-12 max-w-lg">
              We value relationships over transactions. Let’s discuss how we can support your curation for the upcoming season.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-full border border-ink/10 flex items-center justify-center transition-colors group-hover:bg-ink group-hover:text-paper">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-ink/40 mb-1">Email</div>
                  <div className="serif text-xl">idl@timetojourney.dk</div>
                </div>
              </div>

              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-full border border-ink/10 flex items-center justify-center transition-colors group-hover:bg-ink group-hover:text-paper">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-ink/40 mb-1">Office</div>
                  <div className="serif text-xl">+45 26 85 86 83</div>
                </div>
              </div>

              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-full border border-ink/10 flex items-center justify-center transition-colors group-hover:bg-ink group-hover:text-paper">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-ink/40 mb-1">Presence</div>
                  <div className="serif text-xl">Based in Copenhagen - curating the world for you and your clients</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-sand/30 p-10 lg:p-16 rounded-[40px]"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-ink/60 px-1">Name</label>
                  <input 
                    type="text" 
                    placeholder="Evelyn Harper"
                    className="w-full bg-transparent border-b border-ink/10 py-3 focus:outline-none focus:border-gold transition-colors serif text-xl"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-ink/60 px-1">Organization</label>
                  <input 
                    type="text" 
                    placeholder="Harper Luxury Travel"
                    className="w-full bg-transparent border-b border-ink/10 py-3 focus:outline-none focus:border-gold transition-colors serif text-xl"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-ink/60 px-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="evelyn@harper.travel"
                  className="w-full bg-transparent border-b border-ink/10 py-3 focus:outline-none focus:border-gold transition-colors serif text-xl"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-ink/60 px-1">Tell us about your needs</label>
                <textarea 
                  rows={4}
                  placeholder="I am looking for a partner to support my clients in Italy this summer..."
                  className="w-full bg-transparent border-b border-ink/10 py-3 focus:outline-none focus:border-gold transition-colors serif text-xl resize-none"
                />
              </div>

              <button className="w-full py-6 bg-ink text-paper rounded-full text-[11px] uppercase tracking-[0.3em] font-bold group flex items-center justify-center gap-4 hover:bg-gold transition-colors duration-500 shadow-xl">
                Submit Inquiry
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-2" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
