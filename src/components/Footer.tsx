import { Button } from "@/components/ui/button";

// 1. Definimos a interface para as props
interface FooterProps {
  onScrollToForm: () => void;
}

// 2. Recebemos 'onScrollToForm' como prop
export const Footer = ({ onScrollToForm }: FooterProps) => {
  return (
    <footer className="bg-foreground text-background py-12 px-4">
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

        {/* 3. BOTÃO ADICIONADO AQUI */}
        <div className="text-center mb-8">
          <Button onClick={onScrollToForm} className="btn-cta text-lg">
            Quero a Minha Avaliação Grátis
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm mb-8">
          <a href="#" className="text-background/80 hover:text-background transition-colors">
            Política Privacidade
          </a>
          <a href="#" className="text-background/80 hover:text-background transition-colors">
            Condições de Uso
          </a>
          <a href="#" className="text-background/80 hover:text-background transition-colors">
            Acesso aos seus dados pessoais
          </a>
          <a href="#" className="text-background/80 hover:text-background transition-colors">
            Declaração de Privacidade
          </a>
        </div>

        <div className="text-center text-background/60 text-sm">
          <p>© 2025 Miguel Mónica, CENTURY 21 Realty Art II. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};