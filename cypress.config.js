const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        randomNumber: function random(max) {
          let numberRandom = Math.floor((Math.random()*(max-1+1))+1)
          return (numberRandom)
        }
      })
      // `on` is used to hook into various events Cypress emits
      // `config` is the resolved Cypress config
    },
  },
});
