import { useScrollAnimation } from '@/hooks/useScrollAnimation';

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

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      id="step-5" 
      className="min-h-screen relative flex items-center justify-center"
      style={{background: 'linear-gradient(to bottom, var(--jt-darker), var(--jt-dark))'}}
    >
      <div className={`relative z-10 text-center px-4 max-w-4xl ${isVisible ? 'flow-in' : 'opacity-0'}`}>
        <div className="space-y-12">
          {progressSteps.map((step, index) => (
            <div key={index} className={`mb-8 ${isVisible ? 'slide-in-left' : 'opacity-0'}`} 
                 style={{ animationDelay: `${index * 0.5}s` }}>
              <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{color: 'var(--jt-purple-light)'}}>
                {step.text}
              </h3>
              <div className="w-full rounded-full h-6 overflow-hidden shadow-inner" style={{backgroundColor: 'var(--jt-darker)'}}>
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
              {step.completed && (
                <div className="mt-2 font-bold" style={{color: 'var(--jt-green)'}}>
                  {index === 0 && "10 claps to extend your watch time! 👏"}
                  {index === 1 && "2 pips earned! 💎"}
                  {index === 2 && "You still have claps/pips to extend! ⏰"}
                </div>
              )}
            </div>
          ))}
          
          {allCompleted && (
            <button
              onClick={onScrollToNext}
              className={`mt-8 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg animate-bounce button-hover-effect glow-effect transition-all duration-300 hover:scale-105 ${isVisible ? 'scale-in' : 'opacity-0'}`}
              style={{ 
                animationDelay: '2s',
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
