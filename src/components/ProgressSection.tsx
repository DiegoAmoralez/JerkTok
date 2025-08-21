import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState, useEffect } from 'react';

interface ProgressStep {
  text: string;
  completed: boolean;
}

interface ProgressSectionProps {
  progressSteps: ProgressStep[];
  onScrollToNext: () => void;
}

export default function ProgressSection({ progressSteps, onScrollToNext }: ProgressSectionProps) {
  const { ref, isVisible } = useScrollAnimation();
  const allCompleted = progressSteps.every(step => step.completed);
  const [showButton, setShowButton] = useState(false);

  // Show button only after all progress bars are fully filled
  useEffect(() => {
    if (allCompleted) {
      // Wait for progress bar animations to complete (2 seconds) + extra delay
      const timer = setTimeout(() => {
        setShowButton(true);
      }, 2500); // 2s for progress bars + 0.5s extra delay
      
      return () => clearTimeout(timer);
    }
  }, [allCompleted]);

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      id="step-5" 
      className="h-screen w-full relative flex items-center justify-center"
      style={{
        backgroundColor: 'var(--jt-darker)',
        background: 'linear-gradient(to bottom, var(--jt-darker), var(--jt-dark))'
      }}
    >
      <div className={`relative z-10 text-center px-4 max-w-4xl ${isVisible ? 'flow-in' : 'opacity-0'}`}>
        <div className="flex flex-col transition-all duration-1000 ease-out" style={{
          gap: allCompleted ? '2rem' : '1.5rem'
        }}>
          {progressSteps.map((step, index) => (
            <div key={index} className={`transition-all duration-1000 ease-out ${isVisible ? 'slide-in-left' : 'opacity-0'}`} 
                 style={{ 
                   animationDelay: `${index * 0.5}s`,
                   transform: step.completed ? 'scale(1.05)' : 'scale(1)'
                 }}>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 transition-all duration-500 ease-out" 
                  style={{
                    color: 'var(--jt-purple-light)',
                    transform: step.completed ? 'translateY(-10px)' : 'translateY(0)'
                  }}>
                {step.text}
              </h3>
              <div className="w-full rounded-full h-6 overflow-hidden shadow-inner transition-all duration-500 ease-out" 
                   style={{
                     backgroundColor: 'var(--jt-darker)',
                     transform: step.completed ? 'scaleY(1.1)' : 'scaleY(1)'
                   }}>
                <div 
                  className={`h-full transition-all duration-2000 ease-out relative ${
                    step.completed ? 'w-full' : 'w-0'
                  }`}
                  style={{background: 'linear-gradient(to right, var(--jt-purple), var(--jt-purple-dark))'}}
                >
                  {step.completed && (
                    <div className="absolute inset-0 animate-pulse" style={{background: 'linear-gradient(to right, var(--jt-purple-light), var(--jt-purple))'}}></div>
                  )}
                  {step.completed && (
                    <div className="h-full flex items-center justify-end pr-4 relative z-10">
                      <span className="text-white font-bold text-sm">✓ Complete!</span>
                    </div>
                  )}
                </div>
              </div>
              <div className={`transition-all duration-700 ease-out overflow-hidden ${
                step.completed ? 'max-h-16 opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'
              }`}>
                <div className="font-bold" style={{color: 'var(--jt-green)'}}>
                  {index === 0 && "10 claps to extend your watch time! 👏"}
                  {index === 1 && "2 pips earned! 💎"}
                  {index === 2 && "You still have claps/pips to extend! ⏰"}
                </div>
              </div>
            </div>
          ))}
          
          {allCompleted && showButton && (
            <button
              onClick={onScrollToNext}
              className={`mt-8 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg animate-pulse button-hover-effect glow-effect transition-all duration-300 hover:scale-105 slide-in-from-bottom`}
              style={{ 
                background: 'linear-gradient(to right, var(--jt-purple), var(--jt-purple-dark))',
                boxShadow: '0 4px 20px rgba(139, 92, 246, 0.5)'
              }}
            >
              Engage now! 🔥
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
