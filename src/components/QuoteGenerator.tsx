import { useState } from "react";
import { RefreshCw } from "lucide-react";

const allQuotes = [
  { text: "A woman is like a tea bag — you never know how strong she is until she gets in hot water.", author: "Eleanor Roosevelt" },
  { text: "I raise up my voice — not so that I can shout, but so that those without a voice can be heard.", author: "Malala Yousafzai" },
  { text: "The most courageous act is still to think for yourself. Aloud.", author: "Coco Chanel" },
  { text: "There is no limit to what we, as women, can accomplish.", author: "Michelle Obama" },
  { text: "I am not free while any woman is unfree, even when her shackles are very different from my own.", author: "Audre Lorde" },
  { text: "Well-behaved women seldom make history.", author: "Laurel Thatcher Ulrich" },
  { text: "The question isn't who is going to let me; it's who is going to stop me.", author: "Ayn Rand" },
  { text: "I alone cannot change the world, but I can cast a stone across the waters to create many ripples.", author: "Mother Teresa" },
  { text: "Life is not measured by the number of breaths we take, but by the moments that take our breath away.", author: "Maya Angelou" },
  { text: "You may not control all the events that happen to you, but you can decide not to be reduced by them.", author: "Maya Angelou" },
  { text: "Do not wait for leaders; do it alone, person to person.", author: "Mother Teresa" },
  { text: "I have learned over the years that when one's mind is made up, this diminishes fear.", author: "Rosa Parks" },
  { text: "Think like a queen. A queen is not afraid to fail.", author: "Oprah Winfrey" },
  { text: "Nothing is impossible; the word itself says 'I'm possible!'", author: "Audrey Hepburn" },
  { text: "Women are the real architects of society.", author: "Harriet Beecher Stowe" },
];

const QuoteGenerator = () => {
  const [current, setCurrent] = useState(() => allQuotes[Math.floor(Math.random() * allQuotes.length)]);
  const [animKey, setAnimKey] = useState(0);

  const generate = () => {
    let next;
    do {
      next = allQuotes[Math.floor(Math.random() * allQuotes.length)];
    } while (next.text === current.text && allQuotes.length > 1);
    setCurrent(next);
    setAnimKey((k) => k + 1);
  };

  return (
    <section className="py-24 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
          Quote <span className="text-gradient">Generator</span>
        </h2>
        <p className="text-muted-foreground font-body mb-12">
          Click to discover inspiring words from powerful women.
        </p>

        <div
          key={animKey}
          className="gradient-card rounded-2xl p-10 md:p-14 shadow-glow mb-8 animate-slide-up"
        >
          <span className="text-6xl text-primary/20 font-display block mb-2">"</span>
          <p className="font-display text-xl md:text-2xl text-foreground italic leading-relaxed mb-6">
            {current.text}
          </p>
          <p className="font-body text-primary font-bold">— {current.author}</p>
        </div>

        <button
          onClick={generate}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-accent text-primary-foreground font-body font-bold text-lg hover:scale-105 transition-transform"
        >
          <RefreshCw className="w-5 h-5" /> New Quote
        </button>
      </div>
    </section>
  );
};

export default QuoteGenerator;
