//1. testChangeCurrency{(Before login --> Click others currency on top bar) , (test case, true)}
//2. testChangeCurrency{(Before login --> Click others currency on footer) , (test case, true)}
//3. testChangeLanguage{(Click others language on top bar dropdown) , (test case, true)}
//4. testChangeLanguage{(Click others language on top bar (website have 2 language only)) , (test case, true)}
//5. testChangeLanguage{(Click others language on footer dropdown) , (test case, true)}
//6. testHistory{(Click History Icon in My account page --> Transfer Active Tab) , (test case, true)}
//7. testHistory{(Click Deposits Tab in History Page --> Deposit Active Tab) , (test case, true)}
//8. testHistory{(Click Withdrawals Tab in History Page --> Withdrawals Active Tab) , (test case, true)}
//9. testHistory{(Click Rebates Tab in History Page --> Rebates Active Tab) , (test case, true)}
//10. testHistory{(Click Adjustments Tab in History Page  --> Adjustments Active Tab) , (test case, true)}
//11. testHistory{(Click Bonus Tab in History Page --> --> Bonus Active Tab) , (test case, true)}
//12. testGameCategoryTab{Click Game Category Tab Live Casino (Default) --> Sports --> Slots --> Fishing --> Other --> Live Casino ) , (test case, true)}
//13. testProceedToLaunchGame{(Click any game in Live Casino --> Click Skip and proceed to game --> Launch Game  ) , (test case, true)}
//14. testProceedToLaunchGame{(Click any game in Sports --> Click Skip and proceed to game --> Launch Game) , (test case, true)}
//15. testProceedToLaunchGame{(Click any game in Slots --> Click Skip and proceed to game --> Launch Game) , (test case, true)}
//16. testProceedToLaunchGame{(Click maintenance game in Other --> Disable Skip and proceed to game) , (test case, true)}

Cypress.on('uncaught:exception', (err, runnable) => {
	// Fail the test
	throw err
	// Return false to prevent the error from failing the test in an unexpected way
	return false
})

//Login detail
var validUsername = 'mikodemo1002'
var validPassword = 'Yes888888'

//language code
var nepal = 'ne'

//language word
var nepalWord = 'नेपाली'
var englishWord = 'English'

beforeEach(() => {
	cy.Website_Homepage_URL()
})

//testChangeCurrency{(Before login --> Click others currency on top bar) , (test case, true)}
it.skip('Click others currency on top bar Before Login', () => {})

//testChangeCurrency{(Before login --> Click others currency on footer) , (test case, true)}
it.skip('Click others currency on footer Before Login', () => {})

//testChangeLanguage{(Click others language on top bar dropdown) , (test case, true)}
it.skip('Click others language on top bar', () => {})

//testChangeLanguage{(Click others language on top bar (website have 2 language only)) , (test case, true)}
it.skip('Click others language on footer', () => {
	cy.Click_Sign_In_Button()
	cy.Sign_In_Account(validUsername, validPassword)
	cy.Profile_Username(validUsername)
	cy.Click_Language_When_Only_One_On_Top_bar(nepalWord, englishWord)
})

//testChangeLanguage{(Click others language on footer dropdown) , (test case, true)}
it.skip('Click others language on footer', () => {
	cy.Click_Sign_In_Button()
	cy.Sign_In_Account(validUsername, validPassword)
	cy.Scroll_Down_To_Website_footer()
	cy.Select_Language_From_Footer_Language_Dropdown(nepal)
})

//testHistory{(Click History Icon in My account page --> Transfer Active Tab) , (test case, true)}
it.skip('Click History Icon In My Account Page --> Transfer Active Tab', () => {
	cy.Click_Sign_In_Button()
	cy.Sign_In_Account(validUsername, validPassword)
	cy.Click_Profile_Username_To_Account_Page(validUsername)
	cy.Navigation_AccountPage_To_History()
	cy.History_Page_Transfer_Active_Tab()
})

//testHistory{(Click Deposits Tab in History Page --> Deposit Active Tab) , (test case, true)}
it.skip('Click Deposit Tab In History --> Deposit Active Tab', () => {
	cy.Click_Sign_In_Button()
	cy.Sign_In_Account(validUsername, validPassword)
	cy.Click_Profile_Username_To_Account_Page(validUsername)
	cy.Navigation_AccountPage_To_History()
	cy.History_Page_Transfer_Active_Tab()
	cy.Click_History_Page_Deposit_Tab()
	cy.History_Page_Deposit_Active_Tab()
})

//testHistory{(Click Withdrawals Tab in History Page --> Withdrawals Active Tab) , (test case, true)}
it.skip('Click Withdrawals Tab In History --> Withdrawals Active Tab', () => {
	cy.Click_Sign_In_Button()
	cy.Sign_In_Account(validUsername, validPassword)
	cy.Click_Profile_Username_To_Account_Page(validUsername)
	cy.Navigation_AccountPage_To_History()
	cy.History_Page_Transfer_Active_Tab()
	cy.Click_History_Page_Withdrawal_Tab()
	cyHistory_Page_Withdrawal_Active_Tab()
})

