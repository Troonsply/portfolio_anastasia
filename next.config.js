/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    basePath: '/uncolors',
    images: {
        loader: 'akamai',
        path: '',
    },
    assetPrefix: './',
};

module.exports = nextConfig
