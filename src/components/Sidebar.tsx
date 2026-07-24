import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useBodyScrollLock } from "../hooks/useBodyScrollLock";
import alefLogo from "../assets/logo/alef-logo.svg";
import { NAV_ITEMS, type ChapterKey } from "../types";

interface SidebarProps {
  onNavClick: (key: ChapterKey) => void;
  onLogoClick: () => void;
  activeKey: ChapterKey | null;
}

export default function Sidebar({ onNavClick, onLogoClick, activeKey }: SidebarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  useBodyScrollLock(menuOpen);

  function handleClick(key: ChapterKey) {
    setMenuOpen(false);
    onNavClick(key);
  }

  function handleLogoClick() {
    setMenuOpen(false);
    onLogoClick();
  }

  return (
    <>
      {/* Desktop / tablet: persistent vertical sidebar, full viewport height */}
      <aside className="hidden md:flex flex-col shrink-0 w-[240px] lg:w-[280px] min-h-screen sticky top-0 px-5 py-10 bg-alef-navy">
        <button
          type="button"
          onClick={handleLogoClick}
          aria-label="Alef Research home"
          className="block mb-14 text-left"
        >
          <img
            src={alefLogo}
            alt="Alef Research logo"
            className="h-[120px] w-auto object-contain"
          />
        </button>
        <nav aria-label="Primary" className="flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.key}
              onClick={() => handleClick(item.key)}
              aria-haspopup="dialog"
              aria-expanded={activeKey === item.key}
              className="text-left font-medium italic text-white text-[0.9rem] leading-snug tracking-wide hover:text-alef-gold transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Mobile: compact top bar with hamburger, opening a full vertical
          side panel (matching the desktop sidebar) rather than a small
          dropdown. */}
      <header className="md:hidden sticky top-0 z-40 bg-alef-navy">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            type="button"
            onClick={handleLogoClick}
            aria-label="Alef Research home"
            className="block"
          >
            <img src={alefLogo} alt="Alef Research logo" className="w-full max-w-[140px] sm:max-w-[160px] h-auto" />
          </button>
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className="text-white p-2"
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="scrim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              className="md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              aria-hidden="true"
            />
            <motion.div
              key="drawer"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              role="dialog"
              aria-modal="true"
              aria-label="Primary navigation"
              className="full-viewport-h md:hidden fixed inset-y-0 left-0 z-50 w-[78vw] max-w-[300px] bg-alef-navy px-6 py-8 flex flex-col"
            >
              <div className="flex items-center justify-between mb-12">
                <button
                  type="button"
                  onClick={handleLogoClick}
                  aria-label="Alef Research home"
                >
                  <img src={alefLogo} alt="Alef Research logo" className="w-full max-w-[140px] sm:max-w-[160px] h-auto" />
                </button>
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="text-white p-2"
                >
                  <X size={24} />
                </button>
              </div>

              <nav aria-label="Primary" className="flex flex-col gap-6">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => handleClick(item.key)}
                    aria-haspopup="dialog"
                    aria-expanded={activeKey === item.key}
                    className="text-left font-medium italic text-white text-lg hover:text-alef-gold transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
