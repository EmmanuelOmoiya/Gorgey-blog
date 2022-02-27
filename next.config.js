/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}
module.exports = {
  webpack: (config, { isServer }) => {
      if (!isServer) {
          // don't resolve 'mongodb' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
          config.resolve.fallback = {
              mongodb: false,
              axios: false,
              process: false
          }
      }

      return config;
  }
}