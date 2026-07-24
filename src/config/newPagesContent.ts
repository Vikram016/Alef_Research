// Content for the 5 new nav pages, per
// "Alef Research - Website text for final cut" (2026-07-23).
import type { ChapterSection } from "./chapterContent";

// "Our founders" has no text blocks -- it's special-cased in
// ChapterSectionView (id === "founders") to render <FoundersGrid /> instead.
const foundersPage: ChapterSection = {
  id: "founders",
  heading: "Our founders",
  blocks: [],
};

const coworkerPage: ChapterSection = {
  id: "coworker",
  heading: "Be our co-worker if...",
  blocks: [
    {
      type: "point",
      marker: "(a).",
      text: "If you believe in natural intelligence, ability, dignity and experience as a human. Doesn't matter if you are a fail in school 10th class. It will be even better if you deliberately dropped out of college.",
    },
    {
      type: "point",
      marker: "(b).",
      text: "If your knowledge is actually useful to the industry of travelling and living in the kosmos in a democratic and non-profit way. So this discounts work types like HR, CSR, MBA-requiring positions, most IT-requiring positions and most finance-knowledge-requiring positions.",
    },
    {
      type: "point",
      marker: "(c).",
      text: "If your spoken and written language is simple, gentle, honest, receptive, educated ( in the real sense ) and enlightened. Not language full of nonsense corporate buzzwords ( Cutting Edge, Center of Excellence, Paradigm Shift etc ).",
    },
    {
      type: "point",
      marker: "(d).",
      text: "If you respect the natural laws which we present in our website's three chapters.",
    },
    {
      type: "point",
      marker: "(e).",
      text: "If you do innovative and simplifying thinking even if going against traditions, industry standards and fashions.",
    },
    {
      type: "point",
      marker: "(f).",
      text: "If you have no love for feudalism and profit and consider money as a temporary necessity for the now but which must be eventually abolished. Our company is a non-profit and Worker Cooperative type so is without feudalism, capitalism, profiteering but with internal democracy.",
    },
    {
      type: "point",
      marker: "(g).",
      text: "If you desire a largely secular borderless unification of humanity on Earth and in the kosmos.",
    },
    {
      type: "point",
      marker: "(h).",
      text: "If you are well-presented in clothing, grooming and talking manner. Not fake but real. Not aggressive but gentle and genuine.",
    },
    {
      type: "point",
      marker: "(i).",
      text: "If you ideally consider the cat as the most perfect animal in the kosmos, ha ha.",
    },
    {
      type: "point",
      marker: "(j).",
      text: "If you consider tea as one of the main human gifts giveable to alien cultures in the kosmos, ha ha.",
    },
  ],
};

const bizPlanPage: ChapterSection = {
  id: "bizplan",
  heading: "Our simple business plan",
  blocks: [
    {
      type: "p",
      text: "We are a non-profit, B2G design organization and our direct clients will be the space departments of national governments who will purchase the designs of our products for a reasonably cheap license fee ( ten million dollars ) and build our systems in their societies as many as possible and make them available to their citizens without feudalism and tax including money.",
    },
    {
      type: "p",
      text: "Our presently in-design systems will enable a cheap, simple, safer and democratic manned space program for potentially every Earthen society by which any of their society's citizens can become kosmonauts who can travel through the kosmos, including the first human hollowed-asteroid city ZC-L000-S000-C000-NAlif which we will build by 2035.",
    },
    {
      type: "p",
      text: "These Earthen citizens can participate in the building of such Zarra-C type traveling hollowed-asteroid cities and they can become citizens of such traveling asteroid cities and can thus travel across the kosmos.",
    },
    {
      type: "p",
      text: 'And when these people return to their Earthen societies they will bring back experiences and materials from there to these societies in a pan-human, democratic way so that these societies are intellectually enriched, materially enriched and contribute to humanity within the bounds of respect for Nature and a pan-human "Liberty, Equality, Fraternity, Evolution".',
    },
    {
      type: "p",
      text: "And our company's fee for enabling such a grand situation for Earthen societies, is just ten million dollar for every Earthen society.",
    },
    {
      type: "p",
      text: "Our ten million dollar license fee is a very small fraction of what a single rich individual pays now for a single ticket to visit and stay, not on the Moon even which is about 380,000 kilometers away, but just the International Space Station which is orbiting only 400 kilometers above our heads.",
    },
    {
      type: "p",
      text: "The single person tickets presently cost at least 50 million dollars... and ours is ten million dollars for an entire space program which can transport many people at once throughout the Solar System.",
    },
    {
      type: "p",
      text: "Also in today's terms, our ten million dollar license fee is similar to the license fee for a company to acquire the design of a single type of commercial microprocessor for use in cell phones.",
    },
    {
      type: "p",
      text: "So, for just ten million dollars our client national space departments will acquire the design of our techno systems for an entire space program by which their citizens can travel and settle the entire Solar System in the intermediate term and this in a harmonious and pan-human way.",
    },
    {
      type: "p",
      text: 'We choose not to be "space trillionaires" who want to impose the evil ideas of feudalism, tax, money, profit and class even on Nature\'s creations in the vast kosmos.',
    },
    {
      type: "p",
      text: "We choose to be humanists working towards the unified human kosmik utopia which is also in harmony with Nature.",
    },
  ],
};

const newsPage: ChapterSection = {
  id: "news",
  heading: "News",
  blocks: [
    {
      type: "link",
      href: "https://youtube.com/@AlefResearch",
      label: "youtube.com/@AlefResearch",
    },
  ],
};

const contactPage: ChapterSection = {
  id: "contact",
  heading: "Contact us",
  blocks: [
    {
      type: "link",
      href: "mailto:kosmos.society.2033@gmail.com",
      label: "kosmos.society.2033@gmail.com",
    },
  ],
};

export const NEW_PAGES: Record<string, ChapterSection> = {
  founders: foundersPage,
  coworker: coworkerPage,
  bizplan: bizPlanPage,
  news: newsPage,
  contact: contactPage,
};
