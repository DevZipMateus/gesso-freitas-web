import { ArrowRight, Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const highlights = [
  "Mais de 18 anos de experiência",
  "Equipe qualificada",
  "Atendimento em Campinas e região",
];

export function Hero() {
  const handleScrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector("#servicos");
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20 pb-12 lg:pb-0"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/90 to-secondary/80 lg:to-secondary/70" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary-foreground px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm font-medium">Especialistas em gesso e drywall</span>
            </div>

            {/* Main Heading - H1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-heading font-bold text-secondary-foreground mb-4 sm:mb-6 animate-fade-in leading-tight" style={{ animationDelay: "0.1s" }}>
              Gesso Freitas Campinas
            </h1>

            {/* Subheading - H2 */}
            <h2 className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-secondary-foreground/80 mb-6 sm:mb-8 font-light leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Transformamos ambientes com qualidade, precisão e acabamento impecável. 
              Soluções completas em gesso e drywall para projetos residenciais, comerciais e industriais.
            </h2>

            {/* Highlights */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center lg:justify-start gap-2 text-secondary-foreground/90"
                >
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                  <span className="text-xs sm:text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in justify-center lg:justify-start" style={{ animationDelay: "0.4s" }}>
              <a
                href="https://wa.me/5519991071280"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button size="lg" className="gap-2 text-sm sm:text-base shadow-primary w-full sm:w-auto">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  Solicitar orçamento
                </Button>
              </a>
              <Button
                variant="ghost"
                size="lg"
                className="gap-2 text-sm sm:text-base text-white/80 hover:text-white hover:bg-white/10 w-full sm:w-auto"
                onClick={handleScrollToServices}
              >
                Nossos serviços
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>
          </div>

          {/* Right Video */}
          <div className="hidden lg:flex justify-center items-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="relative w-full max-w-sm lg:max-w-md xl:max-w-lg">
              <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-xl" />
              <video
                src="/midia_13.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="relative w-full h-auto rounded-xl shadow-2xl object-cover"
                style={{ maxHeight: "450px" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 bg-gradient-to-t from-secondary to-transparent" />
    </section>
  );
}
