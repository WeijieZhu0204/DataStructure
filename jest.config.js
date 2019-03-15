module.exports = {
  bail: false,

  verbose: true,

  collectCoverage: false,

  coverageDirectory: './coverage/',

  testPathIgnorePatterns: ['<rootDir>/node_modules/'],

  coveragePathIgnorePatterns: ['<rootDir>/node_modules/'],

  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$',

  roots: ['<rootDir>/dist/'],
};
