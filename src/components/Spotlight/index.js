import React, { useEffect, useState } from "react";

/** Very subtle luminosity — avoids competing with content */
export default function Spotlight() {
  const [pos, setPos] = useState({ x: 48, y: 38 });

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return undefined;

    const move = (e) => {
      setPos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        background: `
          radial-gradient(860px circle at ${pos.x}% ${pos.y}%, rgba(167, 139, 250, 0.045), transparent 58%),
          radial-gradient(620px circle at ${100 - pos.x * 0.4}% ${100 - pos.y * 0.35}%, rgba(94, 234, 212, 0.03), transparent 55%)
        `,
      }}
    />
  );
}
