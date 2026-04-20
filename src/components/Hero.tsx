import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full flex flex-col justify-center items-center overflow-hidden bg-black pt-32 pb-24">
      {/* Frontpage Photo: Danish Beach and Nature */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          src="https://live.staticflickr.com/65535/54737503499_82d81cf730_b.jpg"
          alt="Cozy long table dinner with friends in a vineyard at sunset"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Much lighter overlay to feel bright and airy, like Belmond */}
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-80" />
      </div>

      <div className="container mx-auto px-6 relative z-10 mt-auto flex flex-col items-center">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-8"
          >
            <span className="text-white drop-shadow-md text-[10px] uppercase tracking-[0.4em] font-bold">
              Boutique DMC - curated luxury slow travel
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
            className="serif text-6xl md:text-8xl lg:text-[7.5rem] text-white leading-[1.1] md:leading-[1.0] tracking-tight mb-8 drop-shadow-xl"
          >
            Your success <br />
            <span className="italic font-light">is our mission</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
            className="max-w-2xl"
          >
            <p className="text-white/95 drop-shadow-md font-sans text-lg md:text-xl tracking-wide leading-relaxed font-light mb-12 italic">
              Welcome to our DMC universe of curated explore and empowerment journeys. <span className="font-medium">Where slow travel, presence and reconnection</span> are always the thread that ties it all together.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Decorative Editorial Element */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 hidden xl:block z-10">
        <span className="vertical-text text-[9px] uppercase tracking-[0.6em] text-white/50 drop-shadow-sm font-bold">
          EST. COPENHAGEN
        </span>
      </div>
      <div className="absolute top-1/2 right-10 -translate-y-1/2 hidden xl:block z-10">
        <span className="vertical-text text-[9px] uppercase tracking-[0.6em] text-white/50 drop-shadow-sm font-bold">
          LUXURY DMC PARTNER
        </span>
      </div>
    </section>
  );
}
