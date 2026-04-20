import { motion } from 'motion/react';

const collections = [
  {
    name: "Time To Explore & Taste",
    tagline: "Culture, Nature & Culinary Journeys",
    items: [
      {
        title: "Time To Visit Denmark",
        color: "bg-sky",
        accent: "text-sky",
        image: "/memotravels-town-6162987_1920.jpg",
        description: "From vibrant city life in Copenhagen, royal castles, private estates, vikings, Hans Christian Andersen and Nordic cuisine to beautiful landscapes and the raw beauty of the North Sea. A signature journey shaped by a personal love for our founder's homeland.",
        details: "12 days • Small group of 12 • The Grand Denmark Tour • From USD 13,500 per person",
        badge: "Curated Denmark"
      },
      {
        title: "Time To Visit Sicily",
        color: "bg-sun",
        accent: "text-sun",
        image: "/ben_kerckx-cityscape-5562469_1920.jpg",
        description: "Sicily life, feel and story. A private estate nestled in organic citrus groves, intimate cooking classes, and breathtaking views of Mount Etna. History, culture and beautiful landscapes - this is the grand Sicilian tour.",
        details: "12 days • Small group of 12 • Authentic Italian Soul • From USD 11,500 per person",
        badge: "Curated Sicily"
      }
    ]
  },
  {
    name: "Time To Care, Heal & Empower",
    tagline: "Personal Growth & Longevity Journeys",
    items: [
      {
        title: "Time To Prosper",
        color: "bg-prosper",
        accent: "text-prosper",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=1000&h=1250",
        description: "A premium weight loss and longevity kick-off in beautiful Spain. Expert-led lifestyle changes combining personal training, habit coaching, healthy food, workshops and individual treatments such as massages etc.",
        details: "8 days • Small group of 10 • Results-Driven Lifestyle Change • From USD 11,000 per person",
        badge: "Healthy Lifestyle"
      },
      {
        title: "Time To Flourish",
        color: "bg-flourish",
        accent: "text-flourish",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1000&h=1250",
        description: "A women's retreat designed for rest, healing, and empowerment. Quiet pools, restorative yoga, meditation, workshops, individual coaching, spa treatments, and time to gently get stronger and re-energize.",
        details: "8 days • Small group of 10 • Rebuilding Inner Strength • From USD 10,000 per person",
        badge: "Healing Holiday"
      }
    ]
  }
];

export default function Journeys() {
  return (
    <section id="journeys" className="py-24 md:py-40 bg-paper">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-32">
          <span className="text-gold text-[12px] uppercase tracking-[0.5em] mb-10 block font-bold">
            The Journeys
          </span>
          <h2 className="serif text-6xl md:text-8xl lg:text-9xl text-ink leading-[0.8] tracking-tighter mb-12">
            Highly curated <br />
            <span className="italic">extraordinary journeys</span>
          </h2>
          <p className="text-ink/40 font-sans text-xl font-light italic tracking-wide max-w-2xl">
            Every journey Time To Journey designs is intentional. Every destination chosen with purpose and every detail crafted to create something that goes far beyond traditional sightseeing.
          </p>
        </div>

        <div className="space-y-48">
          {collections.map((collection, cIndex) => (
            <div key={cIndex} className="relative">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12 border-b border-ink/5 pb-16">
                <div className="max-w-2xl">
                  <h3 className="serif text-5xl md:text-7xl text-ink tracking-tight mb-6">{collection.name}</h3>
                  <p className="text-ink/40 text-[11px] uppercase tracking-[0.4em] font-bold">{collection.tagline}</p>
                </div>
                <div className="hidden lg:block">
                  <span className="serif italic text-2xl text-ink/20">Autumn / Summer 2026 Portfolio</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-20 lg:gap-32">
                {collection.items.map((journey, jIndex) => (
                  <motion.div 
                    key={jIndex}
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, delay: jIndex * 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col group cursor-pointer"
                  >
                    <div className="relative overflow-hidden mb-12 bg-sand/10 aspect-[4/5] luxury-card ring-1 ring-ink/5">
                      <img 
                        src={journey.image} 
                        alt={journey.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className={`absolute top-10 left-10 ${journey.color} px-8 py-3 rounded-full shadow-2xl backdrop-blur-md opacity-90`}>
                        <span className="text-[10px] uppercase font-bold text-paper tracking-[0.2em]">{journey.badge || "Curated Heritage"}</span>
                      </div>
                    </div>
                    
                    <div className="px-4">
                      <div className="flex justify-between items-center mb-8">
                        <h4 className="serif text-5xl text-ink tracking-tight group-hover:text-gold transition-colors duration-500">{journey.title}</h4>
                        <div className={`w-4 h-4 rounded-full ${journey.color} opacity-20 group-hover:opacity-100 transition-opacity`} />
                      </div>
                      
                      <p className="text-ink/60 font-sans text-xl font-light leading-relaxed mb-10 max-w-lg">
                        {journey.description}
                      </p>
                      
                      <div className="editorial-line !my-10" />
                      
                      <div className="flex justify-between items-end">
                        <div>
                          <span className="text-ink/20 text-[10px] uppercase tracking-[0.3em] font-bold block mb-3">Portfolio Details</span>
                          <p className="serif text-2xl italic text-ink/70">{journey.details}</p>
                        </div>
                        <div className="flex items-center gap-6 group/btn">
                          <span className={`text-[11px] uppercase tracking-[0.3em] font-bold ${journey.accent}`}>Inquiry</span>
                          <div className={`w-12 h-px ${journey.color} group-hover/btn:w-20 transition-all`} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-48 text-center max-w-4xl mx-auto py-32 border-t border-ink/5 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-paper border border-ink/10 rounded-full flex items-center justify-center">
             <span className="text-gold serif italic text-3xl">T</span>
          </div>
          <h3 className="serif text-5xl md:text-7xl text-ink mb-10 leading-tight">Journeys that invite your clients to slow down, that move them and leave a lasting imprint</h3>
          <p className="text-gold text-[11px] uppercase tracking-[0.6em] font-bold">The Slow Travel Movement</p>
        </div>
      </div>
    </section>
  );
}
