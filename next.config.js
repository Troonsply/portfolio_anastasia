/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/uncolors',
    images: {
        loader: 'akamai',
        path: '',
    },
    assetPrefix: './',
};

module.exports = nextConfig
