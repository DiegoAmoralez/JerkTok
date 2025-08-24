'use client';

import { useState, useEffect } from 'react';
import { useSmoothScroll } from '@/hooks/useScrollAnimation';
import HeroSection from './HeroSection';
import FuckMachineStep from './steps/FuckMachineStep';
import PublicMasturbationStep from './steps/PublicMasturbationStep';
import DeepthroatStep from './steps/DeepthroatStep';
import AnalGapingStep from './steps/AnalGapingStep';
import ProgressSection from './ProgressSection';
import FinalCTA from './FinalCTA';

interface FeedItem {
  id: string;
  title: string;
  added: boolean;
}

interface ProgressStep {
  text: string;
  completed: boolean;
}

export default function LandingPageContent() {
  const { scrollToStep } = useSmoothScroll();
  
  const [feedItems, setFeedItems] = useState<FeedItem[]>([
    { id: 'fuckmachine', title: 'Fuck Machine Sluts', added: false },
    { id: 'public', title: 'Public Masturbation Nymphos', added: false },
    { id: 'deepthroat', title: 'Deepthroat Whores', added: false },
    { id: 'anal', title: 'Anal Gaping', added: false },
  ]);
  
  const [currentStep, setCurrentStep] = useState(0);
  const [progressSteps, setProgressSteps] = useState<ProgressStep[]>([
    { text: 'Your JerkTok.me Feed Is Loading!', completed: false },
    { text: 'Your Free Claps Added!', completed: false },
    { text: 'Your Free Pips Added!', completed: false },
  ]);

  const handleScrollToStep = (stepNumber: number) => {
    scrollToStep(stepNumber, () => setCurrentStep(stepNumber));
  };

  const handleAddToFeed = (itemId: string) => {
    setFeedItems(prev => 
      prev.map(item => 
        item.id === itemId ? { ...item, added: true } : item
      )
    );
    
    // Add success animation and show positive feedback
    const button = document.querySelector(`[data-item-id="${itemId}"]`) as HTMLElement;
    if (button) {
      button.classList.add('scale-in', 'glow-effect');
    }
    
    // Show positive feedback and scroll to next with delay for smooth transition
    setTimeout(() => {
      handleScrollToStep(currentStep + 1);
    }, 1800); // Увеличили задержку для более плавного перетекания
  };

  const handleScrollToNext = () => {
    handleScrollToStep(currentStep + 1);
  };

  useEffect(() => {
    if (currentStep === 5) {
      // Start progress bar animations
      progressSteps.forEach((_, index) => {
        setTimeout(() => {
          setProgressSteps(prev => 
            prev.map((step, i) => 
              i === index ? { ...step, completed: true } : step
            )
          );
        }, (index + 1) * 2000);
      });
    }
  }, [currentStep, progressSteps]);

  // Удаляем массив categories, так как теперь используем отдельные компоненты

  const addedItemsCount = feedItems.filter(item => item.added).length;

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <HeroSection onScrollToStep={handleScrollToStep} />
      
      {/* Step 1: Fuck Machine Sluts */}
      <FuckMachineStep
        isAdded={feedItems.find(item => item.id === 'fuckmachine')?.added || false}
        onAddToFeed={handleAddToFeed}
        onScrollToNext={handleScrollToNext}
      />
      
      {/* Step 2: Public Masturbation Nymphos */}
      <PublicMasturbationStep
        isAdded={feedItems.find(item => item.id === 'public')?.added || false}
        onAddToFeed={handleAddToFeed}
        onScrollToNext={handleScrollToNext}
      />
      
      {/* Step 3: Deepthroat Whores */}
      <DeepthroatStep
        isAdded={feedItems.find(item => item.id === 'deepthroat')?.added || false}
        onAddToFeed={handleAddToFeed}
        onScrollToNext={handleScrollToNext}
      />
      
      {/* Step 4: Anal Gaping */}
      <AnalGapingStep
        isAdded={feedItems.find(item => item.id === 'anal')?.added || false}
        onAddToFeed={handleAddToFeed}
        onScrollToNext={handleScrollToNext}
      />
      
      <ProgressSection 
        progressSteps={progressSteps}
        onScrollToNext={handleScrollToNext}
      />
      
      <FinalCTA addedItemsCount={addedItemsCount} />
    </div>
  );
}
