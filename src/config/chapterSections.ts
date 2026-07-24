import {
  technosystemsContent,
  companyContent,
  socialsystemContent,
  type ChapterSection,
} from "./chapterContent";
import { NEW_PAGES } from "./newPagesContent";
import type { ChapterKey } from "../types";

// "Our founders", "Be our co-worker if...", "Our simple business plan",
// "News" and "Contact us" are now their own top-level nav pages (with
// freshly-written copy from the final-cut text). The old "Our company
// info" chapter originally covered this same ground with its own
// (older) text, so we drop those overlapping sections here to avoid
// showing duplicate/conflicting content -- keeping only what's still
// unique to that chapter.
const DUPLICATED_IN_NEW_PAGES = new Set([
  "founders",
  "joinus",
  "bmodel",
  "news",
  "contact",
]);

const companySectionsDeduped: ChapterSection[] = companyContent.filter(
  (s) => !DUPLICATED_IN_NEW_PAGES.has(s.id)
);

export const CHAPTER_SECTIONS: Record<ChapterKey, ChapterSection[]> = {
  technosystems: technosystemsContent,
  socialsystem: socialsystemContent,
  company: companySectionsDeduped,
  founders: [NEW_PAGES.founders],
  coworker: [NEW_PAGES.coworker],
  bizplan: [NEW_PAGES.bizplan],
  news: [NEW_PAGES.news],
  contact: [NEW_PAGES.contact],
};
