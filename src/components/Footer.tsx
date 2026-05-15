import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import { Linkedin, Twitter, Instagram, Github } from "lucide-react";
import { useContactModal } from "../context/ContactModalContext";

const LogoIcon = () => {
  return (
    <div className="w-8 h-8 rounded-[8px] flex items-center justify-center overflow-hidden">
      <img src="/axoweb-logo.png" alt="AXOWEB Logo" className="w-full h-full object-cover" />
    </div>
  );
};

const FooterCard = () => {
  const { openModal } = useContactModal();
  const socials = [
    { Icon: Github, href: "#" },
    { Icon: Twitter, href: "#" },
    { Icon: Linkedin, href: "#" },
    { Icon: Instagram, href: "#" },
  ];

  return (
    <div className="w-full max-w-[1150px] mx-auto grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-4 items-stretch px-4">
      {/* Left Card - Video Background */}
      <div className="relative min-h-[340px] rounded-[28px] p-8 overflow-hidden flex flex-col justify-between shadow-[0_12px_40px_rgba(182,0,168,0.15)] bg-[#1e0123]">
        <video 
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-60" 
          autoPlay 
          muted 
          loop 
          playsInline 
          preload="auto"
          referrerPolicy="no-referrer"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260503_104800_bc43ae09-f494-43e3-97d7-2f8c1692cfd7.mp4" type="video/mp4" />
        </video>

        <div className="flex items-center gap-2.5 relative z-10">
          <LogoIcon />
          <span className="font-dm text-[22px] font-bold text-white tracking-tighter">AXOWEB</span>
        </div>

        <div className="mt-auto mb-7 relative z-10">
          <p className="font-dm text-[19px] font-normal text-white leading-[1.45]">
            Smarter performance websites,<br />
            <span className="text-white/65">powered by AI.</span>
          </p>
        </div>

        <div className="flex items-center justify-between gap-3 relative z-10">
          <span className="font-caveat text-[17px] font-semibold text-white/90 tracking-wide">Stay in touch!</span>
          <div className="flex gap-[7px]">
            {socials.map(({ Icon, href }, i) => (
              <a 
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit our ${Icon.name} profile`}
                className="w-9 h-9 bg-[#0e1014] rounded-[9px] flex items-center justify-center text-white shadow-lg transition-all hover:bg-black hover:-translate-y-0.5"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Right Card */}
      <div className="bg-[#161616] rounded-[28px] p-10 overflow-visible flex flex-col justify-between relative shadow-sm border border-white/5">
        {/* Floating Badge */}
        <div className="absolute top-[-36px] right-10 z-10 flex flex-col items-start gap-1.5">
          <div className="w-24 h-24 rounded-[22px] rotate-[-10deg] bg-gradient-to-br from-[#FF5656] to-[#B600A8] flex items-center justify-center shadow-[inset_3px_3px_8px_rgba(255,255,255,0.35),inset_-3px_-3px_12px_rgba(0,0,0,0.18),8px_14px_28px_rgba(182,0,168,0.35)] overflow-hidden">
            <img src="/axoweb-logo.png" alt="AXOWEB" className="w-16 h-16 object-contain rotate-[10deg]" />
          </div>
          <div className="flex items-center gap-1.5 rotate-[-4deg] mt-1">
            <svg className="w-5.5 h-5.5 text-white/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 20C6 14 10 9 18 5" />
              <path d="M12 5H18V11" />
            </svg>
            <span className="font-caveat text-[20px] font-semibold text-white/40 whitespace-nowrap">Feeling lucky?</span>
          </div>
        </div>

        {/* Top Content */}
        <div className="flex gap-[72px] pt-2">
          <div className="flex flex-col">
            <h4 className="font-caveat text-2xl font-semibold italic text-white/40 mb-[18px]">Solutions</h4>
            {[
              { label: "Web Applications", href: "#services" },
              { label: "AI Automation", href: "#services" },
              { label: "AI Agents", href: "#services" },
              { label: "Custom Dashboards", href: "#services" },
              { label: "Strategic SEO", href: "#calculator-section" }
            ].map((link, i) => (
              <a key={i} href={link.href} className="font-dm text-sm font-semibold text-[#D7E2EA] mb-3.5 hover:text-[#B600A8] transition-colors">{link.label}</a>
            ))}
          </div>
          <div className="flex flex-col">
            <h4 className="font-caveat text-2xl font-semibold italic text-white/40 mb-[18px]">Company</h4>
            {[
              { label: "About AXOWEB", href: "#about" },
              { label: "Our Story", href: "#about" },
              { label: "Latest Projects", href: "#projects" },
              { label: "Contact Us", onClick: openModal }
            ].map((link, i) => (
              link.onClick ? (
                <button key={i} onClick={link.onClick} className="font-dm text-sm font-semibold text-[#D7E2EA] mb-3.5 hover:text-[#B600A8] transition-colors cursor-pointer text-left w-fit">
                  {link.label}
                </button>
              ) : (
                <a key={i} href={link.href} className="font-dm text-sm font-semibold text-[#D7E2EA] mb-3.5 hover:text-[#B600A8] transition-colors">{link.label}</a>
              )
            ))}
          </div>
        </div>

        {/* Bottom Content */}
        <div className="flex flex-col sm:flex-row items-end justify-between mt-12 gap-6 sm:gap-0">
          <p className="font-dm text-[12.5px] font-medium text-white/40">© {new Date().getFullYear()} AXOWEB TECHNOLOGIES. All rights reserved.</p>
          <div className="flex flex-col gap-3.5 w-full sm:w-auto">
            <h4 className="text-[15px] font-normal text-white/60 leading-[1.45]">
              AI moves fast.<br />
              <strong className="block text-[19px] font-bold text-white mt-1">Stay ahead with AXOWEB.</strong>
            </h4>
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for subscribing!");
              }}
              className="flex w-full sm:w-[310px] bg-white/5 border border-white/10 rounded-xl p-1 shadow-sm"
            >
              <input 
                type="email" 
                required
                placeholder="Enter email address" 
                className="flex-1 px-3.5 py-2.5 bg-transparent border-none text-[13.5px] text-[#D7E2EA] focus:outline-none placeholder:text-white/30 font-dm"
              />
              <button 
                type="submit"
                className="px-[22px] py-2.5 bg-[#111214] text-white font-dm text-[13.5px] font-semibold rounded-lg shadow-xl hover:bg-black transition-all hover:translate-y-[-1px] cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const Watermark = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const textRef = useRef<SVGTextElement>(null);

  useEffect(() => {
    const fitWatermark = () => {
      if (!svgRef.current || !textRef.current) return;
      try {
        const bbox = textRef.current.getBBox();
        svgRef.current.setAttribute('viewBox', `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
      } catch (e) {
        console.error("Error fitting watermark:", e);
      }
    };

    // Initial fit
    fitWatermark();

    // Re-fit on font load and resize
    if (document.fonts) {
      document.fonts.ready.then(fitWatermark);
    }
    window.addEventListener('resize', fitWatermark);
    return () => window.removeEventListener('resize', fitWatermark);
  }, []);

  return (
    <div className="w-full max-w-[1150px] mx-auto -mt-15 md:-mt-20 pointer-events-none select-none relative z-0 opacity-[0.04] px-4">
      <svg ref={svgRef} className="block w-full h-auto overflow-visible" preserveAspectRatio="xMidYMid meet">
        <text 
          ref={textRef} 
          x="500" 
          y="240" 
          textAnchor="middle" 
          fontSize="300"
          className="font-dm font-bold text-white tracking-[-0.03em]"
        >
          AXOWEB
        </text>
      </svg>
    </div>
  );
};

export default function Footer() {
  return (
    <footer className="footer-section w-full bg-[#0C0C0C] pt-24 pb-0 flex flex-col items-center overflow-hidden">
      <FooterCard />
      <Watermark />
    </footer>
  );
}
