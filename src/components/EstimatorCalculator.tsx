import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { Check } from "lucide-react";
import { useContactModal } from "../context/ContactModalContext";

type ServiceType = "design" | "development" | "both";
type Timeline = "regular" | "fast" | "rush";

export const EstimatorCalculator = () => {
  const { openModal } = useContactModal();
  const [serviceType, setServiceType] = useState<ServiceType>("both");
  const [pages, setPages] = useState(5);
  const [needContent, setNeedContent] = useState(false);
  const [needSEO, setNeedSEO] = useState(false);
  const [timeline, setTimeline] = useState<Timeline>("regular");

  const costs = useMemo(() => {
    // Pricing Logic
    const calculatePrice = () => {
      let base = 12000;
      let perPage = 4500;

      if (serviceType === "design") {
        base = 9000;
        perPage = 2400;
      } else if (serviceType === "development") {
        base = 4500;
        perPage = 2400;
      }

      let total = Math.max(base, base + (pages - 1) * perPage);
      if (needContent) total += pages * 1200;
      if (needSEO) total += pages * 1200;
      if (timeline === "rush") total += pages * 2400;
      if (timeline === "fast") total += pages * 600;

      return total;
    };

    const calculateAgencyCost = () => {
      const perPage = serviceType === "both" ? 24000 : 9000;
      return 195000 + (pages - 1) * perPage;
    };

    const calculateFreelancerCost = () => {
      const perPage = serviceType === "both" ? 12000 : 4500;
      return 75000 + (pages - 1) * perPage;
    };

    return {
      yourPrice: calculatePrice(),
      agencyCost: calculateAgencyCost(),
      freelancerCost: calculateFreelancerCost(),
    };
  }, [serviceType, pages, needContent, needSEO, timeline]);

  return (
    <section id="calculator-section" className="bg-[#0C0C0C] py-16 md:py-28 px-4 md:px-16 w-full">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#D7E2EA]/40 mb-4 block">
            Try project estimation calculator
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-[#D7E2EA]">
            Get premium website within your budget
          </h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden border border-[#2A2A2A]">
          {/* LEFT COLUMN: Form */}
          <div className="bg-[#0D0D0D] p-8 lg:p-12 space-y-12 divide-y divide-[#1E1E1E]">
            {/* Service Type */}
            <div className="space-y-6">
              <h3 className="text-[#D7E2EA] font-medium text-lg">What kind of service do you need?</h3>
              <div className="flex flex-col gap-4">
                {(["design", "development", "both"] as ServiceType[]).map((type) => (
                  <label key={type} className="flex items-center gap-4 cursor-pointer group">
                    <div className="relative flex items-center justify-center">
                      <input
                        type="radio"
                        className="sr-only"
                        checked={serviceType === type}
                        onChange={() => setServiceType(type)}
                      />
                      <div className={`w-5 h-5 rounded-full border-2 transition-colors ${serviceType === type ? "border-[#FF5656]" : "border-[#333] group-hover:border-[#555]"}`} />
                      {serviceType === type && (
                        <div className="absolute w-2 h-2 rounded-full bg-[#FF5656]" />
                      )}
                    </div>
                    <span className={`capitalize ${serviceType === type ? "text-[#D7E2EA]" : "text-[#D7E2EA]/60"}`}>
                      {type === "both" ? "Design + Development" : `Only ${type}`}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Number of Pages */}
            <div className="pt-12 space-y-8">
              <div className="flex justify-between items-center">
                <h3 className="text-[#D7E2EA] font-medium text-lg">Number of Pages</h3>
                <span className="text-[#FF5656] font-bold text-2xl">{pages}</span>
              </div>
              <div className="space-y-4">
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={pages}
                  onChange={(e) => setPages(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-[#1E1E1E] rounded-lg appearance-none cursor-pointer accent-[#FF5656]"
                />
                <div className="flex justify-between text-xs text-[#D7E2EA]/40 font-mono">
                  <span>1</span>
                  <span>30</span>
                </div>
              </div>
            </div>

            {/* Add-ons */}
            <div className="pt-12 space-y-6">
              <h3 className="text-[#D7E2EA] font-medium text-lg">Add-ons</h3>
              <div className="space-y-4">
                {[
                  { id: "content", label: "I will need help with content", checked: needContent, setter: setNeedContent },
                  { id: "seo", label: "I want to optimize my website for SEO", checked: needSEO, setter: setNeedSEO },
                ].map((addon) => (
                  <label key={addon.id} className="flex items-center justify-between cursor-pointer group">
                    <div className="flex items-center gap-4">
                      <div className="relative flex items-center justify-center">
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={addon.checked}
                          onChange={(e) => addon.setter(e.target.checked)}
                        />
                        <div className={`w-5 h-5 border-2 rounded transition-colors ${addon.checked ? "border-[#FF5656] bg-[#FF5656]" : "border-[#333] group-hover:border-[#555]"}`}>
                          {addon.checked && <Check className="w-full h-full text-white p-0.5" />}
                        </div>
                      </div>
                      <span className={`${addon.checked ? "text-[#D7E2EA]" : "text-[#D7E2EA]/60"}`}>{addon.label}</span>
                    </div>
                    <span className="text-[#FF5656] font-mono text-sm">+₹1,200/pages</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="pt-12 space-y-6">
              <h3 className="text-[#D7E2EA] font-medium text-lg">How fast do you need this?</h3>
              <div className="flex flex-col gap-4">
                {[
                  { id: "rush", label: "Within 7 Days", extra: "+₹2,400/pages" },
                  { id: "fast", label: "Within 14 Days", extra: "+₹600/pages" },
                  { id: "regular", label: "Regular Speed (Based on discussion)", extra: "Free" },
                ].map((item) => (
                  <label key={item.id} className="flex items-center justify-between cursor-pointer group">
                    <div className="flex items-center gap-4">
                      <div className="relative flex items-center justify-center">
                        <input
                          type="radio"
                          className="sr-only"
                          checked={timeline === item.id}
                          onChange={() => setTimeline(item.id as Timeline)}
                        />
                        <div className={`w-5 h-5 rounded-full border-2 transition-colors ${timeline === item.id ? "border-[#FF5656]" : "border-[#333] group-hover:border-[#555]"}`} />
                        {timeline === item.id && (
                          <div className="absolute w-2 h-2 rounded-full bg-[#FF5656]" />
                        )}
                      </div>
                      <span className={`${timeline === item.id ? "text-[#D7E2EA]" : "text-[#D7E2EA]/60"}`}>{item.label}</span>
                    </div>
                    <span className="text-[#FF5656] font-mono text-sm">{item.extra}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Cost Estimation */}
          <div className="bg-[#0C0C0C] p-8 lg:p-12 space-y-10 flex flex-col min-h-[718px]">
            <div>
              <h3 className="text-[#D7E2EA] text-2xl font-normal mb-2">Estimated Cost</h3>
              <p className="text-[#D7E2EA]/40 text-sm leading-relaxed">
                This logic is based on current market data and our internal agency pricing. Values are estimations and may vary based on specific requirements.
              </p>
            </div>

            <div className="grid gap-6">
              {/* Agency Card */}
              <div className="bg-[#161616] rounded-2xl p-6 space-y-2 border border-white/5">
                <span className="text-[#D7E2EA]/40 text-xs uppercase tracking-widest">Typical Agency charges minimum</span>
                <div className="text-[#D7E2EA] text-4xl font-bold">₹{costs.agencyCost.toLocaleString()}</div>
                <p className="text-[#D7E2EA]/40 text-xs">+ Too much extra time & additional cost</p>
              </div>

              {/* Freelancer Card */}
              <div className="bg-[#161616] rounded-2xl p-6 space-y-2 border border-white/5">
                <span className="text-[#D7E2EA]/40 text-xs uppercase tracking-widest">Regular Freelancer charges minimum</span>
                <div className="text-[#D7E2EA] text-4xl font-bold">₹{costs.freelancerCost.toLocaleString()}</div>
                <p className="text-[#D7E2EA]/40 text-xs">+ Too much headache & back-and-forth</p>
              </div>

              {/* Your Price Card */}
              <div className="bg-gradient-to-r from-pink-500 to-orange-500 rounded-2xl p-8 space-y-3 text-white shadow-2xl shadow-orange-500/20">
                <span className="text-white/80 text-xs uppercase tracking-widest font-medium">With AXOWEB TECHNOLOGIES</span>
                <div className="text-6xl font-black">₹{costs.yourPrice.toLocaleString()}</div>
                <p className="text-white/80 text-sm font-medium">Save your money, time & headache</p>
                <div className="pt-4">
                  <button 
                    onClick={openModal}
                    className="w-full bg-white text-black py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-transform active:scale-95 cursor-pointer"
                  >
                    Start Your Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
