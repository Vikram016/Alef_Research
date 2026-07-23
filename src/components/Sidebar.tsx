import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import alefLogo from "../assets/logo/alef-logo.svg";
import { NAV_ITEMS, type ChapterKey } from "../types";

interface SidebarProps {
  onNavClick: (key: ChapterKey) => void;
  onLogoClick: () => void;
  activeKey: ChapterKey | null;
}

export default function Sidebar({ onNavClick, onLogoClick, activeKey }: SidebarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

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
      <aside className="hidden md:flex flex-col shrink-0 w-[220px] lg:w-[260px] min-h-screen sticky top-0 px-5 py-10 bg-alef-navy">
        <button type="button" onClick={handleLogoClick} aria-label="Alef Research home" className="block mb-14 text-left">
          <img
            src={alefLogo}
            alt="Alef Research logo"
            className="w-[160px] lg:w-[170px] h-auto"
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

      {/* Mobile: compact top bar with hamburger + animated dropdown */}
      <header className="md:hidden sticky top-0 z-40 bg-alef-navy">
        <div className="flex items-center justify-between px-4 py-3">
          <button type="button" onClick={handleLogoClick} aria-label="Alef Research home" className="block">
            <img src={alefLogo} alt="Alef Research logo" className="w-[100px] h-auto" />
          </button>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="text-white p-2"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              aria-label="Primary"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="overflow-hidden flex flex-col gap-4 px-4 pb-5"
            >
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleClick(item.key)}
                  aria-haspopup="dialog"
                  aria-expanded={activeKey === item.key}
                  className="text-left font-medium italic text-white text-base hover:text-alef-gold transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
