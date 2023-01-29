import listScreen from "../../screenobjects/ios/list.screen"


describe('TODO List Suite', () =>{
    before(async () =>{
       await listScreen.createListBtn.click()
       await $('//*[@value="List Name"]').addValue('Test')
       await $('~Create').click()
    })

    it.only('Add note', async () =>{
       await expect($("~Test")).toBeExisting()
       await $("~Test").click()
       await $("//*[@name='Create item']").click()
       await $('//*[@value="Title"]').addValue("Buy something");
       await $('//*[@value="Due"]').click()
       await $("~Date Picker").click()
       await $("~Monday, November 28").click() // this should be changed to dynamic date

       await $("//XCUIElementTypeWindow[@index=2]").click()
       await $("~Create").click()

       await expect($("~Test")).toBeExisting()
       await expect($("~Due Monday, November 28")).toBeExisting()
    })
})