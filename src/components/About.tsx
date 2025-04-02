
import ScrollReveal from "./ScrollReveal";

const About = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4 text-mint-dark">Sobre a Psicóloga</h2>
            <div className="h-1 w-24 bg-mint mx-auto rounded-full mb-8"></div>
          </div>
        </ScrollReveal>
        
        <div className="flex flex-col md:flex-row items-center">
          <ScrollReveal delay={100}>
            <div className="md:w-2/5 mb-8 md:mb-0">
              <div className="relative">
                <div className="absolute inset-0 bg-mint-light rounded-3xl -rotate-3 transform"></div>
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                  alt="Consultório de psicologia" 
                  className="rounded-3xl shadow-lg relative z-10 rotate-1 transform object-cover h-[400px] w-full"
                />
              </div>
            </div>
          </ScrollReveal>
          
          <div className="md:w-3/5 md:pl-16">
            <ScrollReveal delay={200}>
              <h3 className="text-2xl font-serif font-medium mb-4 text-foreground">Dra. Sofia Mendes</h3>
              <p className="text-lg mb-6 text-foreground/80">
                Psicóloga clínica com mais de 8 anos de experiência, especializada em Terapia Cognitivo-Comportamental (TCC) e pós-graduada em Neuropsicologia.
              </p>
              <p className="text-lg mb-6 text-foreground/80">
                Dedico-me a criar um ambiente acolhedor e seguro onde você possa explorar seus sentimentos, pensamentos e comportamentos sem julgamentos. Acredito no poder da psicoterapia como ferramenta de transformação e autoconhecimento.
              </p>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <ScrollReveal delay={300}>
                <div className="bg-mint-light/50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Especializações</h4>
                  <ul className="list-disc list-inside text-foreground/80">
                    <li>Ansiedade e Depressão</li>
                    <li>Relacionamentos</li>
                    <li>Autoconhecimento</li>
                    <li>Traumas</li>
                  </ul>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={400}>
                <div className="bg-mint-light/50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Formação</h4>
                  <ul className="list-disc list-inside text-foreground/80">
                    <li>Psicologia - USP</li>
                    <li>Especialização em TCC</li>
                    <li>Mestrado em Psicologia Clínica</li>
                    <li>CRP: XX/XXXXX</li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>
            
            <ScrollReveal delay={500}>
              <div className="bg-mint/20 p-6 rounded-xl border border-mint/30">
                <p className="italic text-foreground/90">
                  "Meu compromisso é caminhar ao seu lado nessa jornada de autodescoberta, ajudando-o a reconhecer suas potencialidades e transformar padrões limitantes em novas possibilidades de ser e estar no mundo."
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
