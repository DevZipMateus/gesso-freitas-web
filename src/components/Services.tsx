import { 
  Layers, 
  Home, 
  Paintbrush, 
  Wrench, 
  Sparkles,
  LayoutGrid
} from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <section id="servicos" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            O que fazemos
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-4">
            Nossos serviços
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Oferecemos soluções completas em gesso e drywall, com qualidade e 
            profissionalismo para transformar qualquer ambiente.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-background p-8 rounded-2xl border border-border shadow-custom-sm hover:shadow-custom-md transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              
              <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="https://wa.me/5519991071280"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="gap-2 shadow-primary">
              Solicitar orçamento gratuito
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
