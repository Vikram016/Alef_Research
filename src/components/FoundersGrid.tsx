import { founders } from "../config/founders";
import FounderCard from "./FounderCard";

export default function FoundersGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
      {founders.map((f) => (
        <FounderCard key={f.name} founder={f} />
      ))}
    </div>
  );
}
