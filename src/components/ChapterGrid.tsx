import { motion } from "framer-motion";
import type { ChapterSection } from "../config/chapterContent";

interface ChapterGridProps {
  sections: ChapterSection[];
  onSelect: (sectionId: string) => void;
}

// A small rotating set of gradients gives each card a distinct look without
// fabricating bespoke illustrations we don't actually have as source assets.
const CARD_GRADIENTS = [
  "linear-gradient(135deg, #1e0714 0%, #3a1626 45%, #b7a089 100%)",
  "linear-gradient(135deg, #050816 0%, #1e0714 55%, #8a6f4d 100%)",
  "linear-gradient(135deg, #2c191c 0%, #6a4a3c 60%, #f6d8d0 100%)",
];

export default function ChapterGrid({ sections, onSelect }: ChapterGridProps) {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 md:px-10 py-10 md:py-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
        {sections.map((section, i) => (
          <motion.button
            key={section.id}
            onClick={() => onSelect(section.id)}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            whileHover={{ scale: 1.02 }}
            className="text-left rounded-2xl overflow-hidden border border-alef-gold/40 shadow-md group"
          >
            <div
              className="h-40 md:h-48 w-full flex items-end p-4"
              style={{
                backgroundImage: CARD_GRADIENTS[i % CARD_GRADIENTS.length],
              }}
            >
              <span className="font-bold italic text-white text-sm md:text-base drop-shadow">
                {section.heading}
              </span>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
