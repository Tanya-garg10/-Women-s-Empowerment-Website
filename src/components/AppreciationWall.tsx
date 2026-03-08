import { useState } from "react";
import { Send } from "lucide-react";
import { useInView } from "@/hooks/useInView";

interface Message {
  id: number;
  name: string;
  recipient: string;
  message: string;
}

const initialMessages: Message[] = [
  { id: 1, name: "Sarah", recipient: "My Mom", message: "You taught me everything I know about being strong. I love you! 💕" },
  { id: 2, name: "James", recipient: "Dr. Amira", message: "Thank you for inspiring me to pursue science. You changed my life." },
  { id: 3, name: "Maria", recipient: "My Sister", message: "You're the bravest woman I know. Keep shining! ✨" },
];

const AppreciationWall = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [name, setName] = useState("");
  const [recipient, setRecipient] = useState("");
  const [message, setMessage] = useState("");
  const { ref, inView } = useInView();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !recipient.trim() || !message.trim()) return;
    setMessages((prev) => [
      { id: Date.now(), name: name.trim(), recipient: recipient.trim(), message: message.trim() },
      ...prev,
    ]);
    setName("");
    setRecipient("");
    setMessage("");
  };

  return (
    <section className="py-24 px-4 gradient-soft" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
          Appreciation <span className="text-gradient">Wall</span>
        </h2>
        <p className="text-center text-muted-foreground font-body mb-12 max-w-xl mx-auto">
          Write a message for a woman who inspires you — a mother, sister, friend, or teacher.
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto gradient-card rounded-2xl p-8 shadow-card mb-12"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
            <input
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              placeholder="For whom? (e.g. My Mom)"
              className="rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your appreciation message..."
            rows={3}
            className="w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 mb-4 resize-none"
          />
          <button
            type="submit"
            className="w-full gradient-accent text-primary-foreground font-body font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          >
            <Send className="w-4 h-4" /> Send Your Message
          </button>
        </form>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {messages.map((m, i) => (
            <div
              key={m.id}
              className={`break-inside-avoid gradient-card rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-500 ${
                inView ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <p className="font-body text-foreground text-sm leading-relaxed mb-3">"{m.message}"</p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full gradient-accent flex items-center justify-center text-primary-foreground text-xs font-bold">
                  {m.name[0]}
                </div>
                <div>
                  <p className="font-body text-xs font-bold text-foreground">{m.name}</p>
                  <p className="font-body text-xs text-muted-foreground">To: {m.recipient}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppreciationWall;
