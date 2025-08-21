import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (threshold = 0.1) => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold,
        rootMargin: '50px 0px -50px 0px'
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
  }, [threshold]);

  return { ref, isVisible };
};

export const useSmoothScroll = () => {
  const scrollToElement = (elementId: string, offset = 0) => {
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition = element.offsetTop - offset;
      
      // Custom smooth scroll with easing
      const startPosition = window.pageYOffset;
      const distance = elementPosition - startPosition;
      const duration = Math.max(800, Math.min(1500, Math.abs(distance) * 2)); // Dynamic duration
      let start: number | null = null;

      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percentage = Math.min(progress / duration, 1);
        
        // Easing function (ease-in-out)
        const easing = percentage < 0.5 
          ? 4 * percentage * percentage * percentage 
          : 1 - Math.pow(-2 * percentage + 2, 3) / 2;
        
        window.scrollTo(0, startPosition + (distance * easing));
        
        if (progress < duration) {
          window.requestAnimationFrame(step);
        }
      };
      
      window.requestAnimationFrame(step);
    }
  };

  const scrollToStep = (stepNumber: number, callback?: () => void) => {
    const targetElement = document.getElementById(`step-${stepNumber}`);
    if (targetElement) {
      // Start the scroll
      scrollToElement(`step-${stepNumber}`, 80);
      
      // Execute callback after scroll animation
      setTimeout(() => {
        callback?.();
      }, 100);
    }
  };

  return { scrollToElement, scrollToStep };
};
