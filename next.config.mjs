import createNextIntlPlugin from 'next-intl/plugin';
import withPlaiceholder from '@plaiceholder/next';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'units.a2hosted.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default withNextIntl(withPlaiceholder(nextConfig));
