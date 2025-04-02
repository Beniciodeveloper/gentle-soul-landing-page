
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-foreground text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-serif mb-4">Gentle Soul</h3>
            <p className="text-white/70 max-w-xs">
              Um espaço seguro para sua jornada de autoconhecimento e bem-estar emocional.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-medium mb-4 text-white/90">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-white/70 hover:text-white transition">Sobre</a></li>
                <li><a href="#services" className="text-white/70 hover:text-white transition">Serviços</a></li>
                <li><a href="#testimonials" className="text-white/70 hover:text-white transition">Depoimentos</a></li>
                <li><a href="#contact" className="text-white/70 hover:text-white transition">Contato</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4 text-white/90">Serviços</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="text-white/70 hover:text-white transition">Terapia Individual</a></li>
                <li><a href="#services" className="text-white/70 hover:text-white transition">Terapia para Casais</a></li>
                <li><a href="#services" className="text-white/70 hover:text-white transition">Terapia para Adolescentes</a></li>
                <li><a href="#services" className="text-white/70 hover:text-white transition">Orientação Parental</a></li>
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-medium mb-4 text-white/90">Contato</h4>
              <ul className="space-y-2 text-white/70">
                <li>Rua das Flores, 123 - Jardim Primavera</li>
                <li>Salvador - BA, 40000-000</li>
                <li>(71) 99101-7313</li>
                <li>contato@gentlesoul.com.br</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/20 text-center text-white/60 text-sm">
          <p>&copy; {currentYear} Gentle Soul. Todos os direitos reservados.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-white transition">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
