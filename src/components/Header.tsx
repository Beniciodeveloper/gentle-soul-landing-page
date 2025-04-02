
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="w-full fixed top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <h1 className="text-2xl font-bold text-lavender-dark font-serif">Gentle Soul</h1>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-foreground/80 hover:text-lavender-dark transition">
            Sobre
          </a>
          <a href="#services" className="text-foreground/80 hover:text-lavender-dark transition">
            Serviços
          </a>
          <a href="#testimonials" className="text-foreground/80 hover:text-lavender-dark transition">
            Depoimentos
          </a>
          <a href="#contact" className="text-foreground/80 hover:text-lavender-dark transition">
            Contato
          </a>
          <a 
            href="https://wa.me/5571991017313"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white rounded-full px-4 py-2 flex items-center transition-all"
          >
            Agendar Consulta
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={toggleMobileMenu}
            className="p-2"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-border animate-fade-in">
          <div className="px-4 pt-2 pb-4 space-y-4">
            <a 
              href="#about" 
              className="block py-3 text-center text-foreground/80 hover:text-lavender-dark"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre
            </a>
            <a 
              href="#services" 
              className="block py-3 text-center text-foreground/80 hover:text-lavender-dark"
              onClick={() => setMobileMenuOpen(false)}
            >
              Serviços
            </a>
            <a 
              href="#testimonials" 
              className="block py-3 text-center text-foreground/80 hover:text-lavender-dark"
              onClick={() => setMobileMenuOpen(false)}
            >
              Depoimentos
            </a>
            <a 
              href="#contact" 
              className="block py-3 text-center text-foreground/80 hover:text-lavender-dark"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contato
            </a>
            <a 
              href="https://wa.me/5571991017313"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-green-500 hover:bg-green-600 text-white rounded-full py-3 text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Agendar Consulta
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
