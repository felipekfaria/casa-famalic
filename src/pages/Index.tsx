import { useRef, useState, useEffect } from "react";
import { HeroSection } from "@/components/HeroSection";
import { ProcessSection } from "@/components/ProcessSection";
import { VideoSection } from "@/components/VideoSection";
import { TeamSection } from "@/components/TeamSection";
import { AwardsSection } from "@/components/AwardsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Index = () => {
  // Criamos a referência que vai "apontar" para o formulário
  const formRef = useRef<HTMLDivElement>(null);

  // Barra CTA fixa (mobile): aparece quando o formulário sai do ecrã
  const [showStickyCta, setShowStickyCta] = useState(false);

  useEffect(() => {
    const el = formRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowStickyCta(!entry.isIntersecting),
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

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

      {/* 7ª Secção */}
      <FAQSection onScrollToForm={handleScrollToForm} />

      {/* 8ª Secção (Rodapé) */}
      <Footer onScrollToForm={handleScrollToForm} />

      {/* Barra CTA fixa — apenas mobile */}
      <div
        className={`fixed bottom-0 inset-x-0 z-50 md:hidden transition-transform duration-300 ${
          showStickyCta ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-sm border-t border-gray-200 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
          <Button onClick={handleScrollToForm} className="btn-cta w-full text-base font-bold">
            🏠 Obter Avaliação Grátis
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Index;
