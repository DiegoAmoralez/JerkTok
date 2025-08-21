import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface CategorySectionProps {
  id: string;
  stepNumber: number;
  title: string;
  description: string;
  bgGradient: string;
  textColor: string;
  buttonGradient: string;
  emoji: string;
  isAdded: boolean;
  onAddToFeed: (itemId: string) => void;
  onScrollToNext: () => void;
}

export default function CategorySection({
  id,
  stepNumber,
  title,
  description,
  bgGradient,
  textColor,
  buttonGradient,
  emoji,
  isAdded,
  onAddToFeed,
  onScrollToNext
}: CategorySectionProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      id={`step-${stepNumber}`} 
      className={`min-h-screen relative flex items-center justify-center ${bgGradient}`}
    >
      <div className={`relative z-10 text-center px-4 max-w-4xl ${isVisible ? 'flow-in' : 'opacity-0'}`}>
        <div className={`mb-8 ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          {/* Video Placeholder */}
          <div className="relative w-80 h-60 mx-auto bg-gradient-to-br from-pink-600 to-purple-600 rounded-lg overflow-hidden shadow-2xl shadow-pink-500/30 glow-effect">
            <div className="absolute top-4 right-4 bg-red-600 text-sm px-3 py-1 rounded-full font-bold animate-pulse z-10">
              LIVE NOW!
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-6xl animate-bounce">{emoji}</div>
            </div>
            {/* Simulated video effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-pink-500/20 to-transparent animate-pulse"></div>
          </div>
        </div>
        
        <h2 className={`text-4xl md:text-6xl font-bold mb-4 ${textColor} ${isVisible ? 'slide-in-left' : 'opacity-0'}`}
            style={{ animationDelay: '0.7s' }}>
          {title}
        </h2>
        <p className={`text-xl md:text-2xl mb-8 text-gray-300 ${isVisible ? 'slide-in-right' : 'opacity-0'}`}
           style={{ animationDelay: '1s' }}>
          {description}
        </p>
        
        <div className={`space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
             style={{ animationDelay: '1.3s' }}>
          <button
            onClick={() => onAddToFeed(id)}
            data-item-id={id}
            className={`px-8 py-4 rounded-full font-bold text-lg button-hover-effect transition-all duration-300 ${
              isAdded
                ? 'bg-green-600 text-white scale-in'
                : `${buttonGradient} text-white hover:scale-105`
            }`}
            disabled={isAdded}
          >
            {isAdded ? '✓ Added to Feed!' : 'Add to Feed'}
          </button>
          <button
            onClick={onScrollToNext}
            className="px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white rounded-full font-bold text-lg button-hover-effect transition-all duration-300 hover:scale-105"
          >
            Scroll to Next
          </button>
        </div>
      </div>
    </section>
  );
}
