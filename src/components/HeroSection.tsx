import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import modernInteriorHero from "@/assets/modern-interior-hero.jpg";
import { Trophy, Star } from "lucide-react";
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
  return <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Background Image with Dark Blue Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${modernInteriorHero})`
    }}>
        <div className="absolute inset-0 bg-primary/75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* H1 Centralizado no Topo */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight lg:text-5xl">
            Está a Pensar Vender a Sua Casa?
          </h1>
          <p className="text-xl lg:text-2xl text-white/95 font-medium">
            Receba uma avaliação 100% gratuita e sem compromisso!
          </p>
        </div>

        {/* Imagem do Miguel e Formulário Centralizados */}
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">
          {/* Imagem do Miguel e Informações Profissionais */}
          <div className="text-center">
            {/* Professional Photo - Circular with elegant border */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <img src="/lovable-uploads/8a1a0f18-19d7-4095-932b-0746ea3ffbfa.png" alt="Miguel - Consultor Imobiliário" className="w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-full shadow-2xl border-4 border-white/30" />
              </div>
            </div>

            {/* Professional Information - Elegant text block */}
            <div className="text-center space-y-3">
              <h3 className="text-2xl lg:text-3xl font-bold text-white">
                Miguel Carvalho
              </h3>
              <p className="text-lg text-white/90 font-medium">
                Consultor Imobiliário Certificado
              </p>
              <div className="flex items-center justify-center gap-2 text-accent">
                <Trophy className="w-5 h-5" />
                <span className="text-lg font-semibold text-white">
                  +2000 Transações Realizadas
                </span>
                <Star className="w-5 h-5 fill-accent" />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex justify-center">
            <Card className="w-full max-w-md shadow-2xl border-0 bg-white">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Avaliação Gratuita
                  </h2>
                  <p className="text-muted-foreground">
                    Preencha os dados e receba a sua avaliação
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">Nome *</Label>
                    <Input id="name" type="text" value={formData.name} onChange={e => setFormData({
                    ...formData,
                    name: e.target.value
                  })} className="h-12 border-2 focus:border-accent" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">E-mail *</Label>
                    <Input id="email" type="email" value={formData.email} onChange={e => setFormData({
                    ...formData,
                    email: e.target.value
                  })} className="h-12 border-2 focus:border-accent" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium">Telefone *</Label>
                    <Input id="phone" type="tel" value={formData.phone} onChange={e => setFormData({
                    ...formData,
                    phone: e.target.value
                  })} className="h-12 border-2 focus:border-accent" required />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Tipo de Imóvel *</Label>
                    <Select onValueChange={value => setFormData({
                    ...formData,
                    propertyType: value
                  })}>
                      <SelectTrigger className="h-12 border-2 focus:border-accent">
                        <SelectValue placeholder="Seleccione o tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="apartamento">Apartamento</SelectItem>
                        <SelectItem value="moradia">Moradia</SelectItem>
                        <SelectItem value="terreno">Terreno</SelectItem>
                        <SelectItem value="comercial">Imóvel Comercial</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Nº de Quartos</Label>
                    <Select onValueChange={value => setFormData({
                    ...formData,
                    bedrooms: value
                  })}>
                      <SelectTrigger className="h-12 border-2 focus:border-accent">
                        <SelectValue placeholder="Seleccione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">0 (Estúdio)</SelectItem>
                        <SelectItem value="1">1 Quarto</SelectItem>
                        <SelectItem value="2">2 Quartos</SelectItem>
                        <SelectItem value="3">3 Quartos</SelectItem>
                        <SelectItem value="4">4 Quartos</SelectItem>
                        <SelectItem value="5+">5+ Quartos</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="area" className="text-sm font-medium">Área (m²)</Label>
                    <Input id="area" type="number" value={formData.area} onChange={e => setFormData({
                    ...formData,
                    area: e.target.value
                  })} className="h-12 border-2 focus:border-accent" placeholder="Ex: 120" />
                  </div>

                  <Button type="submit" className="w-full h-12 text-lg bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    Obter Avaliação Grátis
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};