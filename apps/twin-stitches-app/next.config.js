/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
};

const withTwin = require('./withTwin.js');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(withTwin(nextConfig));
