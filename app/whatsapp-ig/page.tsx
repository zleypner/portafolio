'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

const WHATSAPP_URL = 'https://wa.me/50670724236';

export default function WhatsAppIGPage() {
  useEffect(() => {
    // Send event to Google Analytics via GTM
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'whatsapp_click',
        whatsapp_source: 'instagram'
      });
    }

    // Redirect after a small delay to ensure event is sent
    const timer = setTimeout(() => {
      window.location.href = WHATSAPP_URL;
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <p>Redirigiendo a WhatsApp...</p>
    </div>
  );
}
