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
      className="min-h-screen relative flex items-center justify-center bg-gradient-to-b from-purple-900 to-black"
    >
      <div className={`relative z-10 text-center px-4 max-w-4xl ${isVisible ? 'flow-in' : 'opacity-0'}`}>
        <h1 className={`text-4xl md:text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-400 glow-effect ${isVisible ? 'scale-in' : 'opacity-0'}`}
            style={{ animationDelay: '0.3s' }}>
          Your JerkTok.me Feed Is Armed and Ready to Make You CUM!
        </h1>
        
        <div className={`mb-8 ${isVisible ? 'slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <div className="flex flex-wrap justify-center gap-4 text-yellow-300 text-lg mb-4">
            <span className="bg-yellow-900/30 px-3 py-1 rounded-full border border-yellow-500/30 button-hover-effect">🔥 {addedItemsCount} Categories Added</span>
            <span className="bg-purple-900/30 px-3 py-1 rounded-full border border-purple-500/30 button-hover-effect">💎 5 Pips Earned</span>
            <span className="bg-pink-900/30 px-3 py-1 rounded-full border border-pink-500/30 button-hover-effect">👏 10 Claps Ready</span>
          </div>
        </div>
        
        <a
          href="https://jerktok.me"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-block bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-bold py-6 px-12 rounded-full text-2xl shadow-2xl shadow-red-500/50 animate-pulse button-hover-effect glow-effect transition-all duration-300 hover:scale-110 transform ${isVisible ? 'scale-in' : 'opacity-0'}`}
          style={{ animationDelay: '0.9s' }}
        >
          Start Jerking FREE! 🚀
        </a>
        
        <p className={`mt-6 text-gray-400 text-lg ${isVisible ? 'slide-in-right' : 'opacity-0'}`}
           style={{ animationDelay: '1.2s' }}>
          Join thousands of horny users getting off right now!
        </p>
      </div>
    </section>
  );
}
