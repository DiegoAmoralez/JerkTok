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
      className="h-screen w-full relative flex items-center justify-center"
      style={{
        backgroundColor: 'var(--jt-darker)',
        background: 'linear-gradient(to bottom, var(--jt-dark), var(--background))'
      }}
    >
      <div className={`relative z-10 text-center px-4 max-w-4xl space-y-6 md:space-y-0 -mt-42 md:-mt-32 ${isVisible ? 'flow-in' : 'opacity-0'}`}>
        <h1 className={`text-4xl md:text-6xl font-bold mb-8 text-transparent bg-clip-text text-pulse ${isVisible ? 'scale-in' : 'opacity-0'}`}
            style={{ 
              animationDelay: '0.3s',
              backgroundImage: 'linear-gradient(to right, var(--jt-purple-light), var(--jt-red))'
            }}>
          Your JerkTok.me Feed Is Armed and Ready to Make You CUM!
        </h1>
        
        <div className={`mb-8 ${isVisible ? 'slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <div className="flex flex-wrap justify-center gap-6 text-xl mb-4">
            <span className="px-5 py-3 rounded-full border button-hover-effect flex items-center gap-2" style={{
              backgroundColor: 'rgba(139, 92, 246, 0.2)',
              borderColor: 'var(--jt-purple)',
              color: 'var(--jt-purple-light)'
            }}>
              <img src="/claps2.png" alt="claps" className="w-5 h-5" />
              10 claps
            </span>
            <span className="px-5 py-3 rounded-full border button-hover-effect flex items-center gap-2" style={{
              backgroundColor: 'rgba(16, 185, 129, 0.2)',
              borderColor: 'var(--jt-green)',
              color: 'var(--jt-green)'
            }}>
              <img src="/pips.png" alt="pips" className="w-5 h-5" />
              2 pips
            </span>
          </div>
        </div>
        
        <a
          href="https://jerktok.me"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-block text-white font-bold py-6 px-12 rounded-full text-2xl shadow-2xl animate-pulse button-hover-effect glow-effect transition-all duration-300 hover:scale-110 transform ${isVisible ? 'fade-in-smooth' : 'opacity-0'}`}
          style={{ 
            animationDelay: '0.9s',
            background: 'linear-gradient(to right, var(--jt-purple), var(--jt-purple-dark))',
            boxShadow: '0 8px 40px rgba(139, 92, 246, 0.5)'
          }}
        >
          <span className="flex items-center gap-3">
          Start Jerking FREE!
           
          </span>
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
