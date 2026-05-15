import { FadeIn } from "@/src/components/FadeIn";

const services = [
  {
    id: "01",
    name: "Web Applications",
    description: "We architect and engineer high-performance, scalable digital systems. From lightning-fast frontend interfaces to complex backend architectures, our custom development process ensures your startup or business operates with flawless functionality.",
    subItems: ["Startup platforms", "Admin panels", "Frontend systems", "Backend systems"]
  },
  {
    id: "02",
    name: "Automation Solutions",
    description: "Reclaim your time and drastically scale your operations by eliminating redundant tasks. We integrate intelligent automation workflows and seamless data pipelines that connect your tools, turning manual bottlenecks into frictionless systems.",
    subItems: ["Workflow automation", "CRM integrations", "Data pipelines", "No-code/low-code solutions"]
  },
  {
    id: "03",
    name: "AI Agents & Tools",
    description: "Step into the future of business with custom artificial intelligence integrations. We deploy advanced AI chatbots, predictive analytics tools, and autonomous agents designed to hyper-personalize customer interactions and accelerate your core decision-making.",
    subItems: ["AI chatbots", "Custom AI agents", "Business intelligence tools", "AI integrations"]
  },
  {
    id: "04",
    name: "Custom Digital Solutions",
    description: "Your most ambitious ideas require engineering that goes beyond off-the-shelf software. We collaborate with you to design, prototype, and build scalable, proprietary digital ecosystems—whether it's a disruptive SaaS platform or an intricate internal dashboard.",
    subItems: ["SaaS prototypes", "Internal tools", "Dashboard systems", "Scalable architectures"]
  },
  {
    id: "05",
    name: "Event & Cultural Websites",
    description: "Transform the way attendees experience your events. We build robust, high-traffic cultural platforms equipped with interactive schedules, secure live ticketing, and real-time updates to ensure your festival or convention runs flawlessly from launch to closing night.",
    subItems: ["Event landing pages", "Registration systems", "Ticketing management", "Live updates"]
  },
  {
    id: "06",
    name: "Mobile Architecture",
    description: "Extend your systems to the hands of your users with native Android applications. We integrate dashboard systems, secure authentication, and seamless data processing to give your team or users complete control on the go.",
    subItems: ["Android applications", "Dashboard integrations", "Local databases", "MVVM architecture"]
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="bg-white text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <FadeIn>
          <h2 className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28 text-[clamp(3rem,12vw,160px)] leading-none tracking-tight">
            Our Services
          </h2>
        </FadeIn>

        <div className="w-full max-w-5xl flex flex-col">
          {services.map((service, i) => (
            <FadeIn key={service.id} delay={i * 0.1}>
              <div className="flex flex-col sm:flex-row items-baseline gap-6 sm:gap-10 md:gap-14 py-8 sm:py-10 md:py-12 border-b border-[#0C0C0C]/15 last:border-b-0">
                <span className="font-black text-[#0C0C0C] text-[clamp(3rem,10vw,140px)] leading-none italic min-w-[120px]">
                  {service.id}
                </span>
                <div className="flex flex-col gap-4">
                  <h3 className="font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)]">
                    {service.name}
                  </h3>
                  <p className="font-light leading-relaxed max-w-3xl text-[clamp(0.85rem,1.6vw,1.1rem)] opacity-80">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {service.subItems.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0C0C0C]" />
                        <span className="text-xs sm:text-sm font-medium uppercase tracking-wider opacity-60">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
