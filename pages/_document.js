import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link
          rel='stylesheet'
          href='https://unpkg.com/leaflet@1.9.3/dist/leaflet.css'
          integrity='sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI='
          crossOrigin=''
        />
        <Script
          src='https://unpkg.com/leaflet@1.9.3/dist/leaflet.js'
          integrity='sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM='
          crossOrigin=''
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
