import teamPhoto from "@/assets/team-photo.jpg";

export const TeamSection = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
              Gostaria também de lhe fazer uma breve apresentação!
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed text-foreground/80">
              <p>
                Somos a <strong className="text-foreground">Equipa Cristina Carvalho</strong>, 
                especialistas no mercado imobiliário desde 2010, com foco particular 
                em Vila Nova de Famalicão e toda a região envolvente.
              </p>
              
              <p>
                A nossa paixão é ajudar pessoas como você a encontrar as melhores 
                soluções para os seus imóveis. A nossa equipa é composta por 
                consultores experientes, uma coordenadora dedicada e uma advogada 
                especializada, garantindo que todo o processo burocrático seja 
                tratado com máximo profissionalismo.
              </p>
              
              <p className="text-xl font-semibold text-accent">
                Já fizemos mais de 2000 transações
              </p>
              
              <p>
                Este número não é apenas uma estatística - representa mais de 
                2000 famílias que confiaram em nós para realizar os seus sonhos 
                imobiliários, seja na compra ou venda da sua casa.
              </p>
            </div>
          </div>

          {/* Team Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src={teamPhoto} 
                alt="Equipa Cristina Carvalho"
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