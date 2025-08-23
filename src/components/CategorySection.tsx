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
  videoUrl?: string; // URL для видео
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
  videoUrl,
  isAdded,
  onAddToFeed,
  onScrollToNext
}: CategorySectionProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      id={`step-${stepNumber}`} 
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
        <h2 className={`text-4xl md:text-6xl font-bold mb-6 ${textColor} ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ animationDelay: '0.4s' }}>
          {title}
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
            >
              <source src={videoUrl} type="video/mp4" />
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
          {description}
        </p>
        
        <div className={`flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6 md:justify-center ${isVisible ? 'opacity-100' : 'opacity-0'}`}
             style={{ animationDelay: '1.3s' }}>
          <button
            onClick={() => onAddToFeed(id)}
            data-item-id={id}
            className={`px-8 py-4 rounded-full font-bold text-lg button-hover-effect transition-all duration-300 ${
              isAdded
                ? 'bg-green-600 text-white'
                : `${buttonGradient} text-white hover:scale-105 animate-pulse`
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
