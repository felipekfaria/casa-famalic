// 1. IMPORTAMOS AS IMAGENS DIRETAMENTE NO CÓDIGO
import award2022 from "@/assets/611c6a05-f08b-4bd0-9798-afb98ffa1741.png";
import award2023 from "@/assets/503a0c8c-fe58-4833-b042-6df4736822ca.png";
import award2024 from "@/assets/13f74af9-5f84-4805-91ad-4c2af3dfcef7.png";


export const AwardsSection = () => {
  // 2. USAMOS AS VARIÁVEIS IMPORTADAS EM VEZ DOS CAMINHOS DE TEXTO
  const awards = [{
    image: award2022,
    alt: "Master Ruby Producer 2022"
  }, {
    image: award2023,
    alt: "Master Ruby Producer 2023"
  }, {
    image: award2024,
    alt: "Master Diamond Producer 2024"
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
                <img src={award.image} alt={award.alt} className="w-full h-full object-contain" />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          
        </div>
      </div>
    </section>
  );
};