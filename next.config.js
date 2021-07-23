module.exports = {
  // Supported targets are "serverless" and "experimental-serverless-trace"
  target: "serverless",
  webpack5: true,
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
};
