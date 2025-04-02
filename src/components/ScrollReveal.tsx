import { useEffect, useRef } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  threshold?: number;
  delay?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  threshold = 0.05,  
  delay = 0
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry], observer) => {
        const target = entry.target as HTMLElement;

        // Se já foi revelado, não faz nada
        if (target.dataset.revealed === "true") {
          observer.unobserve(target);
          return;
        }

        if (entry.isIntersecting) {
          setTimeout(() => {
            target.classList.add('active');
            target.dataset.revealed = "true"; // Marca como revelado
            observer.unobserve(target); // Para de observar para evitar que suma ao rolar para cima
          }, delay);
        }
      },
      {
        rootMargin: "50px",  
        threshold: threshold,
      }
    );

    const currentRef = ref.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, delay]);

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
};

export default ScrollReveal;
