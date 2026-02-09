import { Building2, Award, Target, Star } from "lucide-react";
import aboutBg from "@/assets/about-bg.jpg";

const stats = [
  { icon: Building2, value: "18+", label: "Anos de experiência" },
  { icon: Award, value: "10.000+", label: "Projetos entregues" },
  { icon: Star, value: "100%", label: "Profissionais altamente qualificados" },
  { icon: Target, value: "100%", label: "Comprometimento" },
];

const parceiros = [
  "Palmeiras F.C",
  "Construtora PR2",
  "Construtora BCS",
  "Construtora ASO",
  "Mercado Livre",
  "Construtora Winners",
  "Hotel Bourbon",
  "Shopping Miramar",
  "Shopping Serramar",
  "Shopping Mall Swiss Park",
];

export function About() {
  return (
    <section id="sobre" className="py-12 sm:py-16 md:py-20 lg:py-28 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/95 via-secondary/90 to-secondary/95" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider">
            Sobre nós
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-secondary-foreground mt-2 mb-3 sm:mb-4">
            Nossa história
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-4 sm:space-y-6">
            <p className="text-sm sm:text-base lg:text-lg text-secondary-foreground/70 leading-relaxed">
              Fundada em 2005, a <strong className="text-secondary-foreground">Gesso Freitas Campinas</strong> nasceu 
              da determinação de Emerson Freitas, que iniciou sua carreira como ajudante e, com paixão pelo 
              que faz, buscou constante aprendizado e qualificação, incluindo cursos na área de Steel Frame.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-secondary-foreground/70 leading-relaxed">
              Com crescimento sólido ao longo dos anos e reconhecimento vindo principalmente por meio de 
              indicações de clientes satisfeitos, a empresa construiu uma trajetória marcada pela 
              <strong className="text-secondary-foreground"> qualidade, compromisso e excelência</strong>.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-secondary-foreground/70 leading-relaxed">
              Hoje, a Gesso Freitas Campinas conta com profissionais altamente qualificados, 
              reforçando sua estrutura e capacidade para atender projetos com eficiência, 
              profissionalismo e credibilidade.
            </p>
          </div>

          {/* Values Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white/5 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-white/10">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-base sm:text-lg text-secondary-foreground mb-2">Missão</h3>
              <p className="text-secondary-foreground/70 text-xs sm:text-sm">
                Oferecer serviços e produtos em gesso com alto padrão de qualidade, transformando 
                projetos em ambientes funcionais, modernos e duráveis.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-white/10">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-base sm:text-lg text-secondary-foreground mb-2">Visão</h3>
              <p className="text-secondary-foreground/70 text-xs sm:text-sm">
                Ser referência em soluções em gesso e acabamentos, reconhecida pela qualidade, 
                inovação e confiança no mercado da construção civil.
              </p>
            </div>

            <div className="sm:col-span-2 bg-white/5 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-white/10">
              <h3 className="font-heading font-semibold text-base sm:text-lg text-secondary-foreground mb-3 sm:mb-4">
                Nossos valores
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                {["Qualidade", "Comprometimento", "Ética", "Profissionalismo", "Inovação", "Satisfação"].map(
                  (value) => (
                    <div
                      key={value}
                      className="flex items-center gap-2 text-secondary-foreground/90"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-xs sm:text-sm">{value}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-10 sm:mt-12 md:mt-16 pt-10 sm:pt-12 md:pt-16 border-t border-white/10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary" />
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-secondary-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-secondary-foreground/70 text-xs sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Parceiros */}
        <div className="mt-12 sm:mt-16 md:mt-20 bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-12 border border-white/10">
          <h3 className="font-heading font-bold text-xl sm:text-2xl text-secondary-foreground text-center mb-6 sm:mb-8">
            Nossos parceiros
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
            {parceiros.map((parceiro, index) => (
              <div
                key={index}
                className="bg-secondary-foreground/10 rounded-lg p-3 sm:p-4 text-center hover:bg-secondary-foreground/20 transition-colors"
              >
                <span className="text-secondary-foreground text-xs sm:text-sm font-medium">
                  {parceiro}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
