import type { NextConfig } from 'next';
import nextMDX from '@next/mdx';

const withMDX = nextMDX({ extension: /\.mdx?$/ });
const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  transpilePackages: ['rangkaui-next'],
};

export default withMDX({ ...nextConfig, pageExtensions: ['ts', 'tsx', 'md', 'mdx'] });
