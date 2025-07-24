import { useRef } from "react"; // 1. Importamos o hook useRef
import { HeroSection } from "@/components/HeroSection";
import { ProcessSection } from "@/components/ProcessSection";
import { TeamSection } from "@/components/TeamSection";
import { AwardsSection } from "@/components/AwardsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  // 2. Criamos a referência que vai "apontar" para o formulário
  const formRef = useRef<HTMLDivElement>(null);

  // 3. Criamos a função que executa a rolagem suave
  const handleScrollToForm = () => {
    formRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'center' 
    });
  };

  return (
    <main className="min-h-screen">
      {/* 4. Passamos a 'ref' para a HeroSection. Ela já está pronta para receber. */}
      <HeroSection ref={formRef} />

      {/* 5. Passamos a função de rolagem para os outros componentes que terão o botão. */}
      {/* Eu presumi que Process, Awards e Footer terão o botão. Team e Testimonials talvez não. */}
      <ProcessSection onScrollToForm={handleScrollToForm} />
      <TeamSection /> 
      <AwardsSection />
      <TestimonialsSection onScrollToForm={handleScrollToForm} />
      <Footer onScrollToForm={handleScrollToForm} />
    </main>
  );
};

export default Index;