/** @type {import('next').NextConfig} */
const nextConfig = {

  async headers() {
    return [
    ];
  },

  // Configurações de ambiente
  env: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || '',
  },
};

export default nextConfig;
