import { useInView } from "@/hooks/useInView";

const milestones = [
  { year: "1903", event: "Marie Curie becomes the first woman to win a Nobel Prize", emoji: "⚗️" },
  { year: "1920", event: "Women gain voting rights in the USA (19th Amendment)", emoji: "🗳️" },
  { year: "1963", event: "Valentina Tereshkova becomes the first woman in space", emoji: "🚀" },
  { year: "1966", event: "Indira Gandhi becomes first female Prime Minister of India", emoji: "🇮🇳" },
  { year: "1979", event: "Mother Teresa wins the Nobel Peace Prize", emoji: "🕊️" },
  { year: "2003", event: "Kalpana Chawla's historic space mission aboard Columbia", emoji: "🌌" },
  { year: "2014", event: "Malala Yousafzai becomes youngest Nobel Prize laureate", emoji: "📚" },
  { year: "2023", event: "Record number of women CEOs in Fortune 500 companies", emoji: "💼" },
];

const Timeline = () => {
  const { ref, inView } = useInView();

  return (
    <section className="py-24 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
          Women Achievers <span className="text-gradient">Timeline</span>
        </h2>
        <p className="text-center text-muted-foreground font-body mb-16 max-w-xl mx-auto">
          Key milestones in the journey of women's empowerment.
        </p>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-border hidden md:block" />
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border md:hidden" />

          <div className="space-y-12">
            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={m.year}
                  className={`relative flex items-center ${
                    inView ? "animate-slide-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${i * 0.12}s` }}
                >
                  {/* Mobile layout */}
                  <div className="md:hidden flex items-start gap-4 pl-12">
                    <div className="absolute left-4 top-1 w-5 h-5 rounded-full gradient-accent border-2 border-background z-10" />
                    <div className="gradient-card rounded-2xl p-5 shadow-card hover:shadow-glow transition-all">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-2xl">{m.emoji}</span>
                        <span className="font-display text-lg font-bold text-primary">{m.year}</span>
                      </div>
                      <p className="font-body text-sm text-foreground">{m.event}</p>
                    </div>
                  </div>

                  {/* Desktop layout */}
                  <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] items-center w-full gap-4">
                    <div className={isLeft ? "" : "order-3"}>
                      <div
                        className={`gradient-card rounded-2xl p-6 shadow-card hover:shadow-glow transition-all ${
                          isLeft ? "text-right" : "text-left"
                        }`}
                      >
                        <div className={`flex items-center gap-2 mb-1 ${isLeft ? "justify-end" : ""}`}>
                          {!isLeft && <span className="text-2xl">{m.emoji}</span>}
                          <span className="font-display text-xl font-bold text-primary">{m.year}</span>
                          {isLeft && <span className="text-2xl">{m.emoji}</span>}
                        </div>
                        <p className="font-body text-sm text-foreground">{m.event}</p>
                      </div>
                    </div>

                    <div className="order-2 w-5 h-5 rounded-full gradient-accent border-2 border-background z-10 shrink-0" />

                    <div className={isLeft ? "order-3" : ""} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
