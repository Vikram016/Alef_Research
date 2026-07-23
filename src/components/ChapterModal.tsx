import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FullScreenModal from "./FullScreenModal";
import ChapterSectionView from "./ChapterSectionView";
import type { ChapterSection } from "../config/chapterContent";
import type { ChapterKey } from "../types";

interface ChapterModalProps {
  chapterKey: ChapterKey;
  sections: ChapterSection[];
  activeIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onChangeIndex: (index: number) => void;
}

// How close to the bottom (in px) counts as "reached the end of this topic".
const BOTTOM_THRESHOLD = 24;
// How long to wait, once the reader hits the end, before showing the
// next/previous controls.
const REVEAL_DELAY_MS = 2000;

export default function ChapterModal({
  chapterKey,
  sections,
  activeIndex,
  isOpen,
  onClose,
  onChangeIndex,
}: ChapterModalProps) {
  const headingId = `modal-heading-${chapterKey}`;
  const section = sections[activeIndex];
  const hasPrev = activeIndex > 0;
  const hasNext = activeIndex < sections.length - 1;

  const contentRef = useRef<HTMLDivElement>(null);
  const revealTimer = useRef<number | null>(null);
  const [showNav, setShowNav] = useState(false);

  function clearRevealTimer() {
    if (revealTimer.current !== null) {
      window.clearTimeout(revealTimer.current);
      revealTimer.current = null;
    }
  }

  function checkIfAtBottom() {
    const el = contentRef.current;
    if (!el) return false;
    return el.scrollHeight - el.scrollTop - el.clientHeight <= BOTTOM_THRESHOLD;
  }

  function scheduleReveal() {
    if (revealTimer.current !== null) return;
    revealTimer.current = window.setTimeout(() => {
      setShowNav(true);
      revealTimer.current = null;
    }, REVEAL_DELAY_MS);
  }

  function handleScroll() {
    if (showNav) return;
    if (checkIfAtBottom()) {
      scheduleReveal();
    } else {
      clearRevealTimer();
    }
  }

  // Every time the topic changes (new card selected, or Next/Previous
  // clicked), jump back to the top so the heading is the first thing shown,
  // and hide the nav controls again until the reader reaches the end of
  // this new topic.
  useEffect(() => {
    clearRevealTimer();
    setShowNav(false);
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
    // If the topic is short enough to not need scrolling at all, start the
    // reveal countdown right away.
    const raf = requestAnimationFrame(() => {
      if (checkIfAtBottom()) {
        scheduleReveal();
      }
    });
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chapterKey, activeIndex, isOpen]);

  useEffect(() => {
    return () => clearRevealTimer();
  }, []);

  return (
    <FullScreenModal isOpen={isOpen} onClose={onClose} labelledBy={headingId}>
      <div className="flex-1 min-h-0 flex flex-col">
        <h1 id={headingId} className="sr-only">
          {section?.heading ?? ""}
        </h1>

        <div
          ref={contentRef}
          onScroll={handleScroll}
          className="flex-1 min-h-0 overflow-y-auto px-6 sm:px-10 md:px-16 py-10 sm:py-12"
        >
          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              {section && (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <ChapterSectionView section={section} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Next/Previous only appear once the reader reaches the end of the
            current topic (plus a short pause), and then stay visible until
            they pick one -- they don't show up while still reading. */}
        <AnimatePresence>
          {showNav && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.3 }}
              className="shrink-0 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-2 px-4 sm:px-6 md:px-10 lg:px-16 py-4 border-t border-alef-gold/30 bg-alef-modal"
            >
              <button
                onClick={() => hasPrev && onChangeIndex(activeIndex - 1)}
                disabled={!hasPrev}
                className="flex items-center gap-1 font-medium italic text-xs sm:text-sm md:text-base text-alef-ink disabled:opacity-30 disabled:cursor-not-allowed hover:text-alef-gold-dark transition-colors whitespace-nowrap"
              >
                <ChevronLeft size={16} className="sm:size-[18px]" />
                <span className="hidden sm:inline">Previous topic</span>
                <span className="sm:hidden">Prev</span>
              </button>

              <span className="font-medium text-xs text-alef-gold-dark">
                {activeIndex + 1} / {sections.length}
              </span>

              <button
                onClick={() => hasNext && onChangeIndex(activeIndex + 1)}
                disabled={!hasNext}
                className="flex items-center gap-1 font-medium italic text-xs sm:text-sm md:text-base text-alef-ink disabled:opacity-30 disabled:cursor-not-allowed hover:text-alef-gold-dark transition-colors whitespace-nowrap"
              >
                <span className="hidden sm:inline">Next topic</span>
                <span className="sm:hidden">Next</span>
                <ChevronRight size={16} className="sm:size-[18px]" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FullScreenModal>
  );
}
