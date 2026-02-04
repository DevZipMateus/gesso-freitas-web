import { ArrowRight, Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  "Mais de 18 anos de experiência",
  "Equipe qualificada",
  "Atendimento em Campinas e região",
];

export function Hero() {
  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector("#contato");
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
      className="relative min-h-screen flex items-center bg-gradient-hero pt-20"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
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
            <Button
              variant="outline"
              size="lg"
              className="gap-2 text-base border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10"
              onClick={handleScrollToContact}
            >
              Conheça nossos serviços
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
