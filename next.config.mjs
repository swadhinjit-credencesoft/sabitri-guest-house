/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  transpilePackages: ['framer-motion'],
  compress: true,
  generateEtags: true,
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
