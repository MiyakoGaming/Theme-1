//1. testNotification{(Notification Pop up, Click Unread button --> All button) , (test case, true)}
//2. testNotification{(Notification Pop up, See More Button) , (test case, true)}
//3. testNotification{(Notification Pop up, Click first / second / third Notification) , (test case, true)}
//4. testNotification{(Notification Page, Unread button --> All button) , (test case, true)}
//5. testNotification{(Notification Page, click any notification --> specific selected history active tab) , (test case, true)}


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


//testNotification{(Notification Pop up, Click Unread button --> All button) , (test case, true)}
it.skip('Verify Notification Pop Up, All button', () => {
	cy.Click_Notification_Icon_On_Header()
	cy.Notification_Pop_Up_Label()
	cy.Click_Notification_Unread_Button()
	cy.Click_Notification_All_Button()
})

//testNotification{(Notification Pop up, See More Button) , (test case, true)}
it.skip('Verify Notification Pop Up, See more button', () => {
	cy.Click_Notification_Icon_On_Header()
	cy.Notification_Pop_Up_Label()
	cy.Click_Notification_See_More_Button()
})

//testNotification{(Notification Pop up, Click first / Second / third Notification) , (test case, true)}
it.skip('Verify Notification Pop Up, Click first notification', () => {
	cy.Click_Notification_Icon_On_Header()
	cy.Notification_Pop_Up_Label()
	cy.Click_1st_Notification_In_Notification_Pop_up()
	cy.Notification_Page_Label()
})

//testNotification{(Notification Page, Unread button --> All button) , (test case, true)}
it.skip('Verify Notification Page, All button', () => {
	cy.Click_Notification_Icon_On_Header()
	cy.Click_Notification_See_More_Button()
	cy.Notification_Page_Label()
	cy.Click_Notification_Unread_Button()
	cy.Click_Notification_All_Button()
})

//testNotification{(Notification Page, click any notification --> specific selected history active tab) , (test case, true)}
// (This will change anytime)
it('Verify Notification Page, Click any notification --> specific selected history active tab', () => {
	cy.Click_Notification_Icon_On_Header()
	cy.Click_Notification_See_More_Button()
	cy.Notification_Page_Label()
	cy.Click_1st_Notification_In_Notification_Page()
	cy.History_Page_Deposit_Active_Tab()
})