import testimonial1 from "@/assets/testimonial-1.webp";
import testimonial2 from "@/assets/testimonial-2.webp";
import testimonial3 from "@/assets/testimonial-3.webp";
import testimonial4 from "@/assets/testimonial-4.webp";
import testimonial5 from "@/assets/testimonial-5.webp";
import testimonial6 from "@/assets/testimonial-6.webp";
import deboraImage from "@/assets/debora.webp";

const Testimonials = () => {
  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl md:text-4xl font-bold text-primary animate-fade-in">
          Resultados Reais de Homens Comuns
        </h2>

        <div className="flex flex-col gap-4 mb-12 animate-fade-in max-w-2xl mx-auto">
          <img src={testimonial1} alt="Depoimento de cliente satisfeito" className="rounded-lg shadow-md w-full h-auto object-cover" />
          <img src={testimonial2} alt="Depoimento de João sobre resultados" className="rounded-lg shadow-md w-full h-auto object-cover" />
          <img src={testimonial3} alt="Depoimento de Wilson" className="rounded-lg shadow-md w-full h-auto object-cover" />
          <img src={testimonial4} alt="Depoimento por email" className="rounded-lg shadow-md w-full h-auto object-cover" />
          <img src={testimonial5} alt="Depoimento via WhatsApp" className="rounded-lg shadow-md w-full h-auto object-cover" />
          <img src={testimonial6} alt="Depoimento de Isaque" className="rounded-lg shadow-md w-full h-auto object-cover" />
        </div>

        <p className="text-center text-lg md:text-xl mb-12 animate-fade-in text-foreground/90 max-w-4xl mx-auto">
          O método Potência Masculina coleciona milhares de prints de pessoas que tinham os mesmos problemas que você. Te garanto que, dessa vez, você nunca mais vai precisar tomar azulzinho ou viver frustrado.
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12 animate-fade-in">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              CONHEÇA O ÚNICO MÉTODO QUE AJUDA VERDADEIRAMENTE O HOMEM E QUE É LIVRE DE FRUSTRAÇÕES.
            </h3>
            <p className="text-foreground/90 mb-4">
              O Método Potência Masculina foi desenvolvido pela Sexóloga Débora Martins e ganhou notoriedade no Brasil todo e em outros países da América Latina por ser a solução definitiva para homens que já haviam tentado de tudo.
            </p>
            <p className="text-foreground/90 mb-4">
              Você está diante de um plano definitivo que foi desenvolvido após anos de estudo, análise e comprovado cientificamente.
            </p>
            <p className="text-foreground/90">
              A solução perfeita para homens que cansaram de se frustrar, ouvir piadinhas, se sentem impotentes com a situação e querem voltar a se sentirem confiantes, amados, valorizados e satisfeitos com a sua relação sexual.
            </p>
          </div>
          <div className="flex justify-center">
            <img src={deboraImage} alt="Sexóloga Débora Martins" className="rounded-lg shadow-xl w-full max-w-md" />
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-primary text-center mb-8 uppercase">
            Eles investiram no método potência masculina e relataram como foi a transformação
          </h3>
          
          <div className="flex flex-col gap-6">
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/-j4x_eWaH-E"
                title="Depoimento em vídeo 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/GzLVv1CH4nk"
                title="Depoimento em vídeo 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/eDEQF-5ihZ4"
                title="Depoimento em vídeo 3"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
