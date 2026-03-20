import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import hairPink from "@/assets/hair-pink.webp";
import beforeAfter from "@/assets/before-after.webp";
import blowout from "@/assets/blowout.jpg";
import nailsGlitter from "@/assets/nails-glitter.webp";
import braids from "@/assets/braids.jpg";
import nailsGreen from "@/assets/nails-green.jpg";
import braidsRibbon from "@/assets/braids-ribbon.webp";

const images = [
  { src: hairPink, alt: "Cabelo com pontas rosa vibrante", span: "md:col-span-2 md:row-span-2" },
  { src: nailsGlitter, alt: "Unhas com glitter delicado", span: "" },
  { src: braids, alt: "Tranças artísticas", span: "" },
  { src: blowout, alt: "Escova perfeita e volumosa", span: "md:col-span-2" },
  { src: nailsGreen, alt: "Nail art verde com detalhes florais", span: "" },
  { src: braidsRibbon, alt: "Tranças com fitas decorativas", span: "" },
  { src: beforeAfter, alt: "Antes e depois — transformação capilar", span: "md:col-span-2" },
];

const GallerySection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section ref={ref} className="py-24 md:py-36 bg-cream-gradient overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Nosso portfólio
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-charcoal leading-[1.1]">
            Resultados que{" "}
            <em className="italic">encantam</em>
          </h2>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-sm group ${img.span} ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-[0.97]"
              } transition-all duration-700`}
              style={{ transitionDelay: isVisible ? `${150 + i * 100}ms` : "0ms" }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-500" />
              <div className="absolute inset-0 ring-1 ring-inset ring-charcoal/5 rounded-sm" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
