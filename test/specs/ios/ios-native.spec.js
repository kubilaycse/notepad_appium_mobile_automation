describe('iOS Native Features', () =>{
    it('working with alert box', async () =>{
        await $('~Alert Views').click()
        await $('~Okay / Cancel').click()

        //click ok
        //await $('~OK').click()
        await driver.dismissAlert()

        //assertion
        await expect($('~OK')).not.toExist()
    })
    it('Working with Scrollable', async () =>{
        
        await $('~Picker View').click()
        const redPicker = await $('~Red color component value')
        await driver.execute('mobile: scroll', {element: redPicker.elementId, direction: "down"})
    })

    it('Working with Picker View', async () =>{
        
        await $('~Picker View').click()
        const redPicker = await $('~Red color component value')
        const greenPicker = await $('~Green color component value')
        const bluePicker = await $('~Blue color component value')


        await redPicker.addValue('125')
        await greenPicker.addValue('0')
        await bluePicker.addValue('125')

        
    })
})
