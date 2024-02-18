const { defineConfig } = require('cypress') //eslint-disable-line no-undef

module.exports = defineConfig({ //eslint-disable-line no-undef
  e2e: {
    setupNodeEvents(on, config) { //eslint-disable-line no-unused-vars
      // implement node event listeners here
    },
  },
})
