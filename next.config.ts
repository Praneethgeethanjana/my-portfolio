import type { NextConfig } from 'next'

const nextConfig: any = {
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
    // experimental: {
    //     turbo: false,
    // },
    // output: "export"
}

export default nextConfig