import { useInView } from "@/hooks/useInView";
import malala from "@/assets/malala.jpg";
import marieCurie from "@/assets/marie-curie.jpg";
import rosaParks from "@/assets/rosa-parks.jpg";
import fridaKahlo from "@/assets/frida-kahlo.jpg";
import ameliaEarhart from "@/assets/amelia-earhart.jpg";
import adaLovelace from "@/assets/ada-lovelace.jpg";

const women = [
  { name: "Malala Yousafzai", role: "Education Activist & Nobel Laureate", img: malala },
  { name: "Marie Curie", role: "Pioneering Physicist & Chemist", img: marieCurie },
  { name: "Rosa Parks", role: "Civil Rights Icon", img: rosaParks },
  { name: "Frida Kahlo", role: "Legendary Artist & Cultural Icon", img: fridaKahlo },
  { name: "Amelia Earhart", role: "Aviation Pioneer", img: ameliaEarhart },
  { name: "Ada Lovelace", role: "First Computer Programmer", img: adaLovelace },
];

const InspirationalWomen = () => {
  const { ref, inView } = useInView();

  return (
    <section className="py-24 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
          Inspirational <span className="text-gradient">Women</span>
        </h2>
        <p className="text-center text-muted-foreground font-body mb-16 max-w-xl mx-auto">
          Women who changed the world with their courage, brilliance, and determination.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {women.map((w, i) => (
            <div
              key={w.name}
              className={`group gradient-card rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2 ${
                inView ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={w.img}
                  alt={`Portrait of ${w.name}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-display text-xl font-semibold text-foreground">{w.name}</h3>
                <p className="font-body text-muted-foreground text-sm mt-1">{w.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InspirationalWomen;
