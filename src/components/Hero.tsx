import { ArrowRight, Phone, CheckCircle, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
      className="relative min-h-screen flex items-center pt-20"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/70" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary-foreground px-4 py-2 rounded-full mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium">Especialistas em gesso e drywall</span>
            </div>

            {/* Main Heading - H1 */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Gesso Freitas Campinas
            </h1>

            {/* Subheading - H2 */}
            <h2 className="text-xl md:text-2xl text-secondary-foreground/80 mb-8 font-light leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Transformamos ambientes com qualidade, precisão e acabamento impecável. 
              Soluções completas em gesso e drywall para projetos residenciais, comerciais e industriais.
            </h2>

            {/* Highlights */}
            <div className="flex flex-wrap gap-4 mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-secondary-foreground/90"
                >
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <a
                href="https://wa.me/5519991071280"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="gap-2 text-base shadow-primary">
                  <Phone className="w-5 h-5" />
                  Solicitar orçamento
                </Button>
              </a>
              <Link to="/vitrine">
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 text-base border-white/50 text-white bg-white/10 hover:bg-primary hover:text-white hover:border-primary"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Ver vitrine
                </Button>
              </Link>
              <Button
                variant="ghost"
                size="lg"
                className="gap-2 text-base text-white/80 hover:text-white hover:bg-white/10"
                onClick={handleScrollToServices}
              >
                Nossos serviços
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Right Video */}
          <div className="hidden lg:flex justify-center items-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-xl" />
              <video
                src="/midia_13.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="relative w-full h-auto rounded-xl shadow-2xl object-cover"
                style={{ maxHeight: "500px" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
