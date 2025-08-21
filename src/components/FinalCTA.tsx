import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface FinalCTAProps {
  addedItemsCount: number;
}

export default function FinalCTA({ addedItemsCount }: FinalCTAProps) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      id="step-6" 
      className="min-h-screen relative flex items-center justify-center"
      style={{background: 'linear-gradient(to bottom, var(--jt-dark), var(--background))'}}
    >
      <div className={`relative z-10 text-center px-4 max-w-4xl ${isVisible ? 'flow-in' : 'opacity-0'}`}>
        <h1 className={`text-4xl md:text-6xl font-bold mb-8 text-transparent bg-clip-text glow-effect ${isVisible ? 'scale-in' : 'opacity-0'}`}
            style={{ 
              animationDelay: '0.3s',
              backgroundImage: 'linear-gradient(to right, var(--jt-purple-light), var(--jt-red))'
            }}>
          See what's new, pick up where you left off, and enjoy the feed tuned exactly to your tastes.
        </h1>
        
        <div className={`mb-8 ${isVisible ? 'slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <div className="flex flex-wrap justify-center gap-4 text-lg mb-4">
            <span className="px-3 py-1 rounded-full border button-hover-effect" style={{
              backgroundColor: 'rgba(139, 92, 246, 0.2)',
              borderColor: 'var(--jt-purple)',
              color: 'var(--jt-purple-light)'
            }}>👏 10 claps</span>
            <span className="px-3 py-1 rounded-full border button-hover-effect" style={{
              backgroundColor: 'rgba(16, 185, 129, 0.2)',
              borderColor: 'var(--jt-green)',
              color: 'var(--jt-green)'
            }}>💎 2 pips</span>
          </div>
        </div>
        
        <a
          href="https://jerktok.me"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-block text-white font-bold py-6 px-12 rounded-full text-2xl shadow-2xl animate-pulse button-hover-effect glow-effect transition-all duration-300 hover:scale-110 transform ${isVisible ? 'scale-in' : 'opacity-0'}`}
          style={{ 
            animationDelay: '0.9s',
            background: 'linear-gradient(to right, var(--jt-purple), var(--jt-purple-dark))',
            boxShadow: '0 8px 40px rgba(139, 92, 246, 0.5)'
          }}
        >
          Engage now! 🔥
        </a>
        
        <p className={`mt-6 text-lg ${isVisible ? 'slide-in-right' : 'opacity-0'}`}
           style={{ 
             animationDelay: '1.2s',
             color: 'var(--jt-gray-light)'
           }}>
          Stay hot. The JerkTok Team
        </p>
      </div>
    </section>
  );
}
