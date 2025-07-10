import algarveBackground from "@/assets/algarve-properties-background.jpg";

export const TeamSection = () => {
  return (
    <section 
      className="py-20 px-4 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${algarveBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              Gostaria também de lhe fazer uma breve apresentação!
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed text-white/90">
              <p>
                Olá, sou o <strong className="text-white">Miguel Monica</strong>. Como se costuma dizer, sou Portimonense de gema, e é aqui, no coração do Algarve, que a minha especialidade ganha vida. Para mim, tratar da venda do seu imóvel vai muito além de uma simples transação; é uma missão que assumo com total seriedade.
              </p>
              
              <p>
                A vida já me ensinou que os maiores desafios não se vencem com sorte, mas com garra. Tal como aprendi a ler as marés quando era skipper, hoje aplico essa mesma intuição para navegar o mercado imobiliário. A resiliência que o desporto me deu é a mesma que uso para defender o valor do seu património até à última. Isto não é só conversa, é a minha forma de estar.
              </p>
              
              <p>
                Pode contar com um plano meticuloso, pensado para si, e com o apoio de toda a estrutura da Century 21, que assegura que toda a parte burocrática decorra sem sobressaltos. Porque a sua tranquilidade é uma prioridade.
              </p>
              
              <p>
                Para mim, cada negócio fechado não entra para a estatística. Representa a confiança de mais uma família que me entregou a chave de um dos seus maiores objetivos. E é com esse mesmo respeito e dedicação que quero tratar do seu.
              </p>
            </div>
          </div>

          {/* Team Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src="/lovable-uploads/6867d621-1687-4142-aae7-60a38f86577a.png" 
                alt="Miguel Monica - Consultor Imobiliário"
                className="rounded-lg shadow-2xl w-full max-w-md object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-lg shadow-lg">
                <span className="font-bold text-lg">+2000 Transações</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};