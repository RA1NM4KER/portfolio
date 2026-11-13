"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  value: string;
};

const NUMERIC_PREFIX = /^(\d[\d,]*)(.*)$/;
const DURATION_MS = 1400;

function format(target: number, progress: number, grouped: boolean) {
  const current = Math.round(target * progress);
  return grouped ? current.toLocaleString("en-US") : String(current);
}

/**
 * Counts a leading number up from zero the first time it scrolls into view.
 * Values without a leading number ("Paid") render unchanged.
 */
export function CountUp({ value }: CountUpProps) {
  const match = NUMERIC_PREFIX.exec(value);
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const element = ref.current;
    if (!match || !element) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducedMotion) return;

    const [, digits, suffix] = match;
    const target = Number(digits.replaceAll(",", ""));
    const grouped = digits.includes(",");
    let frame = 0;

    setDisplay(`0${suffix}`);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();

        const tick = (now: number) => {
          const linear = Math.min((now - start) / DURATION_MS, 1);
          const eased = 1 - Math.pow(1 - linear, 3);
          setDisplay(`${format(target, eased, grouped)}${suffix}`);
          if (linear < 1) frame = requestAnimationFrame(tick);
        };

        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <span ref={ref} aria-label={value}>
      <span aria-hidden="true">{display}</span>
    </span>
  );
}
