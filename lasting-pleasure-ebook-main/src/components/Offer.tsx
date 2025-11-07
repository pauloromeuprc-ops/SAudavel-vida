import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";
import mpesaLogo from "@/assets/mpesa-logo.png";
import emolaLogo from "@/assets/emola-logo.png";
const Offer = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Obrigado! Em breve você receberá o link.");
    setName("");
    setContact("");
  };
  return <section id="offer" className="bg-gradient-primary py-16 md:py-24 text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-8 text-3xl md:text-4xl font-bold animate-fade-in">
          Adquira agora seu Guia completo e comece hoje mesmo a transformação!
        </h2>
        
        <div className="mb-8 animate-fade-in">
          <p className="text-lg mb-2 font-semibold">Aproveite a promoção</p>
          <div className="flex items-center justify-center gap-4">
            <span className="text-2xl line-through opacity-70">483Mt</span>
            <span className="text-4xl md:text-5xl font-bold">243Mt</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8 animate-fade-in-up">
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-[hsl(var(--mpesa))] hover:bg-[hsl(var(--mpesa))]/90 text-white font-bold text-lg px-8 py-6 rounded-full min-w-[200px] transition-all hover:scale-105 hover:shadow-xl flex items-center gap-3" 
            onClick={() => window.open('https://wa.link/r4enrb', '_blank')}
          >
            <img src={mpesaLogo} alt="M-Pesa" className="w-8 h-8 object-contain" />
            Pagar com M-Pesa
          </Button>
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-[hsl(var(--emola))] hover:bg-[hsl(var(--emola))]/90 text-white font-bold text-lg px-8 py-6 rounded-full min-w-[200px] transition-all hover:scale-105 hover:shadow-xl flex items-center gap-3" 
            onClick={() => window.open('https://wa.link/r4enrb', '_blank')}
          >
            <img src={emolaLogo} alt="e-Mola" className="w-8 h-8 object-contain" />
            Pagar com e-Mola
          </Button>
        </div>

        <div className="flex items-center justify-center gap-3 text-sm animate-fade-in">
          <span className="text-xl">🔒</span>
          <span>Seu pagamento é seguro e 100% confidencial.</span>
        </div>
      </div>
    </section>;
};
export default Offer;