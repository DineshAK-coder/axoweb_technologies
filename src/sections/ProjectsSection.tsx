import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { useRef, Key } from "react";
import { LiveProjectButton } from "@/src/components/Buttons";
import { FadeIn } from "@/src/components/FadeIn";

interface ProjectData {
  id: string;
  name: string;
  category: string;
  images: {
    col1Top: string;
    col1Bottom: string;
    col2: string;
  };
  link?: string;
}

const projects: ProjectData[] = [
  {
    id: "01",
    name: "Meredith Cultural event",
    category: "Client",
    images: {
      col1Top: "/projects/meredith-1.jpeg",
      col1Bottom: "/projects/meredith-2.jpeg",
      col2: "/projects/meredith-3.jpeg",
    },
    link: "https://m2k26.vercel.app/",
  },
  {
    id: "02",
    name: "yui TECHNOLOGIES",
    category: "Client",
    images: {
      col1Top: "/projects/yui-1.jpeg",
      col1Bottom: "/projects/yui-2.jpeg",
      col2: "/projects/yui-3.jpeg",
    },
    link: "https://yui-ai-psi.vercel.app/",
  },
  {
    id: "03",
    name: "Expense Tracker",
    category: "App",
    images: {
      col1Top: "/projects/expense-1.jpeg",
      col1Bottom: "/projects/expense-2.jpeg",
      col2: "/projects/expense-3.jpeg",
    },
  },
];

interface CardProps {
  project: ProjectData;
  index: number;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
  key?: Key;
}

const Card = ({ 
  project, 
  index, 
  progress, 
  range, 
  targetScale 
}: CardProps) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{ 
          scale, 
          top: `calc(7vh + ${index * (typeof window !== 'undefined' && window.innerWidth < 640 ? 15 : 25)}px)`,
          willChange: "transform"
        }}
        className="relative w-full max-w-6xl bg-[#0C0C0C] border-2 border-[#D7E2EA] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-5 sm:p-8 md:p-10 flex flex-col gap-5 md:gap-8 shadow-2xl"
      >
        {/* Card Header */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4 md:gap-8">
            <span className="font-black text-[#D7E2EA] text-[clamp(1.5rem,4vw,64px)] italic leading-none">
              {project.id}
            </span>
            <div className="flex flex-col">
              <span className="uppercase text-[#D7E2EA]/60 text-[10px] sm:text-xs tracking-widest font-light">
                {project.category}
              </span>
              <h3 className="uppercase text-[#D7E2EA] text-base sm:text-lg md:text-2xl font-medium tracking-wide leading-tight">
                {project.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton className="hidden sm:flex" href={project.link} />
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-4 md:gap-6 flex-1 min-h-0">
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="rounded-[40px] overflow-hidden flex-1 h-[clamp(80px,12vw,230px)]">
              <img src={project.images.col1Top} alt="Project" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[40px] overflow-hidden flex-1 h-[clamp(110px,18vw,340px)]">
              <img src={project.images.col1Bottom} alt="Project" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="rounded-[40px] overflow-hidden h-[clamp(200px,30vw,600px)] md:h-auto">
            <img src={project.images.col2} alt="Project" className="w-full h-full object-cover" />
          </div>
        </div>

        <LiveProjectButton className="flex sm:hidden w-full justify-center" href={project.link} />
      </motion.div>
    </div>
  );
};

export const ProjectsSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section 
      id="projects" 
      ref={containerRef}
      className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 pb-20"
    >
      <div className="pt-20 sm:pt-24 md:pt-32 mb-10 text-center">
        <FadeIn>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(3rem,12vw,160px)]">
            Project
          </h2>
        </FadeIn>
      </div>

      <div className="relative">
        {projects.map((project, i) => {
          const targetScale = 1 - ((projects.length - 1 - i) * 0.05);
          return (
            <Card 
              key={project.id} 
              project={project} 
              index={i} 
              progress={scrollYProgress} 
              range={[i * 0.33, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
};
