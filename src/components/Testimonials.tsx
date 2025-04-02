
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: "Maria C.",
      text: "A terapia com a Dra. Sofia transformou minha vida. Finalmente consegui enfrentar minha ansiedade e desenvolver ferramentas para lidar com situações desafiadoras no dia a dia.",
      stars: 5,
      position: "Paciente há 1 ano"
    },
    {
      id: 2,
      name: "João P.",
      text: "O acolhimento e profissionalismo da Dra. Sofia fizeram toda a diferença no meu processo terapêutico. Recomendo fortemente para quem busca autoconhecimento e crescimento pessoal.",
      stars: 5,
      position: "Paciente há 8 meses"
    },
    {
      id: 3,
      name: "Ana L.",
      text: "A terapia online superou minhas expectativas. Mesmo à distância, a Dra. Sofia consegue criar um ambiente seguro e acolhedor. Estou evoluindo muito desde que comecei o acompanhamento.",
      stars: 5,
      position: "Paciente há 6 meses"
    },
  ];

  return (
    <section id="testimonials" className="section bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4 text-foreground animate-fade-in">
            Depoimentos
          </h2>
          <div className="h-1 w-24 bg-lavender-dark mx-auto rounded-full mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto text-foreground/80 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            O que nossos pacientes dizem sobre sua experiência terapêutica
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center md:items-stretch gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.id} className={`w-full max-w-md animate-fade-in service-card ${
              activeIndex === index ? "border-lavender" : ""
            }`} style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <svg 
                      key={i} 
                      className="h-5 w-5 text-yellow-400 fill-current" 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                
                <p className="italic text-foreground/90 mb-6">"{testimonial.text}"</p>
                
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-foreground/70">{testimonial.position}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 mx-1 rounded-full ${
                activeIndex === index ? "bg-lavender-dark" : "bg-lavender/30"
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Mostrar depoimento ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <div className="bg-lavender-light/70 p-8 rounded-2xl max-w-3xl mx-auto">
            <h3 className="text-xl md:text-2xl font-serif mb-6">
              Pronto para iniciar sua jornada de autoconhecimento?
            </h3>
            <a
              href="https://wa.me/5571991017313?text=Olá! Gostaria de agendar uma consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-button mx-auto inline-flex"
            >
              Agende sua consulta hoje!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
