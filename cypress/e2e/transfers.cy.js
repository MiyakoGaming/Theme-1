//1. testTransferPage{(Click Transfer icon in Homepage --> Transfer page) , (test case, true)}
//2. testTransferPage{(Click Transfer icon in Account page --> Transfer page) , (test case, true)}
//3. testTransferPage{(Click Transfer tab on Side Menu --> Transfer page) , (test case, true)}
//4. testTransferPage{(Click Transfer button in profile pop up --> Transfer page) , (test case, true)}
//5. testTransferPopUp{(empty amount (default = 0), no promo) , (test case, true)}
//6. testTransferPopUp{(invalid amount (amount > main wallet), no promo) , (test case, true)}
//7. testTransferPopUp{(valid amount (amount < main wallet), no promo, provider maintenance) , (test case, true)}
//8. testTransferPopUp{(valid amount (amount < main wallet), no promo) , (test case, true)}
//9. testTransferPopUp{(select dropdown promo --> Remove Promotion ) , (test case, true)}
//10. testTransferPopUp{(Insert promo code --> Use --> Remove Promotion) , (test case, true)}
//11. testTransferPopUp{(valid amount, provider wallet (amount > 1), apply dropdown promo / promo code) , (test case, true)}
//12. testTransferPopUp{(valid amount, provider wallet (amount not reach target), apply dropdown promo / promo code) , (test case, true)}
//13. testTransferPage{(empty amount (default = 0), no promo) , (test case, true)}
//14. testTransferPage{(invalid amount (amount > main wallet), no promo) , (test case, true)}
//15. testTransferPage{(invalid amount (amount > providerwallet), no promo) , (test case, true)}
//16. testTransferPage{(valid amount (amount < main wallet), no promo, provider maintenance) , (test case, true)}
//17. testTransferPage{(valid amount (amount < main wallet), no promo) , (test case, true)}
//18. testTransferPage{(select dropdown promo --> Remove Promotion ) , (test case, true)}
//19. testTransferPage{(Insert promo code --> Use --> Remove Promotion) , (test case, true)}
//20. testTransferPage{(valid amount, provider wallet (amount > 1), apply dropdown promo / promo code) , (test case, true)}
//21. testTransferPage{(valid amount, provider wallet (amount not reach target), apply dropdown promo / promo code) , (test case, true)}
//22. testTransferPage{(Click restore all button) , (test case, true)}
//23. testTransferPage{(Click any provider all in button) , (test case, true)}
//24. testTransferPage{(Click any provider restore button have credit) , (test case, true)}

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
var Pragmatic = 'PR'

//Transfer amount (0 < amount > main wallet)
var invalidTransferAmount = '500'
var validTransferAmount = '10'
var validPromoTransferAmount = '1'

//Promo code and dropdown value
var promoCode = 'AAAA1111'
var promoValue = '10'

beforeEach(() => {
	cy.Website_Sign_In_Page_URL()
	cy.Sign_In_Account(validUsername, validPassword)
	cy.Profile_Username(validUsername)
})

//testTransfer{(Click Transfer icon in Homepage --> Transfer page) , (test case, true)}
it.skip('Click transfer icon in Homepage --> transfer page', () => {
	cy.Navigation_Homepage_To_Transfer()
	cy.Transfer_Page_Label()
})

//testTransfer{(Click Transfer icon in Account page --> Transfer page) , (test case, true)}
it.skip('Click transfer icon in Account page --> transfer page', () => {
	cy.Click_Profile_Username_To_Account_Page()
	cy.My_Account_Page_Label()
	cy.Navigation_AccountPage_To_Transfer()
	cy.Transfer_Page_Label()
})

//testTransfer{(Click transfer tab on Side Menu --> transfer page) , (test case, true)}
it.skip('Click transfer tab on Side Menu --> transfer page', () => {
	cy.Click_Profile_Username_To_Account_Page()
	cy.Navigation_Homepage_To_Deposit()
	cy.Navigation_SideMenu_To_Transfer()
	cy.Transfer_Page_Label()
})

//testTransfer{(Click transfer button in profile pop up --> transfer page) , (test case, true)}
it.skip('Click transfer button in profile pop up --> transfer page', () => {
	cy.Profile_Dropdown()
	cy.Click_Transfer_Tab_In_Profile_Dropdown()
	cy.Transfer_Page_Label()
})

