'use client';

import { useState, useEffect } from 'react';
import { useSmoothScroll } from '@/hooks/useScrollAnimation';
import HeroSection from './HeroSection';
import CategorySection from './CategorySection';
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

  const categories = [
    {
      id: 'fuckmachine',
      title: 'Fuck Machine Sluts',
      description: '1,457 Sluts Getting Pounded by Fuck Machines LIVE!',
      bgGradient: 'bg-gradient-to-b from-purple-900 to-blue-900',
      textColor: 'text-pink-300',
      buttonGradient: 'bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700',
      emoji: '🔥'
    },
    {
      id: 'public',
      title: 'Public Masturbation Nymphos',
      description: '2,547 Nymphos Rubbing Their Clits in Public LIVE!',
      bgGradient: 'bg-gradient-to-b from-blue-900 to-green-900',
      textColor: 'text-green-300',
      buttonGradient: 'bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700',
      emoji: '💦'
    },
    {
      id: 'deepthroat',
      title: 'Deepthroat Whores',
      description: '4,500 Whores Gagging on Huge Dildos and Real Cocks LIVE!',
      bgGradient: 'bg-gradient-to-b from-green-900 to-yellow-900',
      textColor: 'text-yellow-300',
      buttonGradient: 'bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700',
      emoji: '👄'
    },
    {
      id: 'anal',
      title: 'Anal Gaping',
      description: '345 Girls Gaping Their Tight Assholes NOW!',
      bgGradient: 'bg-gradient-to-b from-yellow-900 to-red-900',
      textColor: 'text-red-300',
      buttonGradient: 'bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700',
      emoji: '🍑'
    },
  ];

  const addedItemsCount = feedItems.filter(item => item.added).length;

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <HeroSection onScrollToStep={handleScrollToStep} />
      
      {categories.map((category, index) => (
        <CategorySection
          key={category.id}
          id={category.id}
          stepNumber={index + 1}
          title={category.title}
          description={category.description}
          bgGradient={category.bgGradient}
          textColor={category.textColor}
          buttonGradient={category.buttonGradient}
          emoji={category.emoji}
          isAdded={feedItems.find(item => item.id === category.id)?.added || false}
          onAddToFeed={handleAddToFeed}
          onScrollToNext={handleScrollToNext}
        />
      ))}
      
      <ProgressSection 
        progressSteps={progressSteps}
        onScrollToNext={handleScrollToNext}
      />
      
      <FinalCTA addedItemsCount={addedItemsCount} />
    </div>
  );
}
