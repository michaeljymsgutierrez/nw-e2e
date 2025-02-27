/*
    Demo Tests
*/
module.exports = {
    'step one': function(browser) {
        browser
            .url('http://www.google.com')
            .waitForElementVisible('body', 1000)
            .setValue('input[type=text]', 'nightwatch')
            .waitForElementVisible("input[name=btnK]", 10000)
    },
    'step two': function(browser) {
        browser
            .click('input[name=btnK]')
            .pause(1000)
            .assert.containsText('#main', 'Night Watch')
            .end();
    }
};