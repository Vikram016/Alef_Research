import FoundersGrid from "./FoundersGrid";
import type { ChapterSection } from "../config/chapterContent";

interface ChapterSectionViewProps {
  section: ChapterSection;
}

export default function ChapterSectionView({
  section,
}: ChapterSectionViewProps) {
  return (
    <section id={section.id} className="mb-4 scroll-mt-10">
      <h2 className="font-bold italic text-lg sm:text-xl md:text-2xl text-alef-ink text-center mb-6">
        {section.heading}
      </h2>

      {section.id === "founders" ? (
        <FoundersGrid />
      ) : (
        <div className="flex flex-col gap-4">
          {section.blocks.map((block, i) => {
            if (block.type === "p") {
              return (
                <p
                  key={i}
                  className="font-semibold text-alef-ink text-[0.95rem] md:text-base leading-relaxed text-left"
                >
                  {block.text}
                </p>
              );
            }
            if (block.type === "point") {
              return (
                <p
                  key={i}
                  className="font-semibold text-alef-ink text-[0.95rem] md:text-base leading-relaxed text-left pl-4 md:pl-6"
                >
                  <span className="font-bold text-alef-gold-dark mr-1">
                    {block.marker}
                  </span>
                  {block.text}
                </p>
              );
            }
            if (block.type === "img") {
              return (
                <img
                  key={i}
                  src={block.src}
                  alt={block.alt}
                  loading="lazy"
                  className="max-w-xs mx-auto rounded-xl border-4 border-alef-gold"
                />
              );
            }
            return null;
          })}
        </div>
      )}
    </section>
  );
}
