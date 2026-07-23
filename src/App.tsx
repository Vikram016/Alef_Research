import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Sidebar from "./components/Sidebar";
import HomeHero from "./components/HomeHero";
import Footer from "./components/Footer";
import ChapterGrid from "./components/ChapterGrid";
import ChapterModal from "./components/ChapterModal";
import { CHAPTER_SECTIONS } from "./config/chapterSections";
import type { ChapterKey } from "./types";

type View = "home" | "grid";

interface ModalState {
  chapterKey: ChapterKey;
  index: number;
}

export default function App() {
  const [view, setView] = useState<View>("home");
  const [activeChapter, setActiveChapter] = useState<ChapterKey | null>(null);
  const [modal, setModal] = useState<ModalState | null>(null);

  function handleNavClick(key: ChapterKey) {
    setModal(null);
    setActiveChapter(key);
    setView("grid");
  }

  function handleGridSelect(sectionId: string) {
    if (!activeChapter) return;
    const sections = CHAPTER_SECTIONS[activeChapter];
    const index = sections.findIndex((s) => s.id === sectionId);
    if (index === -1) return;
    setModal({ chapterKey: activeChapter, index });
  }

  function handleBackHome() {
    setModal(null);
    setView("home");
    setActiveChapter(null);
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <Sidebar onNavClick={handleNavClick} onLogoClick={handleBackHome} activeKey={activeChapter} />

      <div className="flex-1 flex flex-col bg-alef-cream">
        <div className="flex-1">
          <AnimatePresence mode="wait">
            {view === "home" && (
              <motion.div
                key="home"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <HomeHero />
              </motion.div>
            )}
            {view === "grid" && activeChapter && (
              <motion.div
                key={`grid-${activeChapter}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChapterGrid
                  sections={CHAPTER_SECTIONS[activeChapter]}
                  onSelect={handleGridSelect}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <Footer />
      </div>

      {modal && (
        <ChapterModal
          chapterKey={modal.chapterKey}
          sections={CHAPTER_SECTIONS[modal.chapterKey]}
          activeIndex={modal.index}
          isOpen={true}
          onClose={() => setModal(null)}
          onChangeIndex={(index) =>
            setModal((m) => (m ? { ...m, index } : m))
          }
        />
      )}
    </div>
  );
}
