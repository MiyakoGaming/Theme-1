//1. testTransferPage{(Click Transfer icon in Homepage --> Transfer page) , (test case, true)}
//2. testTransferPage{(Click Transfer icon in Account page --> Transfer page) , (test case, true)}
//3. testTransferPage{(Click Transfer tab on Side Menu --> Transfer page) , (test case, true)}
//4. testTransferPage{(Click Transfer button in profile pop up --> Transfer page) , (test case, true)}
//. testTransferPopUp{() , (test case, true)}
//. testTransferPopUp{() , (test case, true)}
//. testTransferPopUp{() , (test case, true)}
//. testTransferPopUp{() , (test case, true)}
//. testTransferPopUp{() , (test case, true)}
//. testTransferPopUp{() , (test case, true)}
//. testTransferPopUp{() , (test case, true)}
//. testTransferPopUp{() , (test case, true)}
//. testTransferPage{() , (test case, true)}
//. testTransferPage{() , (test case, true)}
//. testTransferPage{() , (test case, true)}
//. testTransferPage{() , (test case, true)}
//. testTransferPage{() , (test case, true)}
//. testTransferPage{() , (test case, true)}
//. testTransferPage{() , (test case, true)}
//. testTransferPage{() , (test case, true)}


Cypress.on('uncaught:exception', (err, runnable) => {
	// Fail the test
	throw err
	// Return false to prevent the error from failing the test in an unexpected way
	return false
})

//Login detail
var validUsername = 'mikodemo1002'
var validPassword = 'Yes888888'

//Game Provider Code
var mainWallet = 'main-wallet'
var joker = 'JK'
var Playtech = 'PZ'

//Transfer amount (0 < x < main wallet / provider wallet)
var invalidMinTransferAmount = '0'
var invalidMaxTransferAmount = '500'
var validTransferAmount = '50'

beforeEach(() => {
	cy.Website_Sign_In_Page_URL()
	cy.Sign_In_Account(validUsername, validPassword)
	cy.Profile_Username(validUsername)
	cy.Click_Profile_Username()
})

//testTransfer{(Click Transfer icon in Homepage --> Transfer page) , (test case, true)}
it('Click transfer icon in Homepage --> transfer page', ()=>{
	cy.Navigation_Homepage_To_Transfer()
	cy.Transfer_Page_Label()
})

//testTransfer{(Click Transfer icon in Account page --> Transfer page) , (test case, true)}
it('Click transfer icon in Account page --> transfer page', ()=>{
	cy.Click_Profile_Username()
	cy.My_Account_Page_Label()
	cy.Navigation_AccountPage_To_Transfer()
	cy.Transfer_Page_Label()
})

//testTransfer{(Click transfer tab on Side Menu --> transfer page) , (test case, true)}
it('Click transfer tab on Side Menu --> transfer page', ()=>{
	cy.Click_Profile_Username()
	cy.Navigation_Homepage_To_Deposit()
	cy.Navigation_SideMenu_To_Transfer()
	cy.Transfer_Page_Label()
})

//testTransfer{(Click transfer button in profile pop up --> transfer page) , (test case, true)}
it.skip('Click transfer button in profile pop up --> transfer page', ()=>{
	
})