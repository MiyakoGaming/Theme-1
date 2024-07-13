//1. testWithdraw{(Click withdraw icon in Homepage --> withdraw page) , (test case, true)}
//2. testWithdraw{(Click withdraw icon in Account page --> withdraw page) , (test case, true)}
//3. testWithdraw{(Click withdraw tab on Side Menu --> withdraw page) , (test case, true)}
//4. testWithdraw{(Click withdraw button in profile pop up --> withdraw page) , (test case, true)}
//5. testWithdraw{(Click "Add new bank / manage your banks" in withdraw page --> My Bank Account Page) , (test case, true)}
//6. testWithdraw{(empty amount (Default = min amount), no select bank) , (test case, true)}
//7. testWithdraw{(empty amount (Default = min amount), select bank) , (test case, true)}
//8. testWithdraw{(invalid min Withdraw amount, no select bank) , (test case, true)}
//9. testWithdraw{(invalid max Withdraw amount, no select bank) , (test case, true)}
//10. testWithdraw{(invalid min Withdraw amount, select bank) , (test case, true)}
//11. testWithdraw{(invalid max Withdraw amount, select bank) , (test case, true)}
//12. testWithdraw{(valid amount, no select bank) , (test case, true)}
//13. testWithdraw{(valid amount, select bank, select cancel confirm submit) , (test case, true)}
//14. testWithdraw{(valid amount, select bank, select withdraw confirm submit ) , (test case, true)}
//15. testWithdraw{(valid amount, select bank, have pending / in progress deposit ) , (test case, true)}

Cypress.on('uncaught:exception', (err, runnable) => {
	// Fail the test
	throw err
	// Return false to prevent the error from failing the test in an unexpected way
	return false
})

//Login detail
var validUsername = 'mikodemo1002'
var validPassword = 'Yes888888'

//Withdraw amount (10 < x < main wallet amount)
var emptyWithdrawAmount = '000' // 0
var invalidMinWithdrawAmount = '500' //MYR 5
var invalidMaxWithdrawAmount = '20000' //MYR 200
var validWithdrawAmount = '6000' //MYR 60

//Withdraw Bank Checkbox
const checkboxBank = '#bank__396'

beforeEach(() => {
	cy.Website_Sign_In_Page_URL()
	cy.Sign_In_Account(validUsername, validPassword)
	cy.Profile_Username(validUsername)
})

//testWithdraw{(Click withdraw icon in Homepage --> withdraw page) , (test case, true)}
it.skip('Click withdraw icon in Homepage --> withdraw page', () => {
	cy.Navigation_Homepage_To_Withdraw()
	cy.Withdraw_Page_Label()
})

//testWithdraw{(Click withdraw icon in Account page --> withdraw page) , (test case, true)}
it.skip('Click withdraw icon in Account page --> withdraw page', () => {
	cy.Click_Profile_Username_To_Account_Page()
	cy.Navigation_AccountPage_To_Withdraw()
	cy.Withdraw_Page_Label()
})

//testWithdraw{(Click withdraw tab on Side Menu --> withdraw page) , (test case, true)}
it.skip('Click withdraw tab on Side Menu --> withdraw page', () => {
	cy.Navigation_Homepage_To_Deposit()
	cy.Navigation_SideMenu_To_Withdraw()
	cy.Withdraw_Page_Label()
})

//testWithdraw{(Click withdraw button in profile pop up --> withdraw page) , (test case, true)}
it.skip('Click withdraw button in profile pop up --> withdraw page', () => {
	cy.Profile_Dropdown()
	cy.Click_Withdraw_Tab_In_Profile_Dropdown()
	cy.Withdraw_Page_Label()
})

//testWithdraw{(Click "Add new bank / manage your banks" in withdraw page --> My Bank Account Page) , (test case, true)}
it.skip('Click "Add new bank / manage your banks" in withdraw page --> My Bank Account Page', () => {
	cy.Navigation_Homepage_To_Withdraw()
	cy.Withdraw_Page_Label()
	cy.Click_Add_New_banks_To_My_Bank_Account_Page()
	cy.ManageBank_Page_Label()
})

//testWithdraw{(empty amount (Default = min amount), no select bank) , (test case, true)}
it.skip('Withdraw unsuccessful with empty amount, no select bank', () => {
	cy.Profile_Dropdown()
	cy.Click_Withdraw_Tab_In_Profile_Dropdown()
	cy.Insert_Withdraw_Amount(emptyWithdrawAmount)
	cy.Click_Withdraw_Submit_Button()
	cy.Invalid_Min_Amount_Message_Pop_Up()
})

