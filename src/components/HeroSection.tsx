import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-image.jpg";
import { MapPin, Home, Phone } from "lucide-react";

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
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>

      {/* Floating hexagonal icons */}
      <div className="absolute top-20 left-10 opacity-30">
        <div className="hexagon p-4 bg-accent/20">
          <Home className="w-6 h-6 text-accent" />
        </div>
      </div>
      <div className="absolute top-40 right-20 opacity-30">
        <div className="hexagon p-4 bg-accent/20">
          <MapPin className="w-6 h-6 text-accent" />
        </div>
      </div>
      <div className="absolute bottom-40 left-20 opacity-30">
        <div className="hexagon p-4 bg-accent/20">
          <Phone className="w-6 h-6 text-accent" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Professional Photo and Hero Text */}
        <div className="text-center lg:text-left">
          {/* Professional Photo - Large and Highlighted */}
          <div className="flex justify-center lg:justify-start mb-8">
            <div className="relative">
              <img 
                src="/lovable-uploads/8a1a0f18-19d7-4095-932b-0746ea3ffbfa.png" 
                alt="Consultor Imobiliário Profissional"
                className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-2xl border-8 border-white/20 backdrop-blur-sm"
              />
              {/* Professional badge overlay */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground px-6 py-3 rounded-lg shadow-lg font-bold">
                Consultor Certificado
              </div>
            </div>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Está a Pensar Vender a Sua Casa?
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 mb-8 font-medium">
            Receba uma avaliação 100% gratuita e sem compromisso!
          </p>
          
          {/* Additional professional info */}
          <div className="hidden lg:block">
            <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-accent-foreground">CC</span>
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">Cristina Carvalho</p>
                <p className="text-white/80 text-sm">Consultora Imobiliária Certificada</p>
                <p className="text-white/80 text-xs">+2000 Transações Realizadas</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="flex justify-center lg:justify-end">
          <Card className="w-full max-w-md shadow-2xl border-0">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">Nome *</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">E-mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium">Telefone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-12"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium">Tipo de Imóvel *</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, propertyType: value })}>
                    <SelectTrigger className="h-12">
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
                  <Select onValueChange={(value) => setFormData({ ...formData, bedrooms: value })}>
                    <SelectTrigger className="h-12">
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
                  <Input
                    id="area"
                    type="number"
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    className="h-12"
                    placeholder="Ex: 120"
                  />
                </div>

                <Button type="submit" className="btn-cta w-full h-12 text-lg">
                  Obter Avaliação Grátis
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <style>{`
        .hexagon {
          clip-path: polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%);
        }
      `}</style>
    </section>
  );
};