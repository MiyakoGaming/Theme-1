//1. testReferrals{(Click Referral View Detail in Account page --> Referral page) , (test case, true)}
//2. testReferrals{(Click Referral tab on Side Menu --> Referral page) , (test case, true)}
//. testReferrals{() , (test case, true)}
//. testReferrals{() , (test case, true)}
//. testReferrals{() , (test case, true)}
//. testReferrals{() , (test case, true)}

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
	cy.Click_Profile_Username_To_Account_Page()
})

//testReferrals{(Click Referral View Detail in Account page --> Referral page) , (test case, true)}
it('Click Referral View Detail in Account page --> Referral page', () => {
    cy.Scroll_Down_Your_Wallet_Section_In_My_Account_Page()
	cy.Click_Referral_Section_View_Details_In_My_Account()
	cy.Referral_Page_Label()
})

//testReferrals{(Click Referral tab on Side Menu --> Referral page) , (test case, true)}
it.skip('Click Referral tab on Side Menu --> Referral page', () => {
	cy.Navigation_Homepage_To_Deposit()
	cy.Navigation_SideMenu_To_Referral()
	cy.Referral_Page_Label()
})
