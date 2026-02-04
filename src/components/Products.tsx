import { CheckCircle } from "lucide-react";
import productsBg from "@/assets/products-bg.jpg";
const productCategories = [
  {
    title: "Placas de drywall",
    items: [
      "Placa ST (standard) – uso geral",
      "Placa RU (resistente à umidade)",
      "Placa RF (resistente ao fogo)",
      "Placa acústica – isolamento sonoro",
    ],
  },
  {
    title: "Perfis metálicos",
    items: [
      "Guias (U) e montantes (C)",
      "Canaletas e perfis estruturais",
      "Perfis para forro (F530, cantoneiras)",
      "Perfis para rasgos de luz",
    ],
  },
  {
    title: "Fixação e tratamento",
    items: [
      "Parafusos para drywall",
      "Buchas e chumbadores",
      "Massa para drywall",
      "Fita de papel microperfurada",
    ],
  },
  {
    title: "Isolamento",
    items: [
      "Lã de vidro",
      "Lã de rocha",
      "Manta termoacústica",
      "Cantoneiras de acabamento",
    ],
  },
];

export function Products() {
  return (
    <section id="produtos" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${productsBg})` }}
      >
        <div className="absolute inset-0 bg-background/95" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Materiais
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-4">
            Nossos produtos
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trabalhamos com materiais de alta qualidade para garantir durabilidade 
            e excelência em todos os nossos projetos.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productCategories.map((category, index) => (
            <div
              key={index}
              className="bg-muted/50 p-6 rounded-xl border border-border hover:border-primary/30 transition-colors"
            >
              <h3 className="font-heading font-semibold text-lg text-foreground mb-4 pb-4 border-b border-border">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Markets */}
        <div className="mt-20 bg-secondary rounded-2xl p-8 md:p-12">
          <h3 className="font-heading font-bold text-2xl text-secondary-foreground text-center mb-8">
            Mercados de atuação
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { title: "Construção civil", desc: "Obras residenciais, comerciais e industriais" },
              { title: "Acabamentos", desc: "Forros, drywall, sancas e molduras" },
              { title: "Design de interiores", desc: "Parcerias com arquitetos e designers" },
              { title: "Reformas", desc: "Reformas residenciais e comerciais" },
              { title: "Mercado imobiliário", desc: "Construtoras e incorporadoras" },
            ].map((market, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-bold text-lg">{index + 1}</span>
                </div>
                <h4 className="font-semibold text-secondary-foreground text-sm mb-1">
                  {market.title}
                </h4>
                <p className="text-secondary-foreground/70 text-xs">
                  {market.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
