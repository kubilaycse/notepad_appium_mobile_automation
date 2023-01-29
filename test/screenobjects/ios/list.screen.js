class ListScreen{
    get createListBtn(){
        return $('//*[name="Create list"]')
    }
}

export default new ListScreen()