module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo' /*, { jsxRuntime: 'automatic' }*/],
    plugins: [
      //'nativewind/babel',
      [
        'babel-plugin-styled-components',
        {
          ssr: false,
          meaninglessFileNames: ['index', 'styles']
        }
        /*,{ for prod
          displayName: false
        }*/
      ],
      '@babel/plugin-proposal-export-namespace-from',
      'react-native-reanimated/plugin'
      /* [
        '@babel/plugin-transform-react-jsx',
        {
          runtime: 'automatic'
        }
      ] */
    ]
  }
}
