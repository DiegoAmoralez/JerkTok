'use client';

import { useState } from 'react';
import LandingPageContent from '@/components/LandingPageContent';

export default function JerkTokLanding() {
  const [consentGiven, setConsentGiven] = useState(false);
  
  const handleConsentAccept = () => {
    setConsentGiven(true);
  };

  // 18+ Consent Overlay
  if (!consentGiven) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
        <div className="bg-red-900 border-4 border-red-500 rounded-lg p-8 max-w-md mx-4 text-center">
          <div className="text-6xl mb-4">⚠️</div>
          <h1 className="text-3xl font-bold text-red-100 mb-4">WARNING: 18+ ONLY</h1>
          <p className="text-red-200 mb-6 text-lg">
            This site contains explicit adult content. You must be 18 years or older to continue.
          </p>
          <div className="space-y-4">
            <button
              onClick={handleConsentAccept}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors"
            >
              I AM 18+ - ENTER SITE
            </button>
            <button
              onClick={() => window.history.back()}
              className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
            >
              LEAVE SITE
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <LandingPageContent />
  );
}
