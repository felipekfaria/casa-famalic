import { useState, useEffect, forwardRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Importação das imagens locais
import modernInteriorHero from "@/assets/modern-interior-hero.jpg";
import miguelImage from "@/assets/miguel-pg2.png"; 
import logoMiguel from "@/assets/logo-miguel.png";

export const HeroSection = forwardRef<HTMLDivElement>((props, ref) => {
  // A lógica de estado para o formulário foi removida por já não ser necessária.
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // A função handleSubmit foi removida. O Formspree gere o envio.

  return (
    <section className="relative min-h-screen flex flex-col justify-start px-4 pt-8 pb-12 overflow-hidden">
      {/* Imagem de fundo escura com overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${modernInteriorHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90"></div>
      </div>

      {/* Container principal do conteúdo */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          <div className="flex justify-center mb-6">
            <img src={logoMiguel} alt="Logo Miguel Mónica" className="w-56 h-auto" />
          </div>

          <div className="py-4 lg:inline-block lg:py-2 lg:px-4" style={{ backgroundColor: '#8F7E53' }}>
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
              Quer Vender a Sua Casa em Tempo Recorde e pelo Melhor Valor?
            </h2>
          </div>

          <div className="mt-6">
            <h3 className="text-xl lg:text-2xl text-white/90 font-normal">
              Descubra quanto vale realmente o seu imóvel com uma avaliação
            </h3>
            <h3 className="text-xl lg:text-2xl text-white/90 font-bold">
              100% gratuita e sem compromisso.
            </h3>
          </div>
          
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Coluna da Imagem */}
          <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="relative">
              <img src={miguelImage} alt="Miguel Mónica - Consultor Imobiliário" className="relative w-full max-w-md h-auto rounded-2xl object-cover shadow-2xl" />
            </div>
          </div>

          {/* Coluna do Formulário */}
          <div ref={ref} className={`flex justify-center lg:justify-start w-full transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="w-full max-w-md bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/20">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Avaliação Gratuita</h3>
                <p className="text-gray-600">Descubra o valor real do seu imóvel</p>
              </div>
              
              {/* O FORMULÁRIO FOI ATUALIZADO PARA O FORMSPREE */}
              <form 
                action="https://formspree.io/f/xyzpjqog"
                method="POST"
                className="space-y-4"
              >
                {/* Cada campo agora tem um atributo 'name' para o Formspree */}
                <Input 
                  type="text" 
                  name="Nome"
                  placeholder="Nome completo *" 
                  className="form-input-enhanced" 
                  required 
                />
                <Input 
                  type="email" 
                  name="Email"
                  placeholder="Email *" 
                  className="form-input-enhanced" 
                  required 
                />
                <Input 
                  type="tel" 
                  name="Telefone"
                  placeholder="Telefone *" 
                  className="form-input-enhanced" 
                  required 
                />
                
                {/* Os campos Select foram simplificados para garantir a entrega dos dados */}
                <Input 
                  type="text" 
                  name="Tipo de Imóvel" 
                  placeholder="Tipo de Imóvel (ex: Apartamento, Moradia)" 
                  className="form-input-enhanced"
                />
                
                <div className="grid grid-cols-2 gap-4">
                  <Input 
                    type="text"
                    name="Quartos"
                    placeholder="Quartos (ex: T3)"
                    className="form-input-enhanced"
                  />
                  <Input 
                    type="number" 
                    name="Área (m²)"
                    placeholder="Área (m²)" 
                    className="form-input-enhanced"
                  />
                </div>

                <Button type="submit" className="btn-cta w-full text-lg font-bold">
                  🏠 Obter Avaliação Grátis
                </Button>
                
                <div className="text-center pt-2">
                  <p className="text-xs text-gray-500 mb-2">🔒 Os seus dados estão seguros. Respeitamos a sua privacidade.</p>
                  <div className="flex justify-center space-x-4 text-xs text-gray-400">
                    <span>✅ Sem compromisso</span>
                    <span>⏱️ Resposta em 24h</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});