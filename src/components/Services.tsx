import { motion } from 'motion/react';
import { Compass, Users, Map, FileStack } from 'lucide-react';

const services = [
  {
    icon: <Compass size={32} />,
    title: "Curated Itineraries",
    description: "Handpicked experiences designed to unlock involving and rare moments that your clients are looking for, and your competitors cannot easily replicate."
  },
  {
    icon: <Map size={32} />,
    title: "The Commissions",
    description: "Receive a transparent 15% commission on every journey sold, with no operational complexity on your end."
  },
  {
    icon: <Users size={32} />,
    title: "On-the-ground Hosting",
    description: "We curate and handle all local relationships, experiences and operational hosting - giving your clients memories for life."
  },
  {
    icon: <FileStack size={32} />,
    title: "Ready-to-Sell Content",
    description: "Distinctive travel content built on our personal networks and deep local knowledge, and not by online search or standard tourism catalog."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-ink text-paper">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-24 lg:text-center mx-auto">
          <span className="text-gold text-[11px] uppercase tracking-[0.4em] mb-8 block font-bold">
            Journeys worth telling & selling
          </span>
          <h2 className="serif text-5xl md:text-7xl leading-[1] mb-8">
            You carry the clients and their flights, <br className="hidden md:block" />
            <span className="italic">we carry the destinations and the experiences</span>
          </h2>
          <p className="text-paper/60 font-sans text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Our business model is built on a clear and effortless partnership. We operate as your boutique DMC, creating a curated portfolio for discerning travelers across our two collections - Time To Explore & Taste and Time To Care, Heal & Empower.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 scandi-border transition-all duration-500 hover:bg-paper/5 hover:border-gold/30"
            >
              <div className="mb-10 text-gold">
                {service.icon}
              </div>
              <h3 className="serif text-3xl mb-6">
                {service.title}
              </h3>
              <p className="text-paper/40 text-base leading-relaxed font-light">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
          <div className="inline-block p-10 bg-paper/5 border border-paper/10 rounded-[3rem] max-w-2xl">
            <h4 className="serif text-2xl italic mb-4">We hold ourselves to the highest standards — in every detail, on every journey, and for every traveler you entrust to us.</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
