import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-women.jpg";
import ConfettiButton from "@/components/ConfettiButton";

const Sparkle = ({ style }: { style: React.CSSProperties }) => (
  <div
    className="absolute text-primary-foreground animate-sparkle pointer-events-none"
    style={style}
  >
    ✦
  </div>
);

const Flower = ({ style }: { style: React.CSSProperties }) => (
  <div
    className="absolute animate-float pointer-events-none text-2xl md:text-4xl opacity-60"
    style={style}
  >
    🌸
  </div>
);

const HeroSection = () => {
  const [sparkles, setSparkles] = useState<React.CSSProperties[]>([]);

  useEffect(() => {
    const items: React.CSSProperties[] = Array.from({ length: 20 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      fontSize: `${Math.random() * 16 + 8}px`,
      animationDelay: `${Math.random() * 4}s`,
      animationDuration: `${Math.random() * 2 + 2}s`,
    }));
    setSparkles(items);
  }, []);

  const flowers: React.CSSProperties[] = [
    { left: "5%", top: "20%", animationDelay: "0s" },
    { right: "8%", top: "15%", animationDelay: "1s" },
    { left: "15%", bottom: "20%", animationDelay: "2s" },
    { right: "12%", bottom: "25%", animationDelay: "0.5s" },
    { left: "40%", top: "10%", animationDelay: "1.5s" },
    { right: "30%", bottom: "15%", animationDelay: "3s" },
  ];

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero pt-20">
      {sparkles.map((style, i) => (
        <Sparkle key={i} style={style} />
      ))}
      {flowers.map((style, i) => (
        <Flower key={`flower-${i}`} style={style} />
      ))}

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-slide-up">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 leading-tight">
          Happy Women's Day
        </h1>
        <p className="font-body text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Celebrating Strength, Courage, and Achievements of Women Around the World.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToAbout}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-card text-primary font-body font-bold text-lg shadow-glow hover:scale-105 transition-transform duration-300"
          >
            🌺 Celebrate Her
          </button>
          <ConfettiButton />
        </div>

        <div className="mt-12">
          <img
            src={heroImage}
            alt="Diverse women standing together celebrating International Women's Day"
            className="mx-auto max-w-full md:max-w-2xl rounded-2xl shadow-glow"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
