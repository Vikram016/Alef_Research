export type ChapterKey = "technosystems" | "socialsystem" | "company";

export interface NavItem {
  key: ChapterKey;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  { key: "technosystems", label: "Our techno systems" },
  { key: "socialsystem", label: "Our social system - Iskra" },
  { key: "company", label: "Our company info" },
];
