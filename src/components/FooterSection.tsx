import { Heart } from "lucide-react";

const FooterSection = () => (
  <footer className="gradient-hero py-16 px-4">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
        Empowered Women Empower the World
      </h2>
      <p className="font-body text-primary-foreground/80 mb-8">
        Happy International Women's Day 2026 🌸
      </p>

      <div className="flex items-center justify-center gap-6 mb-8">
        {["Instagram", "Twitter", "Facebook", "LinkedIn"].map((social) => (
          <a
            key={social}
            href="#"
            className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/30 transition-colors font-body text-xs"
            aria-label={social}
          >
            {social[0]}
          </a>
        ))}
      </div>

      <div className="flex items-center justify-center gap-1 text-primary-foreground/70 font-body text-sm">
        Made with <Heart className="w-4 h-4 text-secondary animate-pulse-soft" /> for all the incredible women
      </div>
    </div>
  </footer>
);

export default FooterSection;
