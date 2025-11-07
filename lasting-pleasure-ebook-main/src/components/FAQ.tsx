import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import homemFrustacao from "@/assets/homem-frustacao.svg";
import homemRealizado from "@/assets/homem-realizado.svg";

const faqs = [
  {
    question: "Este método é natural?",
    answer: "Sim! Todas as técnicas são 100% naturais, sem uso de medicamentos ou substâncias químicas."
  },
  {
    question: "Funciona mesmo?",
    answer: "Milhares de homens já transformaram sua vida sexual com este guia. Os resultados variam, mas a maioria relata melhoras significativas em poucos dias."
  },
  {
    question: "O pagamento é seguro?",
    answer: "Sim. Utilizamos gateways de pagamento confiáveis como M-Pesa e e-Mola, com criptografia de ponta a ponta."
  },
  {
    question: "Posso acessar pelo celular?",
    answer: "Claro! O Guia está em formato PDF e pode ser lido em qualquer dispositivo: celular, tablet ou computador."
  }
];

const FAQ = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl md:text-4xl font-bold text-primary animate-fade-in">
          Perguntas Frequentes
        </h2>
        
        <Accordion type="single" collapsible className="mx-auto max-w-3xl animate-fade-in-up">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-bold text-primary hover:text-secondary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mx-auto max-w-4xl mt-16 space-y-8">
          <h3 className="text-2xl md:text-3xl font-bold text-primary text-center mb-8">
            O QUE É O MÉTODO POTÊNCIA MASCULINA?
          </h3>
          
          <div className="space-y-6 text-foreground/80 text-lg">
            <p>
              O Potência Masculina é um programa de acompanhamento que vem ajudando homens a melhorarem seus relacionamentos, como: Ejaculação precoce, falta de desejo sexual, Disfunção erétil psicológica, abordando a saúde física emocional, sem medicamentos, atráves de uma transformação focada em você.
            </p>
            
            <p>
              É um método on-line, desenvolvido para homens de todas as idades que desejam se sentir confiantes, durar mais na hora H, satisfeitos com a relação intima, vivendo uma transformação total de sua vida.
            </p>
            
            <p>
              Tudo isso sem fazer absolutamente nada que prejudique à sua saúde.
            </p>
            
            <p>
              Você vai se surpreender ao descobrir como pode ser simples durar mais na hora H, ter rigidez, ter controle da ejaculação, mesmo que sua idade já esteja mais avança
            </p>
          </div>

          <div className="space-y-6 mt-12">
            <img 
              src={homemFrustacao} 
              alt="Homem frustrado antes do método" 
              className="w-full max-w-3xl mx-auto"
            />
            <img 
              src={homemRealizado} 
              alt="Homem realizado após o método" 
              className="w-full max-w-3xl mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
