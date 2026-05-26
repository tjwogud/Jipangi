import "./globals.css";
import localFont from 'next/font/local'


export const metadata = {
  title: "지팡이 - 모두를 위한 앱 설명서",
  description: "누구나 앱을 사용하는데 어려움이 없도록",
};

const font = localFont({
  src: './assets/fonts/Jalnan2.otf',
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="kr">
      <head>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://jipangi.kro.kr/"/>
        <meta property="og:title" content="지팡이 - 모두를 위한 앱 설명서"/>
        <meta property="og:image" content="https://jipangi.kro.kr/images/og_image.png"/>
        <meta property="og:description" content="누구나 앱을 사용하는데 어려움이 없도록"/>
        <meta property="og:site_name" content="지팡이"/>
        <meta property="og:locale" content="ko_KR"/>
      </head>
      <body className={font.className}>
        {children}
      </body>
    </html>
  );
}
