describe('Android Elements Tests', () =>{
    it('Find element by accessibility id', async () =>{
        const appOption = await $('~App')
        await appOption.click();
        const actionBar = await $('~Action Bar')
        await expect(actionBar).toBeExisting()
    })
    it('Find element by class name', async () =>{
        const className = await $('android.widget.TextView')
        await expect(className).toHaveText('API Demos')
    })
    it('Find element by xpath', async () =>{
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click()
    })
    it('Find elements by UIAutomator', async () =>{
        await $('android=new UiSelector().textContains("Alert")').click()
    })
    it('Find multiple elements', async () =>{
        const actualList = []
        const textList = await $$('android.widget.TextView')
        for(const element of textList){
            actualList.push(await element.getText())
        }
        await expect(actualList[0]).toEqual("API Demos")
    })
    it.only('Text Field', async () => {
        await $('~Views').click()
        await $('//*[@text="Auto Complete"]').click()
        await $('~1. Screen Top').click()

        // entry country name
        const textField = await $('//*[@resource-id="io.appium.android.apis:id/edit"]')
        await textField.addValue('Canada')

        // Verify the country name
        await expect(textField).toHaveText('Canada')
    })




})