import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        {/* look: https://nextjs.org/docs/messages/next-script-for-ga */}
        <Script src='https://www.googletagmanager.com/gtag/js?id=G-HP4XL8HL98' />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HP4XL8HL98');
          `}
        </Script>
        <NextScript />
      </body>
    </Html>
  )
}