//testWithdraw{(empty amount (Default = min amount), select bank) , (test case, true)}
it.skip('Withdraw unsuccessful with empty amount, select bank', () => {
	cy.Profile_Dropdown()
	cy.Click_Withdraw_Tab_In_Profile_Dropdown()
	cy.Insert_Withdraw_Amount(emptyWithdrawAmount)
	cy.Select_Bank_For_withdraw(checkboxBank)
	cy.Click_Withdraw_Submit_Button()
	cy.Invalid_Min_Amount_Message_Pop_Up()
})

//testWithdraw{(invalid min Withdraw amount, no select bank) , (test case, true)}
it.skip('Withdraw unsuccessful invalid min Withdraw amount, no select bank', () => {
	cy.Profile_Dropdown()
	cy.Click_Withdraw_Tab_In_Profile_Dropdown()
	cy.Insert_Withdraw_Amount(invalidMinWithdrawAmount)
	cy.Click_Withdraw_Submit_Button()
	cy.Invalid_Min_Amount_Message_Pop_Up()
})

//testWithdraw{(invalid max Withdraw amount, no select bank) , (test case, true)}
it.skip('Withdraw unsuccessful invalid min Withdraw amount, no select bank', () => {
	cy.Profile_Dropdown()
	cy.Click_Withdraw_Tab_In_Profile_Dropdown()
	cy.Insert_Withdraw_Amount(invalidMaxWithdrawAmount)
	cy.Click_Withdraw_Submit_Button()
	cy.Uncheck_Withdraw_Bank_Message_Pop_Up()
	cy.Close_Uncheck_Withdraw_Bank_Message_Pop_Up()
})

//testWithdraw{(invalid min Withdraw amount, select bank) , (test case, true)}
it.skip('Withdraw unsuccessful with invalid min Withdraw amount, select bank', () => {
	cy.Profile_Dropdown()
	cy.Click_Withdraw_Tab_In_Profile_Dropdown()
	cy.Insert_Withdraw_Amount(invalidMinWithdrawAmount)
	cy.Select_Bank_For_withdraw(checkboxBank)
	cy.Click_Withdraw_Submit_Button()
	cy.Invalid_Min_Amount_Message_Pop_Up()
})

//testWithdraw{(invalid max Withdraw amount, select bank) , (test case, true)}
it.skip('Withdraw unsuccessful with invalid max Withdraw amount, select bank', () => {
	cy.Profile_Dropdown()
	cy.Click_Withdraw_Tab_In_Profile_Dropdown()
	cy.Insert_Withdraw_Amount(invalidMaxWithdrawAmount)
	cy.Select_Bank_For_withdraw(checkboxBank)
	cy.Click_Withdraw_Submit_Button()
	cy.Confirm_Submit_Withdraw()
	cy.Invalid_Max_Amount_Message_Pop_Up()
	cy.Close_Invalid_Amount_Message_Within_Range_Pop_Up()
})

//testWithdraw{(valid amount, no select bank) , (test case, true)}
it.skip('Withdraw unsuccessful with valid amount, no select bank', () => {
	cy.Profile_Dropdown()
	cy.Click_Withdraw_Tab_In_Profile_Dropdown()
	cy.Insert_Withdraw_Amount(validWithdrawAmount)
	cy.Click_Withdraw_Submit_Button()
	cy.Uncheck_Withdraw_Bank_Message_Pop_Up()
	cy.Close_Uncheck_Withdraw_Bank_Message_Pop_Up()
})

//testWithdraw{(valid amount, select bank, select cancel confirm submit) , (test case, true)}
it.skip('Withdraw successful with valid amount, select bank, cancel withdraw', () => {
	cy.Profile_Dropdown()
	cy.Click_Withdraw_Tab_In_Profile_Dropdown()
	cy.Insert_Withdraw_Amount(validWithdrawAmount)
	cy.Select_Bank_For_withdraw(checkboxBank)
	cy.Click_Withdraw_Submit_Button()
	cy.Cancel_Submit_Withdraw()
})

//testWithdraw{(valid amount, select bank, select withdraw confirm submit ) , (test case, true)}
it.skip('Withdraw successful with valid amount, select bank, confirm withdraw', () => {
	cy.Profile_Dropdown()
	cy.Click_Withdraw_Tab_In_Profile_Dropdown()
	cy.Insert_Withdraw_Amount(validWithdrawAmount)
	cy.Select_Bank_For_withdraw(checkboxBank)
	cy.Click_Withdraw_Submit_Button()
	cy.Confirm_Submit_Withdraw()
})

//testWithdraw{(valid amount, select bank, have pending / in progress deposit ) , (test case, true)}
it.skip('Withdraw successful with valid amount, select bank, confirm withdraw but have pending / in progress deposit', () => {
	cy.Profile_Dropdown()
	cy.Click_Withdraw_Tab_In_Profile_Dropdown()
	cy.Withdraw_Pending_Message()
})
