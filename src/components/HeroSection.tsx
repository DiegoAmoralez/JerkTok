import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface HeroSectionProps {
  onScrollToStep: (stepNumber: number) => void;
}

export default function HeroSection({ onScrollToStep }: HeroSectionProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>} 
      id="step-0" 
      className="min-h-screen relative flex items-center justify-center"
    >
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-900 to-purple-900">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        {/* Simulated Video Feed */}
        <div className="absolute inset-0 grid grid-cols-2 gap-2 p-4 opacity-30">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="bg-pink-500 rounded-lg relative overflow-hidden">
              <div className="absolute top-2 right-2 bg-red-600 text-xs px-2 py-1 rounded-full font-bold animate-pulse z-10">
                LIVE NOW!
              </div>
              <div className="h-32 bg-gradient-to-t from-pink-700 to-pink-500 rounded-lg"></div>
              {/* Animated overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center px-4 max-w-4xl ${isVisible ? 'flow-in' : 'opacity-0'}`}>
        <h1 className={`text-6xl md:text-8xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-400 glow-effect ${isVisible ? 'scale-in' : 'opacity-0'}`} 
            style={{ animationDelay: '0.3s' }}>
          JerkTok.me
        </h1>
        <h2 className={`text-2xl md:text-4xl font-bold mb-4 text-pink-200 ${isVisible ? 'slide-in-left' : 'opacity-0'}`}
            style={{ animationDelay: '0.6s' }}>
          Line Up Horny Whores Streaming LIVE & Feed Their Holes with Your Cum!
        </h2>
        <p className={`text-lg md:text-xl mb-8 text-gray-300 max-w-3xl mx-auto ${isVisible ? 'slide-in-right' : 'opacity-0'}`}
           style={{ animationDelay: '0.9s' }}>
          Build your feed of thousands of LIVE cam vixens and jerk to dripping pussies non-stop.
        </p>
        <button
          onClick={() => onScrollToStep(1)}
          className={`bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg shadow-red-500/50 animate-pulse button-hover-effect transition-all duration-300 hover:scale-105 ${isVisible ? 'scale-in' : 'opacity-0'}`}
          style={{ animationDelay: '1.2s' }}
        >
          Scroll to Start
        </button>
      </div>
    </section>
  );
}
