var conf = require('../nightwatch.json');

module.exports = {
  'Flash-Version': function (browser) {
    browser
      .url('http://www.browsercheck.pcwelt.de/flash-check')   // visit the url
      .waitForElementVisible('body', 500); // wait for the body to be rendered
      // check if we are seeing the Mobile Version of GitHub
      browser.element('css selector', '.switch-to-desktop', function(result) {
        if(result.status != -1) { //Element exists, do something
          browser.click('.switch-to-desktop')
          .waitForElementVisible('body',500); // wait for the body to be rendered
        }
      });
    // part two:
    browser
      .assert.containsText('body', 'Flash-Version') // assert contains
      .saveScreenshot('./flash.png')
      .end();
  }
};