//testTransferPopUp{(empty amount (default = 0), no promo) , (test case, true)}
it.skip('Transfer Pop Up, Transfer unsuccessful with empty amount (default = 0) and no promo', () => {
	cy.Live_Casino_Selected_Tab()
	cy.Game_2nd_Sequence_In_Game_Category()
	cy.Open_Transfer_Pop_Up()
	cy.Click_Transfer_Button()
	cy.Transfer_Error_Message_Below_1()
	cy.Close_Transfer_Error_Message_Below_1()
})

//testTransferPopUp{(invalid amount (amount > main wallet), no promo) , (test case, true)}
it.skip('Transfer Pop Up, Transfer unsuccessful with invalid amount and no promo', () => {
	cy.Live_Casino_Selected_Tab()
	cy.Game_2nd_Sequence_In_Game_Category()
	cy.Open_Transfer_Pop_Up()
	cy.Insert_Transfer_Amount(invalidTransferAmount)
	cy.Transfer_Button_Disable()
})

//testTransferPopUp{(valid amount (amount < main wallet), no promo, provider maintenance) , (test case, true)}
it.skip('Transfer Pop Up, Transfer unsuccessful with valid amount,no promo, but provider is maintenance', () => {
	cy.Live_Casino_Selected_Tab()
	cy.Game_3rd_Sequence_In_Game_Category()
	cy.Open_Transfer_Pop_Up()
	cy.Insert_Transfer_Amount(validTransferAmount)
	cy.Click_Transfer_Button()
	cy.Error_Message_When_Launch_Maintenance_Failed()
})

//testTransferPopUp{(valid amount (amount < main wallet), no promo) , (test case, true)}
it.skip('Transfer Pop Up, Tranfer successful with valid amount (amount < main wallet), no promo', () => {
	cy.Live_Casino_Selected_Tab()
	cy.Game_2nd_Sequence_In_Game_Category()
	cy.Open_Transfer_Pop_Up()
	cy.Insert_Transfer_Amount(validTransferAmount)
	cy.Click_Transfer_Button()
	cy.wait(5000)
})

//testTransferPopUp{(select dropdown promo --> Remove Promotion) , (test case, true)}
it.skip('Transfer Pop Up, select dropdown promo --> Remove Promotion', () => {
	cy.Live_Casino_Selected_Tab()
	cy.Game_2nd_Sequence_In_Game_Category()
	cy.Open_Transfer_Pop_Up()
	cy.Dropdown_Promo_Label()
	cy.Select_Dropdown_Promotion(promoValue)
	cy.Click_Remove_Promo_After_insert_Promo_Code_Or_Select_Promotion_Dropdown()
})

//testTransferPopUp{(Insert promo code --> Use --> Remove Promotion) , (test case, true)}
it.skip('Transfer Pop Up, Insert promo code --> Use --> Remove Promotion', () => {
	cy.Live_Casino_Selected_Tab()
	cy.Game_2nd_Sequence_In_Game_Category()
	cy.Open_Transfer_Pop_Up()
	cy.Promo_Code_Label()
	cy.Insert_Promo_Code(promoCode)
	cy.Click_Remove_Promo_After_insert_Promo_Code_Or_Select_Promotion_Dropdown()
})

//testTransferPopUp{(valid amount, provider wallet (amount > 1), apply dropdown promo / promo code) , (test case, true)}
it.skip('Transfer Pop Up, Tranfer unsuccessful with valid amount, provider wallet (amount > 1), applypromo', () => {
	cy.Live_Casino_Selected_Tab()
	cy.Game_2nd_Sequence_In_Game_Category()
	cy.Open_Transfer_Pop_Up()
	cy.Insert_Transfer_Amount(validTransferAmount)
	cy.Dropdown_Promo_Label()
	cy.Select_Dropdown_Promotion(promoValue)
	cy.Click_Transfer_Button()
	cy.Apply_Promotion_Unsuccessful_Error_Message_When_Provider_Wallet_More_Than_1()
})

