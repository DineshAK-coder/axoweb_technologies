import { motion } from "motion/react";
import { Zap, Globe, Cpu, Search, Smartphone, ShieldCheck } from "lucide-react";

export const PerformanceBento = () => {
  return (
    <section className="py-24 px-6 md:px-10 bg-[#0C0C0C] relative overflow-hidden" id="performance">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#31A8FF]/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#31A8FF] text-xs font-bold uppercase tracking-[0.4em] mb-4 block"
          >
            Engineering Standards
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold text-[#D7E2EA] tracking-tighter leading-none"
          >
            Built for <span className="text-white/30">Velocity.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 lg:grid-rows-2 gap-4 lg:gap-6 h-full">
          
          {/* Main Card: Lighthouse Scores (Creative Redesign) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4 lg:col-span-4 lg:row-span-2 relative group overflow-hidden rounded-[32px] bg-neutral-900/40 border border-white/5 p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-12 backdrop-blur-xl"
          >
            {/* Massive Glowing Core behind content */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#31A8FF]/5 blur-[120px] rounded-full pointer-events-none group-hover:bg-[#31A8FF]/10 transition-all duration-700" />

            {/* Left Column: Context */}
            <div className="relative z-10 lg:w-1/2">
              <div className="flex items-center gap-3 mb-8">
                <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/50 text-[11px] font-bold uppercase tracking-[0.2em]">
                  Phase: Optimization
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#31A8FF] shadow-[0_0_12px_#31A8FF] animate-pulse" />
              </div>
              <h3 className="text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tighter leading-[0.9] flex flex-col">
                <span>The Golden</span>
                <span className="text-[#31A8FF]">Standard.</span>
              </h3>
              <p className="text-[#D7E2EA]/50 max-w-sm mb-10 leading-relaxed font-dm text-lg">
                We engineer performance as a primary feature, not an afterthought. Every line of code is optimized for atomic execution.
              </p>
              
              <div className="grid grid-cols-2 gap-y-8 gap-x-12">
                {[
                  { label: "Performance", score: "99", color: "#31A8FF" },
                  { label: "Accessibility", score: "100", color: "#B600A8" },
                  { label: "Best Practices", score: "100", color: "#BE4C00" },
                  { label: "SEO", score: "100", color: "#22c55e" }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-2 relative">
                    <div className="flex items-baseline justify-between">
                      <span className="text-white/40 text-[10px] uppercase tracking-widest font-bold">{item.label}</span>
                      <span className="text-white font-mono font-bold text-lg">{item.score}</span>
                    </div>
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full"
                        style={{ backgroundColor: item.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1.2, delay: 0.8 + (idx * 0.1) }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Visual Marvel - The Lighthouse "Pulse" */}
            <div className="relative lg:w-1/2 flex items-center justify-center">
              <div className="relative w-72 h-72 flex items-center justify-center">
                {/* Visual Architecture */}
                <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
                <div className="absolute inset-8 border border-dashed border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                
                {/* Central Engine */}
                <div className="relative w-48 h-48 rounded-[48px] bg-gradient-to-br from-white/10 to-transparent p-[1px] rotate-12 group-hover:rotate-0 transition-transform duration-700">
                  <div className="w-full h-full bg-[#0C0C0C] rounded-[47px] flex items-center justify-center overflow-hidden relative">
                    {/* Grid Overlay */}
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '12px 12px' }} />
                    
                    <div className="relative z-10 flex flex-col items-center">
                      <motion.div 
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-6xl font-black text-white tracking-tighter"
                      >
                        99
                      </motion.div>
                      <div className="h-1 w-12 bg-[#31A8FF] rounded-full mt-2" />
                      <div className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-bold mt-3">Lighthouse</div>
                    </div>

                    {/* Scanning Beam */}
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-[10%] origin-center flex justify-center"
                    >
                      <div className="w-1 h-1/2 bg-gradient-to-t from-[#31A8FF] via-[#31A8FF]/20 to-transparent shadow-[0_0_20px_#31A8FF]" />
                    </motion.div>
                  </div>
                </div>

                {/* Floating Tech Badges */}
                <motion.div 
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 px-4 py-2 bg-neutral-900 border border-white/10 rounded-xl shadow-2xl backdrop-blur-md"
                >
                  <span className="text-[#31A8FF] text-xs font-bold tracking-tight">Core Web Vitals</span>
                </motion.div>
                
                <motion.div 
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-4 -left-4 px-4 py-2 bg-neutral-900 border border-white/10 rounded-xl shadow-2xl backdrop-blur-md"
                >
                  <span className="text-[#B600A8] text-xs font-bold tracking-tight">Next.js Edge</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Card: Semantic SEO - The Quadrant Upgrade */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-2 aspect-square relative overflow-hidden rounded-[32px] bg-[#161616] border border-white/5 p-10 flex flex-col justify-between group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="z-10 flex flex-col h-full">
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-green-400 border border-white/5 group-hover:scale-110 transition-transform">
                  <Search size={28} />
                </div>
                <div className="w-12 h-[1px] bg-white/10" />
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Semantic <br />Engineering.</h3>
              <p className="text-[#D7E2EA]/50 text-sm leading-relaxed mb-auto">
                We build for machines and humans alike. Validated HTML structures that command authority across all search algorithms.
              </p>

              {/* Unique Visual element: Mini Code block */}
              <div className="mt-8 p-4 rounded-xl bg-black/40 border border-white/5 font-mono text-[9px] space-y-1.5 overflow-hidden group-hover:border-green-500/20 transition-colors">
                <div className="flex gap-2">
                  <span className="text-green-400">SEO_READY=</span>
                  <span className="text-white/40">true</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[#31A8FF]">SEMANTIC_INDEX=</span>
                  <span className="text-white/40">0.992</span>
                </div>
                <div className="w-full h-[1px] bg-white/5 my-2" />
                <div className="flex gap-2 text-white/20">
                  <span className="">[STATUS]</span>
                  <span className="text-green-500/60 font-bold uppercase">Optimized</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card: Speed (Bottom Row) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-2 aspect-square relative overflow-hidden rounded-[32px] bg-[#161616] border border-white/5 p-10 flex flex-col justify-between group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#31A8FF]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="z-10 flex flex-col h-full items-center justify-center text-center">
               <motion.div 
                 animate={{ y: [0, -4, 0] }}
                 transition={{ duration: 2, repeat: Infinity }}
                 className="w-16 h-16 rounded-3xl bg-[#31A8FF]/10 flex items-center justify-center text-[#31A8FF] mb-6 border border-[#31A8FF]/20"
               >
                 <Zap size={32} />
               </motion.div>
               <div className="text-6xl font-black text-white tracking-tighter mb-2">&lt;0.8s</div>
               <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/40">Response Time</div>
               <div className="mt-8 flex gap-1 items-center">
                 {[...Array(5)].map((_, i) => (
                   <div key={i} className={`w-1.5 h-1.5 rounded-full ${i < 4 ? 'bg-[#31A8FF]' : 'bg-white/10'}`} />
                 ))}
                 <span className="ml-2 text-[9px] text-white/30 font-bold uppercase tracking-wider">Fastest Tier</span>
               </div>
            </div>
          </motion.div>

          {/* Card: Edge Runtime */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 lg:col-span-2 aspect-square relative overflow-hidden rounded-[32px] bg-[#161616] border border-white/5 p-10 flex flex-col justify-between group"
          >
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="z-10 flex flex-col h-full">
              <div className="flex items-center justify-between mb-auto">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/60 border border-white/5">
                  <Globe size={24} />
                </div>
                <div className="text-[10px] font-mono text-white/20">EDG_402</div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-2xl font-bold text-white tracking-tight">Global Edge <br />Deployment.</h4>
                <p className="text-white/40 text-xs leading-relaxed max-w-[200px]">
                  Zero-latency delivery via CDN layers in 300+ global locations. Content delivered from the nearest node.
                </p>
                <div className="flex items-center gap-3 pt-4">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-[10px] text-white/30 font-bold uppercase tracking-widest">Active nodes online</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card: Mobile First - The Quadrant Upgrade */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 lg:col-span-2 aspect-square relative overflow-hidden rounded-[32px] bg-[#161616] border border-white/5 p-10 flex flex-col justify-between group"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#B600A8]/10 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="z-10 flex flex-col h-full">
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-[#B600A8] border border-white/5">
                  <Smartphone size={28} />
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-1 h-3 bg-white/10 rounded-full" />
                  ))}
                </div>
              </div>
              
              <h4 className="text-3xl font-bold text-white tracking-tight">Fluid <br />Geometry.</h4>
              <p className="text-white/40 text-sm leading-relaxed mt-4">
                Pixel-perfect adaptation across the entire device spectrum. From 8K displays to ultra-compact mobile.
              </p>

              {/* Visual Element: Mini Responsive Mockup */}
              <div className="mt-auto pt-8 flex items-end justify-center gap-3">
                <div className="w-12 h-20 bg-white/5 rounded-lg border border-white/10 flex flex-col p-2 gap-1.5 group-hover:border-[#B600A8]/30 transition-colors">
                   <div className="w-full h-1 bg-white/10 rounded-full" />
                   <div className="w-4 h-1 bg-white/10 rounded-full" />
                   <div className="w-full h-full bg-white/5 rounded-sm" />
                </div>
                <div className="w-20 h-14 bg-white/5 rounded-lg border border-white/10 flex flex-col p-2 gap-1.5 group-hover:border-[#B600A8]/30 transition-colors">
                   <div className="flex justify-between">
                     <div className="w-4 h-1 bg-white/10 rounded-full" />
                     <div className="w-8 h-1 bg-white/10 rounded-full" />
                   </div>
                   <div className="grid grid-cols-2 gap-1 h-full">
                     <div className="bg-white/5 rounded-sm" />
                     <div className="bg-white/5 rounded-sm" />
                   </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card: Security - The Quadrant Upgrade */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 lg:col-span-2 aspect-square relative overflow-hidden rounded-[32px] bg-[#161616] border border-white/5 p-10 flex flex-col justify-between group"
          >
            {/* Animated Scanning Line */}
            <motion.div 
              animate={{ bottom: ["-100%", "100%", "-100%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent pointer-events-none"
            />

            <div className="z-10 flex flex-col h-full items-center justify-center text-center">
              <div className="relative mb-8">
                <div className="w-24 h-24 rounded-full bg-blue-500/5 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/10 transition-colors  border border-blue-500/10 scale-110">
                  <ShieldCheck size={48} strokeWidth={1.5} />
                </div>
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-dashed border-blue-500/20 rounded-full scale-125"
                />
              </div>

              <h4 className="text-3xl font-bold text-white tracking-tight mb-3">Hardened <br />By Default.</h4>
              <p className="text-white/40 text-sm leading-relaxed max-w-[180px]">
                Enterprise-grade encryption and security protocols embedded in every architectural layer.
              </p>

              <div className="mt-8 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20">
                <span className="text-[10px] text-blue-400 font-bold uppercase tracking-[0.2em]">SSL / AES-256 / WAF</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
