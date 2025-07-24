import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, Award, Shield, CheckCircle } from "lucide-react";
import modernInteriorHero from "@/assets/modern-interior-hero.jpg";
export const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    bedrooms: "",
    area: ""
  });
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  return <section className="relative min-h-screen flex flex-col justify-center px-4 py-16 overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${modernInteriorHero})`
    }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent/30 rounded-full float-animation"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-accent/20 rounded-full float-animation" style={{
        animationDelay: '2s'
      }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-accent/40 rounded-full float-animation" style={{
        animationDelay: '4s'
      }}></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          <h1 className="md:text-6xl font-black text-white leading-tight mb-6 text-3xl lg:text-4xl">
            Está a Pensar <span className="gradient-text">Vender</span> a Sua Casa?
          </h1>
          <p className="mt-6 text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Receba uma avaliação <span className="text-accent font-semibold">
100% gratuita</span> e sem compromisso!
          </p>
          
          {/* Trust indicators */}
          
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Coluna Esquerda: Imagem Grande do Miguel com melhor design */}
          <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-accent/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <img src="/lovable-uploads/1fe372f0-fe91-40b5-8c2a-7c71729ba9da.png" alt="Miguel Carvalho - Consultor Imobiliário" className="relative w-full max-w-md h-auto rounded-2xl object-cover shadow-2xl transform transition-all duration-500 group-hover:scale-105" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-b-2xl">
                <h3 className="text-2xl font-bold text-white mb-1">Miguel Carvalho</h3>
                <p className="text-accent font-medium">Consultor Imobiliário Certificado</p>
                <p className="text-white/70 text-sm mt-1">+15 anos de experiência no Algarve</p>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300">
                ⭐ 5.0 Rating
              </div>
            </div>
          </div>

          {/* Coluna Direita: Formulário Enhanced */}
          <div className={`flex justify-center lg:justify-start transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="w-full max-w-md bg-white/95 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-white/20 pulse-glow">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Avaliação Gratuita</h3>
                <p className="text-gray-600">Descubra o valor real do seu imóvel</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Enhanced Inputs */}
                <Input type="text" placeholder="Nome completo *" value={formData.name} onChange={e => setFormData({
                ...formData,
                name: e.target.value
              })} className="form-input-enhanced" required />
                <Input type="email" placeholder="Email *" value={formData.email} onChange={e => setFormData({
                ...formData,
                email: e.target.value
              })} className="form-input-enhanced" required />
                <Input type="tel" placeholder="Telefone *" value={formData.phone} onChange={e => setFormData({
                ...formData,
                phone: e.target.value
              })} className="form-input-enhanced" required />
                
                <Select onValueChange={value => setFormData({
                ...formData,
                propertyType: value
              })}>
                  <SelectTrigger className="form-input-enhanced text-gray-700">
                    <SelectValue placeholder="Tipo de Imóvel *" />
                  </SelectTrigger>
                  <SelectContent className="bg-white/95 backdrop-blur-sm border border-gray-200/50">
                    <SelectItem value="apartamento">Apartamento</SelectItem>
                    <SelectItem value="moradia">Moradia</SelectItem>
                    <SelectItem value="terreno">Terreno</SelectItem>
                    <SelectItem value="comercial">Comercial</SelectItem>
                  </SelectContent>
                </Select>
                
                <div className="grid grid-cols-2 gap-4">
                  <Select onValueChange={value => setFormData({
                  ...formData,
                  bedrooms: value
                })}>
                    <SelectTrigger className="form-input-enhanced text-gray-700">
                      <SelectValue placeholder="Quartos" />
                    </SelectTrigger>
                    <SelectContent className="bg-white/95 backdrop-blur-sm border border-gray-200/50">
                      <SelectItem value="0">T0</SelectItem>
                      <SelectItem value="1">T1</SelectItem>
                      <SelectItem value="2">T2</SelectItem>
                      <SelectItem value="3">T3</SelectItem>
                      <SelectItem value="4">T4</SelectItem>
                      <SelectItem value="5+">T5+</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input type="number" placeholder="Área (m²)" value={formData.area} onChange={e => setFormData({
                  ...formData,
                  area: e.target.value
                })} className="form-input-enhanced" />
                </div>

                <Button type="submit" className="btn-cta w-full text-lg font-bold">
                  🏠 Obter Avaliação Grátis
                </Button>
                
                <div className="text-center pt-4">
                  <p className="text-xs text-gray-500 mb-3">
                    🔒 Os seus dados estão seguros. Respeitamos a sua privacidade.
                  </p>
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
    </section>;
};