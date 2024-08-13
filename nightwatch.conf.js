module.exports = {
  // Массив папок (без подкаталогов), где расположены ваши тесты;
  src_folders: ['test'],

  // См. https://nightwatchjs.org/guide/concepts/page-object-model.html
  page_objects_path: ['pages'],

  // См. https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-commands.html
  custom_commands_path: ['nightwatch/custom-commands'],

  // См. https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-assertions.html
  custom_assertions_path: ['nightwatch/custom-assertions'],

  // См. https://nightwatchjs.org/guide/extending-nightwatch/adding-plugins.html
  plugins: [],

  // См. https://nightwatchjs.org/guide/concepts/test-globals.html
  globals_path: '',

  webdriver: {},

  test_workers: {
    enabled: true
  },

  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          args: [
            '--disable-dev-shm-usage',
            '--no-sandbox',
            '--headless',
          ]
        }
      },
      webdriver: {
        start_process: true,
        server_path: ''
      }
    },

  },
};
