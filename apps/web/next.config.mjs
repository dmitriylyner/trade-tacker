

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/login',
        destination: '/',
        permanent: false
      },
      {
        source: '/dashboard:slug*',
        destination: '/',
        permanent: false
      },
      {
        source: '/activate',
        destination: '/',
        permanent: false
      },
      {
        source: '/forgot-password',
        destination: '/',
        permanent: false
      },
      {
        source: '/password-reset',
        destination: '/',
        permanent: false
      },
      {
        source: '/reset-request',
        destination: '/',
        permanent: false
      }
    ]
  },
  transpilePackages: ["ui"],

  experimental: {
    serverComponentsExternalPackages: ['@prisma/client', 'bcrypt']
  },

  /**
   * If you have the "experimental: { appDir: true }" setting enabled, then you
   * must comment the below `i18n` config out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },

  webpack(config){
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: '@svgr/webpack', options: { icon: true } }]
    })
    return config
  },
};
export default config;
