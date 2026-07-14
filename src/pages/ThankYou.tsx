import { CheckCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoMiguel from "@/assets/logo-miguel.png";
import heroBackground from "@/assets/modern-interior-hero.jpg";

const nextSteps = [
  "O Miguel vai analisar os dados do seu imóvel.",
  "Recebe uma chamada nas próximas 24 horas para agendar a visita.",
  "Após a visita, saberá o valor de mercado em 48 horas.",
];

const ThankYou = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-12 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-800/85 to-gray-900/95"></div>
      </div>

      <div className="relative z-10 w-full max-w-lg">
        <img src={logoMiguel} alt="Logo Miguel Mónica" className="w-44 h-auto mx-auto mb-8" />

        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 lg:p-10">
          <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Pedido recebido!</h1>
          <p className="text-gray-600 mb-8">
            Obrigado pela sua confiança. A sua avaliação gratuita já está a ser preparada.
          </p>

          <div className="text-left space-y-4 mb-8">
            {nextSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-7 h-7 shrink-0 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <p className="text-gray-700 leading-snug">{step}</p>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/351969599062?text=Ol%C3%A1%20Miguel!%20Acabei%20de%20pedir%20a%20minha%20avalia%C3%A7%C3%A3o%20gratuita%20no%20site."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta block w-full text-center text-base mb-3"
          >
            💬 Falar já com o Miguel no WhatsApp
          </a>
          <a
            href="tel:+351969599062"
            className="flex items-center justify-center gap-2 w-full border-2 border-accent text-accent font-semibold py-3 rounded-xl hover:bg-accent/10 transition-colors mb-4"
          >
            <Phone className="w-4 h-4" /> +351 969 599 062
          </a>
          <p className="text-xs text-gray-500 mb-6">
            ou escreva para{" "}
            <a href="mailto:miguel.monica@century21.pt" className="underline hover:text-accent transition-colors">
              miguel.monica@century21.pt
            </a>
          </p>

          <Link to="/" className="text-sm text-gray-400 underline hover:text-gray-600 transition-colors">
            Voltar à página principal
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
