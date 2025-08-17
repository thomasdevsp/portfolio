/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Página inicial e sobre
      {
        source: '/sobre-nos',
        destination: '/',
        permanent: true, // status 301
      },
      {
        source: '/sobre',
        destination: '/',
        permanent: true,
      },
      {
        source: '/quem-somos',
        destination: '/',
        permanent: true,
      },
      
      // Atrações
      {
        source: '/atracoes-da-expoflora',
        destination: '/atracoes',
        permanent: true,
      },
      {
        source: '/programacao',
        destination: '/atracoes',
        permanent: true,
      },
      
      // Ingressos
      {
        source: '/comprar-ingressos',
        destination: '/ingressos',
        permanent: true,
      },
      {
        source: '/ingressos-online',
        destination: '/ingressos',
        permanent: true,
      },
      {
        source: '/bilhetes',
        destination: '/ingressos',
        permanent: true,
      },
      
      // Informações
      {
        source: '/duvidas-frequentes',
        destination: '/informacoes/duvidas-frequentes',
        permanent: true,
      },
      {
        source: '/imprensa',
        destination: '/informacoes/imprensa',
        permanent: true,
      },
      {
        source: '/trabalhe-conosco',
        destination: '/informacoes/trabalhe-conosco',
        permanent: true,
      },
      {
        source: '/quero-ser-expositor',
        destination: '/informacoes/quero-ser-expositor',
        permanent: true,
      },
      {
        source: '/guia-para-turistas',
        destination: '/informacoes/guia-para-turistas',
        permanent: true,
      },
      
      // Políticas e termos
      {
        source: '/politica-privacidade',
        destination: '/politica-de-privacidade',
        permanent: true,
      },
      {
        source: '/termos-uso',
        destination: '/termos-e-condicoes',
        permanent: true,
      },
      
      // Páginas de blog antigas (redirecionando para home)
      {
        source: '/blog/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/noticias/:path*',
        destination: '/',
        permanent: true,
      },
      
      // Qualquer outro padrão de URL antiga
      {
        source: '/index.php/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-content/:path*',
        destination: '/',
        permanent: true,
      },
    ];
  },
  
  // Adicionar headers para permitir acesso ao sitemap
  async headers() {
    return [
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600',
          },
        ],
      },
    ];
  },
  
  // Configurações de ambiente
  env: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'https://www.expoflora.com.br',
  },
};

export default nextConfig;