import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// A Label já não é necessária para o formulário, mas pode ser usada noutros locais
// import { Label } from "@/components/ui/label"; 
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-4 py-16">
      {/* Background Image with Dark Blue Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${modernInteriorHero})` }}>
        <div className="absolute inset-0 bg-gray-900/80"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Está a Pensar Vender a Sua Casa?
          </h1>
          <p className="mt-4 text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
            Receba uma avaliação 100% gratuita e sem compromisso!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Coluna Esquerda: Imagem Grande do Miguel (sem contorno) */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src="/lovable-uploads/8a1a0f18-19d7-4095-932b-0746ea3ffbfa.png" 
                alt="Miguel Carvalho - Consultor Imobiliário" 
                className="w-full max-w-md h-auto rounded-lg object-cover shadow-2xl" // Borda removida
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent rounded-b-lg">
                <h3 className="text-xl font-bold text-white">Miguel Carvalho</h3>
                <p className="text-white/80">Consultor Imobiliário Certificado</p>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Formulário (com placeholders e campos destacados) */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Inputs com placeholder, sem Label */}
                <Input 
                  type="text" 
                  placeholder="Nome *" 
                  value={formData.name} 
                  onChange={e => setFormData({ ...formData, name: e.target.value })} 
                  className="h-12 bg-slate-100 border-slate-200 focus:ring-2 focus:ring-yellow-400" 
                  required 
                />
                <Input 
                  type="email" 
                  placeholder="E-mail *" 
                  value={formData.email} 
                  onChange={e => setFormData({ ...formData, email: e.target.value })} 
                  className="h-12 bg-slate-100 border-slate-200 focus:ring-2 focus:ring-yellow-400" 
                  required 
                />
                <Input 
                  type="tel" 
                  placeholder="Telefone *" 
                  value={formData.phone} 
                  onChange={e => setFormData({ ...formData, phone: e.target.value })} 
                  className="h-12 bg-slate-100 border-slate-200 focus:ring-2 focus:ring-yellow-400" 
                  required 
                />
                
                <Select onValueChange={value => setFormData({ ...formData, propertyType: value })}>
                  <SelectTrigger className="h-12 bg-slate-100 border-slate-200 text-gray-500 focus:ring-2 focus:ring-yellow-400">
                    <SelectValue placeholder="Tipo de Imóvel *" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apartamento">Apartamento</SelectItem>
                    <SelectItem value="moradia">Moradia</SelectItem>
                    <SelectItem value="terreno">Terreno</SelectItem>
                    <SelectItem value="comercial">Comercial</SelectItem>
                  </SelectContent>
                </Select>
                
                <div className="grid grid-cols-2 gap-4">
                  <Select onValueChange={value => setFormData({ ...formData, bedrooms: value })}>
                    <SelectTrigger className="h-12 bg-slate-100 border-slate-200 text-gray-500 focus:ring-2 focus:ring-yellow-400">
                      <SelectValue placeholder="Nº de Quartos" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">T0</SelectItem><SelectItem value="1">T1</SelectItem><SelectItem value="2">T2</SelectItem><SelectItem value="3">T3</SelectItem><SelectItem value="4">T4</SelectItem><SelectItem value="5+">T5+</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input 
                    type="number" 
                    placeholder="Área (m²)" 
                    value={formData.area} 
                    onChange={e => setFormData({ ...formData, area: e.target.value })} 
                    className="h-12 bg-slate-100 border-slate-200 focus:ring-2 focus:ring-yellow-400" 
                  />
                </div>

                <Button type="submit" className="w-full h-12 text-lg bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold shadow-lg transition-transform transform hover:scale-105 mt-4">
                  Obter Avaliação Grátis
                </Button>
                
                <p className="text-xs text-center text-gray-500 pt-2">
                  Os seus dados estão seguros. Respeitamos a sua privacidade.
                </p>

              </form>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};