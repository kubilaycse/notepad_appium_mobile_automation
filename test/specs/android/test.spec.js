/* 
npm init wdio notepad_mobile_automation
npx appium driver install uiautomator2
npx appium driver list --installed
npx wdio
*/

import addNoteScreen from "../../screenobjects/android/add-note.screen"

describe('Add Notes', () =>{
    it('Skip tutorial', async () =>{
        //await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click()
        await addNoteScreen.skipBtn.click()
        //await expect($('//*[@text="Add note"]')).toBeDisplayed()
        await expect(addNoteScreen.addNoteTxt).toBeDisplayed()
    })
    it('add a note,save changes & verify note',async () =>{
        await $('//*[@text="Add note"]').click()
        await $('//*[@text="Text"]').click()
        await expect($('//*[@text="Editing"]')).toBeDisplayed()

        // .addValue -> just add value
        // .setValue -> clear input area and add value
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]').setValue("Fav Anime List")

        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').setValue("Naruto\nAOT\nDeath Note")

        await addNoteScreen.saveNote()
        
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')).toBeDisplayed()
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')).toHaveText("Naruto\nAOT\nDeath Note")
    })

})