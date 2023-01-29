// xcode-select --install
// brew install carthage
// appium-doctor --ios
// appium driver install xcuitest

describe('Find Elements', () =>{
    it('Accessibility Id', async () =>{
        await $('~Alert Views').click()
        await $('~Simple').click()
        //await expect($('~OK')).toBeDisplayed()
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best")
    })

    it('Tag Name', async () =>{
        // single element
        let tagName = await $('XCUIElementTypeStaticText').getText()
        console.log(tagName)

        // multiple elements
        let tagName2 = await $$('XCUIElementTypeStaticText').getText()
        for(const element of tagName2) {
            console.log(await element.getText())
        }
    })

    it('find element by xpath', async () =>{
        // xpath - (//tagname[@attribute=value])
        //await $('//XCUIElementTypeStaticText[@name="Alert Views"]').click()
        await $('//*[@name="Alert Views"]').click()
    })

    it('find element by class chain', async () =>{
        const alertText = '**/XCUIElementTypeStaticText[`label CONTAINS "Alert"`]'
        await $(`-ios class chain:${alertText}`).click()
    })

    it('find element by predicate string', async () =>{
        // const alertText = 'value BEGINSWITH[c] "alert"'
        const alertText = 'label == "Alert Views"'
        await $(`-ios class chain:${alertText}`).click()
    })

    it.only('Enter text in the search field', async () =>{
        await $('~Search').click()
        await $('~Default').click()

        await $('//XCUIElementTypeSearchField').addValue("I love this course!")
        await expect($('//XCUIElementTypeSearchField')).toHaveAttr("value");

        await $('~Clear text').click()
        await expect($('//XCUIElementTypeSearchField')).not.toHaveAttr("value")
    })
})