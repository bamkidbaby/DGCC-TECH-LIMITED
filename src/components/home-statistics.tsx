"use client";

import { useEffect, useRef, useState } from "react";

type Statistic = {
  value: number;
  label: string;
  detail: string;
};

const statistics: Statistic[] = [
  {
    value: 10,
    label: "service areas",
    detail: "Technology, creative and practical support services listed by DGCC TECH.",
  },
  {
    value: 4,
    label: "training disciplines",
    detail: "Web development, graphic design, computer engineering and cyber security.",
  },
  {
    value: 2,
    label: "ways to learn",
    detail: "In-person and online technology training options.",
  },
  {
    value: 2,
    label: "support modes",
    detail: "Hands-on computer support and remote IT assistance.",
  },
];

function useCountUp(value: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const frame = requestAnimationFrame(() => setCount(value));
      return () => cancelAnimationFrame(frame);
    }

    const duration = 900;
    const startedAt = performance.now();
    let frame = 0;

    const update = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      setCount(Math.round(value * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(update);
    };

    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [active, value]);

  return count;
}

function StatisticItem({ statistic, active }: { statistic: Statistic; active: boolean }) {
  const count = useCountUp(statistic.value, active);

  return (
    <article>
      <strong>{count}</strong>
      <h3>{statistic.label}</h3>
      <p>{statistic.detail}</p>
    </article>
  );
}

export default function HomeStatistics() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element || active) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setActive(true);
        observer.disconnect();
      }
    }, { threshold: 0.25 });
    observer.observe(element);
    return () => observer.disconnect();
  }, [active]);

  return (
    <section className="home-statistics" ref={sectionRef} aria-label="DGCC TECH capabilities at a glance">
      <div className="wrap home-statistics-grid">
        {statistics.map((statistic) => (
          <StatisticItem key={statistic.label} statistic={statistic} active={active} />
        ))}
      </div>
    </section>
  );
}
