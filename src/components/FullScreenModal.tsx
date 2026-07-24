import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useBodyScrollLock } from "../hooks/useBodyScrollLock";
import { useFocusTrap } from "../hooks/useFocusTrap";

interface FullScreenModalProps {
  isOpen: boolean;
  onClose: () => void;
  labelledBy: string;
  children: React.ReactNode;
}

export default function FullScreenModal({
  isOpen,
  onClose,
  labelledBy,
  children,
}: FullScreenModalProps) {
  useBodyScrollLock(isOpen);
  const containerRef = useFocusTrap(isOpen);

  useEffect(() => {
    if (!isOpen) return;
    function handleKeydown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={containerRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={labelledBy}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="full-viewport-h fixed inset-0 z-50 w-screen bg-alef-modal text-alef-ink flex flex-col overflow-hidden"
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="fixed top-4 right-4 sm:top-5 sm:right-5 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-alef-ink text-alef-modal flex items-center justify-center hover:bg-alef-maroon transition-colors"
          >
            <X size={18} />
          </button>
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
