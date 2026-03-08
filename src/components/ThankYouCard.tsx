import { useState, useRef } from "react";
import html2canvas from "html2canvas";
import { Download, RefreshCw } from "lucide-react";

const backgrounds = [
  "linear-gradient(135deg, hsl(280, 60%, 50%), hsl(330, 60%, 55%))",
  "linear-gradient(135deg, hsl(340, 70%, 60%), hsl(20, 80%, 65%))",
  "linear-gradient(135deg, hsl(200, 60%, 50%), hsl(260, 60%, 55%))",
  "linear-gradient(135deg, hsl(310, 50%, 55%), hsl(350, 60%, 60%))",
];

const ThankYouCard = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [bgIndex, setBgIndex] = useState(0);
  const [generated, setGenerated] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    setGenerated(true);
  };

  const handleDownload = async () => {
    if (!cardRef.current) return;
    const canvas = await html2canvas(cardRef.current, { scale: 2, useCORS: true });
    const link = document.createElement("a");
    link.download = `thank-you-${name.replace(/\s+/g, "-").toLowerCase()}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  const cycleBg = () => setBgIndex((i) => (i + 1) % backgrounds.length);

  return (
    <section className="py-24 px-4 gradient-soft">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
          Digital <span className="text-gradient">Thank You</span> Card
        </h2>
        <p className="text-center text-muted-foreground font-body mb-12 max-w-xl mx-auto">
          Create a beautiful card for the special woman in your life. Download and share!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <form onSubmit={handleGenerate} className="gradient-card rounded-2xl p-8 shadow-card">
            <div className="space-y-4">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Her name (e.g. Mom, Priya, Teacher)"
                maxLength={50}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your heartfelt message..."
                rows={4}
                maxLength={200}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
              />
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 gradient-accent text-primary-foreground font-body font-bold py-3 rounded-xl hover:opacity-90 transition-opacity"
                >
                  ✨ Generate Card
                </button>
                {generated && (
                  <button
                    type="button"
                    onClick={cycleBg}
                    className="px-4 py-3 rounded-xl border border-border bg-background text-foreground hover:bg-muted transition-colors"
                  >
                    <RefreshCw className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          </form>

          <div className="flex flex-col items-center gap-4">
            <div
              ref={cardRef}
              className="w-full aspect-[4/3] rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-glow overflow-hidden"
              style={{ background: backgrounds[bgIndex] }}
            >
              {generated ? (
                <>
                  <p className="text-primary-foreground/80 font-body text-sm mb-2">Happy Women's Day 🌸</p>
                  <p className="text-primary-foreground font-display text-2xl md:text-3xl font-bold mb-4">
                    Dear {name}
                  </p>
                  <p className="text-primary-foreground/90 font-body text-sm md:text-base leading-relaxed max-w-xs">
                    "{message}"
                  </p>
                  <p className="text-primary-foreground/60 font-body text-xs mt-6">— With love ❤️</p>
                </>
              ) : (
                <div className="text-primary-foreground/60 font-body text-sm">
                  <p className="text-4xl mb-3">💌</p>
                  <p>Your card preview will appear here</p>
                </div>
              )}
            </div>

            {generated && (
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-accent text-primary-foreground font-body font-bold hover:opacity-90 transition-opacity"
              >
                <Download className="w-4 h-4" /> Download Card
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThankYouCard;
