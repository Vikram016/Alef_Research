import { LAST_UPDATED } from "../config/buildInfo";

export default function Footer() {
  return (
    <footer className="w-full py-6 px-6 md:px-10 text-center bg-alef-navy">
      <p className="italic font-medium text-sm text-white">
        Website last update : {LAST_UPDATED}
      </p>
    </footer>
  );
}
