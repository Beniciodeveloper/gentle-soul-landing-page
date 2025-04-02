
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState, FormEvent } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
    
    // In a real app, you would send this data to your backend
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="section bg-gradient-to-b from-white to-lavender-light/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4 text-foreground animate-fade-in">
            Entre em Contato
          </h2>
          <div className="h-1 w-24 bg-lavender-dark mx-auto rounded-full mb-8"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-serif font-medium mb-6">Informações de Contato</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 bg-lavender-light p-3 rounded-full text-lavender-dark">
                  📍
                </div>
                <div>
                  <h4 className="font-medium mb-1">Endereço</h4>
                  <p className="text-foreground/80">Rua das Flores, 123 - Jardim Primavera</p>
                  <p className="text-foreground/80">Salvador - BA, 40000-000</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-lavender-light p-3 rounded-full text-lavender-dark">
                  📞
                </div>
                <div>
                  <h4 className="font-medium mb-1">Telefone / WhatsApp</h4>
                  <p className="text-foreground/80">(71) 99101-7313</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-lavender-light p-3 rounded-full text-lavender-dark">
                  ✉️
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-foreground/80">contato@gentlesoul.com.br</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-lavender-light p-3 rounded-full text-lavender-dark">
                  🕒
                </div>
                <div>
                  <h4 className="font-medium mb-1">Horários de Atendimento</h4>
                  <p className="text-foreground/80">Segunda à Sexta: 8h às 18h</p>
                  <p className="text-foreground/80">Sábado: 8h às 12h</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a
                href="https://wa.me/5571991017313?text=Olá! Gostaria de agendar uma consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-button inline-flex"
              >
                Fale comigo no WhatsApp!
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-lavender/20">
              <h3 className="text-xl font-serif font-medium mb-6">Envie uma Mensagem</h3>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800">
                  <p className="font-medium">Mensagem enviada com sucesso!</p>
                  <p>Em breve entraremos em contato com você.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Nome
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">
                      Telefone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Mensagem (opcional)
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-lavender-dark hover:bg-lavender-dark/90"
                  >
                    Enviar Mensagem
                  </Button>
                  
                  <p className="text-xs text-foreground/60 mt-2">
                    * Para atendimento mais rápido, entre em contato diretamente pelo WhatsApp.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
