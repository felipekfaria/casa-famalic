import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

// 1. Definimos a interface de props para receber a função de rolagem
interface TestimonialsSectionProps {
  onScrollToForm: () => void;
}

// 2. Recebemos 'onScrollToForm' como uma prop
export const TestimonialsSection = ({ onScrollToForm }: TestimonialsSectionProps) => {
  const testimonials = [
    {
      name: "Maria Silva",
      text: "Vendemos a casa em 3 semanas, sem complicações. A equipa superou tudo o que esperava!",
      avatar: "MS"
    },
    {
      name: "João Santos",
      text: "Tive apoio em cada passo. Tudo foi explicado com clareza e feito com total profissionalismo.",
      avatar: "JS"
    },
    {
      name: "Ana Costa",
      text: "Conseguiram vender acima do valor esperado! Estou muito grata pela dedicação e simpatia.",
      avatar: "AC"
    },
    {
      name: "Pedro Oliveira",
      text: "Do primeiro contacto até à escritura: tudo foi impecável. Uma equipa humana, séria e muito eficaz.",
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
          A confiança dos meus clientes diz tudo
          </h2>
          <p>
          Veja o que dizem pessoas que, tal como você, quiseram vender o seu imóvel com confiança e segurança:
          </p>
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
          {/* 3. Adicionamos o 'onClick' ao botão para chamar a função */}
          <Button onClick={onScrollToForm} className="btn-cta text-lg">
            Obter Avaliação Grátis
          </Button>
        </div>
      </div>
    </section>
  );
};