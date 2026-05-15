import React, { createContext, useContext, useState, ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Mail, MessageSquare, X } from "lucide-react";

interface ContactModalContextType {
  openModal: () => void;
  closeModal: () => void;
}

const ContactModalContext = createContext<ContactModalContextType | undefined>(undefined);

export const useContactModal = () => {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error("useContactModal must be used within a ContactModalProvider");
  }
  return context;
};

export const ContactModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const email = "axoweb0@gmail.com";
  const phone = "+919176257316";
  const formattedPhone = "+91 91762 57316";

  const actions = [
    {
      id: "call",
      icon: Phone,
      label: "Call Now",
      href: `tel:${phone}`,
      color: "bg-blue-500",
    },
    {
      id: "whatsapp",
      icon: MessageSquare,
      label: "WhatsApp",
      href: `https://wa.me/${phone.replace("+", "")}`,
      color: "bg-green-500",
    },
    {
      id: "mail",
      icon: Mail,
      label: "Send Email",
      href: `mailto:${email}`,
      color: "bg-red-500",
    },
  ];

  return (
    <ContactModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-sm bg-[#161616] border border-white/10 rounded-[32px] p-8 shadow-2xl overflow-hidden"
            >
              <button 
                onClick={closeModal}
                className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/10">
                      <img src="/axoweb-logo.png" alt="Logo" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-white font-dm font-bold text-lg tracking-tight">AXOWEB</span>
                  </div>
                  <span className="text-[#D7E2EA]/40 text-xs uppercase tracking-[0.2em] mb-2 block">Get in touch</span>
                  <h3 className="text-[#D7E2EA] text-2xl font-bold">Contact Us</h3>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                    <p className="text-[#D7E2EA]/40 text-[10px] uppercase tracking-widest mb-1">Email ID</p>
                    <p className="text-[#D7E2EA] font-medium transition-colors hover:text-blue-400">
                      <a href={`mailto:${email}`}>{email}</a>
                    </p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                    <p className="text-[#D7E2EA]/40 text-[10px] uppercase tracking-widest mb-1">Mobile Number</p>
                    <p className="text-[#D7E2EA] font-medium transition-colors hover:text-blue-400">
                      <a href={`tel:${phone}`}>{formattedPhone}</a>
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {actions.map((action) => (
                    <a
                      key={action.id}
                      href={action.href}
                      target={action.id === "call" ? "_self" : "_blank"}
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 group p-2"
                    >
                      <div className={`w-12 h-12 ${action.color} rounded-2xl flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110 group-active:scale-95`}>
                        <action.icon size={20} />
                      </div>
                      <span className="text-[10px] text-[#D7E2EA]/60 uppercase tracking-wider font-medium">{action.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </ContactModalContext.Provider>
  );
};
