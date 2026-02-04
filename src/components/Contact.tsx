import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import contactBg from "@/assets/contact-bg.jpg";
const contactInfo = [
  {
    icon: Phone,
    title: "Telefone",
    lines: ["(19) 99107-1280", "(19) 99881-4939"],
    href: "https://wa.me/5519991071280",
  },
  {
    icon: Mail,
    title: "E-mail",
    lines: ["gessofreitascc@gmail.com"],
    href: "mailto:gessofreitascc@gmail.com",
  },
  {
    icon: MapPin,
    title: "Endereço",
    lines: ["Av. Joaquim Payolla, 1.386", "Parque da Figueira, Campinas SP", "CEP: 13040-211"],
    href: "https://maps.google.com/?q=Avenida+Joaquim+Payolla+1386+Campinas+SP",
  },
  {
    icon: Clock,
    title: "Horário",
    lines: ["Segunda a sexta", "08:00 às 18:00"],
  },
];

export function Contact() {
  return (
    <section id="contato" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${contactBg})` }}
      >
        <div className="absolute inset-0 bg-muted/95" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Fale conosco
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-4">
            Entre em contato
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para atender você. Solicite um orçamento sem compromisso 
            e transforme seu projeto em realidade.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                target={info.href?.startsWith("http") ? "_blank" : undefined}
                rel={info.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`bg-background p-6 rounded-xl border border-border shadow-custom-sm hover:shadow-custom-md hover:border-primary/30 transition-all ${
                  info.href ? "cursor-pointer" : ""
                }`}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {info.title}
                </h3>
                {info.lines.map((line, idx) => (
                  <p key={idx} className="text-muted-foreground text-sm">
                    {line}
                  </p>
                ))}
              </a>
            ))}
          </div>

          {/* CTA Card */}
          <div className="bg-secondary rounded-2xl p-8 md:p-12 flex flex-col justify-center">
            <h3 className="font-heading font-bold text-2xl text-secondary-foreground mb-4">
              Solicite seu orçamento
            </h3>
            <p className="text-secondary-foreground/80 mb-8 leading-relaxed">
              Entre em contato pelo WhatsApp e receba um orçamento personalizado 
              para o seu projeto. Atendimento rápido e sem compromisso.
            </p>
            
            <div className="space-y-4">
              <a
                href="https://wa.me/5519991071280"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button size="lg" className="w-full gap-2 shadow-primary">
                  <Phone className="w-5 h-5" />
                  Chamar no WhatsApp
                </Button>
              </a>
              
              <a
                href="https://instagram.com/gesso.freitas"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full gap-2 border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10"
                >
                  <Instagram className="w-5 h-5" />
                  @gesso.freitas
                </Button>
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-secondary-foreground/20">
              <p className="text-secondary-foreground/70 text-sm">
                <strong className="text-secondary-foreground">CNPJ:</strong> 29.092.317/0001-87
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
