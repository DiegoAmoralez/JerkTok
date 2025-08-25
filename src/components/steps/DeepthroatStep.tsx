import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useAnalytics } from '@/hooks/useAnalytics';

interface DeepthroatStepProps {
  isAdded: boolean;
  onAddToFeed: (itemId: string) => void;
  onScrollToNext: () => void;
}

export default function DeepthroatStep({ isAdded, onAddToFeed, onScrollToNext }: DeepthroatStepProps) {
  const { ref, isVisible } = useScrollAnimation();
  const { trackVideoPlay } = useAnalytics();

  const handleVideoPlay = () => {
    trackVideoPlay('deepthroat', 3);
  };

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      id="step-3" 
      className="h-screen w-full relative flex items-center justify-center"
      style={{
        backgroundColor: 'var(--jt-darker)',
        background: 'linear-gradient(to bottom, var(--jt-darker), var(--jt-dark))',
        position: 'relative',
        zIndex: 10
      }}
    >
      {/* Additional background protection */}
      <div className="absolute inset-0 bg-black bg-opacity-90" style={{zIndex: 1}}></div>
      <div className={`relative z-20 text-center px-4 max-w-4xl -mt-42 md:-mt-32 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className={`text-4xl md:text-6xl font-bold mb-6 text-yellow-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ animationDelay: '0.4s' }}>
          Deepthroat Whores
        </h2>
        
        <div className={`mb-8 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: '0.7s' }}>
          {/* Vertical Video Player */}
          <div className="relative w-80 h-96 mx-auto rounded-lg overflow-hidden shadow-2xl" style={{
            boxShadow: '0 20px 60px rgba(139, 92, 246, 0.3)'
          }}>
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              onPlay={handleVideoPlay}
            >
              <source src="/videos/Step3_1 (1).mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* LIVE indicator */}
            <div className="absolute top-4 right-4 text-sm px-3 py-1 rounded-full font-bold animate-pulse z-10" style={{
              backgroundColor: 'var(--jt-red)',
              color: 'white'
            }}>
              LIVE
            </div>
            
            {/* Video overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          </div>
        </div>
        
        <p className={`text-xl md:text-2xl mb-8 text-gray-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
           style={{ animationDelay: '1s' }}>
          4,500 Whores Gagging on Huge Dildos and Real Cocks LIVE!
        </p>
        
        <div className={`flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6 md:justify-center ${isVisible ? 'opacity-100' : 'opacity-0'}`}
             style={{ animationDelay: '1.3s' }}>
          <button
            onClick={() => onAddToFeed('deepthroat')}
            data-item-id="deepthroat"
            className={`px-8 py-4 rounded-full font-bold text-lg button-hover-effect transition-all duration-300 ${
              isAdded
                ? 'bg-green-600 text-white'
                : 'bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white hover:scale-105 animate-pulse'
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
