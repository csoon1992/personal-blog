/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
  i18n: {
    locales: ["es-ES"],
    defaultLocale: "es-ES",
  },
  // Cualquier otra configuración adicional puede agregarse aquí.
};

module.exports = nextConfig;
