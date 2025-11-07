import { Button } from "@/components/ui/button";
import logoAtletico from "@/assets/logo-atletico.jpg";

const Header = () => {
  const scrollToOffer = () => {
    const offerSection = document.getElementById('offer');
    offerSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-primary py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full overflow-hidden bg-background">
          <img src={logoAtletico} alt="Logo Potência Masculina" className="h-full w-full object-cover" />
        </div>
        <h1 className="text-lg md:text-xl font-bold text-primary-foreground">
          MÉTODO POTÊNCIA MASCULINA
        </h1>
        <Button 
          onClick={scrollToOffer}
          className="bg-background text-primary hover:bg-background/90 font-bold rounded-full px-6 py-2 transition-all hover:scale-105 hover:shadow-lg"
        >
          COMPRAR AGORA
        </Button>
      </div>
    </header>
  );
};

export default Header;
