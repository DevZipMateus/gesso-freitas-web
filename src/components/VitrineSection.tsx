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
    <section id="vitrine" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Loja virtual
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-foreground mt-2 mb-4">
              Conheça nossa vitrine
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full mb-6" />
            
            <p className="text-secondary-foreground/80 text-lg leading-relaxed mb-8">
              Acesse nossa vitrine online e confira todos os produtos e materiais 
              disponíveis para seu projeto. Placas de drywall, perfis metálicos, 
              isolantes e muito mais com a qualidade Gesso Freitas.
            </p>

            {/* Features */}
            <div className="space-y-6 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-secondary-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-secondary-foreground/70 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/vitrine">
                <Button size="lg" className="gap-2 shadow-primary w-full sm:w-auto">
                  <ShoppingBag className="w-5 h-5" />
                  Acessar vitrine
                </Button>
              </Link>
              <a
                href="https://wa.me/5519991071280?text=Olá! Gostaria de saber mais sobre os produtos da vitrine."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 w-full sm:w-auto"
                >
                  <ExternalLink className="w-5 h-5" />
                  Tirar dúvidas
                </Button>
              </a>
            </div>
          </div>

          {/* Visual Card */}
          <div className="relative">
            <div className="bg-background rounded-2xl p-8 shadow-custom-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center">
                  <ShoppingBag className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-foreground">
                    Vitrine online
                  </h3>
                  <p className="text-muted-foreground">Gesso Freitas Campinas</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Placas de drywall</span>
                  <span className="text-primary font-semibold">Disponível</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Perfis metálicos</span>
                  <span className="text-primary font-semibold">Disponível</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Isolantes térmicos</span>
                  <span className="text-primary font-semibold">Disponível</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Massas e fitas</span>
                  <span className="text-primary font-semibold">Disponível</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-muted-foreground">Acessórios</span>
                  <span className="text-primary font-semibold">Disponível</span>
                </div>
              </div>

              <Link to="/vitrine" className="block">
                <Button className="w-full gap-2">
                  Ver todos os produtos
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
