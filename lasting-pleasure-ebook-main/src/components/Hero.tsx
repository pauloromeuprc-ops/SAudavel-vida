import { Button } from "@/components/ui/button";
import { useState } from "react";
import vslThumbnail from "@/assets/vsl-thumbnail.jpg";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);
  
  const scrollToOffer = () => {
    const offerSection = document.getElementById('offer');
    offerSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-muted py-16 md:py-24 animate-fade-in">
      <div className="container mx-auto px-4 text-center">
        <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
          Recupere seu Controle e Confiança na Vida Sexual
        </h1>
        <p className="mx-auto mb-6 max-w-3xl text-lg md:text-xl text-foreground/80">
          Aprenda soluções simples, naturais e comprovadas para vencer a ejaculação precoce.
        </p>
        <p className="mx-auto mb-10 max-w-3xl text-xl md:text-2xl font-semibold text-primary">
          ASSISTA O VÍDEO ABAIXO
        </p>
        
        <div className="mx-auto mb-10 max-w-4xl">
          {!showVideo ? (
            <div 
              className="relative overflow-hidden rounded-2xl shadow-lg animate-scale-in cursor-pointer group"
              onClick={() => setShowVideo(true)}
            >
              <img 
                src={vslThumbnail} 
                alt="Aperte para assistir - Controle da Ejaculação Precoce" 
                className="w-full h-auto object-cover transition-transform group-hover:scale-105"
              />
            </div>
          ) : (
            <div className="overflow-hidden rounded-2xl shadow-lg animate-scale-in aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/oIvw558Lyqo?autoplay=1"
                title="Vídeo sobre Potência Masculina"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          )}
        </div>

        <div className="flex justify-center">
          <Button 
            onClick={scrollToOffer}
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-xl px-12 py-8 rounded-full transition-all hover:scale-105 hover:shadow-xl flex flex-col"
          >
            <span>Quero recuperar minha</span>
            <span>potência</span>
          </Button>
        </div>
        
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm md:text-base text-foreground/70">
          <span className="flex items-center gap-2">
            <span className="text-secondary">✓</span> Acesso imediato
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-2">
            <span className="text-secondary">✓</span> + de 5 mil alunos
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-2">
            <span className="text-secondary">✓</span> 18 países alcançados
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
