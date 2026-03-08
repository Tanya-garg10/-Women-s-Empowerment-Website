import { useState, useEffect, useCallback } from "react";

const WOMEN = [
  { name: "Marie Curie", emoji: "⚗️" },
  { name: "Malala", emoji: "📚" },
  { name: "Frida Kahlo", emoji: "🎨" },
  { name: "Rosa Parks", emoji: "✊" },
  { name: "Amelia Earhart", emoji: "✈️" },
  { name: "Ada Lovelace", emoji: "💻" },
];

interface Card {
  id: number;
  name: string;
  emoji: string;
  flipped: boolean;
  matched: boolean;
}

const MemoryGame = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [selected, setSelected] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [won, setWon] = useState(false);

  const initGame = useCallback(() => {
    const deck = [...WOMEN, ...WOMEN]
      .sort(() => Math.random() - 0.5)
      .map((w, i) => ({ id: i, ...w, flipped: false, matched: false }));
    setCards(deck);
    setSelected([]);
    setMoves(0);
    setWon(false);
  }, []);

  useEffect(() => { initGame(); }, [initGame]);

  useEffect(() => {
    if (selected.length === 2) {
      const [a, b] = selected;
      const match = cards[a].name === cards[b].name;
      setTimeout(() => {
        setCards(prev =>
          prev.map((c, i) =>
            i === a || i === b
              ? { ...c, flipped: match, matched: match || c.matched }
              : c
          )
        );
        setSelected([]);
        if (match) {
          const allMatched = cards.every(
            (c, i) => c.matched || i === a || i === b
          );
          if (allMatched) setWon(true);
        }
      }, 800);
    }
  }, [selected, cards]);

  const handleClick = (index: number) => {
    if (selected.length >= 2 || cards[index].flipped || cards[index].matched) return;
    setCards(prev => prev.map((c, i) => (i === index ? { ...c, flipped: true } : c)));
    setSelected(prev => [...prev, index]);
    setMoves(m => m + 1);
  };

  return (
    <section className="py-20 px-4 gradient-soft">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
          🎮 Memory Game
        </h2>
        <p className="font-body text-muted-foreground mb-6">
          Match the famous women! Flip cards to find pairs.
        </p>

        <div className="flex items-center justify-center gap-6 mb-6 font-body text-sm">
          <span className="text-muted-foreground">Moves: <strong className="text-foreground">{moves}</strong></span>
          <button
            onClick={initGame}
            className="px-4 py-2 rounded-full bg-primary text-primary-foreground font-bold text-sm hover:scale-105 transition-transform"
          >
            🔄 Restart
          </button>
        </div>

        {won && (
          <div className="mb-6 p-4 rounded-xl bg-primary/10 border border-primary/20 animate-slide-up">
            <p className="font-display text-2xl font-bold text-primary">🎉 You Won!</p>
            <p className="font-body text-muted-foreground">Completed in {moves} moves!</p>
          </div>
        )}

        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 max-w-md mx-auto">
          {cards.map((card, i) => (
            <button
              key={card.id}
              onClick={() => handleClick(i)}
              className={`aspect-square rounded-xl text-3xl font-bold flex flex-col items-center justify-center gap-1 transition-all duration-300 shadow-card ${
                card.flipped || card.matched
                  ? "bg-card border-2 border-primary/30 scale-95"
                  : "gradient-hero text-primary-foreground hover:scale-105 cursor-pointer"
              } ${card.matched ? "opacity-70" : ""}`}
            >
              {card.flipped || card.matched ? (
                <>
                  <span>{card.emoji}</span>
                  <span className="text-[10px] font-body text-muted-foreground leading-tight">{card.name}</span>
                </>
              ) : (
                <span>?</span>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemoryGame;
