// 1. IMPORTAMOS O COMPONENTE 'Button'
import { Button } from "@/components/ui/button";

// Importamos as imagens diretamente no código
import award2023 from "@/assets/award-esmeralda-2023.webp";
import award2024 from "@/assets/award-diamond-2024.webp";
import award2025 from "@/assets/award-centuriao-2025.webp";

// 2. DEFINIMOS A INTERFACE PARA AS PROPS
interface AwardsSectionProps {
  onScrollToForm: () => void;
}

// 3. O COMPONENTE AGORA ACEITA A PROP 'onScrollToForm'
export const AwardsSection = ({ onScrollToForm }: AwardsSectionProps) => {
  const awards = [{
    image: award2023,
    alt: "Esmeralda Producer 2023"
  }, {
    image: award2024,
    alt: "Master Diamond Producer 2024"
  }, {
    image: award2025,
    alt: "Centurião Producer 2025"
  }];
  
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
            Prémios
          </h2>
          <p>
          🏅 Reconhecido nacionalmente pela CENTURY 21 com os prémios mais prestigiados do setor, ano após ano.
          </p>        
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto w-48 h-48 flex items-center justify-center mb-4">
                <img src={award.image} alt={award.alt} loading="lazy" className="w-full h-full object-contain" />
              </div>
            </div>
          ))}
        </div>

        {/* 4. ADICIONÁMOS O BOTÃO E LIGÁMO-LO À FUNÇÃO onScrollToForm */}
        <div className="text-center mt-16">
          <Button onClick={onScrollToForm} className="btn-cta text-lg">
            Quero a Minha Avaliação Grátis
          </Button>
        </div>
      </div>
    </section>
  );
};