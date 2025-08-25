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

  // Отправка события (GA4 формат)
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
      // GA4 формат событий
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
        custom_map: {
          dimension1: category,
          dimension2: label,
        },
        ...custom_parameters,
      });

      // Логируем событие в консоль для отладки
      console.log('🎯 GA4 Event Sent:', {
        event_name: action,
        event_category: category,
        event_label: label,
        value: value,
        custom_parameters,
      });
    } catch (error) {
      console.error('❌ Ошибка отправки аналитики:', error);
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
    // Отправляем и как кастомное событие, и как конверсию
    trackEvent({
      action: 'final_cta_click',
      category: 'conversion',
      label: 'start_jerking_free',
      custom_parameters: {
        conversion_type: 'main_cta',
      },
    });

    // Дополнительное событие конверсии для GA4
    if (isGtagAvailable()) {
      window.gtag('event', 'conversion', {
        send_to: process.env.NEXT_PUBLIC_GA_ID,
        value: 1,
        currency: 'USD',
      });
    }
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

    // Дополнительное событие engagement для GA4
    if (isGtagAvailable()) {
      window.gtag('event', 'engagement', {
        engagement_time_msec: 3000, // 3 секунды
        content_type: 'video',
        content_id: videoType,
      });
    }
  };

  // Отслеживание времени на странице
  const trackPageEngagement = (timeSpent: number) => {
    if (isGtagAvailable()) {
      window.gtag('event', 'page_view_time', {
        value: timeSpent,
        event_category: 'engagement',
        custom_parameters: {
          time_spent_seconds: timeSpent,
        },
      });
    }
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
    trackPageEngagement,
    isGtagAvailable,
  };
};