//testTransferPopUp{(valid amount, provider wallet (amount not reach target), apply dropdown promo / promo code) , (test case, true)}
it.skip('Transfer Pop Up, Tranfer unsuccessful with valid amount not target, applypromo', () => {
	cy.Live_Casino_Selected_Tab()
	cy.Game_2nd_Sequence_In_Game_Category()
	cy.Open_Transfer_Pop_Up()
	cy.Insert_Transfer_Amount(validPromoTransferAmount)
	cy.Dropdown_Promo_Label()
	cy.Select_Dropdown_Promotion(promoValue)
	cy.Click_Transfer_Button()
	cy.Apply_Promotion_Unsuccessful_Error_Message_When_Promotion_Not_Reach_Min_Target()
})

//testTransferPage{(empty amount (default = 0), no promo) , (test case, true)}
it.skip('Transfer Page, Transfer unsuccessful with empty amount (default = 0) and no promo', () => {
	cy.Profile_Dropdown()
	cy.Click_Transfer_Tab_In_Profile_Dropdown()
	cy.Transfer_Page_Label()
	cy.Switch_Wallet_Between_Provider_Wallet_And_Main_Wallet(
		mainWallet,
		Pragmatic
	)
	cy.Click_Transfer_Button()
	cy.Transfer_Error_Message_Below_1()
	cy.Close_Transfer_Error_Message_Below_1()
	cy.Switch_Wallet_Between_Provider_Wallet_And_Main_Wallet(Playtech, mainWallet)
	cy.Click_Transfer_Button()
	cy.Transfer_Error_Message_Below_1()
})

//testTransferPage{(invalid amount (amount > main wallet), no promo) , (test case, true)}
it.skip('Transfer Page, Transfer unsuccessful with valid amount,no promo, but provider is maintenance', () => {
	cy.Profile_Dropdown()
	cy.Click_Transfer_Tab_In_Profile_Dropdown()
	cy.Transfer_Page_Label()
	cy.Switch_Wallet_Between_Provider_Wallet_And_Main_Wallet(
		mainWallet,
		Pragmatic
	)
	cy.Insert_Transfer_Amount(invalidTransferAmount)
	cy.Transfer_Button_Disable()
})

//testTransferPage{(valid amount (amount < main wallet), no promo, provider maintenance) , (test case, true)}
it.skip('Transfer Page, Transfer unsuccessful with valid amount,no promo, but provider is maintenance', () => {
	cy.Profile_Dropdown()
	cy.Click_Transfer_Tab_In_Profile_Dropdown()
	cy.Transfer_Page_Label()
	cy.Switch_Wallet_Between_Provider_Wallet_And_Main_Wallet(
		mainWallet,
		Pragmatic
	)
	cy.Insert_Transfer_Amount(validTransferAmount)
	cy.Click_Transfer_Button()
	cy.Error_Message_When_Launch_Maintenance_Failed()
})

//testTransferPage{(valid amount (amount < main wallet), no promo) , (test case, true)}
it.skip('Transfer Page, valid amount (amount < main wallet), no promo', () => {
	cy.Profile_Dropdown()
	cy.Click_Transfer_Tab_In_Profile_Dropdown()
	cy.Transfer_Page_Label()
	cy.Switch_Wallet_Between_Provider_Wallet_And_Main_Wallet(
		mainWallet,
		Pragmatic
	)
	cy.Insert_Transfer_Amount(validTransferAmount)
	cy.Click_Transfer_Button()
	cy.wait(5000)
})

//testTransferPage{(invalid amount (amount > providerwallet), no promo) , (test case, true)}
it.skip('Transfer Page, Transfer unsuccessful with invalid amount (amount < provider wallet), no promo', () => {
	cy.Profile_Dropdown()
	cy.Click_Transfer_Tab_In_Profile_Dropdown()
	cy.Transfer_Page_Label()
	cy.Switch_Wallet_Between_Provider_Wallet_And_Main_Wallet(
		Pragmatic,
		mainWallet,
	)
	cy.Insert_Transfer_Amount(invalidTransferAmount)
	cy.Transfer_Button_Disable()
})

