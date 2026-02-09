import { CheckCircle } from "lucide-react";

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
    <section id="produtos" className="py-12 sm:py-16 md:py-20 lg:py-28 relative overflow-hidden">
      {/* Dark Background with watermark */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary/95 to-secondary">
        {/* Watermark */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
          <span className="text-[12rem] sm:text-[16rem] md:text-[20rem] font-heading font-bold text-white/[0.03] select-none whitespace-nowrap tracking-wider">
            GESSO FREITAS
          </span>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider">
            Materiais
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-secondary-foreground mt-2 mb-3 sm:mb-4">
            Nossos produtos
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-primary mx-auto rounded-full mb-4 sm:mb-6" />
          <p className="text-secondary-foreground/70 text-sm sm:text-base max-w-2xl mx-auto px-4">
            Trabalhamos com materiais de alta qualidade para garantir durabilidade 
            e excelência em todos os nossos projetos.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {productCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm p-4 sm:p-5 lg:p-6 rounded-lg sm:rounded-xl border border-white/10 hover:border-primary/30 transition-colors"
            >
              <h3 className="font-heading font-semibold text-sm sm:text-base lg:text-lg text-secondary-foreground mb-3 sm:mb-4 pb-3 sm:pb-4 border-b border-white/10">
                {category.title}
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 sm:gap-3 text-secondary-foreground/80">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Markets */}
        <div className="mt-12 sm:mt-16 md:mt-20 bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-12 border border-white/10">
          <h3 className="font-heading font-bold text-xl sm:text-2xl text-secondary-foreground text-center mb-6 sm:mb-8">
            Mercados de atuação
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {[
              { title: "Construção civil", desc: "Obras residenciais, comerciais e industriais" },
              { title: "Acabamentos", desc: "Forros, drywall, sancas e molduras" },
              { title: "Design de interiores", desc: "Parcerias com arquitetos e designers" },
              { title: "Reformas", desc: "Reformas residenciais e comerciais" },
              { title: "Mercado imobiliário", desc: "Construtoras e incorporadoras" },
              { title: "Construção Steel Frame", desc: "Estruturas em Steel Frame" },
            ].map((market, index) => (
              <div key={index} className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <span className="text-primary font-bold text-sm sm:text-lg">{index + 1}</span>
                </div>
                <h4 className="font-semibold text-secondary-foreground text-xs sm:text-sm mb-1">
                  {market.title}
                </h4>
                <p className="text-secondary-foreground/60 text-[10px] sm:text-xs hidden sm:block">
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
