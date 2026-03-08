import { useState } from "react";
import { useInView } from "@/hooks/useInView";

const fields = [
  {
    emoji: "👩‍🔬",
    title: "Science",
    color: "from-blue-500 to-purple-500",
    description: "From Marie Curie to Jennifer Doudna, women have revolutionized our understanding of the universe.",
    stat: "Only 33% of researchers worldwide are women — let's change that!",
  },
  {
    emoji: "👩‍💻",
    title: "Technology",
    color: "from-purple-500 to-pink-500",
    description: "Ada Lovelace wrote the first algorithm. Today, women are leading AI, cybersecurity, and innovation.",
    stat: "Women founded 20% of tech startups in 2024.",
  },
  {
    emoji: "👩‍⚕️",
    title: "Healthcare",
    color: "from-pink-500 to-red-400",
    description: "From Florence Nightingale to frontline workers, women form the backbone of global healthcare.",
    stat: "Women make up 70% of the global health workforce.",
  },
  {
    emoji: "👩‍✈️",
    title: "Aviation",
    color: "from-cyan-500 to-blue-500",
    description: "Amelia Earhart blazed the trail. Today, women pilot commercial and military aircraft worldwide.",
    stat: "Women represent 5% of airline pilots — pioneers keep rising.",
  },
  {
    emoji: "👩‍🏫",
    title: "Education",
    color: "from-green-500 to-teal-500",
    description: "Women educators shape future generations. From village schools to universities, they lead with wisdom.",
    stat: "66% of teachers globally are women.",
  },
  {
    emoji: "👩‍💼",
    title: "Leadership",
    color: "from-amber-500 to-orange-500",
    description: "From Indira Gandhi to Jacinda Ardern, women are leading nations and corporations with vision.",
    stat: "Women hold 31% of senior management roles globally.",
  },
];

const WomenFields = () => {
  const { ref, inView } = useInView();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 gradient-soft" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
          Women in <span className="text-gradient">Every Field</span>
        </h2>
        <p className="text-center text-muted-foreground font-body mb-12 max-w-xl mx-auto">
          Hover to discover how women are making an impact everywhere.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fields.map((f, i) => (
            <div
              key={f.title}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`relative gradient-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden ${
                inView ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="text-5xl mb-4">{f.emoji}</div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">{f.title}</h3>

              <div
                className={`transition-all duration-500 overflow-hidden ${
                  hovered === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="font-body text-sm text-foreground leading-relaxed mb-3">{f.description}</p>
                <p className="font-body text-xs text-primary font-bold">{f.stat}</p>
              </div>

              {hovered !== i && (
                <p className="font-body text-sm text-muted-foreground">Hover to learn more →</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WomenFields;
