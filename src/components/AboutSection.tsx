import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import straightHair from "@/assets/straight-hair.jpg";

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-24 md:py-36 bg-cream-gradient overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-700 ${
              isVisible ? "opacity-100 animate-slide-left" : "opacity-0"
            }`}
          >
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={straightHair}
                alt="Resultado impecável — cabelo liso e brilhante"
                className="w-full h-[500px] md:h-[600px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-charcoal/5 rounded-sm" />
            </div>
            {/* Decorative gold frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold-light/30 rounded-sm -z-10" />
          </div>

          {/* Content */}
          <div>
            <div
              className={`transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
                Nossa essência
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-light text-charcoal leading-[1.1] mb-8">
                Excelência em cada{" "}
                <em className="italic">detalhe</em>
              </h2>
            </div>

            <div
              className={`space-y-6 transition-all duration-700 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <p className="font-body text-charcoal-light leading-relaxed">
                No Victor Instituto de Beleza, acreditamos que cada pessoa carrega uma 
                beleza única — e nosso papel é revelá-la em sua plenitude. Com profissionais 
                altamente qualificados e um ambiente pensado para proporcionar conforto e 
                exclusividade, oferecemos uma experiência que vai além do espelho.
              </p>
              <p className="font-body text-charcoal-light leading-relaxed">
                Utilizamos técnicas modernas, produtos premium e um atendimento personalizado 
                que transforma cada visita em um momento de cuidado e renovação. Aqui, sua 
                autoestima é nossa prioridade.
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
