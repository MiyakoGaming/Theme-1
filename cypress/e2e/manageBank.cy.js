//1. testManageBank{(Click Manage Bank tab on Side Menu --> Manage Bank page) , (test case, true)}
//2. testManageBank{(Click Manage Bank tab on Account Page indicator --> Manage Bank page) , (test case, true)}
//3. testManageBank{(Select bank, empty Account Number) , (test case, true)}
//4. testManageBank{(Select bank, insert invalid min Account Number) , (test case, true)}
//5. testManageBank{(Select bank, insert invalid max Account Number) , (test case, true)}
//6. testManageBank{(Show message when Link a bank account page reach max limit) , (test case, true)}
//7. testManageBank{(Show message when Link a bank account page add duplicate Account Number) , (test case, true)}
//8. testManageBank{(Add bank successfully with valid account number) , (test case, true)}
//9. testManageBank{(Delete bank in My Bank Accounts --> Click 'No' button in Delete Bank Pop up) , (test case, true)}
//10. testManageBank{(Delete bank in My Bank Accounts --> Click 'Delete bank' button in Delete Bank Pop up) , (test case, true)}

Cypress.on('uncaught:exception', (err, runnable) => {
	// Fail the test
	throw err
	// Return false to prevent the error from failing the test in an unexpected way
	return false
})

//Login detail
var validUsername = 'mikodemo1002'
var validPassword = 'Yes888888'

//Select banks
var mayBank = 'MBBE'
var nepalBank = 'NEBL'
var everestBank = 'EVBL'

//Account number (5 < x < 20)
var invalidMinAccountNumber = '1234'
var invalidMaxAccountNumber = 'AABBCC112233ddee&&($%)012'
var invalidDuplicateAccountNumber = 'abcd1234'
var validAccountNumber1 = '10799881423333'

beforeEach(() => {
	cy.Website_Sign_In_Page_URL()
	cy.Sign_In_Account(validUsername, validPassword)
	cy.Profile_Username(validUsername)
})

//testManageBank{(Click Manage Bank tab on Side Menu --> Manage Bank page) , (test case, true)}
it.skip('Click Manage Bank tab on Side Menu --> Manage Bank page', () => {
	cy.Click_Profile_Username_To_Account_Page()
	cy.Navigation_SideMenu_To_MyAccount()
	cy.Navigation_SideMenu_To_ManageBanks()
	cy.ManageBank_Page_Label()
})

//testManageBank{(Click Manage Bank tab on Account Page indicator --> Manage Bank page) , (test case, true)}
it.skip('Click Manage Bank tab on Account Page indicator --> Manage Bank page', () => {
	cy.Click_Profile_Username_To_Account_Page()
	cy.Click_3Dot_Indicator()
	cy.Click_ManageBanks_In_3Dot()
	cy.ManageBank_Page_Label()
})

//testManageBank{(Select bank, empty Account Number) , (test case, true)}
it.skip('Verify add bank unsuccessful with empty Account Number', () => {
	cy.Click_Profile_Username_To_Account_Page()
	cy.Click_3Dot_Indicator()
	cy.Click_ManageBanks_In_3Dot()
	cy.ManageBank_Page_Label()
	cy.Click_Link_a_bank_In_My_bank_Account_Page()
	cy.Select_Bank_In_Link_Account_Page(mayBank)
	cy.Click_Link_Bank_Account_Button()
	cy.Account_Number_With_Empty_Validation_Message()
})

//testManageBank{(Select bank, insert invalid min Account Number) , (test case, true)}
it.skip('Verify add bank unsuccessful with invalid min Account Number (x < 5)', ()=>{
	cy.Click_Profile_Username_To_Account_Page()
	cy.Click_3Dot_Indicator()
	cy.Click_ManageBanks_In_3Dot()
	cy.ManageBank_Page_Label()
	cy.Click_Link_a_bank_In_My_bank_Account_Page()
	cy.Select_Bank_In_Link_Account_Page(mayBank)
    cy.Insert_Account_Number_Without_Length_Validation_In_Account_Number_container(invalidMinAccountNumber)
	cy.Click_Link_Bank_Account_Button()
    cy.Account_Number_Error_message()
})

