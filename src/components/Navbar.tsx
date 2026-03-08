import { useState } from "react";
import { Menu, X } from "lucide-react";
import ConfettiButton from "@/components/ConfettiButton";

const links = [
  { label: "About", href: "#about" },
  { label: "Women", href: "#inspirational" },
  { label: "Timeline", href: "#timeline" },
  { label: "Fields", href: "#fields" },
  { label: "Thank You Card", href: "#thankyou" },
  { label: "Quotes", href: "#quotes" },
  { label: "Quiz", href: "#quiz" },
  { label: "Gallery", href: "#gallery" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <span className="font-display text-xl font-bold text-gradient">IWD 2026</span>

        <div className="hidden md:flex items-center gap-5">
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => handleClick(l.href)}
              className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </button>
          ))}
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-2">
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => handleClick(l.href)}
              className="block w-full text-left font-body text-sm text-muted-foreground hover:text-primary py-2 transition-colors"
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
