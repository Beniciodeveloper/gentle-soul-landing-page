
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-lavender-light/50 to-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-6 text-foreground">
            Encontre acolhimento e <span className="text-lavender-dark">bem-estar emocional</span>
          </h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-xl">
            Um espaço seguro para você iniciar sua jornada de autoconhecimento e desenvolvimento pessoal com atendimento personalizado.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/5571991017313"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-button"
            >
              Agende sua consulta pelo WhatsApp!
            </a>
            <Button variant="outline" className="border-lavender-dark text-lavender-dark hover:bg-lavender-light/50">
              <a href="#services">Conheça nossos serviços</a>
            </Button>
          </div>
          
          <div className="mt-8 flex items-center">
            <div className="bg-lavender-dark h-1 w-12 rounded-full mr-4"></div>
            <p className="text-sm text-foreground/70">Atendimento presencial e online</p>
          </div>
        </div>
        
        <div className="md:w-1/2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="relative">
            <div className="absolute inset-0 bg-lavender rounded-3xl -rotate-3 transform"></div>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
              alt="Psicóloga profissional" 
              className="rounded-3xl shadow-xl relative z-10 rotate-2 transform object-cover h-[500px] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
