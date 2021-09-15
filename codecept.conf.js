exports.config = {
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost',
      show: true,
      windowSize: '1200x900'
    }
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    cucumberJsonReporter: {
      require: 'codeceptjs-cucumber-json-reporter',
      enabled: true,               // if false, pass --plugins cucumberJsonReporter
      attachScreenshots: true,     // true by default
      attachComments: true,        // true by default
      outputFile: 'cucumber_report.json',     // cucumber_output.json by default
      uniqueFileNames: false,      // if true outputFile is ignored in favor of unique file names in the format of `cucumber_output_<UUID>.json`.  Useful for parallel test execution
      includeExampleValues: false  // if true incorporate actual values from Examples table along with variable placeholder when writing steps to the report
         // Used when calculating duration of individual BDD steps.  Defaults to nanoseconds
    },
  },
  tests: './*_test.js',
  name: 'codecept'
}