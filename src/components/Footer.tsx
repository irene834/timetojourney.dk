import { Instagram, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-paper py-32 border-t border-ink/5 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-sand/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-20 mb-32">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-10 rounded-full border border-ink/10 flex items-center justify-center">
                <span className="serif italic text-xl text-ink">T</span>
              </div>
              <span className="serif text-3xl tracking-tighter text-ink uppercase">Time To Journey</span>
            </div>
            <p className="text-ink/60 font-sans text-lg font-light leading-relaxed max-w-sm italic mb-10 text-balance">
              “Curating meaningful travel experiences for the world’s most discerning advisors. A boutique DMC partner based in Copenhagen.”
            </p>
            <div className="flex gap-10">
               <a href="https://www.instagram.com/ttj_timetojourney/" target="_blank" rel="noopener noreferrer" className="text-ink/30 hover:text-gold transition-colors"><Instagram size={20} /></a>
               <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="text-ink/30 hover:text-gold transition-colors"><Linkedin size={20} /></a>
               <a href="https://www.facebook.com/profile.php?id=826449160" target="_blank" rel="noopener noreferrer" className="text-ink/30 hover:text-gold transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          <div className="lg:col-span-2 lg:ml-auto">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-ink mb-10">The Vision</h4>
            <ul className="space-y-6">
              {['Home', 'Dear Reader', 'The Journeys', 'The Business Model', 'The Vision'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '')}`} className="text-ink/40 hover:text-ink transition-all text-sm font-medium font-sans uppercase tracking-[0.1em]">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-ink mb-10">Portfolio</h4>
            <ul className="space-y-6">
              {['Denmark Signature', 'Sicily Taste', 'Spain Prosper', 'Spring Flourish'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-ink/40 hover:text-ink transition-all text-sm font-medium font-sans uppercase tracking-[0.1em]">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-ink mb-10">Presence</h4>
            <div className="space-y-8">
               <div>
                  <span className="text-ink/20 text-[9px] uppercase tracking-[0.3em] font-bold block mb-2">Concierge Desk</span>
                  <p className="serif text-xl text-ink font-medium">idl@timetojourney.dk</p>
                  <p className="serif text-xl text-ink font-medium mt-1">+45 26 85 86 83</p>
               </div>
               <div>
                  <span className="text-ink/20 text-[9px] uppercase tracking-[0.3em] font-bold block mb-2">Office Headquarters</span>
                  <p className="text-ink/60 text-sm font-light leading-relaxed">
                    Copenhagen, Denmark <br />
                    Serving American Advisors Worldwide
                  </p>
               </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-10 pt-16 border-t border-ink/5">
          <div className="text-[10px] uppercase tracking-[0.4em] text-ink/40 font-bold">
            © 2026 Time To Journey • Allumare Group
          </div>
          <div className="flex gap-12 text-[10px] uppercase tracking-[0.4em] text-ink/30 font-bold">
            <a href="#" className="hover:text-ink transition-colors">Privacy</a>
            <a href="#" className="hover:text-ink transition-colors">Terms</a>
            <a href="#" className="hover:text-ink transition-colors">Press Kit</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
