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
import { ServiceCarousel } from "@/components/ServiceCarousel";
import servicesBg from "@/assets/services-bg.jpg";

const forroImages = [
  { src: "/forro/1228765882682513.jpeg", alt: "Forro de gesso - Projeto 1" },
  { src: "/forro/1229988595184720.jpeg", alt: "Forro de gesso - Projeto 2" },
  { src: "/forro/1401182864720403.jpeg", alt: "Forro de gesso - Projeto 3" },
  { src: "/forro/1451169296633361.jpeg", alt: "Forro de gesso - Projeto 4" },
  { src: "/forro/1561022678533452.jpeg", alt: "Forro de gesso - Projeto 5" },
  { src: "/forro/1620213679000025.jpeg", alt: "Forro de gesso - Projeto 6" },
  { src: "/forro/1648478576140750.jpeg", alt: "Forro de gesso - Projeto 7" },
  { src: "/forro/2435548803561781.jpeg", alt: "Forro de gesso - Projeto 8" },
  { src: "/forro/2913627352301665.jpeg", alt: "Forro de gesso - Projeto 9" },
  { src: "/forro/869285392547001.jpeg", alt: "Forro de gesso - Projeto 10" },
  { src: "/forro/910839727970666.jpeg", alt: "Forro de gesso - Projeto 11" },
  { src: "/forro/917895993935501.jpeg", alt: "Forro de gesso - Projeto 12" },
];

const sancaImages = [
  { src: "/sanca/1227419435488339.jpeg", alt: "Sanca - Projeto 1" },
  { src: "/sanca/1579236046739315.jpeg", alt: "Sanca - Projeto 2" },
  { src: "/sanca/1661878971857648.jpeg", alt: "Sanca - Projeto 3" },
  { src: "/sanca/852655874477956.jpeg", alt: "Sanca - Projeto 4" },
  { src: "/sanca/916675867527340.jpeg", alt: "Sanca - Projeto 5" },
  { src: "/sanca/931757112618841.jpeg", alt: "Sanca - Projeto 6" },
];

const steelFrameImages = [
  { src: "/steel-frame/1182434293668086.jpeg", alt: "Steel Frame - Projeto 1" },
  { src: "/steel-frame/1198007098987867.jpeg", alt: "Steel Frame - Projeto 2" },
  { src: "/steel-frame/1258422829480061.jpeg", alt: "Steel Frame - Projeto 3" },
  { src: "/steel-frame/1404111584375505.jpeg", alt: "Steel Frame - Projeto 4" },
  { src: "/steel-frame/1417714599795053.jpeg", alt: "Steel Frame - Projeto 5" },
  { src: "/steel-frame/1442477610997805.jpeg", alt: "Steel Frame - Projeto 6" },
  { src: "/steel-frame/1484513229836733.jpeg", alt: "Steel Frame - Projeto 7" },
  { src: "/steel-frame/1556807775751894.jpeg", alt: "Steel Frame - Projeto 8" },
  { src: "/steel-frame/1602538787625034.jpeg", alt: "Steel Frame - Projeto 9" },
  { src: "/steel-frame/1630993914914462.jpeg", alt: "Steel Frame - Projeto 10" },
  { src: "/steel-frame/1940664904000376.jpeg", alt: "Steel Frame - Projeto 11" },
  { src: "/steel-frame/1954547885944132.jpeg", alt: "Steel Frame - Projeto 12" },
  { src: "/steel-frame/1971489483580834.jpeg", alt: "Steel Frame - Projeto 13" },
  { src: "/steel-frame/2119014502241280.jpeg", alt: "Steel Frame - Projeto 14" },
  { src: "/steel-frame/2187404075334750.jpeg", alt: "Steel Frame - Projeto 15" },
  { src: "/steel-frame/2349600565467849.jpeg", alt: "Steel Frame - Projeto 16" },
  { src: "/steel-frame/2420819668388366.jpeg", alt: "Steel Frame - Projeto 17" },
  { src: "/steel-frame/4201869983409559.jpeg", alt: "Steel Frame - Projeto 18" },
  { src: "/steel-frame/742700895581726.jpeg", alt: "Steel Frame - Projeto 19" },
  { src: "/steel-frame/862187483321714.jpeg", alt: "Steel Frame - Projeto 20" },
  { src: "/steel-frame/895805849480107.jpeg", alt: "Steel Frame - Projeto 21" },
  { src: "/steel-frame/917556097462627.jpeg", alt: "Steel Frame - Projeto 22" },
];

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

        {/* Category Carousels */}
        <div className="flex flex-col gap-10 sm:gap-12 md:gap-16 mb-10 sm:mb-12 md:mb-16">
          <ServiceCarousel title="Forro" images={forroImages} />
          <ServiceCarousel title="Sanca" images={sancaImages} />
          <ServiceCarousel title="Steel Frame" images={steelFrameImages} />
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
