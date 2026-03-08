import { useInView } from "@/hooks/useInView";
import scienceImg from "@/assets/gallery-science.jpg";
import sportsImg from "@/assets/gallery-sports.jpg";
import leadershipImg from "@/assets/gallery-leadership.jpg";
import educationImg from "@/assets/gallery-education.jpg";

const gallery = [
  { img: scienceImg, label: "Science & Innovation", span: "md:col-span-2 md:row-span-2" },
  { img: sportsImg, label: "Sports & Athletics", span: "" },
  { img: leadershipImg, label: "Leadership", span: "" },
  { img: educationImg, label: "Education", span: "md:col-span-2" },
];

const GallerySection = () => {
  const { ref, inView } = useInView();

  return (
    <section className="py-24 px-4 gradient-soft" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
          Women in <span className="text-gradient">Action</span>
        </h2>
        <p className="text-center text-muted-foreground font-body mb-12 max-w-xl mx-auto">
          Celebrating women breaking barriers across every field.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {gallery.map((item, i) => (
            <div
              key={item.label}
              className={`group relative overflow-hidden rounded-2xl ${item.span} ${
                inView ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <img
                src={item.img}
                alt={`Women in ${item.label}`}
                className="w-full h-64 md:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 gradient-hero opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="font-display text-lg font-bold text-primary-foreground">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
