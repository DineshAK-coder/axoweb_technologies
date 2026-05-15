import { motion } from "motion/react";
import { ShieldCheck, Zap, Users, Quote } from "lucide-react";

export const FoundersPromise = () => {
  return (
    <section className="py-24 px-6 md:px-10 bg-[#0C0C0C] relative overflow-hidden" id="promise">
      {/* Decorative Gradient Blurs */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#B600A8]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#31A8FF]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: The Narrative */}
          <div className="space-y-8">
            <div>
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-white/40 text-xs font-bold uppercase tracking-[0.4em] mb-4 block"
              >
                No Middlemen. No Fluff.
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#D7E2EA] tracking-tighter leading-[0.95]"
              >
                The Founder's <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#31A8FF] via-[#B600A8] to-[#BE4C00]">Direct Promise.</span>
              </motion.h2>
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#D7E2EA]/70 text-xl leading-relaxed max-w-xl font-dm"
            >
              At AXOWEB, we've killed the traditional "Account Manager" model. When you work with us, you communicate directly with the architects building your vision.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Zap, title: "Zero Lag", desc: "Technical solutions discussed in real-time, not through status reports." },
                { icon: ShieldCheck, title: "Accountability", desc: "The person you talk to is the person writing the code." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className="flex flex-col gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#31A8FF]">
                    <item.icon size={20} />
                  </div>
                  <h4 className="text-white font-bold text-lg">{item.title}</h4>
                  <p className="text-[#D7E2EA]/50 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Visual Statement */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Interactive Card */}
            <div className="relative z-10 p-1 bg-gradient-to-br from-white/20 via-white/5 to-transparent rounded-[40px] shadow-2xl">
              <div className="relative bg-[#161616] rounded-[38px] p-10 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                  <svg width="100%" height="100%">
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>

                <div className="relative z-10 flex flex-col gap-8">
                  <div className="flex items-start justify-between">
                    <Quote size={48} className="text-[#31A8FF] opacity-20" />
                    <div className="flex -space-x-4">
                      {[1, 2, 3].map((_, i) => (
                        <div key={i} className="w-12 h-12 rounded-full border-2 border-[#161616] bg-white/10 overflow-hidden">
                           <img src={`https://i.pravatar.cc/100?u=dev${i}`} alt="Dev" className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="text-2xl md:text-3xl font-dm text-[#D7E2EA] leading-snug italic">
                    "We don't sell 'projects'. We build technical partnerships. If the code fails, we answer the call—personally. That's the AXOWEB standard."
                  </p>

                  <div className="flex items-center gap-5 pt-6 border-t border-white/10">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-xl border border-white/20">
                      <img src="/axoweb-logo.png" alt="Founder" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-[#D7E2EA] text-xl font-bold">The Core Engineering Team</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-white/40 text-sm font-medium uppercase tracking-[0.1em]">Always Direct Access</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Accent */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#B600A8]/20 to-transparent blur-2xl" />
              </div>
            </div>



             {/* Floating Element: Quality */}
             <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-6 -right-6 z-20 p-6 bg-[#0D0D0D] border border-white/10 rounded-2xl shadow-3xl text-center hidden md:block"
            >
              <div className="text-3xl font-bold text-[#31A8FF] mb-1">100%</div>
              <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Engineer Led Effort</div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
