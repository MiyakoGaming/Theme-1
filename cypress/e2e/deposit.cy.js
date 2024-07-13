//1. testDeposit{(Click deposit icon in Homepage --> Deposit page) , (test case, true)}
//2. testDeposit{(Click deposit icon in Account page --> Deposit page) , (test case, true)}
//3. testDeposit{(Click deposit tab on Side Menu --> Deposit page) , (test case, true)}
//4. testDeposit{(Click deposit button in profile pop up --> Deposit page) , (test case, true)}
//5. testDeposit{(empty deposit amount (default = 0), empty Reference ID) , (test case, true)}
//6. testDeposit{(valid deposit amount (select amount), empty reference ID) , (test case, true)}
//7. testDeposit{(invalid min deposit amount (insert amount), empty reference ID) , (test case, true)}
//8. testDeposit{(invalid max deposit amount (insert amount), empty reference ID) , (test case, true)}
//9. testDeposit{(valid deposit amount (select amount) , duplicate reference ID) , (test case, true)}
//10. testDeposit{(valid deposit amount (insert amount) , valid reference ID) , (test case, true)}
//11. testDeposit{(valid deposit amount (insert amount) , valid reference ID, have pending / in progress deposit) , (test case, true)}

Cypress.on('uncaught:exception', (err, runnable) => {
	// Fail the test
	throw err
	// Return false to prevent the error from failing the test in an unexpected way
	return false
})

//Login detail
var validUsername = 'mikodemo1002'
var validPassword = 'Yes888888'

//Bank ID
var prabhuBank = '7'
var mayBank = '11'

// Deposit ID
var newReferenceID = 'banktransfer995'
var duplicateReferenceID = 'banktransfer997'

//Deposit amount (100 < x < 10,000)
var invalidMinDepositAmount = '50'
var invalidMaxDepositAmount = '11000'
var validAmount = '150'

beforeEach(() => {
	cy.Website_Sign_In_Page_URL()
	cy.Sign_In_Account(validUsername, validPassword)
	cy.Profile_Username(validUsername)
})

//testDeposit{(Click deposit icon in Homepage --> Deposit page) , (test case, true)}
it.skip('Click deposit icon in Homepage --> Deposit page', () => {
	cy.Navigation_Homepage_To_Deposit()
	cy.Deposit_Page_Label()
})

//testDeposit{(Click deposit icon in Account page --> Deposit page) , (test case, true)}
it.skip('Click deposit icon in Account page --> Deposit page', () => {
	cy.Click_Profile_Username_To_Account_Page()
	cy.My_Account_Page_Label()
	cy.Navigation_AccountPage_To_Deposit()
	cy.Deposit_Page_Label()
})

//testDeposit{(Click deposit tab on Side Menu --> Deposit page) , (test case, true)}
it.skip('Click deposit icon on Side Menu --> Deposit page', () => {
	cy.Click_Profile_Username_To_Account_Page()
	cy.Navigation_AccountPage_To_Deposit()
	cy.Navigation_SideMenu_To_MyAccount()
	cy.Navigation_SideMenu_To_Deposit()
	cy.Deposit_Page_Label()
})

//testDeposit{(Click deposit button in profile pop up --> Deposit page) , (test case, true)}
it.skip('Click deposit tab in profile dropdown --> Deposit page', () => {
	cy.Profile_Dropdown()
	cy.Click_Deposit_Tab_In_Profile_Dropdown()
	cy.Deposit_Page_Label()
})

//testDeposit{(empty deposit amount (default = 0), empty Reference ID) , (test case, true)}
it.skip('Deposit unsuccessful with empty deposit amount', () => {
	cy.Profile_Dropdown()
	cy.Click_Deposit_Tab_In_Profile_Dropdown()
	cy.Deposit_Page_Label()
	cy.Select_Bank_Transfer_bank(prabhuBank)
	cy.Click_Submit_Deposit_Button()
	cy.Bank_Transfer_Reference_ID_Validation_Message()
})

