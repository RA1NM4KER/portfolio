"use client";

import { useEffect, useState } from "react";

const formatter = new Intl.DateTimeFormat("en-ZA", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  timeZone: "Africa/Johannesburg",
});

/** Live local time in Cape Town; renders nothing until mounted to avoid hydration drift. */
export function LocalTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(formatter.format(new Date()));
    const first = window.setTimeout(tick, 0);
    const interval = window.setInterval(tick, 15_000);
    return () => {
      window.clearTimeout(first);
      window.clearInterval(interval);
    };
  }, []);

  return <span suppressHydrationWarning>{time ?? "--:--"}</span>;
}
