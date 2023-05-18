/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "res.cloudinary.com",
            "abs.twimg.com",
            "pbs.twimg.com",
            "avatars.githubusercontent.com",
        ]
    },
    output: 'standalone',
    reactStrictMode: true,
    swcMinify: false, // Required to fix: https://nextjs.org/docs/messages/failed-loading-swc
}

module.exports = nextConfig
