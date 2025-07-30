// src/components/VideoSection.tsx

export const VideoSection = () => {
    return (
      <section className="py-20 px-4 bg-background text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-12">
            Conheça um Pouco Mais do Nosso Trabalho
          </h2>
          
          {/* 1. O CONTAINER DO VÍDEO FOI ALTERADO */}
          {/* 'relative' e 'pt-[56.25%]' forçam a proporção de 16:9 */}
          <div className="relative pt-[56.25%] shadow-2xl rounded-lg overflow-hidden">
            <iframe 
              src="https://www.youtube-nocookie.com/embed/S2z4pdFGBKw?si=ep8EJUfVBPjNw8-N" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
              // 2. AS CLASSES DO IFRAME FORAM ALTERADAS
              // 'absolute' e 'top-0 left-0' fazem com que ele preencha o container
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>
    );
  };