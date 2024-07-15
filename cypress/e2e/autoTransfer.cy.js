//**Auto Transfer is for Gs and Sp providers have transfer pop up use
//**Auto Transfer is not for Sp providers have lobby use (etc: Playtech, Dragon Gaming)
//**Auto Transfer is not for Gs App provider use

//1. testAutoTransfer{(Turn on Auto Transfer) , (test case, true)}
//2. testAutoTransfer{(Turn off Auto Transfer) , (test case, true)}
//3. testAutoTransfer{(Turn on Auto Transfer, click provider in homepage --> Auto Launch game) , (test case, true)}

Cypress.on('uncaught:exception', (err, runnable) => {
	// Fail the test
	throw err
	// Return false to prevent the error from failing the test in an unexpected way
	return false
})

//Login detail
var validUsername = 'mikodemo1002'
var validPassword = 'Yes888888'

beforeEach(() => {
	cy.Website_Sign_In_Page_URL()
	cy.Sign_In_Account(validUsername, validPassword)
	cy.Profile_Username(validUsername)
	cy.Profile_Dropdown()
	cy.Click_Transfer_Tab_In_Profile_Dropdown()
	cy.Transfer_Page_Label()
})

//testAutoTransfer{(Turn on Auto Transfer --> Turn off Auto Transfer) , (test case, true)}
it('Turn on Auto Transfer', () => {
	cy.Click_Auto_Transfer_Switch_Button()
	cy.get('.Toastify').should('have.text', 'Auto Transfer is now turned on.')
})

//testAutoTransfer{(Turn off Auto Transfer) , (test case, true)}
it.skip('Turn off Auto Transfer', () => {
	cy.Click_Auto_Transfer_Switch_Button()
	cy.wait(10000)
})

//testAutoTransfer{(Turn on Auto Transfer, click provider in homepage --> Auto Launch game) , (test case, true)}
it.skip('click provider in homepage --> Auto Launch game', () => {
	cy.Click_Brand_Logo_In_Top_Bar()
	cy.Live_Casino_Selected_Tab()
	cy.Game_2nd_Sequence_In_Game_Category()
})
