describe('Android Native Feature Tests', () =>{
    it('Access and Activity directly', async () =>{
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.app.AlertDialogSamples")
        await driver.pause(3000)
        await expect($('//*[@text="App/Alert Dialogs"]')).toExist()
    })

    it('Dialog Boxes', async () => {
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.app.AlertDialogSamples")
        await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]').click()
        await driver.acceptAlert()
        await expect($('//*[resource-id="android:id/alertTitle"]')).not.toExist()
    })

    it('Vertical scrolling', async () =>{
        await $('~App').click()
        await $('~Activity').click()
        //scroll to the end
        //await $('android= new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')

        // scrollTextIntoView
        await $('android= new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")')
        await $('~Secure Surfaces').click()
    })

    it.only('Horizontal scrolling', async () =>{
        await driver.startActivity(
            "io.appium.android.apis",
            "io.appium.android.apis.view.Gallery1"
        )
        await $('android= new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()')

    })
})