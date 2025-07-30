import { useRef } from "react";
import { HeroSection } from "@/components/HeroSection";
import { ProcessSection } from "@/components/ProcessSection";
import { VideoSection } from "@/components/VideoSection";
import { TeamSection } from "@/components/TeamSection";
import { AwardsSection } from "@/components/AwardsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  // Criamos a referência que vai "apontar" para o formulário
  const formRef = useRef<HTMLDivElement>(null);

  // Criamos a função que executa a rolagem suave
  const handleScrollToForm = () => {
    formRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'center' 
    });
  };

  return (
    <main className="min-h-screen">
      {/* 1ª Secção */}
      <HeroSection ref={formRef} />

      {/* 2ª Secção */}
      <ProcessSection onScrollToForm={handleScrollToForm} />

      {/* 3ª SECÇÃO (O VÍDEO FOI MOVIDO PARA AQUI) */}
      <VideoSection />
      
      {/* 4ª Secção */}
      <TeamSection /> 
      
      {/* 5ª Secção */}
      <AwardsSection onScrollToForm={handleScrollToForm} />
      
      {/* 6ª Secção */}
      <TestimonialsSection onScrollToForm={handleScrollToForm} />
      
      {/* 7ª Secção (Rodapé) */}
      <Footer onScrollToForm={handleScrollToForm} />
    </main>
  );
};

export default Index;