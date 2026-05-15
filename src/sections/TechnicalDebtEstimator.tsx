import { motion, AnimatePresence, animate } from "motion/react";
import { useState, useEffect } from "react";
import { AlertTriangle, CheckCircle2, TrendingUp, Zap, Clock, DollarSign, Layers } from "lucide-react";

export const TechnicalDebtEstimator = () => {
  const [sliderValue, setSliderValue] = useState(0); // 0 (Generic) to 100 (AXOWEB)

  useEffect(() => {
    const controls = animate(0, 100, {
      duration: 8,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
      onUpdate: (latest) => setSliderValue(latest)
    });
    return () => controls.stop();
  }, []);

  const isGeneric = sliderValue < 50;
  
  // Calculate relative metrics based on slider
  // 100 is AXOWEB (Clean), 0 is Generic (High Debt)
  const scalability = sliderValue;
  const maintenanceCost = 100 - sliderValue;
  const performance = sliderValue;
  const longevity = sliderValue;

  return (
    <section className="py-32 px-6 md:px-10 bg-[#0C0C0C] relative overflow-hidden" id="debt-estimator">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#B600A8]/5 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#31A8FF]/5 blur-[150px] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#B600A8] text-xs font-bold uppercase tracking-[0.4em] mb-4 block"
          >
            Efficiency Audit
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(2.5rem,10vw,8rem)] font-black text-white tracking-tighter leading-[0.85] mb-8"
          >
            The Cost of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-[#31A8FF]">Technical Debt.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#D7E2EA]/40 max-w-2xl mx-auto text-lg md:text-xl font-dm"
          >
            Generic code might be cheaper today, but it's an expensive mortgage on your future. AXOWEB engineering is an investment in infinite scale.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
          
          {/* Left Side: Reality Visualization */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-white/5 rounded-[40px] blur-2xl group-hover:bg-white/[0.07] transition-all" />
            <div className="relative h-full min-h-[500px] rounded-[48px] bg-neutral-900/50 border border-white/10 p-10 backdrop-blur-xl overflow-hidden flex flex-col">
              
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${sliderValue > 50 ? 'bg-[#31A8FF]/10 text-[#31A8FF]' : 'bg-red-500/10 text-red-400'}`}>
                    {sliderValue > 50 ? <CheckCircle2 size={24} /> : <AlertTriangle size={24} />}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {sliderValue < 30 ? "Brittle Legacy" : sliderValue < 70 ? "Standard Build" : "AXOWEB Core"}
                    </h3>
                    <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Structural Reality</p>
                  </div>
                </div>
                <div className="text-4xl font-black text-white/10 italic select-none">ARCHITECTURE</div>
              </div>

              {/* Visual Code/Structure Representation */}
              <div className="flex-1 relative flex items-center justify-center py-12">
                <div className="grid grid-cols-4 gap-4 w-full h-full max-w-sm">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ 
                        opacity: sliderValue / 100 + 0.1,
                        scale: sliderValue / 100 + 0.5,
                        rotate: sliderValue < 50 ? (Math.random() - 0.5) * 40 : 0,
                        borderRadius: sliderValue < 50 ? "4px" : "16px",
                      }}
                      className={`h-16 border ${sliderValue < 50 ? 'border-red-500/20 bg-red-400/5' : 'border-[#31A8FF]/20 bg-[#31A8FF]/5'}`}
                    />
                  ))}
                </div>
                
                {/* Overlay Text Details based on slider */}
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={sliderValue < 50 ? 'generic' : 'optimized'}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    className="absolute inset-0 flex items-center justify-center text-center pointer-events-none"
                  >
                    <div className="px-8 py-4 bg-black/60 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl">
                      <span className="text-4xl font-black text-white tracking-tighter">
                        {sliderValue < 50 ? "DIV SOUP" : "CLEAN BUNDLE"}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-auto space-y-6">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-[10px] uppercase font-bold tracking-widest">
                    <span className="text-white/40">Scalability</span>
                    <span className="text-white">{scalability}%</span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-[#31A8FF]" 
                      animate={{ width: `${scalability}%` }} 
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-[10px] uppercase font-bold tracking-widest">
                    <span className="text-white/40">Maintenance Penalty</span>
                    <span className="text-red-400">{maintenanceCost}%</span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-red-500" 
                      animate={{ width: `${maintenanceCost}%` }} 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Informational & Status */}
          <div className="flex flex-col justify-center">
            <div className="mb-12">
              <h3 className="text-4xl font-bold text-white mb-6 tracking-tight">Autonomous <br />Audit Cycle.</h3>
              <p className="text-[#D7E2EA]/50 leading-relaxed mb-10">
                Observing the lifecycle of technical debt in real-time. Witness how architectural decisions decay over time versus AXOWEB's self-sustaining core.
              </p>
            </div>

            {/* Visual Indicator of the Loop Phase */}
            <div className="relative mb-20 px-4">
              <div className="absolute -top-10 left-0 text-[10px] uppercase font-bold tracking-widest text-red-500/60">Legacy Decay</div>
              <div className="absolute -top-10 right-0 text-[10px] uppercase font-bold tracking-widest text-[#31A8FF]">AXOWEB Resilience</div>
              
              <div className="w-full h-2 bg-white/5 rounded-full relative overflow-hidden">
                <motion.div 
                  className="absolute top-0 bottom-0 bg-gradient-to-r from-red-500 to-[#31A8FF]"
                  style={{ width: `${sliderValue}%` }}
                />
                <motion.div 
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_white]"
                  style={{ left: `${sliderValue}%` }}
                />
              </div>
              
              <div className="mt-4 flex justify-between text-xs font-mono text-white/20 uppercase tracking-[0.2em]">
                <span>Phase: {sliderValue < 50 ? "DEGRADATION" : "OPTIMIZATION"}</span>
                <span>SYNC: {(sliderValue / 100).toFixed(2)}</span>
              </div>
            </div>

            {/* Grid of Dynamic Consequences */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-3xl bg-neutral-900 border border-white/5 flex flex-col gap-4">
                <Clock size={20} className="text-white/40" />
                <div>
                  <div className="text-white font-bold tracking-tight">Time to Market</div>
                  <div className={`text-xl font-black ${sliderValue < 50 ? 'text-green-400' : 'text-blue-400'}`}>
                    {sliderValue < 30 ? "Fast (Initial)" : "Sustainable"}
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-3xl bg-neutral-900 border border-white/5 flex flex-col gap-4">
                <DollarSign size={20} className="text-white/40" />
                <div>
                  <div className="text-white font-bold tracking-tight">Technical Debt</div>
                  <div className={`text-xl font-black ${sliderValue < 50 ? 'text-red-500' : 'text-green-500'}`}>
                    {sliderValue < 30 ? "Extreme" : sliderValue > 80 ? "Minimum" : "Controlled"}
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-3xl bg-neutral-900 border border-white/5 flex flex-col gap-4">
                <Layers size={20} className="text-white/40" />
                <div>
                  <div className="text-white font-bold tracking-tight">Scalability</div>
                  <div className={`text-xl font-black ${sliderValue > 70 ? 'text-[#31A8FF]' : 'text-white/20'}`}>
                    {sliderValue > 90 ? "Infinite" : sliderValue > 60 ? "High" : "Limited"}
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-3xl bg-neutral-900 border border-white/5 flex flex-col gap-4">
                <TrendingUp size={20} className="text-white/40" />
                <div>
                  <div className="text-white font-bold tracking-tight">Life Cycle</div>
                  <div className={`text-xl font-black ${sliderValue > 50 ? 'text-blue-400' : 'text-orange-500'}`}>
                    {sliderValue > 80 ? "5+ Years" : sliderValue < 30 ? "< 1 Year" : "2 Years"}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        
        {/* Floating Comparison Text */}
        <div className="mt-24 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
           <div className="max-w-xs">
              <h4 className="text-white font-bold mb-2">The Generic Choice</h4>
              <p className="text-white/30 text-xs">Standard agencies copy-paste templates, creating a tangle of dependencies that eventually halt your growth.</p>
           </div>
           <div className="w-16 h-[1px] bg-white/5 hidden md:block" />
           <motion.div 
             animate={{ scale: [1, 1.05, 1] }} 
             transition={{ duration: 3, repeat: Infinity }}
             className="px-8 py-6 rounded-full bg-white/5 border border-[#31A8FF]/30 text-white font-black text-xl tracking-tighter"
           >
             VS
           </motion.div>
           <div className="w-16 h-[1px] bg-white/5 hidden md:block" />
           <div className="max-w-xs text-center md:text-right">
              <h4 className="text-[#31A8FF] font-bold mb-2">AXOWEB Engineering</h4>
              <p className="text-white/30 text-xs">A precision-engineered core designed for modular expansion, high-traffic endurance, and effortless maintenance.</p>
           </div>
        </div>
      </div>
    </section>
  );
};
