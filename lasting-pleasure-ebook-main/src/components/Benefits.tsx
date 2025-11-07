import { Card } from "@/components/ui/card";

const benefits = [
  {
    title: "Exercícios Simples e Práticos",
    icon: "💪"
  },
  {
    title: "Receitas Caseiras Naturais",
    icon: "🌿"
  },
  {
    title: "Técnicas de Controle Durante o Sexo",
    icon: "⏱️"
  },
  {
    title: "Métodos Sem Remédios Caros",
    icon: "💰"
  }
];

const Benefits = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl md:text-4xl font-bold text-primary animate-fade-in">
          O Que Você Vai Aprender
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="bg-gradient-card p-8 text-center border-none shadow-md hover:shadow-lg transition-all hover:scale-105 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-bold text-primary">{benefit.title}</h3>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
