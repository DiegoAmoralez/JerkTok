import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface HeroSectionProps {
  onScrollToStep: (stepNumber: number) => void;
}

export default function HeroSection({ onScrollToStep }: HeroSectionProps) {
  const { ref, isVisible } = useScrollAnimation();
  
  const handleScrollStart = () => {
    onScrollToStep(1);
  };

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>} 
      id="step-0" 
      className="h-screen w-full relative flex items-center justify-center"
      style={{
        backgroundColor: 'var(--jt-darker)',
        background: 'linear-gradient(to bottom, var(--jt-darker), var(--jt-dark))'
      }}
    >
      {/* Background Video Placeholder */}
      <div className="absolute inset-0" style={{
        backgroundColor: 'var(--jt-darker)',
        background: 'linear-gradient(to bottom, var(--jt-darker), var(--jt-dark))'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        {/* Simulated Video Feed */}
        <div className="absolute inset-0 grid grid-cols-2 gap-2 p-4 opacity-25">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="rounded-lg relative overflow-hidden" style={{backgroundColor: 'var(--jt-purple)'}}>
              <div className="absolute top-2 right-2 text-xs px-2 py-1 rounded-full font-bold animate-pulse z-10" style={{backgroundColor: 'var(--jt-red)', color: 'white'}}>
                LIVE
              </div>
              <div className="h-32 bg-gradient-to-t rounded-lg" style={{backgroundImage: 'linear-gradient(to top, var(--jt-purple-dark), var(--jt-purple))'}}>
              </div>
              {/* Animated overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center px-4 max-w-4xl space-y-6 md:space-y-0 -mt-42 md:-mt-32 ${isVisible ? 'flow-in' : 'opacity-0'}`}>
        <h1 className={`text-6xl md:text-8xl font-bold mb-4 text-transparent bg-clip-text ${isVisible ? 'scale-in' : 'opacity-0'}`} 
            style={{ 
              animationDelay: '0.3s',
              backgroundImage: 'linear-gradient(to right, var(--jt-purple-light), var(--jt-red))'
            }}>
          JerkTok.me
        </h1>
        <h2 className={`text-2xl md:text-4xl font-bold mb-4 ${isVisible ? 'slide-in-left' : 'opacity-0'}`}
            style={{ 
              animationDelay: '0.6s',
              color: 'var(--jt-purple-light)'
            }}>
          Line Up Horny Whores Streaming LIVE & Feed Their Holes with Your Cum!

        </h2>
        <p className={`text-lg md:text-xl mb-8 max-w-3xl mx-auto ${isVisible ? 'slide-in-right' : 'opacity-0'}`}
           style={{ 
             animationDelay: '0.9s',
             color: 'var(--jt-gray-light)'
           }}>
          Build your feed of thousands of LIVE cam vixens and jerk to dripping pussies non-stop.

        </p>
        <button
          onClick={handleScrollStart}
          className={`text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg animate-pulse button-hover-effect transition-all duration-300 hover:scale-105 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{ 
            background: 'linear-gradient(to right, var(--jt-purple), var(--jt-purple-dark))',
            boxShadow: '0 4px 20px rgba(139, 92, 246, 0.5)'
          }}
        >
          Scroll to Start
        </button>
      </div>
    </section>
  );
}
