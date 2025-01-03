const { pathsToModuleNameMapper } = require('ts-jest')
const { compilerOptions } = require('./tsconfig')

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'jest-expo',

  // Do not transpile anything in node_modules, except most react-native modules (as these often come untranspiled)
  // Based on https://docs.expo.dev/develop/unit-testing/#configuration
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|redux-persist-expo-securestore)'
  ],
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/src/jest/mocks/svgMock.js',
    '@(.*)': ['node_modules/@$1', 'src/$1']
  },
  fakeTimers: {
    enableGlobally: true
  },
  moduleDirectories: ['node_modules', 'utils', __dirname],
  setupFiles: ['<rootDir>/src/jest/setup.ts'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect']
}
