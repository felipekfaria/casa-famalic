import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      text: "Excelente profissional! A Cristina e a sua equipa superaram todas as minhas expectativas. Venderam a minha casa em apenas 3 semanas. Recomendo vivamente!",
      avatar: "MS"
    },
    {
      name: "João Santos",
      text: "Profissionalismo e transparência em todo o processo. Sempre disponíveis para esclarecer dúvidas e apoiar em todas as fases da venda. Cinco estrelas!",
      avatar: "JS"
    },
    {
      name: "Ana Costa",
      text: "Simpatia, competência e dedicação. Conseguiram um valor acima do esperado para o meu apartamento. Muito obrigada por todo o apoio!",
      avatar: "AC"
    },
    {
      name: "Pedro Oliveira",
      text: "Desde o primeiro contacto até à assinatura da escritura, tudo correu perfeitamente. Equipa fantástica, muito profissional e humana.",
      avatar: "PO"
    }
  ];

  const renderStars = () => {
    return (
      <div className="flex justify-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-accent text-accent" />
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
            O que dizem os meus clientes:
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-testimonial">
              {renderStars()}
              
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-lg">
                  {testimonial.avatar}
                </div>
              </div>
              
              <p className="text-card-foreground/80 mb-6 leading-relaxed text-center">
                "{testimonial.text}"
              </p>
              
              <p className="font-semibold text-card-foreground text-center">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="btn-cta text-lg">
            Obter Avaliação Grátis
          </Button>
        </div>
      </div>
    </section>
  );
};