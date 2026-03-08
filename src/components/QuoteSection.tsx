import { useInView } from "@/hooks/useInView";

const quotes = [
  { text: "A woman is like a tea bag — you never know how strong she is until she gets in hot water.", author: "Eleanor Roosevelt" },
  { text: "I raise up my voice — not so that I can shout, but so that those without a voice can be heard.", author: "Malala Yousafzai" },
  { text: "The most courageous act is still to think for yourself. Aloud.", author: "Coco Chanel" },
  { text: "There is no limit to what we, as women, can accomplish.", author: "Michelle Obama" },
  { text: "I am not free while any woman is unfree, even when her shackles are very different from my own.", author: "Audre Lorde" },
];

const QuoteSection = () => {
  const { ref, inView } = useInView();

  return (
    <section className="py-24 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
          Words of <span className="text-gradient">Power</span>
        </h2>

        <div className="space-y-8">
          {quotes.map((q, i) => (
            <div
              key={i}
              className={`relative gradient-card rounded-2xl p-8 md:p-10 shadow-card hover:shadow-glow transition-all duration-500 ${
                inView ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <span className="absolute -top-4 left-6 text-6xl text-primary/20 font-display">"</span>
              <p className="font-display text-lg md:text-xl text-foreground italic leading-relaxed mb-4">
                {q.text}
              </p>
              <p className="font-body text-sm text-primary font-bold">— {q.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
