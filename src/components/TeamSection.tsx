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
      {/* Container principal alterado para uma única coluna centralizada */}
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Título do Miguel */}
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12">
          Gostaria também de lhe fazer uma breve apresentação!
        </h2>
        
        {/* Parágrafos do Miguel */}
        <div className="space-y-6 text-lg leading-relaxed text-white/90">
          <p>
            Olá, sou o <strong className="text-white">Miguel Monica</strong>. 
          </p>
          
          <p>
          Sou natural de Portimão e conheço o Algarve como a palma da mão. Cada casa conta uma história — e a sua merece ser valorizada com inteligência e estratégia.
          Acredito que vender um imóvel vai muito além de uma transação: é uma mudança de vida. Por isso, trabalho com o mesmo foco e dedicação com que se prepara uma grande conquista.
          </p>
          
          <p>- 5 anos de experiência no mercado imobiliário algarvio</p>
          <p>- Mais de 100 imóveis vendidos com sucesso</p>
          <p>- Especialista local com o apoio total da CENTURY 21, uma agência com mais de 15 anos de mercado</p>
          <p>Aqui, cada etapa é cuidada ao detalhe para garantir uma venda segura, transparente e sem stress.</p>
        </div>

        {/* A imagem do Miguel foi removida para seguir a estrutura da referência */}

      </div>
    </section>
  );
};