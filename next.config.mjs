/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}
const nextConfig = {
  // 1. Делаем временный 307 редирект с корня в глубину рушек
  async redirects() {
    return [
      {
        source: '/',
        destination: '/ru/ru/ru/ru/ru/ru/ru/ru/ru/ru/ru/ru/ru/ru/ru/',
        permanent: false, // это отдаст код 307!
      },
    ];
  },

  // 2. Говорим Next.js отдавать главную страницу по ЛЮБОМУ глубокому пути /ru/... с кодом 200 OK
  async rewrites() {
    return [
      {
        source: '/ru/:path*',
        destination: '/',
      },
    ];
  },
};
export default nextConfig
