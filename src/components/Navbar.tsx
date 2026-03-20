import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">
        <a href="#" className="flex flex-col">
          <span
            className={`font-display text-lg tracking-wide transition-colors duration-300 ${
              scrolled ? "text-charcoal" : "text-cream"
            }`}
          >
            Victor Instituto
          </span>
          <span
            className={`font-body text-[10px] tracking-[0.25em] uppercase transition-colors duration-300 ${
              scrolled ? "text-gold" : "text-gold-light"
            }`}
          >
            de Beleza
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {["Sobre", "Serviços", "Portfólio", "Contato"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`font-body text-xs tracking-[0.15em] uppercase transition-colors duration-300 hover:text-gold ${
                scrolled ? "text-charcoal-light" : "text-cream/70"
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="https://wa.me/5584994555682"
          target="_blank"
          rel="noopener noreferrer"
          className={`font-body text-xs tracking-[0.15em] uppercase px-5 py-2.5 rounded-sm transition-all duration-300 active:scale-95 ${
            scrolled
              ? "bg-gold-gradient text-cream"
              : "border border-cream/30 text-cream hover:bg-cream/10"
          }`}
        >
          Agendar
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
