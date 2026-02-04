import { 
  Layers, 
  Home, 
  Paintbrush, 
  Wrench, 
  Sparkles,
  LayoutGrid
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroCarousel } from "@/components/HeroCarousel";
import servicesBg from "@/assets/services-bg.jpg";

const services = [
  {
    icon: Layers,
    title: "Drywall",
    description: "Paredes e divisórias, forros, rebaixamento de teto, sancas e soluções acústicas e termoacústicas.",
    features: ["Paredes e divisórias", "Forros de drywall", "Soluções acústicas", "Resistente à umidade"],
  },
  {
    icon: Home,
    title: "Gesso convencional",
    description: "Forro de gesso tradicional, molduras, sancas decorativas e detalhes personalizados.",
    features: ["Forro de gesso", "Molduras e sancas", "Detalhes decorativos", "Acabamentos finos"],
  },
  {
    icon: Paintbrush,
    title: "Decoração em gesso",
    description: "Nichos decorativos, painéis, rasgos de luz, cortineiros e projetos sob medida.",
    features: ["Nichos decorativos", "Rasgos de luz", "Cortineiros", "Projetos sob medida"],
  },
  {
    icon: Wrench,
    title: "Reformas e manutenção",
    description: "Reparos em gesso e drywall, adequações, melhorias e substituição de forros.",
    features: ["Reparos gerais", "Adequações", "Substituição", "Manutenção preventiva"],
  },
  {
    icon: Sparkles,
    title: "Acabamento e preparação",
    description: "Tratamento de juntas, nivelamento, acabamento fino e preparação para pintura.",
    features: ["Tratamento de juntas", "Nivelamento", "Acabamento fino", "Preparação"],
  },
  {
    icon: LayoutGrid,
    title: "Projetos especiais",
    description: "Reforços estruturais, áreas técnicas, drywall RF (resistente ao fogo) e projetos comerciais.",
    features: ["Reforços estruturais", "Áreas técnicas", "Drywall RF", "Projetos comerciais"],
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-12 sm:py-16 md:py-20 lg:py-28 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${servicesBg})` }}
      >
        <div className="absolute inset-0 bg-muted/95" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider">
            O que fazemos
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-3 sm:mb-4">
            Nossos serviços
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-primary mx-auto rounded-full mb-4 sm:mb-6" />
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto px-4">
            Oferecemos soluções completas em gesso e drywall, com qualidade e 
            profissionalismo para transformar qualquer ambiente.
          </p>
        </div>

        {/* Carousel Section */}
        <div className="flex justify-center mb-10 sm:mb-12 md:mb-16 px-4">
          <HeroCarousel />
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-background p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-border shadow-custom-sm hover:shadow-custom-md transition-all duration-300 group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              
              <h3 className="font-heading font-semibold text-base sm:text-lg lg:text-xl text-foreground mb-2 sm:mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 sm:mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-1.5 sm:space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 sm:mt-12 md:mt-16">
          <a
            href="https://wa.me/5519991071280"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="gap-2 shadow-primary text-sm sm:text-base">
              Solicitar orçamento gratuito
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
