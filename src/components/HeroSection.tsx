import { useNavigate } from "react-router-dom";
import { useState, useEffect, forwardRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

// Importação das imagens locais
import modernInteriorHero from "@/assets/modern-interior-hero.jpg";
import miguelImage from "@/assets/miguel-pg2.png"; 
import logoMiguel from "@/assets/logo-miguel.png";

export const HeroSection = forwardRef<HTMLDivElement>((props, ref) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", propertyType: "", bedrooms: "", area: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xyzpjqog", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate('/obrigado');
      } else {
        toast.error("Ocorreu um erro ao enviar a sua mensagem. Tente novamente.");
      }
    } catch (error) {
      toast.error("Ocorreu um erro de rede. Verifique a sua ligação à internet.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-start px-4 pt-8 pb-12 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${modernInteriorHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90"></div>
      </div>

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
          <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="relative">
              <img src={miguelImage} alt="Miguel Mónica - Consultor Imobiliário" className="relative w-full max-w-md h-auto rounded-2xl object-cover shadow-2xl" />
            </div>
          </div>

          <div ref={ref} className={`flex justify-center lg:justify-start w-full transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="w-full max-w-md bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/20">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Avaliação Gratuita</h3>
                <p className="text-gray-600">Descubra o valor real do seu imóvel</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="hidden" name="_cc" value={formData.email} />
                <Input 
                  type="text" 
                  name="Nome"
                  placeholder="Nome completo *" 
                  value={formData.name} 
                  onChange={e => setFormData({ ...formData, name: e.target.value })} 
                  className="form-input-enhanced" 
                  required 
                />
                <Input 
                  type="email" 
                  name="Email"
                  placeholder="Email *" 
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="form-input-enhanced" 
                  required 
                />
                <Input 
                  type="tel" 
                  name="Telefone"
                  placeholder="Telefone *" 
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  className="form-input-enhanced" 
                  required 
                />
                <Select value={formData.propertyType} onValueChange={value => setFormData({ ...formData, propertyType: value })}>
                  <SelectTrigger className="form-input-enhanced text-gray-700"><SelectValue placeholder="Tipo de Imóvel *" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apartamento">Apartamento</SelectItem>
                    <SelectItem value="moradia">Moradia</SelectItem>
                    <SelectItem value="terreno">Terreno</SelectItem>
                    <SelectItem value="comercial">Comercial</SelectItem>
                  </SelectContent>
                </Select>
                <div className="grid grid-cols-2 gap-4">
                  <Select value={formData.bedrooms} onValueChange={value => setFormData({ ...formData, bedrooms: value })}>
                    <SelectTrigger className="form-input-enhanced text-gray-700"><SelectValue placeholder="Quartos" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">T0</SelectItem><SelectItem value="1">T1</SelectItem><SelectItem value="2">T2</SelectItem><SelectItem value="3">T3</SelectItem><SelectItem value="4">T4</SelectItem><SelectItem value="5+">T5+</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input 
                    type="number" 
                    name="Área (m²)"
                    placeholder="Área (m²)" 
                    value={formData.area}
                    onChange={e => setFormData({ ...formData, area: e.target.value })}
                    className="form-input-enhanced"
                  />
                </div>
                <Button type="submit" className="btn-cta w-full text-lg font-bold" disabled={isSubmitting}>
                  {isSubmitting ? 'A enviar...' : '🏠 Obter Avaliação Grátis'}
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