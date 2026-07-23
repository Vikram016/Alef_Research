import { motion } from "framer-motion";
import heroImage from "../assets/hero/side_hero.jpg";

export default function HomeHero() {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 md:px-10 py-10 md:py-16 flex flex-col gap-8 md:gap-10">
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="font-bold italic text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug text-alef-ink text-center"
      >
        Alef Research is building the foundations for humanity's future beyond
        Earth.
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        className="w-full max-w-xl mx-auto rounded-2xl overflow-hidden shadow-lg shadow-black/20 border border-alef-gold/30"
      >
        <img
          src={heroImage}
          alt="Concept art of an outpost on a moon, representing Alef Research's vision for a future beyond Earth"
          className="w-full h-auto object-cover"
          loading="eager"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="font-semibold italic text-alef-ink text-sm md:text-base leading-relaxed text-left space-y-4"
      >
        <p>
          Our techno-social systems combine simplified engineering, clean
          slate approach, biological innovation, circular production,
          timeless design, gentleness, beauty, are buildable anywhere in the
          kosmos and have natural values including by abolishing feudalism,
          tax, profit, class system and tribalism.
        </p>
        <p>
          This is the only way towards a unified human utopia of milk, honey
          and harmony spread across the timeless and infinite kosmos.
        </p>
      </motion.div>
    </section>
  );
}
