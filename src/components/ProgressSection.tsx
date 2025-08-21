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
      className="min-h-screen relative flex items-center justify-center bg-gradient-to-b from-red-900 to-purple-900"
    >
      <div className={`relative z-10 text-center px-4 max-w-4xl ${isVisible ? 'flow-in' : 'opacity-0'}`}>
        <div className="space-y-12">
          {progressSteps.map((step, index) => (
            <div key={index} className={`mb-8 ${isVisible ? 'slide-in-left' : 'opacity-0'}`} 
                 style={{ animationDelay: `${index * 0.5}s` }}>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-pink-300">
                {step.text}
              </h3>
              <div className="w-full bg-gray-800 rounded-full h-6 overflow-hidden shadow-inner">
                <div 
                  className={`h-full bg-gradient-to-r from-pink-500 to-red-500 transition-all duration-2000 ease-out relative ${
                    step.completed ? 'w-full' : 'w-0'
                  }`}
                >
                  {step.completed && (
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-red-400 animate-pulse"></div>
                  )}
                  {step.completed && (
                    <div className="h-full flex items-center justify-end pr-4 relative z-10">
                      <span className="text-white font-bold text-sm">✓ Complete!</span>
                    </div>
                  )}
                </div>
              </div>
              {step.completed && (
                <div className="mt-2 text-yellow-300 font-bold">
                  {index === 0 && "Dropped 6578 performers! 💦"}
                  {index === 1 && "10 claps earned! 👏"}
                  {index === 2 && "5 Pips earned! 💎"}
                </div>
              )}
            </div>
          ))}
          
          {allCompleted && (
            <button
              onClick={onScrollToNext}
              className={`mt-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg shadow-purple-500/50 animate-bounce button-hover-effect glow-effect transition-all duration-300 hover:scale-105 ${isVisible ? 'scale-in' : 'opacity-0'}`}
              style={{ animationDelay: '2s' }}
            >
              Scroll more for Claps! 💦
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
