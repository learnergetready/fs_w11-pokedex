const { defineConfig } = require('cypress') //eslint-disable-line no-undef

module.exports = defineConfig({ //eslint-disable-next-line no-undef
  e2e: {
    setupNodeEvents(on, config) { //eslint-disable-next-line no-unused-vars
      // implement node event listeners here
    },
  },
})
