'use client';

// Глобальные типы для gtag
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

// Типы для событий
interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  custom_parameters?: {
    [key: string]: string | number | boolean;
  };
}

export const useAnalytics = () => {
  // Проверяем доступность gtag
  const isGtagAvailable = () => {
    return typeof window !== 'undefined' && typeof window.gtag === 'function';
  };

  // Отправка события
  const trackEvent = ({
    action,
    category,
    label,
    value,
    custom_parameters = {},
  }: AnalyticsEvent) => {
    if (!isGtagAvailable()) {
      console.warn('Google Analytics не загружен');
      return;
    }

    try {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
        ...custom_parameters,
      });

      // Логируем событие в консоль для отладки
      console.log('Analytics Event:', {
        action,
        category,
        label,
        value,
        custom_parameters,
      });
    } catch (error) {
      console.error('Ошибка отправки аналитики:', error);
    }
  };

  // Отслеживание просмотра страницы
  const trackPageView = (page_title: string, page_location: string) => {
    if (!isGtagAvailable()) {
      console.warn('Google Analytics не загружен');
      return;
    }

    try {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID!, {
        page_title,
        page_location,
      });
    } catch (error) {
      console.error('Ошибка отправки просмотра страницы:', error);
    }
  };

  // Специфичные события для JerkTok
  const trackConsentAccept = () => {
    trackEvent({
      action: 'consent_accept',
      category: 'user_interaction',
      label: 'age_verification',
    });
  };

  const trackConsentReject = () => {
    trackEvent({
      action: 'consent_reject',
      category: 'user_interaction',
      label: 'age_verification',
    });
  };

  const trackScrollToStep = (stepNumber: number) => {
    trackEvent({
      action: 'scroll_to_step',
      category: 'navigation',
      label: `step_${stepNumber}`,
      value: stepNumber,
    });
  };

  const trackAddToFeed = (feedType: string) => {
    trackEvent({
      action: 'add_to_feed',
      category: 'content_interaction',
      label: feedType,
      custom_parameters: {
        feed_type: feedType,
      },
    });
  };

  const trackScrollToNext = (currentStep: number) => {
    trackEvent({
      action: 'scroll_to_next',
      category: 'navigation',
      label: `from_step_${currentStep}`,
      value: currentStep,
    });
  };

  const trackProgressComplete = (stepName: string) => {
    trackEvent({
      action: 'progress_complete',
      category: 'user_engagement',
      label: stepName,
    });
  };

  const trackFinalCTAClick = () => {
    trackEvent({
      action: 'final_cta_click',
      category: 'conversion',
      label: 'start_jerking_free',
      custom_parameters: {
        conversion_type: 'main_cta',
      },
    });
  };

  const trackVideoPlay = (videoType: string, stepNumber: number) => {
    trackEvent({
      action: 'video_play',
      category: 'media_interaction',
      label: `${videoType}_step_${stepNumber}`,
      custom_parameters: {
        video_type: videoType,
        step: stepNumber,
      },
    });
  };

  return {
    trackEvent,
    trackPageView,
    trackConsentAccept,
    trackConsentReject,
    trackScrollToStep,
    trackAddToFeed,
    trackScrollToNext,
    trackProgressComplete,
    trackFinalCTAClick,
    trackVideoPlay,
    isGtagAvailable,
  };
};
