import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const testimonials = [
  {
    name: "Renata Oliveira",
    text: "Saí de lá me sentindo outra pessoa. O atendimento é impecável, o ambiente é lindo e o resultado superou todas as minhas expectativas. Melhor instituto de beleza de Natal!",
    service: "Coloração & Mechas",
  },
  {
    name: "Camila Souza",
    text: "O Victor e sua equipe são artistas de verdade. Fiz tranças para minha filha e ficou perfeito. Atenção aos detalhes, carinho e um profissionalismo que você sente desde a entrada.",
    service: "Tranças Infantis",
  },
  {
    name: "Patrícia Medeiros",
    text: "Minhas unhas nunca ficaram tão lindas. O acabamento é de outro nível, dura muito mais do que qualquer outro lugar. Virei cliente fiel e recomendo de olhos fechados.",
    service: "Nail Design",
  },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-24 md:py-36 bg-dark-gradient text-cream overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold-light mb-4">
            Depoimentos
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-cream leading-[1.1]">
            Quem vive, <em className="italic">recomenda</em>
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`relative transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${300 + i * 150}ms` : "0ms" }}
            >
              {/* Quote mark */}
              <span className="font-display text-6xl text-gold/20 leading-none block mb-4">"</span>
              
              <p className="font-body text-cream/80 leading-relaxed mb-8 text-[15px]">
                {t.text}
              </p>

              <div className="border-t border-cream/10 pt-6">
                <p className="font-display text-lg text-cream">{t.name}</p>
                <p className="font-body text-xs text-gold-light tracking-wide mt-1">
                  {t.service}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
