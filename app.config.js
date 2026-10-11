
module.exports = ({ config }) => ({
  ...config,
  name: "BARBARIANS",
  slug: "barbarians-app",
  version: "1.0.0",
  android: {
    ...config.android,
    package: "com.barbarians.app"
  }
});
