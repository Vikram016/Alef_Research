export type ChapterKey =
  | "technosystems"
  | "socialsystem"
  | "company"
  | "founders"
  | "coworker"
  | "bizplan"
  | "news"
  | "contact";

export interface NavItem {
  key: ChapterKey;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  { key: "technosystems", label: "Our techno systems" },
  { key: "socialsystem", label: "Our social system - Iskra" },
  { key: "company", label: "Our company info" },
  { key: "founders", label: "Our founders" },
  { key: "coworker", label: "Be our co-worker if..." },
  { key: "bizplan", label: "Our simple business plan" },
  { key: "news", label: "News" },
  { key: "contact", label: "Contact us" },
];
