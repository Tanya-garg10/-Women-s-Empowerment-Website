import { Heart, Globe, Users, Award } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const features = [
  {
    icon: Globe,
    title: "Global Movement",
    desc: "Celebrated worldwide on March 8th since 1911, uniting people across cultures.",
  },
  {
    icon: Heart,
    title: "Equality & Rights",
    desc: "Advocating for gender equality, reproductive rights, and ending violence against women.",
  },
  {
    icon: Users,
    title: "Community & Solidarity",
    desc: "Bringing women together to share stories, support one another, and uplift communities.",
  },
  {
    icon: Award,
    title: "Celebrating Achievements",
    desc: "Honoring the social, economic, cultural, and political achievements of women.",
  },
];

const AboutSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-24 px-4 gradient-soft" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            What is <span className="text-gradient">Women's Day</span>?
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            International Women's Day is a global day celebrating the social, economic,
            cultural, and political achievements of women — while also marking a call to
            action for accelerating gender parity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`gradient-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2 ${
                inView ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-5">
                <f.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{f.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
