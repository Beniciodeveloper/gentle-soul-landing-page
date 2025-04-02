
import ScrollReveal from "./ScrollReveal";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Terapia Individual",
      description: "Atendimento personalizado para auxiliar no tratamento de questões emocionais, comportamentais e relacionais.",
      modalities: "Presencial e Online",
      icon: "👤"
    },
    {
      id: 2,
      title: "Terapia para Casais",
      description: "Trabalho focado na melhoria da comunicação e resolução de conflitos para fortalecer o relacionamento.",
      modalities: "Presencial e Online",
      icon: "👥"
    },
    {
      id: 3,
      title: "Terapia para Adolescentes",
      description: "Acompanhamento especializado para jovens passando por desafios típicos dessa fase da vida.",
      modalities: "Presencial e Online",
      icon: "🧠"
    },
    {
      id: 4,
      title: "Orientação Parental",
      description: "Suporte para pais que buscam estratégias mais eficazes na educação e relacionamento com os filhos.",
      modalities: "Presencial e Online",
      icon: "🏡"
    },
  ];

  return (
    <section id="services" className="section bg-mint-light/30">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4 text-foreground">Nossos Serviços</h2>
            <div className="h-1 w-24 bg-mint-dark mx-auto rounded-full mb-8"></div>
            <p className="text-lg max-w-3xl mx-auto text-foreground/80">
              Oferecemos diversos serviços de atendimento psicológico, adaptados às suas necessidades, disponíveis tanto no formato presencial quanto online.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
          {services.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 100}>
              <div className="service-card">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-serif font-medium mb-3 text-foreground">{service.title}</h3>
                <p className="mb-4 text-foreground/80">{service.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-mint/30 text-mint-dark text-sm px-3 py-1 rounded-full">
                    {service.modalities}
                  </span>
                </div>
                <a 
                  href="https://wa.me/5571991017313?text=Olá! Gostaria de saber mais sobre o serviço de "
                  className="text-green-600 hover:text-green-700 font-medium inline-flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agende pelo WhatsApp
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-serif font-medium mb-6 text-foreground">Como funciona o atendimento?</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <ScrollReveal delay={500}>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-mint/20">
                  <div className="w-12 h-12 bg-mint rounded-full flex items-center justify-center text-white font-medium mb-4 mx-auto">1</div>
                  <h4 className="font-medium mb-2">Primeiro Contato</h4>
                  <p className="text-foreground/80">Entre em contato pelo WhatsApp para agendar sua primeira sessão.</p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={600}>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-mint/20">
                  <div className="w-12 h-12 bg-mint rounded-full flex items-center justify-center text-white font-medium mb-4 mx-auto">2</div>
                  <h4 className="font-medium mb-2">Sessão Inicial</h4>
                  <p className="text-foreground/80">Conversaremos sobre suas expectativas e farei uma avaliação inicial.</p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={700}>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-mint/20">
                  <div className="w-12 h-12 bg-mint rounded-full flex items-center justify-center text-white font-medium mb-4 mx-auto">3</div>
                  <h4 className="font-medium mb-2">Plano Terapêutico</h4>
                  <p className="text-foreground/80">Desenvolvemos juntos um plano personalizado para suas necessidades.</p>
                </div>
              </ScrollReveal>
            </div>
            
            <ScrollReveal delay={800}>
              <div className="mt-12">
                <a
                  href="https://wa.me/5571991017313?text=Olá! Gostaria de agendar uma consulta."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-button mx-auto inline-flex"
                >
                  Agende sua primeira sessão!
                </a>
              </div>
            </ScrollReveal>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Services;
