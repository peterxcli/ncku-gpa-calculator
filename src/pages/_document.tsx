import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {/* look: https://nextjs.org/docs/messages/next-script-for-ga */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HP4XL8HL98"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-HP4XL8HL98');
          `}
        </Script>
        <Main />
        
        <NextScript />
      </body>
    </Html>
  )
}
