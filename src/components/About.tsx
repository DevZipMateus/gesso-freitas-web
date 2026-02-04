import { Building2, Users, Award, Target } from "lucide-react";
import aboutBg from "@/assets/about-bg.jpg";

const stats = [
  { icon: Building2, value: "18+", label: "Anos de experiência" },
  { icon: Users, value: "20+", label: "Colaboradores diretos" },
  { icon: Award, value: "1000+", label: "Projetos entregues" },
  { icon: Target, value: "100%", label: "Comprometimento" },
];

export function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div className="absolute inset-0 bg-background/95" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Sobre nós
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-4">
            Nossa história
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Fundada em 2005, a <strong className="text-foreground">Gesso Freitas Campinas</strong> nasceu 
              da determinação de Emerson Freitas, que iniciou sua carreira como ajudante e, com paixão pelo 
              que faz, buscou constante aprendizado e qualificação, incluindo cursos na área de Steel Frame.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Com crescimento sólido ao longo dos anos e reconhecimento vindo principalmente por meio de 
              indicações de clientes satisfeitos, a empresa construiu uma trajetória marcada pela 
              <strong className="text-foreground"> qualidade, compromisso e excelência</strong>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hoje, a Gesso Freitas Campinas conta com mais de <strong className="text-foreground">20 
              colaboradores diretos</strong> e cerca de 15 indiretos, reforçando sua estrutura e capacidade 
              para atender projetos com eficiência, profissionalismo e credibilidade.
            </p>
          </div>

          {/* Values Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-muted/50 p-6 rounded-xl border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">Missão</h3>
              <p className="text-muted-foreground text-sm">
                Oferecer serviços e produtos em gesso com alto padrão de qualidade, transformando 
                projetos em ambientes funcionais, modernos e duráveis.
              </p>
            </div>

            <div className="bg-muted/50 p-6 rounded-xl border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">Visão</h3>
              <p className="text-muted-foreground text-sm">
                Ser referência em soluções em gesso e acabamentos, reconhecida pela qualidade, 
                inovação e confiança no mercado da construção civil.
              </p>
            </div>

            <div className="sm:col-span-2 bg-secondary p-6 rounded-xl">
              <h3 className="font-heading font-semibold text-lg text-secondary-foreground mb-4">
                Nossos valores
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {["Qualidade", "Comprometimento", "Ética", "Profissionalismo", "Inovação", "Satisfação"].map(
                  (value) => (
                    <div
                      key={value}
                      className="flex items-center gap-2 text-secondary-foreground/90"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-sm">{value}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-border">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
