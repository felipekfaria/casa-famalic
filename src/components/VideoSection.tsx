// src/components/VideoSection.tsx
import { useEffect, useRef, useState } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";

export const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);

  // O vídeo só toca quando a secção entra no ecrã e pausa quando sai.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // O browser só autoriza autoplay se o elemento já estiver sem som no
    // momento do play() — aplicamos diretamente no elemento, porque o React
    // nem sempre reflete a prop 'muted' no DOM a tempo. No iOS antigo é o
    // atributo HTML que conta, por isso definimos ambos.
    video.defaultMuted = true;
    video.muted = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
    if (video.paused) video.play().catch(() => {});
  };

  return (
    <section className="py-20 px-4 bg-background text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-12">
          Conheça um Pouco Mais do Meu Trabalho
        </h2>

        <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[380px] aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl border border-accent/20 bg-black">
          <video
            ref={videoRef}
            src="/video-miguel.mp4"
            poster="/video-poster.jpg"
            loop
            playsInline
            preload="metadata"
            onClick={togglePlay}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            className="w-full h-full object-cover cursor-pointer"
          />

          {/* Botão de play — aparece se o vídeo estiver parado */}
          {!playing && (
            <button
              onClick={togglePlay}
              aria-label="Reproduzir vídeo"
              className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-accent text-accent-foreground shadow-2xl flex items-center justify-center hover:scale-105 transition-transform"
            >
              <Play className="w-7 h-7 ml-1" fill="currentColor" />
            </button>
          )}

          <button
            onClick={toggleMute}
            aria-label={muted ? "Ativar som" : "Desativar som"}
            className="absolute bottom-4 right-4 w-11 h-11 rounded-full bg-black/60 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/80 transition-colors"
          >
            {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
        </div>

        <p className="text-sm text-muted-foreground mt-4">
          Toque no vídeo para pausar · ícone para ativar o som
        </p>
      </div>
    </section>
  );
};
