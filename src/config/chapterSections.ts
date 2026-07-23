import {
  technosystemsContent,
  companyContent,
  socialsystemContent,
  type ChapterSection,
} from "./chapterContent";
import type { ChapterKey } from "../types";

// The company chapter's founder bios/photos are rendered via <FoundersGrid />
// rather than plain text blocks. We reinsert a placeholder section (empty
// blocks) at its original position ("02. Our founders", right after the
// name & logo section) so it still appears as its own card/topic in the
// grid + modal flow, matching the old site's original section order.
const companySectionsWithFounders: ChapterSection[] = (() => {
  const arr = [...companyContent];
  const idx = arr.findIndex((s) => s.id === "namelogo");
  const foundersSection: ChapterSection = {
    id: "founders",
    heading: "02. Our founders",
    blocks: [],
  };
  arr.splice(idx + 1, 0, foundersSection);
  return arr;
})();

export const CHAPTER_SECTIONS: Record<ChapterKey, ChapterSection[]> = {
  technosystems: technosystemsContent,
  socialsystem: socialsystemContent,
  company: companySectionsWithFounders,
};
