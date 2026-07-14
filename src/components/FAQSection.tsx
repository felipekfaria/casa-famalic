import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQSectionProps {
  onScrollToForm: () => void;
}

export const FAQSection = ({ onScrollToForm }: FAQSectionProps) => {
  const faqs = [
    {
      question: "A avaliação é mesmo gratuita?",
      answer:
        "Sim, 100% gratuita. Não há custos, taxas escondidas nem letras pequenas. É um serviço que ofereço a quem está a pensar vender a sua casa.",
    },
    {
      question: "Fico com algum compromisso ao pedir a avaliação?",
      answer:
        "Nenhum. Recebe o valor de mercado do seu imóvel e decide com total liberdade o que fazer a seguir — vender já, mais tarde, ou simplesmente ficar a saber quanto vale.",
    },
    {
      question: "Quanto tempo demora até saber o valor da minha casa?",
      answer:
        "Depois de preencher o formulário, recebe uma chamada em 24 horas para agendar a visita. Após a visita de avaliação, saberá o valor de mercado em 48 horas.",
    },
    {
      question: "Como é calculado o valor do imóvel?",
      answer:
        "Através de uma análise comparativa de mercado: imóveis semelhantes vendidos na sua zona, o estado e as características da sua casa, e o conhecimento local do mercado algarvio, com o apoio dos dados da CENTURY 21 — uma agência com mais de 15 anos de mercado.",
    },
    {
      question: "Os meus dados ficam seguros?",
      answer:
        "Sim. Os seus dados são usados apenas para entrar em contacto consigo sobre a avaliação que pediu, de acordo com a Política de Privacidade da CENTURY 21.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
            Perguntas Frequentes
          </h2>
          <p>Ainda tem dúvidas? As respostas às perguntas mais comuns estão aqui:</p>
        </div>

        <Accordion type="single" collapsible className="mb-12">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-accent">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center">
          <Button onClick={onScrollToForm} className="btn-cta text-lg">
            Obter Avaliação Grátis
          </Button>
        </div>
      </div>
    </section>
  );
};
