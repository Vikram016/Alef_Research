import { useEffect } from "react";

/**
 * Locks body scroll while `active` is true, restoring the previous
 * overflow value on cleanup.
 */
export function useBodyScrollLock(active: boolean) {
  useEffect(() => {
    if (!active) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [active]);
}
