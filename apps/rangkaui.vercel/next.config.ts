import type { NextConfig } from 'next';
import nextMDX from '@next/mdx';
import path from 'path';

const withMDX = nextMDX({ extension: /\.mdx?$/ });
const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ['rangkaui-next'],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'rangkaui-next-dev': path.resolve(__dirname, '../../packages/next/src'),
    };
    return config;
  },
};

export default withMDX({ ...nextConfig, pageExtensions: ['ts', 'tsx', 'md', 'mdx'] });