//testTransferPage{(select dropdown promo --> Remove Promotion ) , (test case, true)}
it.skip('Transfer Page, dropdown promo --> Remove Promotion', () => {
	cy.Profile_Dropdown()
	cy.Click_Transfer_Tab_In_Profile_Dropdown()
	cy.Transfer_Page_Label()
	cy.Switch_Wallet_Between_Provider_Wallet_And_Main_Wallet(
		mainWallet,
		Pragmatic
	)
	cy.Dropdown_Promo_Label()
	cy.Select_Dropdown_Promotion(promoValue)
	cy.Click_Remove_Promo_After_insert_Promo_Code_Or_Select_Promotion_Dropdown()
})

//testTransferPage{(Insert promo code --> Use --> Remove Promotion) , (test case, true)}
it.skip('Transfer Page, Insert promo code --> Use --> Remove Promotion', () => {
	cy.Profile_Dropdown()
	cy.Click_Transfer_Tab_In_Profile_Dropdown()
	cy.Transfer_Page_Label()
	cy.Switch_Wallet_Between_Provider_Wallet_And_Main_Wallet(
		mainWallet,
		Pragmatic
	)
	cy.Promo_Code_Label()
	cy.Insert_Promo_Code(promoCode)
	cy.Click_Remove_Promo_After_insert_Promo_Code_Or_Select_Promotion_Dropdown()
})
//testTransferPage{(valid amount, provider wallet (amount > 1), apply dropdown promo / promo code) , (test case, true)}
it.skip('Transfer Page, Tranfer unsuccessful with valid amount, provider wallet (amount > 1), applypromo', () => {
	cy.Profile_Dropdown()
	cy.Click_Transfer_Tab_In_Profile_Dropdown()
	cy.Transfer_Page_Label()
	cy.Switch_Wallet_Between_Provider_Wallet_And_Main_Wallet(
		mainWallet,
		Pragmatic
	)
	cy.Insert_Transfer_Amount(validTransferAmount)
	cy.Dropdown_Promo_Label()
	cy.Select_Dropdown_Promotion(promoValue)
	cy.Click_Transfer_Button()
	cy.Apply_Promotion_Unsuccessful_Error_Message_When_Provider_Wallet_More_Than_1()
})

//testTransferPage{(valid amount, provider wallet (amount not reach target), apply dropdown promo / promo code) , (test case, true)}
it.skip('Transfer Page, Tranfer unsuccessful with valid amount not target, applypromo', () => {
	cy.Profile_Dropdown()
	cy.Click_Transfer_Tab_In_Profile_Dropdown()
	cy.Transfer_Page_Label()
	cy.Switch_Wallet_Between_Provider_Wallet_And_Main_Wallet(
		mainWallet,
		Pragmatic
	)
	cy.Insert_Transfer_Amount(validPromoTransferAmount)
	cy.Dropdown_Promo_Label()
	cy.Select_Dropdown_Promotion(promoValue)
	cy.Click_Transfer_Button()
	cy.Apply_Promotion_Unsuccessful_Error_Message_When_Promotion_Not_Reach_Min_Target()
})

//testTransferPage{(Click restore all button) , (test case, true)}
it.skip('Transfer Page, Click restore all button', ()=>{
	cy.Profile_Dropdown()
	cy.Click_Transfer_Tab_In_Profile_Dropdown()
	cy.Transfer_Page_Label()
	cy.Restore_All_Button_In_Transfer_Page()
})

//testTransferPage{(Click any provider all in button) , (test case, true)}
it.skip('Transfer Page, Click any provider all in button', ()=>{
	cy.Profile_Dropdown()
	cy.Click_Transfer_Tab_In_Profile_Dropdown()
	cy.Transfer_Page_Label()
	cy.Point_Live_Casino_2nd_Provider()
	cy.wait(6000)
	cy.Show_And_Click_All_In_Button()
	cy.wait(6000)
})

//testTransferPage{(Click any provider restore button have credit) , (test case, true)}
it.skip('Transfer Page, Click any provider restore button have credit', ()=>{
	cy.Profile_Dropdown()
	cy.Click_Transfer_Tab_In_Profile_Dropdown()
	cy.Transfer_Page_Label()
	cy.Point_Live_Casino_2nd_Provider()
	cy.Show_And_Click_Restore_Button()
	cy.wait(6000)
})