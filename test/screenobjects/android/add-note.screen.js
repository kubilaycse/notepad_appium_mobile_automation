class AddNoteScreen{
    get skipBtn() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]')
    }
    get addNoteTxt(){
        return $('//*[@text="Add note"]')
    }
    async saveNote(){
        await driver.back()
        await driver.back()
    }
}

export default new AddNoteScreen()