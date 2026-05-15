import { useContactModal } from "../context/ContactModalContext";

export const ContactButton = ({ className = "" }: { className?: string }) => {
  const { openModal } = useContactModal();

  return (
    <button
      onClick={openModal}
      className={`relative rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base font-medium uppercase tracking-widest text-white transition-transform active:scale-95 ${className} cursor-pointer`}
      style={{
        background: "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
        boxShadow: "0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1",
        outline: "2px solid white",
        outlineOffset: "-3px",
      }}
    >
      Contact Us
    </button>
  );
};

export const LiveProjectButton = ({ className = "", href }: { className?: string, href?: string }) => {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`rounded-full border-2 border-[#D7E2EA] px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10 active:scale-95 flex items-center justify-center cursor-pointer ${className}`}
      >
        Live Project
      </a>
    );
  }

  return (
    <button
      className={`rounded-full border-2 border-[#D7E2EA] px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10 active:scale-95 ${className}`}
    >
      Live Project
    </button>
  );
};
