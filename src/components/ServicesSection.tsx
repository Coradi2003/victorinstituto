import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const services = [
  {
    title: "Coloração & Mechas",
    description: "Técnicas exclusivas de coloração, mechas, balayage e reflexos que realçam sua beleza natural com resultados impecáveis.",
    icon: "✦",
  },
  {
    title: "Corte & Styling",
    description: "Cortes modernos e personalizados, escova modelada, penteados sofisticados para cada ocasião e estilo.",
    icon: "✦",
  },
  {
    title: "Tratamentos Capilares",
    description: "Hidratação profunda, reconstrução, cauterização e tratamentos que devolvem a vida e o brilho aos seus fios.",
    icon: "✦",
  },
  {
    title: "Nail Design",
    description: "Unhas decoradas, esmaltação em gel, alongamento e nail art com acabamento premium e atenção aos detalhes.",
    icon: "✦",
  },
  {
    title: "Tranças & Penteados",
    description: "Tranças artísticas, box braids, penteados elaborados feitos com técnica, carinho e criatividade.",
    icon: "✦",
  },
  {
    title: "Estética & Bem-estar",
    description: "Cuidados estéticos completos que promovem equilíbrio, relaxamento e a valorização da sua beleza única.",
    icon: "✦",
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-24 md:py-36 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Nossos serviços
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-charcoal leading-[1.1] mb-6">
            Experiências que{" "}
            <em className="italic">transformam</em>
          </h2>
          <p className="font-body text-charcoal-light leading-relaxed">
            Cada serviço é uma experiência cuidadosamente pensada para realçar 
            o que há de mais bonito em você.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`bg-background p-10 md:p-12 group hover:bg-card transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{
                transitionDelay: isVisible ? `${200 + i * 80}ms` : "0ms",
              }}
            >
              <span className="text-gold text-lg mb-6 block font-body">
                {service.icon}
              </span>
              <h3 className="font-display text-2xl font-light text-charcoal mb-4 group-hover:text-gold transition-colors duration-300">
                {service.title}
              </h3>
              <p className="font-body text-sm text-charcoal-light leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
