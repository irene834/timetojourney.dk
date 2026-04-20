import { motion } from 'motion/react';

export default function Story() {
  return (
    <section id="story" className="pt-16 pb-24 md:pt-24 md:pb-48 bg-paper flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="scandi-border overflow-hidden aspect-[4/5] luxury-card relative group shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1499810631641-541e76d678a2?auto=format&fit=crop&q=80&w=1000&h=1250" 
                alt="Calm Danish Coast - Placeholder" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-ink/5" />
            </div>
            
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-paper shadow-xl border border-gold/20 rounded-full flex items-center justify-center p-10 text-center hidden md:flex z-10">
               <div className="serif italic text-ink text-xl leading-relaxed">
                 At its core, Time To Journey is about how your guests experience a place.
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <span className="text-gold text-[12px] uppercase tracking-[0.5em] mb-10 block font-bold">
              The Vision
            </span>
            <h2 className="serif text-5xl md:text-7xl text-ink leading-[0.9] tracking-tighter mb-12">
              The Art of <br />
              <span className="italic">Slow Presence</span>
            </h2>
            <div className="space-y-8 text-ink/70 font-sans text-xl font-light leading-relaxed">
              <p>
                Time To Journey is a DMC company that exists to create journeys that go beyond the destination - and to support B2C/B2B travel agencies to bring exactly that to their clients.
              </p>
              <p>
                We curate travel content that invites your guests to experience something truly different, to slow down and to reconnect - with history, nature, food, each other and themselves.
              </p>
              <p>
                In short - our vision is to curate extraordinary travel content for your clients and by this, and with our commission-based business model, help you grow your business.
              </p>
            </div>
            
            <div className="mt-16 flex flex-col lg:flex-row lg:items-stretch gap-6 lg:gap-8">
               <div className="text-left flex flex-col justify-center shrink-0 relative">
                  <div className="flex items-center gap-5">
                    <img src="/1713791501043.jpg" alt="Irene D. Lassen" className="w-16 h-16 rounded-full object-cover shadow-sm border border-gold/20" />
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="serif text-3xl text-ink italic block">Irene D. Lassen</span>
                      </div>
                      <span className="text-[10px] uppercase font-bold text-gold tracking-[0.4em] mt-2 block">Founder & CEO</span>
                    </div>
                  </div>
               </div>
               <div className="hidden lg:block w-px bg-ink/10 shrink-0" />
               <div className="max-w-[400px] flex flex-col justify-center space-y-3 py-1">
                  <p className="text-[9px] uppercase tracking-widest text-ink/30 font-bold leading-relaxed">
                    Based in Copenhagen, Curating the world for you and your clients.
                  </p>
                  <p className="text-[9px] uppercase tracking-widest text-ink/30 font-bold leading-relaxed">
                    Founders background: University degree in Media Studies, 4-year psychotherapeutic study and certified yoga instructor. Combined with years of professional experience in concept development, events and destination tourism.
                  </p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