//testManageBank{(Select bank, insert invalid max Account Number) , (test case, true)}
it.skip('Verify add bank unsuccessful with invalid max Account Number (x > 20)', ()=>{
    cy.Click_Profile_Username_To_Account_Page()
	cy.Click_3Dot_Indicator()
	cy.Click_ManageBanks_In_3Dot()
	cy.ManageBank_Page_Label()
	cy.Click_Link_a_bank_In_My_bank_Account_Page()
	cy.Select_Bank_In_Link_Account_Page(mayBank)
    cy.Insert_Account_Number_Without_Length_Validation_In_Account_Number_container(invalidMaxAccountNumber)
	cy.Click_Link_Bank_Account_Button()
    cy.Account_Number_Error_message()
})

//testManageBank{(Show message when Link a bank account page reach max limit) , (test case, true)}
it.skip('Verify add bank unsuccessful when Link a bank account page reach max limit', () => {
	cy.Click_Profile_Username_To_Account_Page()
	cy.Click_3Dot_Indicator()
	cy.Click_ManageBanks_In_3Dot()
	cy.ManageBank_Page_Label()
	cy.Click_Link_a_bank_In_My_bank_Account_Page()
	cy.Error_Message_Show_When_Reach_Limit()
})

//testManageBank{(Show message when Link a bank account page add duplicate Account Number) , (test case, true)}
it.skip('Verify add bank unsuccessful with duplicate valid Account Number', ()=>{
    cy.Click_Profile_Username_To_Account_Page()
	cy.Click_3Dot_Indicator()
	cy.Click_ManageBanks_In_3Dot()
	cy.ManageBank_Page_Label()
	cy.Click_Link_a_bank_In_My_bank_Account_Page()
	cy.Select_Bank_In_Link_Account_Page(mayBank)
    cy.Insert_Account_Number_Without_Length_Validation_In_Account_Number_container(invalidDuplicateAccountNumber)
	cy.Click_Link_Bank_Account_Button()
    cy.Duplicate_Account_Number_Error_Message()
})

//testManageBank{(Add bank successfully with valid account number) , (test case, true)}
it.skip('Verify add bank successful with valid Account Number', ()=>{
    cy.Click_Profile_Username_To_Account_Page()
	cy.Click_3Dot_Indicator()
	cy.Click_ManageBanks_In_3Dot()
	cy.ManageBank_Page_Label()
	cy.Click_Link_a_bank_In_My_bank_Account_Page()
	cy.Select_Bank_In_Link_Account_Page(mayBank)
    cy.Insert_Account_Number_Without_Length_Validation_In_Account_Number_container(validAccountNumber1)
	cy.Click_Link_Bank_Account_Button()
    cy.ManageBank_Page_Label()
})

//testManageBank{(Delete bank in My Bank Accounts --> Click 'No' button in Delete Bank Pop up) , (test case, true)}
it.skip('Verify cancel delete bank in My Bank Account Page', () => {
	cy.Click_Profile_Username_To_Account_Page()
	cy.Click_3Dot_Indicator()
	cy.Click_ManageBanks_In_3Dot()
	cy.ManageBank_Page_Label()
	cy.Point_And_Click_Delete_Icon()
	cy.Click_No_Button_In_Delete_bank_Pop_Up()
})

//testManageBank{(Delete bank in My Bank Accounts --> Click 'Delete bank' button in Delete Bank Pop up) , (test case, true)}it('Verify cancel delete bank in My Bank Account Page', ()=>{
it.skip('Verify delete bank successful in My Bank Account Page', () => {
	cy.Click_Profile_Username_To_Account_Page()
	cy.Click_3Dot_Indicator()
	cy.Click_ManageBanks_In_3Dot()
	cy.ManageBank_Page_Label()
	cy.Point_And_Click_Delete_Icon()
	cy.Click_Delete_bank_Button_In_Delete_bank_Pop_Up()
})
