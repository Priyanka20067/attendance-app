module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'], // or 'module:metro-react-native-babel-preset'
    plugins: [
      // other plugins if any
      'react-native-reanimated/plugin', // ⚠️ Must be LAST
    ],
  };
};
