/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Optimizaciones de rendimiento
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', 'framer-motion'],
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  // Configuración de compilación optimizada
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Optimización de chunks
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        vendor: {
          test: /[\/]node_modules[\/]/,
          name: 'vendors',
          chunks: 'all',
        },
        common: {
          name: 'common',
          minChunks: 2,
          chunks: 'all',
          enforce: true,
        },
      }
    }
    return config
  },
  images: {
    domains: ["dcdn-us.mitiendanube.com", "media.giphy.com", "placeholder.svg", "blob.v0.dev"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    unoptimized: true,
  },
  // Forzar rebuild
  generateBuildId: async () => {
    return `build-${Date.now()}`
  },
  // Configuración para exportación estática
  output: "export",
}

module.exports = nextConfig
