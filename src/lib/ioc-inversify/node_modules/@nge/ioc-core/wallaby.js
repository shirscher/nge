module.exports = function (w) {

  return {
    files: [
      'src/**/*.ts',
      { pattern: 'src/**/*.spec.ts', ignore: true }
    ],

    // TODO: Exclude spec folders from code coverage
    tests: [
      'src/**/*.spec.ts'
    ],

    env: {
      type: 'node'
    },

    // or any other supported testing framework:
    // https://wallabyjs.com/docs/integration/overview.html#supported-testing-frameworks
    testFramework: 'jasmine'
  };
};