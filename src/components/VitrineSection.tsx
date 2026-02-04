import { ShoppingBag, ExternalLink, Package, Truck, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Package,
    title: "Produtos de qualidade",
    description: "Materiais selecionados das melhores marcas do mercado",
  },
  {
    icon: Truck,
    title: "Entrega rápida",
    description: "Entregamos em Campinas e região com agilidade",
  },
  {
    icon: CreditCard,
    title: "Facilidade de pagamento",
    description: "Diversas formas de pagamento para sua conveniência",
  },
];

export function VitrineSection() {
  return (
    <section id="vitrine" className="py-12 sm:py-16 md:py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider">
              Loja virtual
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-secondary-foreground mt-2 mb-3 sm:mb-4">
              Conheça nossa vitrine
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-primary rounded-full mb-4 sm:mb-6 mx-auto lg:mx-0" />
            
            <p className="text-secondary-foreground/80 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
              Acesse nossa vitrine online e confira todos os produtos e materiais 
              disponíveis para seu projeto. Placas de drywall, perfis metálicos, 
              isolantes e muito mais com a qualidade Gesso Freitas.
            </p>

            {/* Features */}
            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4 text-left">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-sm sm:text-base text-secondary-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-secondary-foreground/70 text-xs sm:text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link to="/vitrine" className="w-full sm:w-auto">
                <Button size="lg" className="gap-2 shadow-primary w-full sm:w-auto text-sm sm:text-base">
                  <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
                  Acessar vitrine
                </Button>
              </Link>
              <a
                href="https://wa.me/5519991071280?text=Olá! Gostaria de saber mais sobre os produtos da vitrine."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 border-white bg-white/20 text-white hover:bg-white hover:text-secondary w-full sm:w-auto text-sm sm:text-base"
                >
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                  Tirar dúvidas
                </Button>
              </a>
            </div>
          </div>

          {/* Visual Card */}
          <div className="relative mt-8 lg:mt-0">
            <div className="bg-background rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-custom-lg">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-primary rounded-lg sm:rounded-xl flex items-center justify-center">
                  <ShoppingBag className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base sm:text-lg lg:text-xl text-foreground">
                    Vitrine online
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">Gesso Freitas Campinas</p>
                </div>
              </div>

              <div className="space-y-2 sm:space-y-3 lg:space-y-4 mb-4 sm:mb-6">
                {[
                  "Placas de drywall",
                  "Perfis metálicos",
                  "Isolantes térmicos",
                  "Massas e fitas",
                  "Acessórios",
                ].map((item, index, arr) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between py-2 sm:py-3 ${
                      index !== arr.length - 1 ? "border-b border-border" : ""
                    }`}
                  >
                    <span className="text-muted-foreground text-xs sm:text-sm">{item}</span>
                    <span className="text-primary font-semibold text-xs sm:text-sm">Disponível</span>
                  </div>
                ))}
              </div>

              <Link to="/vitrine" className="block">
                <Button className="w-full gap-2 text-sm sm:text-base">
                  Ver todos os produtos
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-16 sm:w-24 h-16 sm:h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-20 sm:w-32 h-20 sm:h-32 bg-primary/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
