import { motion } from 'motion/react';
import { ShieldCheck, Heart, Diamond, Star } from 'lucide-react';

const benefits = [
  {
    icon: <Heart size={24} />,
    title: "Heart-Led Logistics",
    description: "Deep destination expertise from a Danish team that understands the nuance of 'presence' and 'reconnection'."
  },
  {
    icon: <Diamond size={24} />,
    title: "Understated Luxury",
    description: "Inspired by the legends of luxury travel, yet refined through a minimalist Scandinavian lens focused on quality over excess."
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Agent Empowerment",
    description: "We handle the ground support so you can grow your business with a 15% commission and zero operational complexity."
  },
  {
    icon: <Star size={24} />,
    title: "Un-Searchable Access",
    description: "Experiences built through private networks and vetted relationships, ensuring exclusivity for your high-end clients."
  }
];

export default function Advisors() {
  return (
    <section id="advisors" className="py-24 md:py-32 bg-paper relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-gold text-[11px] uppercase tracking-[0.4em] mb-8 block font-bold">
              Elevated Partnership
            </span>
            <h2 className="serif text-5xl md:text-6xl text-ink leading-[1.1] mb-10">
              For the travel agent who wish to offer <span className="italic">something different</span>, something more meaningful and involving
            </h2>
            <p className="text-ink/60 font-sans text-xl font-light leading-relaxed mb-12">
              Time To Journey exists to complement the American travel agent who values reliability, innovation, and loyal partnerships. We curate travel content that invites your guests to slow down and reconnect.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="space-y-4">
                  <div className="text-gold">
                    {benefit.icon}
                  </div>
                  <h4 className="serif text-2xl text-ink">{benefit.title}</h4>
                  <p className="text-ink/40 text-sm font-light leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-sand/20 rounded-sm overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&q=80&w=1000&h=1250" 
                alt="High-end Travel Experience" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-ink/10" />
            </div>
            
            {/* Mission Statement Float */}
            <div className="absolute -right-8 -bottom-8 bg-ink text-paper p-10 rounded-2xl shadow-2xl max-w-xs hidden lg:block">
              <p className="serif text-xl italic mb-4 leading-relaxed">
                “We give your clients experiences they don’t just travel on, but return enriched from — remembering you made it possible.”
              </p>
              <div className="h-px w-12 bg-gold" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
