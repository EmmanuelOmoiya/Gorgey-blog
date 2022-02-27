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
<<<<<<< HEAD
  webpack: (config, { isServer }) => {
      if (!isServer) {
          // don't resolve 'mongodb' module on the client to prevent this error on build --> Error: Can't resolve 'mongodb'
          config.resolve.fallback = {
              mongodb: false,
              axios: false
          }
      }

      return config;
  }
}
=======
    webpack: (config, { isServer }) => {
        if (!isServer) {
            // don't resolve 'mongodb' module on the client to prevent this error on build --> Error: Can't resolve 'mongodb'
            config.resolve.fallback = {
                mongodb: false,
                axios: false
            }
        }

        return config;
    }
}
>>>>>>> dc3b2021061a94f28e7a44a63cb5a300d30fce99
