import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";
import { Heart, MessageCircle, Users, Sparkles } from "lucide-react";

const counters = [
  { label: "Messages Sent", target: 12450, icon: MessageCircle, emoji: "💌" },
  { label: "Women Celebrated", target: 8640, icon: Heart, emoji: "🌸" },
  { label: "Countries Reached", target: 95, icon: Users, emoji: "🌍" },
  { label: "Stories Shared", target: 3280, icon: Sparkles, emoji: "✨" },
];

function useCounter(target: number, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let frame: number;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [target, start]);

  return count;
}

const CounterCard = ({ label, target, icon: Icon, emoji, started, delay }: {
  label: string; target: number; icon: typeof Heart; emoji: string; started: boolean; delay: number;
}) => {
  const count = useCounter(target, started);
  return (
    <div
      className="gradient-card rounded-2xl p-6 md:p-8 shadow-card hover:shadow-glow transition-all hover:-translate-y-1 text-center animate-slide-up"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mx-auto mb-4">
        <Icon className="w-6 h-6 text-primary-foreground" />
      </div>
      <p className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">
        {count.toLocaleString()}+
      </p>
      <p className="font-body text-sm text-muted-foreground">
        {emoji} {label}
      </p>
    </div>
  );
};

const GratitudeCounter = () => {
  const { ref, inView } = useInView();

  return (
    <section className="py-24 px-4 gradient-soft" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
          Our <span className="text-gradient">Impact</span>
        </h2>
        <p className="text-center text-muted-foreground font-body mb-12 max-w-xl mx-auto">
          Together we're celebrating women around the world.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {counters.map((c, i) => (
            <CounterCard key={c.label} {...c} started={inView} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GratitudeCounter;
