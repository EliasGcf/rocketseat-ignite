const { readdirSync } = require('fs');
const path = require('path');

function getModuleResolverAliases() {
  const srcFolders = readdirSync(path.resolve(__dirname, 'src'), { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(folder => folder.name);

  const aliases = srcFolders.reduce((acc, folder) => {
    return {
      ...acc,
      [`@${folder}`]: `./src/${folder}`,
    };
  }, {});

  return aliases;
}

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      'inline-dotenv',
      [
        'module-resolver',
        {
          extensions: ['.ts', '.tsx'],
          alias: {
            ...getModuleResolverAliases(),
          },
        },
      ],
    ],
  };
};
