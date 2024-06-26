import './globals.css'
import Pwa from "./pages/Pwa";

export const metadata = {
  title: 'Notepad',
  description: '记事本 - 支持离线和云端同步',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="Keywords" />
        <meta name="theme-color" content="#92869f" />
        <title>{metadata.title}</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
      </head>
      <body>{children}</body>
      <Pwa />
    </html>
  )
}