//testDeposit{(valid deposit amount (select amount), empty reference ID) , (test case, true)}
it.skip('Deposit unsuccessful with empty deposit amount', () => {
	cy.Profile_Dropdown()
	cy.Click_Deposit_Tab_In_Profile_Dropdown()
	cy.Deposit_Page_Label()
	cy.Select_Bank_Transfer_bank(prabhuBank)
	cy.Select_1st_Shortcut_Deposit_Amount()
	cy.Click_Submit_Deposit_Button()
	cy.Bank_Transfer_Reference_ID_Validation_Message()
})

//testDeposit{(invalid min deposit amount (insert amount), empty reference ID) , (test case, true)}
it.skip('Deposit unsuccessful with invalid min deposit amount, empty reference ID', () => {
	cy.Profile_Dropdown()
	cy.Click_Deposit_Tab_In_Profile_Dropdown()
	cy.Deposit_Page_Label()
	cy.Select_Bank_Transfer_bank(prabhuBank)
	cy.Insert_Bank_Transfer_Deposit_Amount(invalidMinDepositAmount)
	cy.Click_Submit_Deposit_Button()
	cy.Min_Deposit_Amount_Error_Message()
	cy.Bank_Transfer_Reference_ID_Validation_Message()
})

//testDeposit{(invalid max deposit amount (insert amount), empty reference ID) , (test case, true)}
it.skip('Deposit unsuccessful with invalid max deposit amount, empty reference ID', () => {
	cy.Profile_Dropdown()
	cy.Click_Deposit_Tab_In_Profile_Dropdown()
	cy.Deposit_Page_Label()
	cy.Select_Bank_Transfer_bank(prabhuBank)
	cy.Insert_Bank_Transfer_Deposit_Amount(invalidMaxDepositAmount)
	cy.Click_Submit_Deposit_Button()
	cy.Max_Deposit_Amount_Error_Message()
	cy.Bank_Transfer_Reference_ID_Validation_Message()
})

//testDeposit{(valid deposit amount (select amount) , duplicate reference ID) , (test case, true)}
it.skip('Deposit unsuccessful with valid deposit amount, duplicate reference ID', () => {
	cy.Profile_Dropdown()
	cy.Click_Deposit_Tab_In_Profile_Dropdown()
	cy.Deposit_Page_Label()
	cy.Select_Bank_Transfer_bank(prabhuBank)
	cy.Select_1st_Shortcut_Deposit_Amount()
	cy.Insert_Bank_Transfer_Reference_ID(duplicateReferenceID)
	cy.Click_Submit_Deposit_Button()
	cy.Deposit_Unsuccessful_After_Submit()
	// cy.Close_Deposit_Unsuccessful_After_Submit()
})

//testDeposit{(valid deposit amount (insert amount) , valid reference ID) , (test case, true)}
it.skip('Deposit successful with valid deposit amount & reference ID', () => {
	cy.Profile_Dropdown()
	cy.Click_Deposit_Tab_In_Profile_Dropdown()
	cy.Deposit_Page_Label()
	cy.Select_Bank_Transfer_bank(prabhuBank)
	cy.Select_2nd_Shortcut_Deposit_Amount()
	cy.Insert_Bank_Transfer_Reference_ID(newReferenceID)
	cy.Click_Submit_Deposit_Button()
	cy.Deposit_success_message()
})

//testDeposit{(valid deposit amount (insert amount) , valid reference ID, have pending / in progress deposit) , (test case, true)}
it.skip('Deposit successful with valid deposit amount & reference ID but have pending / in progress deposit', () => {
	cy.Profile_Dropdown()
	cy.Click_Deposit_Tab_In_Profile_Dropdown()
	cy.Deposit_Page_Label()
	cy.Select_Bank_Transfer_bank(prabhuBank)
	cy.Select_2nd_Shortcut_Deposit_Amount()
	cy.Insert_Bank_Transfer_Reference_ID(newReferenceID)
	cy.Click_Submit_Deposit_Button()
    cy.Deposit_Unsuccessful_After_Submit()
	// cy.Close_Deposit_Unsuccessful_After_Submit()
})