import type { Founder } from "../config/founders";

interface FounderCardProps {
  founder: Founder;
}

export default function FounderCard({ founder }: FounderCardProps) {
  return (
    <div className="flex flex-col items-center text-center bg-white/40 rounded-2xl p-6 border border-alef-gold/40">
      <img
        src={founder.photo}
        alt={founder.name}
        loading="lazy"
        className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover border-4 border-alef-gold mb-4"
      />
      <h3 className="font-bold italic text-alef-ink text-lg">
        {founder.name}
      </h3>
      <p className="font-medium text-sm text-alef-gold-dark mb-3">
        {founder.role}
      </p>
      <div className="font-semibold text-alef-ink text-sm leading-relaxed space-y-2 text-left">
        {founder.bio.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </div>
  );
}
