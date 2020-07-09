module.exports = {
    beforeEach: browser => {
        browser
            .url('https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html')
            .waitForElementPresent('Body')
    },
    after: browser => {
        browser
            .end()
    },
    'Your Solution': browser => {
        
    }
}