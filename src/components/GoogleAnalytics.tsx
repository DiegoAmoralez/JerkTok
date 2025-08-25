'use client';

import Script from 'next/script';

interface GoogleAnalyticsProps {
  ga_id: string;
}

export default function GoogleAnalytics({ ga_id }: GoogleAnalyticsProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${ga_id}`}
      />
      <Script strategy="lazyOnload" id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${ga_id}', {
            page_title: document.title,
            page_location: window.location.href,
            debug_mode: ${process.env.NODE_ENV === 'development'},
            send_page_view: true,
            anonymize_ip: true,
            allow_google_signals: true,
            allow_ad_personalization_signals: false
          });

          // Отладочное сообщение
          console.log('🎯 Google Analytics GA4 загружен:', '${ga_id}');
        `}
      </Script>
    </>
  );
}