//testHistory{(Click Rebates Tab in History Page --> Rebates Active Tab) , (test case, true)}
it.skip('Click Rebates Tab In History --> Rebates Active Tab', () => {
	cy.Click_Sign_In_Button()
	cy.Sign_In_Account(validUsername, validPassword)
	cy.Click_Profile_Username_To_Account_Page(validUsername)
	cy.Navigation_AccountPage_To_History()
	cy.History_Page_Transfer_Active_Tab()
	cy.Click_History_Page_Rebates_Tab()
	cy.History_Page_Rebate_Active_Tab()
})

//testHistory{(Click Adjustments Tab in History Page  --> Adjustments Active Tab) , (test case, true)}
it.skip('Click Adjustment Tab In History --> Adjustment Active Tab', () => {
	cy.Click_Sign_In_Button()
	cy.Sign_In_Account(validUsername, validPassword)
	cy.Click_Profile_Username_To_Account_Page(validUsername)
	cy.Navigation_AccountPage_To_History()
	cy.History_Page_Transfer_Active_Tab()
	cy.Click_History_Page_Adjustment_Tab()
	cy.History_Page_Adjustment_Active_Tab()
})

//testHistory{(Click Bonus Tab in History Page --> --> Bonus Active Tab) , (test case, true)}
it.skip('Click Bonus Tab In History --> Bonus Active Tab', () => {
	cy.Click_Sign_In_Button()
	cy.Sign_In_Account(validUsername, validPassword)
	cy.Click_Profile_Username_To_Account_Page(validUsername)
	cy.Navigation_AccountPage_To_History()
	cy.History_Page_Transfer_Active_Tab()
	cy.Click_History_Page_Bonus_Tab()
	cy.History_Page_Bonus_Active_Tab()
})

//testGameCategoryTab{Click Game Category Tab Live Casino (Default) --> Sports --> Slots --> Fishing --> Other --> Live Casino ) , (test case, true)}
it.skip('Click Game Category Tab available in website', () => {
	cy.Sports_Category_Tab()
	cy.Sports_Category_Selected_Tab()
	cy.Slots_Category_Tab()
	cy.Slots_Category_Selected_Tab()
	cy.Fishing_Category_Tab()
	cy.Fishing_Category_Selected_Tab()
	cy.Other_Category_Tab()
	cy.Other_Category_Selected_Tab()
	cy.Live_Casino_Category_Tab()
	cy.Live_Casino_Selected_Tab()
})

//testProceedToLaunchGame{(Click any game in Live Casino --> Click Skip and proceed to game --> Launch Game  ) , (test case, true)}
it.skip('Click any available game in Live Casino and launch game directly', ()=>{
	cy.Click_Sign_In_Button()
	cy.Sign_In_Account(validUsername, validPassword)
    cy.Live_Casino_Selected_Tab()
    cy.Game_2nd_Sequence_In_Game_Category()
    cy.Click_Skip_And_Proceed_To_Game_In_Transfer_Pop_Up_Lauch_Game()
})

//testProceedToLaunchGame{(Click any game in Sports --> Click Skip and proceed to game --> Launch Game) , (test case, true)}
it.skip('Click any available game in Sports and launch game directly', ()=>{
    cy.Click_Sign_In_Button()
	cy.Sign_In_Account(validUsername, validPassword)
    cy.Sports_Category_Tab()
    cy.Sports_Category_Selected_Tab()
    cy.Game_1st_Sequence_In_Game_Category()
    cy.Click_Skip_And_Proceed_To_Game_In_Transfer_Pop_Up_Lauch_Game()
})

//testProceedToLaunchGame{(Click any game in Slots --> Click Skip and proceed to game --> Launch Game) , (test case, true)}
it.skip('Click any available game in Slots and launch game directly', ()=>{
    cy.Click_Sign_In_Button()
	cy.Sign_In_Account(validUsername, validPassword)
    cy.Slots_Category_Tab()
	cy.Slots_Category_Selected_Tab()
    cy.Game_3rd_Sequence_In_Game_Category()
    cy.Click_Skip_And_Proceed_To_Game_In_Transfer_Pop_Up_Lauch_Game()
})
//testProceedToLaunchGame{(Click maintenance game in Other --> Disable Skip and proceed to game) , (test case, true)}
it.skip('Click maintenance game in Other and launch game directly', ()=>{
    cy.Click_Sign_In_Button()
	cy.Sign_In_Account(validUsername, validPassword)
    cy.Other_Category_Tab()
	cy.Other_Category_Selected_Tab()
    cy.Game_1st_Sequence_In_Game_Category()
    cy.Disable_Click_Skip_And_Proceed_To_Game_In_Transfer_Pop_Up_Lauch_Game()
})
