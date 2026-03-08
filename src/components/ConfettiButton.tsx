import { useCallback } from "react";
import confetti from "canvas-confetti";

const ConfettiButton = () => {
  const celebrate = useCallback(() => {
    const duration = 3000;
    const end = Date.now() + duration;

    const colors = ["#7c3aed", "#ec4899", "#f472b6", "#a855f7", "#e879f9"];

    const frame = () => {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors,
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors,
      });

      if (Date.now() < end) requestAnimationFrame(frame);
    };

    // Big burst first
    confetti({
      particleCount: 100,
      spread: 100,
      origin: { y: 0.6 },
      colors,
    });

    frame();
  }, []);

  return (
    <button
      onClick={celebrate}
      className="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-accent text-primary-foreground font-body font-bold text-lg shadow-glow hover:scale-105 transition-transform duration-300 animate-pulse-soft"
    >
      🎉 Celebrate Women!
    </button>
  );
};

export default ConfettiButton;
