import { Button } from "@/components/ui/button";
import { FileText, Phone, Home } from "lucide-react";

export const ProcessSection = () => {
  const steps = [
    {
      icon: <FileText className="w-8 h-8 text-secondary-foreground" />,
      title: "1. Preencha o Formulário",
      description: "Preencha os detalhes completos do seu imóvel e peça a sua avaliação grátis e sem compromisso."
    },
    {
      icon: <Phone className="w-8 h-8 text-secondary-foreground" />,
      title: "2. Receba a Nossa Chamada",
      description: "Receberá uma chamada em 24 horas para agendar o dia e hora que lhe for mais conveniente."
    },
    {
      icon: <Home className="w-8 h-8 text-secondary-foreground" />,
      title: "3. Visita de Avaliação",
      description: "Em 30 minutos será realizada a visita de avaliação e em 48 horas saberá o valor de mercado da sua casa!"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Simples, rápido e fica sempre a ganhar
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="card-process text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-secondary-foreground/10 rounded-full flex items-center justify-center">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-secondary-foreground">
                {step.title}
              </h3>
              <p className="text-secondary-foreground/80 leading-relaxed">
                {step.description}
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