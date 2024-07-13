//1. testMessage{(Message Pop up, Click Unread button --> All Button) , (test case, true)}
//2. testMessage{(Message Pop up, See More Button) , (test case, true)}
//3. testMessage{(Message Pop up, Click first / second / third message) , (test case, true)}
//4. testMessage{(Message Pop Up, Click any message have CTA button --> specific page) , (test case, true)}
//5. testMessage{(Message Page, Unread button --> All button) , (test case, true)}
//6. testMessage{(Message Page, Click any message have CTA button --> specific page) , (test case, true)}

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
	cy.Test_Login_Account(validUsername, validPassword)
	cy.Profile_Username(validUsername)
})

//testMessage{(Message Pop up, Click Unread button --> All Button) , (test case, true)}
it.skip('Verify Message Pop up All button', () => {
	cy.Click_Message_Icon_On_Header()
	cy.Message_Pop_Up_Label()
	cy.Click_Message_Unread_Button()
	cy.Click_Message_All_Button()
})

//testMessage{(Message Pop up, See More Button) , (test case, true)}
it.skip('Verify Message Pop up see more button', () => {
	cy.Click_Message_Icon_On_Header()
	cy.Message_Pop_Up_Label()
	cy.Message_See_More_Button()
	cy.Message_Page_Label()
})

//testMessage{(Message Pop up, Click first / second / third message) , (test case, true)}
it.skip('Verify message Pop up click the first message direct to message page .skip()', () => {
	cy.Click_Message_Icon_On_Header()
	cy.Message_Pop_Up_Label()
	cy.Click_1st_Message_Without_CTA_In_Pop_Up()
})

//testMessage{(Message Pop Up, Click any message have CTA button --> specific page) , (test case, true)}
// (This will change anytime)
it.skip('Verify message Pop up click learn more button .skip()', () => {
	cy.Click_Message_Icon_On_Header()
	cy.Message_Pop_Up_Label()
	cy.Click_1st_Message_With_CTA_Button_In_Message_Pop_Up()
})

//testMessage{(Message Page, Unread button --> All button) , (test case, true)}
it.skip('Verify message page click all button .skip()', () => {
	cy.Click_Message_Icon_On_Header()
	cy.Message_See_More_Button()
	cy.Message_Page_Label()
	cy.Click_Message_Unread_Button()
	cy.Click_Message_All_Button()
})

//testMessage{(Message Page, Click any message have CTA button --> specific page) , (test case, true)}
// (This will change anytime)
it.skip('Verify message page click learn more button .skip()', () => {
	cy.Click_Message_Icon_On_Header()
	cy.Message_See_More_Button()
	cy.Message_Page_Label()
	cy.Click_1st_Message_With_CTA_Button_In_Message_Page()
})