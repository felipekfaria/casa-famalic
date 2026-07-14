import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

// 1. Definimos a interface para as props
interface FooterProps {
  onScrollToForm: () => void;
}

// 2. Recebemos 'onScrollToForm' como prop
export const Footer = ({ onScrollToForm }: FooterProps) => {
  return (
    <footer className="bg-foreground text-background py-12 px-4 pb-28 md:pb-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-xl">
              21
            </div>
            <div>
              <h3 className="text-xl font-bold">Miguel Mónica</h3>
              <p className="text-background/80">CENTURY 21 Realty Art II</p>
            </div>
          </div>
        </div>

        {/* Contactos diretos */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-8 text-sm">
          <a
            href="tel:+351969599062"
            className="flex items-center gap-2 text-background/90 hover:text-accent transition-colors"
          >
            <Phone className="w-4 h-4 text-accent" /> +351 969 599 062
          </a>
          <a
            href="mailto:miguel.monica@century21.pt"
            className="flex items-center gap-2 text-background/90 hover:text-accent transition-colors"
          >
            <Mail className="w-4 h-4 text-accent" /> miguel.monica@century21.pt
          </a>
        </div>

        {/* 3. BOTÃO ADICIONADO AQUI */}
        <div className="text-center mb-8">
          <Button onClick={onScrollToForm} className="btn-cta text-lg">
            Quero a Minha Avaliação Grátis
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm mb-8">
          <a
            href="https://www.century21.pt/termos-e-condicoes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-background/80 hover:text-background transition-colors"
          >
            Política de Privacidade
          </a>
          <a
            href="https://www.century21.pt/termos-e-condicoes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-background/80 hover:text-background transition-colors"
          >
            Termos & Condições
          </a>
          <a
            href="https://www.livroreclamacoes.pt/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-background/80 hover:text-background transition-colors"
          >
            Livro de Reclamações
          </a>
        </div>

        <div className="text-center text-background/60 text-sm">
          <p>© {new Date().getFullYear()} Miguel Mónica, CENTURY 21 Realty Art II. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
