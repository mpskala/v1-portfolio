/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  basePath: '',
  images: {
    domains: ['media.graphassets.com', 'images.unsplash.com'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.pdf$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    })
    return config
  },
}

module.exports = nextConfig
