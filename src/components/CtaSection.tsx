import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const CtaSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-28 md:py-40 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/[0.03] rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-rose/[0.04] rounded-full blur-3xl" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div
          className={`text-center max-w-3xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-6">
            Sua transformação começa agora
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-charcoal leading-[1.05] mb-8">
            Você merece se sentir <em className="italic">extraordinária</em>
          </h2>
          <p className="font-body text-charcoal-light text-lg leading-relaxed mb-12 max-w-xl mx-auto">
            Agende seu horário e viva a experiência Victor Instituto de Beleza.
            Nosso time de especialistas está pronto para realçar o que há de
            mais bonito em você.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://api.whatsapp.com/send?phone=5584994555682&text=Ol%C3%A1!%20Vim%20pelo%20site%20do%20Victor%20Instituto%20de%20Beleza%2C%20gostei%20muito%20do%20trabalho%20e%20quero%20saber%20sobre%20hor%C3%A1rios%20dispon%C3%ADveis."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-gold-gradient px-10 py-4 text-cream font-body text-sm tracking-widest uppercase rounded-sm hover:brightness-110 active:scale-[0.97] transition-all duration-300 gold-shadow"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Quero agendar agora
            </a>

            <a
              href="mailto:victorinstitutodebeleza@gmail.com"
              className="inline-flex items-center justify-center gap-3 border border-charcoal/20 px-10 py-4 text-charcoal font-body text-sm tracking-widest uppercase rounded-sm hover:bg-charcoal hover:text-cream active:scale-[0.97] transition-all duration-300"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              Enviar e-mail
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;