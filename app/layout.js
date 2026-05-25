import { Inter, Bebas_Neue } from 'next/font/google'
import Script from 'next/script'
import RevealProvider from '@/components/RevealProvider'
import UTMProvider from '@/components/UTMProvider'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

export const metadata = {
  title: 'Ferramentas de IA para Advogados — Acesso Gratuito | Avestra',
  description:
    'Diretório completo com 30+ IAs jurídicas, skills prontas e agentes de IA para advogados. Sem cadastro. Sem cartão.',
  openGraph: {
    title: 'Ferramentas de IA para Advogados | Avestra',
    description:
      '30+ IAs jurídicas testadas e organizadas. Skills sob medida a partir de R$27.',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${bebasNeue.variable}`}>
      <head>
        {/* ── Google Tag Manager — via Stape CDN (Meta CAPI server-side) ── */}
        <Script
          id="gtm-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),
                    dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://sst.avestra.com.br/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-W98WXF4D');
            `,
          }}
        />
      </head>
      <body>
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://sst.avestra.com.br/ns.html?id=GTM-W98WXF4D"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {/* UTMProvider captura source antes de qualquer interação */}
        <UTMProvider>
          <RevealProvider>{children}</RevealProvider>
        </UTMProvider>
      </body>
    </html>
  )
}
