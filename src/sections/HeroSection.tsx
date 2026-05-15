import { useEffect, useRef } from "react";
import Hls from "hls.js";
import { FadeIn } from "@/src/components/FadeIn";
import { Magnet } from "@/src/components/Magnet";
import { ContactButton } from "@/src/components/Buttons";
import { useContactModal } from "../context/ContactModalContext";

export const HeroSection = () => {
  const { openModal } = useContactModal();
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoUrl = "https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8";

  useEffect(() => {
    let hls: Hls | null = null;
    let isMounted = true;

    const initVideo = () => {
      if (!videoRef.current || !isMounted) return;
      const video = videoRef.current;

      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = videoUrl;
      } else if (Hls.isSupported()) {
        hls = new Hls({
          capLevelToPlayerSize: true,
          autoStartLoad: true,
        });
        hls.loadSource(videoUrl);
        hls.attachMedia(video);
      }
    };

    initVideo();

    return () => {
      isMounted = false;
      if (hls) {
        hls.destroy();
      }
    };
  }, []);

  return (
    <section className="relative h-screen w-full flex flex-col overflow-hidden px-6 md:px-10 bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 z-[1]" />
      </div>

      {/* Navbar */}
      <div className="fixed top-8 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <FadeIn delay={0} y={-20} className="pointer-events-auto">
          <div className="glass-nav">
            <div className="glass-overlay" />
            <div className="glass-content">
              <nav className="flex items-center gap-1 md:gap-4 px-2">
                <div className="flex items-center gap-2 px-3 py-2 mr-2 border-r border-white/10">
                  <img src="/axoweb-logo.png" alt="Logo" className="w-6 h-6 object-contain" />
                  <span className="text-[#D7E2EA] font-bold text-sm tracking-tight hidden sm:block uppercase">Axoweb</span>
                </div>
                <a href="#about" className="px-4 py-2 text-[#D7E2EA]/80 font-medium uppercase tracking-wider text-[11px] md:text-xs hover:text-white transition-all hover:scale-105">About</a>
                <a href="#services" className="px-4 py-2 text-[#D7E2EA]/80 font-medium uppercase tracking-wider text-[11px] md:text-xs hover:text-white transition-all hover:scale-105">Services</a>
                <a href="#projects" className="px-4 py-2 text-[#D7E2EA]/80 font-medium uppercase tracking-wider text-[11px] md:text-xs hover:text-white transition-all hover:scale-105">Projects</a>
                
                <button 
                  onClick={openModal} 
                  className="glass-btn ml-2"
                >
                  <span className="relative z-10 text-[11px] md:text-xs font-bold uppercase tracking-widest text-[#D7E2EA] group-hover:text-white transition-colors">
                    Initialize
                  </span>
                </button>
              </nav>
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <div className="overflow-hidden w-full relative z-20 flex flex-col items-center">
          <FadeIn delay={0.1} y={20}>
            <span className="shimmer-text uppercase tracking-[0.4em] text-lg sm:text-xl md:text-2xl mb-8 block font-kanit font-black">
              Axoweb Technologies
            </span>
          </FadeIn>
          <FadeIn delay={0.15} y={40}>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none text-center w-full text-[clamp(2.5rem,10vw,12rem)] mt-2 sm:mt-0 px-4">
              Build Smarter.<br />Scale Faster.
            </h1>
          </FadeIn>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-20 flex justify-between items-end pb-7 sm:pb-8 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p className="text-[#D7E2EA]/80 font-light uppercase tracking-wide leading-relaxed max-w-[240px] sm:max-w-[400px] md:max-w-[500px] text-[clamp(0.75rem,1.4vw,1.1rem)]">
            We design high-performance websites, intelligent automations, and AI-powered solutions that help businesses grow, streamline operations, and stay ahead.
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
};
