//Website Homepage URL
Cypress.Commands.add('Website_Homepage_URL', () => {
	cy.visit('https://www.demoai1.com')
})

//Website Sign In Page URL
Cypress.Commands.add('Website_Sign_In_Page_URL', () => {
	cy.visit('https://www.demoai1.com/auth/signin?redirect=/')
})

//Brand Logo in top bar
const brandLogo = '.top-nav-bar_logoContainer__DdMsp > a > img'

Cypress.Commands.add('Click_Brand_Logo_In_Top_Bar', ()=>{
	cy.get(brandLogo).click()
})

//Language List in top bar
const onlyOnelanguageListInTopBar = '.language-bar_language__hX8ii'
const firstlanguageListInTopBar = '.language-bar_language__hX8ii:nth-child(1)'
const secondlanguageListInTopBar = '.language-bar_language__hX8ii:nth-child(2)'

Cypress.Commands.add(
	'Click_Language_When_Only_One_On_Top_bar',
	(beforeLanguage, afterLanguage) => {
		cy.get(onlyOnelanguageListInTopBar).should('have.text', beforeLanguage)
		cy.get(onlyOnelanguageListInTopBar).click()
		cy.get(onlyOnelanguageListInTopBar).should('have.text', afterLanguage)
	}
)

Cypress.Commands.add(
	'Click_1st_Language_On_Top_bar',
	(beforeLanguage, afterLanguage) => {
		cy.get(firstlanguageListInTopBar).should('have.text', beforeLanguage)
		cy.get(firstlanguageListInTopBar).click()
		cy.get(firstlanguageListInTopBar).should('have.text', afterLanguage)
	}
)

Cypress.Commands.add(
	'Click_2nd_Language_On_Top_bar',
	(beforeLanguage, afterLanguage) => {
		cy.get(firstlanguageListInTopBar).should('have.text', beforeLanguage)
		cy.get(firstlanguageListInTopBar).click()
		cy.get(firstlanguageListInTopBar).should('have.text', afterLanguage)
	}
)

//Language Dropdown list in top bar
const selectLanguageTopBarDropDown =
	'.language-bar_languageSelector__GYSbp > select'

Cypress.Commands.add(
	'Select_Language_From_Top_Bar_Language_Dropdown',
	topBarLanguageDropdown => {
		cy.get(selectLanguageTopBarDropDown).select(topBarLanguageDropdown)
	}
)

//Curency Dropdown list in top bar
const selectCurrencyTopBarDropdown =
	'.language-bar_currencySelector__QL_Gu > select'

Cypress.Commands.add(
	'Select_Currency_From_Top_Bar_Currency_Dropdown',
	topBarCurrencyFropdown => {
		cy.get(selectCurrencyTopBarDropdown).select(topBarCurrencyFropdown)
	}
)

//Scroll down to footer
const websiteFooter = '.footer_top__iFm3N'

Cypress.Commands.add('Scroll_Down_To_Website_footer', () => {
	cy.get(websiteFooter).scrollIntoView()
})

//Only Language Dropdown in footer
const selectLanguageFooterDropdown = '.selector_selector__C2_nv > select'

Cypress.Commands.add(
	'Select_Language_From_Footer_Language_Dropdown',
	footerLanguageDropdown => {
		cy.get(selectLanguageFooterDropdown).select(footerLanguageDropdown)
	}
)

//Only Currency Dropdown in footer
const selectCurrencyFooterDropdown = 'selector_selector__C2_nv > select'

Cypress.Commands.add(
	'Select_Currency_From_Footer_Currency_Dropdown',
	footerCurrencyFropdown => {
		cy.get(selectCurrencyFooterDropdown).select(footerCurrencyFropdown)
	}
)

//Have Language & Currency Dropdown in footer
const selectLeftCurrencyFooterDropdown =
	'selector_selector__C2_nv:nth-child(1) > select'
const selectRightLanguageFooterDropdown =
	'.selector_selector__C2_nv:nth-child(2) > select'

Cypress.Commands.add(
	'Select_Left_Currency_From_Footer_Currency_Dropdown',
	leftFooterCurrencyDropdown => {
		cy.get(selectLeftCurrencyFooterDropdown).select(leftFooterCurrencyDropdown)
	}
)

Cypress.Commands.add(
	'Select_Right_Language_From_Footer_Currency_Dropdown',
	rightFooterLanguageDropdown => {
		cy.get(selectRightLanguageFooterDropdown).select(
			rightFooterLanguageDropdown
		)
	}
)

//Click Sign In Button
const homepageSignInButton =
	':nth-child(1) > .user-quick-view_container__pFlJe > .user-quick-view_guestActions__La_tU > .user-quick-view_signInLink__trPsS'
var homepageSignInButtonText = 'Sign In'

Cypress.Commands.add('Click_Sign_In_Button', () => {
	cy.get(homepageSignInButton).should('have.text', homepageSignInButtonText)
	cy.get(homepageSignInButton).click()
})

//Sign In Page description
const signInDescription = '.signin_textContainer__M0lAh'
var signInDescriptionText = 'Login to your account to start playing.'

Cypress.Commands.add('Sign_In_Page_Description', () => {
	cy.get(signInDescription).should('have.text', signInDescriptionText)
})

//Sign In Account
const usernameContainer = '.inputs_textContainer__ksnHm > input'
const passwordContainer = '.inputs_inputContainer__YQKEw > input'
const signInButton = 'form > .TT__standard-button'
var signInButtonText = 'Sign In'

Cypress.Commands.add('Sign_In_Account', (username, password) => {
	// cy.get(usernameContainer).click()
	cy.get(usernameContainer).type(username).should('have.value', username)

	// cy.get(passwordContainer).click()
	cy.get(passwordContainer).type(password).should('have.value', password)

	cy.get(signInButton).should('have.text', signInButtonText)
	cy.get(signInButton).click()
})

//Sign In Account unsuccessfully and show error message pop up
const signInErrorPopUp = '.modal_hero__P0JkX'
const closeSignInErrorPopUp = '.modal_action__0o7AY > .TT__standard-button'
var signInErrorPopUpText = 'Unable to log in.'
var closeSignInErrorPopUpText = 'Okay'

Cypress.Commands.add('Show_Sign_In_Error_Pop_Up', () => {
	cy.get(signInErrorPopUp).should('be.visible')
	cy.get(signInErrorPopUp).should('have.text', signInErrorPopUpText)
})

Cypress.Commands.add('Close_Sign_In_Error_Pop_Up', () => {
	cy.get(closeSignInErrorPopUp)
		.should('be.visible')
		.and('have.text', closeSignInErrorPopUpText)
	cy.get(closeSignInErrorPopUp).click()
})

//Profile Username and Click Profile Username --> My Account Page
const profileUsername =
	':nth-child(1) > .user-quick-view_container__pFlJe > .user-quick-view_user__FkeJ_ > :nth-child(2) > .user-quick-view_playerMainContent__rDEHg > :nth-child(1)'

Cypress.Commands.add('Profile_Username', username => {
	cy.get(profileUsername).should('have.text', username)
})

Cypress.Commands.add('Click_Profile_Username_To_Account_Page', () => {
	cy.get(profileUsername).click()
})

//Point profile show profile dropdown
const profileContainer = '.top-nav-bar_user__WhBxI'
const profileDropDown = '.profile-dropdown_container__V5Nk_'

Cypress.Commands.add('Profile_Dropdown', () => {
	cy.get(profileContainer).trigger('mouseover')
	cy.get(profileDropDown).invoke('show')
})

//Click account tab in profile dropdown --> My Account Page
const accountTabInProfileDropdown = '[href="/account/deposit"]'

Cypress.Commands.add('Click_Account_Tab_In_Profile_Dropdown', () => {
	cy.get(accountTabInProfileDropdown).click()
})

//My account Page Label
const myAccountPageLabel = '.account_title__CRo87'
var myAccountPageLabelText = 'My Account'
Cypress.Commands.add('My_Account_Page_Label', () => {
	cy.get(myAccountPageLabel).should('have.text', myAccountPageLabelText)
})

//Click My Account tab on Side Menu --> My account page
const sideMenuMyAccountButton =
	'.account-info_sideNavBar__Zeolo > :nth-child(7)'
Cypress.Commands.add('Navigation_SideMenu_To_MyAccount', () => {
	cy.get(sideMenuMyAccountButton).click()
})

//Click 3 dot indicator
const threeDotIndicator = '.account_userMenuButtonContainer__Wa1hN'
Cypress.Commands.add('Click_3Dot_Indicator', () => {
	cy.get(threeDotIndicator).click('center')
})

//Click History icon in My Account Page --> History Page
const accountPageHistoryButton =
	'.account_topActionsContainer__qOQOS > .account_actions__y4FAy > [href="/account/history"]'
Cypress.Commands.add('Navigation_AccountPage_To_History', () => {
	cy.get(accountPageHistoryButton).click()
})

//Click History tab on Side Menu --> History page
const sideMenuHistoryButton =
	'.account-info_sideNavBar__Zeolo > :nth-child(5) > a'
Cypress.Commands.add('Navigation_SideMenu_To_History', () => {
	cy.get(sideMenuHistoryButton).click()
})

//History page Transfers, Deposits, Withdraws, Rebates, Adjustments, Bonus Tabs
const historyTransferTab =
	'.history_tabButtons__fSoCw > .history_tabButton__gMXo_:nth-child(1)'
const historyDepositTab =
	'.history_tabButtons__fSoCw > .history_tabButton__gMXo_:nth-child(2)'
const historyWithdrawTab =
	'.history_tabButtons__fSoCw > .history_tabButton__gMXo_:nth-child(3)'
const historyRebateTab =
	'.history_tabButtons__fSoCw > .history_tabButton__gMXo_:nth-child(4)'
const historyAdjustmentTab =
	'.history_tabButtons__fSoCw > .history_tabButton__gMXo_:nth-child(5)'
const historyBonusTab =
	'.history_tabButtons__fSoCw > .history_tabButton__gMXo_:nth-child(6)'

Cypress.Commands.add('Click_History_Page_Transfer_Tab', () => {
	cy.get(historyTransferTab).click()
})

Cypress.Commands.add('Click_History_Page_Deposit_Tab', () => {
	cy.get(historyDepositTab).click()
})

Cypress.Commands.add('Click_History_Page_Withdrawal_Tab', () => {
	cy.get(historyWithdrawTab).click()
})

Cypress.Commands.add('Click_History_Page_Rebates_Tab', () => {
	cy.get(historyRebateTab).click()
})

Cypress.Commands.add('Click_History_Page_Adjustment_Tab', () => {
	cy.get(historyAdjustmentTab).click()
})

Cypress.Commands.add('Click_History_Page_Bonus_Tab', () => {
	cy.get(historyBonusTab).click()
})

//History page Transfers, Deposits, Withdraws, Rebates, Adjustments, Bonus Active Tabs
const historyActiveTab = '.history_tabButton__active__tGtBQ'
var historyTransferTabText = 'Transfers'
var historyDepositTabText = 'Deposits'
var historyWithdrawTabText = 'Withdrawals'
var historyRebateTabText = 'Rebates'
var historyAdjustmentTabText = 'Adjustments'
var historyBonusTabText = 'Bonus'

Cypress.Commands.add('History_Page_Transfer_Active_Tab', () => {
	cy.get(historyActiveTab).should('have.text', historyTransferTabText)
})

Cypress.Commands.add('History_Page_Deposit_Active_Tab', () => {
	cy.get(historyActiveTab).should('have.text', historyDepositTabText)
})

Cypress.Commands.add('History_Page_Withdrawal_Active_Tab', () => {
	cy.get(historyActiveTab).should('have.text', historyWithdrawTabText)
})

Cypress.Commands.add('History_Page_Rebate_Active_Tab', () => {
	cy.get(historyActiveTab).should('have.text', historyRebateTabText)
})

Cypress.Commands.add('History_Page_Adjustment_Active_Tab', () => {
	cy.get(historyActiveTab).should('have.text', historyAdjustmentTabText)
})

Cypress.Commands.add('History_Page_Bonus_Active_Tab', () => {
	cy.get(historyActiveTab).should('have.text', historyBonusTabText)
})

//Scroll to Your wallet section in My account Page & Your wallet label
const yourWalletSectionInMyAccountPage = '.account_walletsContainer__cKmvq'
Cypress.Commands.add(
	'Scroll_Down_Your_Wallet_Section_In_My_Account_Page',
	() => {
		cy.get(yourWalletSectionInMyAccountPage).scrollIntoView()
	}
)

//Your Wallet label in My Account Page
const yourWalletLabel = '.account_walletsContainer__cKmvq > h4'
var yourWalletLabelText = 'Your Wallets'

Cypress.Commands.add('Your_Wallets_Label_In_My_Account_Page', () => {
	cy.get(yourWalletLabel).should('have.text', yourWalletLabelText)
})

//Click Add more wallet button in Your wallet section
const addMoreWalletbutton = '.wallets-viewer_addButton__IRxbN'

Cypress.Commands.add('Click_Add_More_Wallet_Button_In_Your_wallet', () => {
	cy.get(addMoreWalletbutton).click()
})

//Open & Close Add More Wallet Pop up
const addMoreWalletPopUpLabel = '.wallet-creation-modal_modalTitle__sC_2k'
const closeAddMoreWalletPopUp = '.wallet-creation-modal_closeButton__CuZL4'
var addMoreWalletPopUpLabeltext = 'Add more wallet'

Cypress.Commands.add('Add_More_Wallet_Pop_Up_Label', () => {
	cy.get(addMoreWalletPopUpLabel).should(
		'have.text',
		addMoreWalletPopUpLabeltext
	)
})

Cypress.Commands.add('Close_Add_More_Wallet_Pop_Up', () => {
	cy.get(closeAddMoreWalletPopUp).click()
})

//Active more currency in Profile Dropdown & Add more wallet pop up
const firstCurrencyIcon =
	'.wallet-currency-creation-options_optionButton__sE9Rq:nth-child(1)'
const secondCurrencyIcon =
	'.wallet-currency-creation-options_optionButton__sE9Rq:nth-child(2)'

Cypress.Commands.add(
	'Active_1st_Currency_Icon_In_Profile_Dropdown_Or_Add_More_Wallet_Pop_Up',
	() => {
		cy.get(firstCurrencyIcon).click()
	}
)

Cypress.Commands.add(
	'Active_2nd_Currency_Icon_In_Profile_Dropdown_Or_Add_More_Wallet_Pop_Up',
	() => {
		cy.get(secondCurrencyIcon).click()
	}
)

//Game Category - Live Casino, Sports, Slots, Fishing, E-Sport, Other
const liveCasinoTab = '.games_menu__w051Z > :nth-child(1)'
const sportsTab = '.games_menu__w051Z > :nth-child(2)'
const slotsTab = '.games_menu__w051Z > :nth-child(3)'
const fishingTab = '.games_menu__w051Z > :nth-child(4)'
const otherTab = '.games_menu__w051Z > :nth-child(5)'
const eSportTab = ''
const categorySelected = '.games___selected__6jJXY'
var liveCasinoTabText = 'Live Casino'
var sportsTabText = 'Sports'
var slotsTabText = 'Slots'
var fishingTabText = 'Fishing'
var otherTabText = 'Other'
var eSportTabText = 'E-Sports'

Cypress.Commands.add('Live_Casino_Category_Tab', () => {
	cy.get(liveCasinoTab).should('have.text', liveCasinoTabText)
	cy.get(liveCasinoTab).click()
})

Cypress.Commands.add('Live_Casino_Selected_Tab', () => {
	cy.get(categorySelected).should('have.text', liveCasinoTabText)
})

Cypress.Commands.add('Sports_Category_Tab', () => {
	cy.get(sportsTab).should('have.text', sportsTabText)
	cy.get(sportsTab).click()
})

Cypress.Commands.add('Sports_Category_Selected_Tab', () => {
	cy.get(categorySelected).should('have.text', sportsTabText)
})

Cypress.Commands.add('Slots_Category_Tab', () => {
	cy.get(slotsTab).should('have.text', slotsTabText)
	cy.get(slotsTab).click()
})

Cypress.Commands.add('Slots_Category_Selected_Tab', () => {
	cy.get(categorySelected).should('have.text', slotsTabText)
})

Cypress.Commands.add('Fishing_Category_Tab', () => {
	cy.get(fishingTab).should('have.text', fishingTabText)
	cy.get(fishingTab).click()
})

Cypress.Commands.add('Fishing_Category_Selected_Tab', () => {
	cy.get(categorySelected).should('have.text', fishingTabText)
})

Cypress.Commands.add('Other_Category_Tab', () => {
	cy.get(otherTab).should('have.text', otherTabText)
	cy.get(otherTab).click()
})

Cypress.Commands.add('Other_Category_Selected_Tab', () => {
	cy.get(categorySelected).should('have.text', otherTabText)
})

Cypress.Commands.add('E-Sports_Category_Tab', () => {
	cy.get(eSportTab).should('have.text', eSportTabText)
	cy.get(eSportTab).click()
})

Cypress.Commands.add('E-Sports_Category_Selected_Tab', () => {
	cy.get(categorySelected).should('have.text', eSportTabText)
})

//Game First sequence in Game Category
const gameSequence1 = ':nth-child(1) > .TT__game-provider-label'

Cypress.Commands.add('Game_1st_Sequence_In_Game_Category', () => {
	cy.get(gameSequence1).click()
})

//Game Second sequence in Game Category
const gameSequence2 = ':nth-child(2) > .TT__game-provider-label'

Cypress.Commands.add('Game_2nd_Sequence_In_Game_Category', () => {
	cy.get(gameSequence2).click()
})

//Game Third sequence in Game Category
const gameSequence3 = ':nth-child(3) > .TT__game-provider-label'

Cypress.Commands.add('Game_3rd_Sequence_In_Game_Category', () => {
	cy.get(gameSequence3).click()
})

//Click Skip and proceed to game in Transfer Pop Up to launch game / Disable click Skip and proceed to game
const skipProccesToGame = '.transfer-prompt_skip__wqRrm > .TT__standard-button'
const gameIsMaintenance = '.amount-inputs_transferLockMessage__L3_1F'
var skipProccesToGameText = 'Skip and proceed to game'
var gameIsMaintenanceText =
	'Provider is under maintenance. No transfer is allowed.'

Cypress.Commands.add(
	'Click_Skip_And_Proceed_To_Game_In_Transfer_Pop_Up_Lauch_Game',
	() => {
		cy.get(skipProccesToGame).should('have.text', skipProccesToGameText)
		cy.get(skipProccesToGame).click()
	}
)

Cypress.Commands.add(
	'Disable_Click_Skip_And_Proceed_To_Game_In_Transfer_Pop_Up_Lauch_Game',
	() => {
		cy.get(skipProccesToGame).should('be.disabled')
	}
)

//Click change password tab in 3 dot indicator menu --> Change Password Page
const changePasswordTab =
	'.account_list__2XnZl > [href="/account/change-password"]'
var changePasswordTabText = 'Change password'
Cypress.Commands.add('Click_ChangePassword_In_3Dot', () => {
	cy.get(changePasswordTab).should('have.text', changePasswordTabText)
	cy.get(changePasswordTab).click()
})

//Click Change Password tab on Side Menu --> Change Password page
const sideMenuChangePasswordButton =
	'.account-info_sideNavBar__Zeolo > :nth-child(10)'
Cypress.Commands.add('Navigation_SideMenu_To_ChangePassword', () => {
	cy.get(sideMenuChangePasswordButton).click()
})

//Change Password Page Label
const changePasswordPageLabel = '.main_title__6Mbhv'
var changePasswordPageLabelText = 'Change Password'
Cypress.Commands.add('ChangePassword_Page_Label', () => {
	cy.get(changePasswordPageLabel).should(
		'have.text',
		changePasswordPageLabelText
	)
})

//Change password insert current password detail and validation message
const currentPasswordContainer =
	'.inputs_textContainer__ksnHm:nth-child(1) > input'

Cypress.Commands.add(
	'Insert_Current_Password_Detail_With_Validation',
	currentPassword => {
		cy.get(currentPasswordContainer).click()
		cy.get(currentPasswordContainer).type(currentPassword)
		cy.get(currentPasswordContainer)
			.invoke('val')
			.should('eq', currentPassword)
			.and('have.length.gte', 8)
			.and('have.length.lte', 40)
	}
)

Cypress.Commands.add(
	'Insert_Current_Password_Detail_Without_Validation',
	currentPassword => {
		cy.get(currentPasswordContainer).click()
		cy.get(currentPasswordContainer).type(currentPassword)
	}
)

Cypress.Commands.add('Current_Password_Validation_Message', () => {
	cy.get(currentPasswordContainer)
		.invoke('prop', 'validationMessage')
		.should('equal', 'Please fill out this field.')
})

//Change password insert new password detail and validation message
const newPasswordContainer = '.inputs_textContainer__ksnHm:nth-child(2) > input'

Cypress.Commands.add(
	'Insert_New_Password_Detail_With_Validation',
	newPassword => {
		cy.get(newPasswordContainer).click()
		cy.get(newPasswordContainer).type(newPassword)
		cy.get(newPasswordContainer)
			.invoke('val')
			.should('eq', newPassword)
			.and('have.length.gte', 8)
			.and('have.length.lte', 40)
	}
)

Cypress.Commands.add(
	'Insert_New_Password_Detail_Without_Validation',
	newPassword => {
		cy.get(newPasswordContainer).click()
		cy.get(newPasswordContainer).type(newPassword)
	}
)

Cypress.Commands.add('New_Password_Validation_Message', () => {
	cy.get(newPasswordContainer)
		.invoke('prop', 'validationMessage')
		.should('equal', 'Please fill out this field.')
})

//Change password insert retype password detail and validation message
const retypePasswordContainer =
	'.inputs_textContainer__ksnHm:nth-child(3) > input'

Cypress.Commands.add(
	'Insert_Retype_Password_Detail_With_Validation',
	retypePassword => {
		cy.get(retypePasswordContainer).click()
		cy.get(retypePasswordContainer).type(retypePassword)
		cy.get(retypePasswordContainer)
			.invoke('val')
			.should('eq', retypePassword)
			.and('have.length.gte', 8)
			.and('have.length.lte', 40)
	}
)

Cypress.Commands.add(
	'Insert_Retype_Password_Detail_Without_Validation',
	retypePassword => {
		cy.get(retypePasswordContainer).click()
		cy.get(retypePasswordContainer).type(retypePassword)
	}
)

Cypress.Commands.add('Retype_Password_Validation_Message', () => {
	cy.get(retypePasswordContainer)
		.invoke('prop', 'validationMessage')
		.should('equal', 'Please fill out this field.')
})

//Submit change password detail
const submitChangePassword =
	'.change-password_actionContainer__wxvfo > .TT__standard-button'
var submitChangePasswordText = 'Change password'

Cypress.Commands.add('Submit_Change_Password', () => {
	cy.get(submitChangePassword).should('have.text', submitChangePasswordText)
	cy.get(submitChangePassword).click()
})

//Error message below current Password
const passwordErrorMessage = '.inputs_error__9uo7k'
var errorCurrentPasswordText = 'Incorrect password'
var errorNewPasswordText = 'The password must be more than 8 characters.'
var errorRetyprPasswordText = "Doesn't match the new password."

Cypress.Commands.add('Current_Password_Error_Message', () => {
	cy.get(passwordErrorMessage).should('have.text', errorCurrentPasswordText)
})

Cypress.Commands.add('New_Password_Error_Message', () => {
	cy.get(passwordErrorMessage).should('have.text', errorNewPasswordText)
})

Cypress.Commands.add('Retype_Password_Error_Message', () => {
	cy.get(passwordErrorMessage).should('have.text', errorRetyprPasswordText)
})

//Click manage Banks tab in 3 dot indicator menu --> Manage banks Page
const manageBankTab = '.account_list__2XnZl > [href="/account/banks"]'
var manageBankTabText = 'Manage Banks'
Cypress.Commands.add('Click_ManageBanks_In_3Dot', () => {
	cy.get(manageBankTab).should('have.text', manageBankTabText)
	cy.get(manageBankTab).click()
})

//Click Manage Banks tab on Side Menu --> Manage Banks page
const sideMenuManageBankButton =
	'.account-info_sideNavBar__Zeolo > :nth-child(8)'
Cypress.Commands.add('Navigation_SideMenu_To_ManageBanks', () => {
	cy.get(sideMenuManageBankButton).click()
})

//Manage Bank Page Label
const manageBankPageLabel = '.content_sectionTitle__9Umi5'
var manageBankPageLabelText = 'My bank accounts'
Cypress.Commands.add('ManageBank_Page_Label', () => {
	cy.get(manageBankPageLabel).should('have.text', manageBankPageLabelText)
})

//Click "+ Link a bank" container in My bank account page
const linkABankButton = '.banks_newBank__Ul2Bc'
var linkABankButtonText = 'Link a bank'
Cypress.Commands.add('Click_Link_a_bank_In_My_bank_Account_Page', () => {
	cy.get(linkABankButton).should('have.text', linkABankButtonText)
	cy.get(linkABankButton).click('center')
})

//Link a Bank Account Page Label
const linkBankAccountPageLabel = '.main_title__6Mbhv'
var linkBankAccountPageLabelText = 'Link a bank account'
Cypress.Commands.add('Link_Bank_Account_Page_Label', () => {
	cy.get(linkBankAccountPageLabel).should(
		'have.text',
		linkBankAccountPageLabelText
	)
})

//Select bank in Link a bank account page
const selectBankFromDropdown = '.inputs_selectContainer__O9Ic_ > select'
Cypress.Commands.add('Select_Bank_In_Link_Account_Page', selectBank => {
	cy.get(selectBankFromDropdown)
		.select(selectBank)
		.should('have.value', selectBank)
})

//Insert Account Number and validation Message
const accountNumberContainer = 'form > :nth-child(1) > input'

Cypress.Commands.add(
	'Insert_Account_Number_Without_Length_Validation_In_Account_Number_container',
	accountNumber => {
		cy.get(accountNumberContainer).click()
		cy.get(accountNumberContainer).type(accountNumber)
	}
)

Cypress.Commands.add(
	'Insert_Account_Number_With_Length_Validation_In_Account_Number_container',
	accountNumber => {
		cy.get(accountNumberContainer).click()
		cy.get(accountNumberContainer).type(accountNumber)
		cy.get(accountNumber)
			.invoke('val')
			.should('eq', accountNumber)
			.and('have.length.gte', 5)
			.and('have.length.lte', 20)
	}
)

Cypress.Commands.add('Account_Number_With_Empty_Validation_Message', () => {
	cy.get(accountNumberContainer)
		.invoke('prop', 'validationMessage')
		.should('equal', 'Please fill out this field.')
})

//Click Link bank Account button
const linkBankAccountButton =
	'.bank-inputs_actionContainer__OTY__ > .TT__standard-button'
var linkBankAccountButtonText = 'Link bank account'
Cypress.Commands.add('Click_Link_Bank_Account_Button', () => {
	cy.get(linkBankAccountButton).should('have.text', linkBankAccountButtonText)
	cy.get(linkBankAccountButton).click()
})

//Error message below Account Number
const accountNumberErrorMessage = '.inputs_error__9uo7k'
var accountNumberErrorMessageText = 'Please enter a valid account number'

Cypress.Commands.add('Account_Number_Error_message', () => {
	cy.get(accountNumberErrorMessage).should(
		'have.text',
		accountNumberErrorMessageText
	)
})

//Link a bank account page show message when reach max 5 banks
const reachLimitErrorPanel = '.errorPanel'
var reachLimitErrorPanelText = 'You cannot have more than 5 bank accounts.'
Cypress.Commands.add('Error_Message_Show_When_Reach_Limit', () => {
	cy.get(reachLimitErrorPanel).should('have.text', reachLimitErrorPanelText)
})

//Link a bank account error pop up when duplicate account number
const duplicatedErrorMessagePopUp = '.modal_message__hHpBD'
const closeduplicatedErrorMessagePopUp =
	'.modal_action__0o7AY > .TT__standard-button'
var duplicatedErrorMessagePopUpText =
	'Seems like you have the same bank account number, please use another bank account'
var closeduplicatedErrorMessagePopUpText = 'Okay'

Cypress.Commands.add('Duplicate_Account_Number_Error_Message', () => {
	cy.get(duplicatedErrorMessagePopUp).should(
		'have.text',
		duplicatedErrorMessagePopUpText
	)
})

Cypress.Commands.add('Close_Duplicate_Account_Number_Error_Message', () => {
	cy.get(closeduplicatedErrorMessagePopUp).should(
		'have.text',
		closeduplicatedErrorMessagePopUpText
	)
	cy.get(closeduplicatedErrorMessagePopUp).click()
})

//Point second bank in My Bank Account page
const secondBankInBankAccount = ':nth-child(2) > .banks_bank__54mSP'
const deleteIcon = ':nth-child(2) > .banks_deleteBank__gwekO'

Cypress.Commands.add('Point_And_Click_Delete_Icon', () => {
	cy.get(secondBankInBankAccount).trigger('mouseover')
	cy.get(deleteIcon).invoke('show').click()
})

//Button in delete bank Pop Up
const deleteBankNoButton = '.buttons_button__Pv4L3:nth-child(2)'
const deleteBankYesButton = '.buttons_button__Pv4L3:nth-child(1)'
var deleteBankNoButtonText = 'No'
var deleteBankYesButtonText = 'Delete bank'

Cypress.Commands.add('Click_No_Button_In_Delete_bank_Pop_Up', () => {
	cy.get(deleteBankNoButton).should('have.text', deleteBankNoButtonText)
	cy.get(deleteBankNoButton).click()
})

Cypress.Commands.add('Click_Delete_bank_Button_In_Delete_bank_Pop_Up', () => {
	cy.get(deleteBankYesButton).should('have.text', deleteBankYesButtonText)
	cy.get(deleteBankYesButton).click()
})

//Click deposit icon in homepage --> Deposit page
const homepageDepositButton =
	'.index_announcementActions__nhC_d > .user-quick-actions_shortcuts__RVJkw > :nth-child(1)'
Cypress.Commands.add('Navigation_Homepage_To_Deposit', () => {
	cy.get(homepageDepositButton).click()
})

//Click Deposit icon in My Account --> Deposit page
const accountPageDepositButton =
	'.account_topActionsContainer__qOQOS > .account_actions__y4FAy > [href="/account/deposit"]'
Cypress.Commands.add('Navigation_AccountPage_To_Deposit', () => {
	cy.get(accountPageDepositButton).click()
})

//Click Deposit tab on Side Menu --> Deposit page
const sideMenuDepositButton =
	'.account-info_sideNavBar__Zeolo > :nth-child(2) > a'
Cypress.Commands.add('Navigation_SideMenu_To_Deposit', () => {
	cy.get(sideMenuDepositButton).click()
})

//Click Deposit tab in profile dropdown --> Deposit Page
const depositInDropdown = '[href="/account/deposit"]'

Cypress.Commands.add('Click_Deposit_Tab_In_Profile_Dropdown', () => {
	cy.get(depositInDropdown).click()
})

//Click Deposit Now button in History deposit tab -- Deposit Page
const depositNowButton = '.buttons_small___2MUu history_emptyCTA__1bMXW'
var depositNowButtonText = 'Deposit now'

Cypress.Commands.add('Click_Deposit_Now_Button_In_History_Deposit_Tab', () => {
	cy.get(depositNowButton).should('have.text', depositNowButtonText)
	cy.get(depositNowButton).click()
})

//Deposit Page Label
const depositPageLabel = '.content_sectionTitle__9Umi5'
var depositPageLabelText = 'Deposit Options'
Cypress.Commands.add('Deposit_Page_Label', () => {
	cy.get(depositPageLabel).should('have.text', depositPageLabelText)
})

//Select Bank Transfer dropdown choose bank
const depositSelectionDropdown = '.inputs_selectContainer__O9Ic_ > select'

Cypress.Commands.add('Select_Bank_Transfer_bank', selectBank => {
	cy.get(depositSelectionDropdown)
		.select(selectBank)
		.should('have.value', selectBank)
})

//Insert Bank Transfer deposit amount in deposit page (default = 0)
const depositAmountContainer =
	'.amount-input_inputContainer__jUvRT > .inputs_textContainer__ksnHm > input'

Cypress.Commands.add('Insert_Bank_Transfer_Deposit_Amount', depositAmount => {
	cy.get(depositAmountContainer).click()
	cy.get(depositAmountContainer).type(depositAmount)
})

//Error message below Deposit amount when insert amount not between range
const depositAmountErrorMessage = '.errorPanel'
var depositMinAmountErrorMessageText = 'Minimum deposit amount is INR 100.'
var depositMaxAmountErrorMessageText = 'Maximum deposit amount is INR 10,000.'

Cypress.Commands.add('Min_Deposit_Amount_Error_Message', () => {
	cy.get(depositAmountErrorMessage).should(
		'have.text',
		depositMinAmountErrorMessageText
	)
})

Cypress.Commands.add('Max_Deposit_Amount_Error_Message', () => {
	cy.get(depositAmountErrorMessage).should(
		'have.text',
		depositMaxAmountErrorMessageText
	)
})

//Select shortcut deposit amount
const firstShortcutAmount = '.amount-input_step__i0L2Q:nth-child(1)'
const secondShortcutAmount = '.amount-input_step__i0L2Q:nth-child(2)'
const thirdShortcutAmount = '.amount-input_step__i0L2Q:nth-child(3)'

Cypress.Commands.add('Select_1st_Shortcut_Deposit_Amount', () => {
	cy.get(firstShortcutAmount).click()
})

Cypress.Commands.add('Select_2nd_Shortcut_Deposit_Amount', () => {
	cy.get(secondShortcutAmount).click()
})

Cypress.Commands.add('Select_3rd_Shortcut_Deposit_Amount', () => {
	cy.get(thirdShortcutAmount).click()
})

//Insert Bank Transfer deposit reference ID in deposit page
const depositReferenceID =
	'.bank-transfer_transactionId__ziAat > .inputs_textContainer__ksnHm > input'

Cypress.Commands.add(
	'Insert_Bank_Transfer_Reference_ID',
	depositReferenceId => {
		cy.get(depositReferenceID).click()
		cy.get(depositReferenceID).type(depositReferenceId)
	}
)

Cypress.Commands.add('Bank_Transfer_Reference_ID_Validation_Message', () => {
	cy.get(depositReferenceID)
		.invoke('prop', 'validationMessage')
		.should('equal', 'Please fill out this field.')
})

//Click submit deposit
const depositSubmitButton = '#TT__deposit-submit-banktransfer'
var depositSubmitText = 'Submit Deposit'

Cypress.Commands.add('Click_Submit_Deposit_Button', () => {
	cy.get(depositSubmitButton).should('have.text', depositSubmitText)
	cy.get(depositSubmitButton).click()
})

//Deposit amount error pop up when insert amount not between range
const invalidAmountRangeErrorMessage = '.modal_message__hHpBD'
const closeinvalidAmountRangeErrorMessage =
	'.modal_action__0o7AY > .TT__standard-button'
var invalidAmountRangeErrorMessageText =
	'Deposit amount must be within the INR 100 and INR 10,000.'
var closeinvalidAmountRangeErrorMessageText = 'Okay'

Cypress.Commands.add('Deposit_Amount_Within_Min_And_Max_Error_Message', () => {
	cy.get(invalidAmountRangeErrorMessage).should(
		'have.text',
		invalidAmountRangeErrorMessageText
	)
})

Cypress.Commands.add(
	'Close_Deposit_Amount_Within_Min_And_Max_Error_Message',
	() => {
		cy.get(closeinvalidAmountRangeErrorMessage).should(
			'have.text',
			closeinvalidAmountRangeErrorMessageText
		)
		cy.get(closeinvalidAmountRangeErrorMessage).click()
	}
)

//Deposit reference ID error pop up when insert duplicate reference ID or submit deposit when have pending / in progress deposit
const depositUnsuccessfulErrorMessage = '.modal_message__hHpBD'
const closedepositUnsuccessfulErrorMessage =
	'.modal_action__0o7AY > .TT__standard-button'
var depositUnsuccessfulErrorMessageText =
	'Something went wrong, please try again or contact support for assistance.'
var closedepositUnsuccessfulErrorMessageText = 'Okay'

Cypress.Commands.add('Deposit_Unsuccessful_After_Submit', () => {
	cy.get(depositUnsuccessfulErrorMessage).should(
		'have.text',
		depositUnsuccessfulErrorMessageText
	)
})

Cypress.Commands.add('Close_Deposit_Unsuccessful_After_Submit', () => {
	cy.get(closedepositUnsuccessfulErrorMessage).should(
		'have.text',
		closedepositUnsuccessfulErrorMessageText
	)
	cy.get(closedepositUnsuccessfulErrorMessage).click()
})

//Deposit successful pop up when deposit success
const depositSuccessfulMessage = '.modal_hero__P0JkX > .modal_title__2_dt7'
var depositSuccessfulMessageText = 'Deposit submitted'

Cypress.Commands.add('Deposit_success_message', () => {
	cy.get(depositSuccessfulMessage).should(
		'have.text',
		depositSuccessfulMessageText
	)
})

//Click withdraw icon in homepage --> Withdraw page
const homepageWithdrawButton =
	'.index_announcementActions__nhC_d > .user-quick-actions_shortcuts__RVJkw > :nth-child(3)'
Cypress.Commands.add('Navigation_Homepage_To_Withdraw', () => {
	cy.get(homepageWithdrawButton).click()
})

//Click withdraw icon in My Account --> Withdraw page
const accountPageWithdrawButton =
	'.account_topActionsContainer__qOQOS > .account_actions__y4FAy > [href="/account/withdraw"]'
Cypress.Commands.add('Navigation_AccountPage_To_Withdraw', () => {
	cy.get(accountPageWithdrawButton).click()
})

//Click withdraw tab on Side Menu --> Withdraw page
const sideMenuWithdrawButton =
	'.account-info_sideNavBar__Zeolo > :nth-child(4) > a'
Cypress.Commands.add('Navigation_SideMenu_To_Withdraw', () => {
	cy.get(sideMenuWithdrawButton).click()
})

//Click withdraw tab in profile dropdown --> Withdraw Page
const withdrawInDropdown = '[href="/account/withdraw"]'

Cypress.Commands.add('Click_Withdraw_Tab_In_Profile_Dropdown', () => {
	cy.get(withdrawInDropdown).click()
})

//Withdraw Page Label
const withdrawPageLabel = '.withdraw_bankSelector__lCczo > :nth-child(1)'
var withdrawPageLabelText = 'Transfer to:'
Cypress.Commands.add('Withdraw_Page_Label', () => {
	cy.get(withdrawPageLabel).should('have.text', withdrawPageLabelText)
})

//Click "Add new bank / manage your banks" button in withdraw page --> My bank Account page
const addNewBankLinkInWithdrawPage = '.withdraw_manage__CQGbD > a'
Cypress.Commands.add('Click_Add_New_banks_To_My_Bank_Account_Page', () => {
	cy.get(addNewBankLinkInWithdrawPage).click('center')
})

//Insert withdraw amount in withdraw page (Default = min amount)
const withdrawAmountContainer = '.amount-input_amount__MY83h > input'

Cypress.Commands.add('Insert_Withdraw_Amount', withdrawAmount => {
	cy.get(withdrawAmountContainer).click()
	cy.get(withdrawAmountContainer).clear()
	cy.get(withdrawAmountContainer).type(withdrawAmount)
})

//Checked bank in withdraw page
Cypress.Commands.add('Select_Bank_For_withdraw', checkboxBank => {
	cy.get(checkboxBank).check()
})

//Click Submit Withdraw button
const withdrawSubmitButton = '.withdraw_submit__Ga6iu > .TT__standard-button'
var withdrawSubmitButtonText = 'Submit'

Cypress.Commands.add('Click_Withdraw_Submit_Button', () => {
	cy.get(withdrawSubmitButton).should('have.text', withdrawSubmitButtonText)
	cy.get(withdrawSubmitButton).click()
})

//Button in Withdraw confimation
const cancelSubmitWithdraw = '.buttons_link__UIxx_'
const confirmSubmitWithdraw = '.react-confirm-alert-button__success'
var cancelSubmitWithdrawText = 'Cancel'
var confirmSubmitWithdrawText = 'Withdraw'
Cypress.Commands.add('Cancel_Submit_Withdraw', () => {
	cy.get(cancelSubmitWithdraw).should('have.text', cancelSubmitWithdrawText)
	cy.get(cancelSubmitWithdraw).click()
})

Cypress.Commands.add('Confirm_Submit_Withdraw', () => {
	cy.get(confirmSubmitWithdraw).should('have.text', confirmSubmitWithdrawText)
	cy.get(confirmSubmitWithdraw).click()
})

//Insert invalid min / max Withdraw amount error pop up
const invalidWithdrawAmountMessage = '.modal_message__hHpBD'
const closeInvalidWithdrawAmountMessage =
	'.modal_action__0o7AY > .TT__standard-button'
var invalidMinWithdrawAmountMessageText =
	'The amount must be in between of INR 10 and INR 1,000.'
var invalidMaxWithdrawAmountMessageText =
	'Sorry, you do not have sufficient fund for the withdraw.'
var closeInvalidWithdrawAmountMessageText = 'Okay'

Cypress.Commands.add('Invalid_Min_Amount_Message_Pop_Up', () => {
	cy.get(invalidWithdrawAmountMessage).should(
		'have.text',
		invalidMinWithdrawAmountMessageText
	)
})

Cypress.Commands.add('Invalid_Max_Amount_Message_Pop_Up', () => {
	cy.get(invalidWithdrawAmountMessage).should(
		'have.text',
		invalidMaxWithdrawAmountMessageText
	)
})

Cypress.Commands.add('Close_Invalid_Amount_Message_Within_Range_Pop_Up', () => {
	cy.get(closeInvalidWithdrawAmountMessage).should(
		'have.text',
		closeInvalidWithdrawAmountMessageText
	)
	cy.get(closeInvalidWithdrawAmountMessage).click()
})

//Uncheck withdraw bank error pop up
const uncheckWithdrawBankMessage = '.modal_message__hHpBD'
const closeuncheckWithdrawBankMessage =
	'.modal_action__0o7AY > .TT__standard-button'
var uncheckWithdrawBankMessageText = 'Please select a bank.'
var closeuncheckWithdrawBankMessageText = 'Okay'

Cypress.Commands.add('Uncheck_Withdraw_Bank_Message_Pop_Up', () => {
	cy.get(uncheckWithdrawBankMessage).should(
		'have.text',
		uncheckWithdrawBankMessageText
	)
})

Cypress.Commands.add('Close_Uncheck_Withdraw_Bank_Message_Pop_Up', () => {
	cy.get(closeuncheckWithdrawBankMessage).should(
		'have.text',
		closeuncheckWithdrawBankMessageText
	)
	cy.get(closeuncheckWithdrawBankMessage).click()
})

//Withdraw have pending / in progress withdraw
const pendingWithdrawMessage = '.withdraw_errorPanel__0ctUx'
var pendingWithdrawMessageText =
	'You have pending withdrawal requests yet to be approved.'

Cypress.Commands.add('Withdraw_Pending_Message', () => {
	cy.get(pendingWithdrawMessage).should('have.text', pendingWithdrawMessageText)
})

//Click Transfer icon in homepage --> Tranfer page
const homepageTransferButton =
	'.index_announcementActions__nhC_d > .user-quick-actions_shortcuts__RVJkw > :nth-child(2)'
Cypress.Commands.add('Navigation_Homepage_To_Transfer', () => {
	cy.get(homepageTransferButton).click()
})

//Click Transfer icon in My Account --> Transfer page
const accountPageTransferButton =
	'.account_topActionsContainer__qOQOS > .account_actions__y4FAy > [href="/account/transfer"]'
Cypress.Commands.add('Navigation_AccountPage_To_Transfer', () => {
	cy.get(accountPageTransferButton).click()
})

//Click Transfer tab on Side Menu --> Transfer page
const sideMenuTransferButton =
	'.account-info_sideNavBar__Zeolo > :nth-child(3) > a'
Cypress.Commands.add('Navigation_SideMenu_To_Transfer', () => {
	cy.get(sideMenuTransferButton).click()
})

//Click Transfer tab in profile dropdown --> Transfer Page
const transferInDropdown = '[href="/account/transfer"]'

Cypress.Commands.add('Click_Transfer_Tab_In_Profile_Dropdown', () => {
	cy.get(transferInDropdown).click()
})

//Click Transfer Now button in History Transfer tab --> Transfer Page
const transferNowButton = '.buttons_small___2MUu history_emptyCTA__1bMXW'
var transferNowButtonText = 'Transfer now'

Cypress.Commands.add(
	'Click_Transfer_Now_Button_In_History_Transfer_Tab',
	() => {
		cy.get(transferNowButton).should('have.text', depositNowButtonText)
		cy.get(transferNowButton).click()
	}
)

//Transfer Pop up Label & Close Transfer Pop Up
const openTransferPopUp = '.transfer-prompt_title__dXxW3'
const closeTransferPopUp = '.transfer-prompt_close__mHVSm'
var openTransferPopUpText = 'Transfer'

Cypress.Commands.add('Open_Transfer_Pop_Up', () => {
	cy.get(openTransferPopUp).should('have.text', openTransferPopUpText)
})

Cypress.Commands.add('Close_Transfer_Pop_Up', () => {
	cy.get(closeTransferPopUp).click()
})

//Transfer Page Label
const transferPageLabel = '.content_sectionTitle__9Umi5 > :nth-child(1)'
var transferPageLabelText = 'Wallet'
Cypress.Commands.add('Transfer_Page_Label', () => {
	cy.get(transferPageLabel).should('have.text', transferPageLabelText)
})

//Switch wallet between provider wallet and main wallet
const fromSelectOption =
	':nth-child(1) > .wallet-selection_walletSelector__qL7_c > select'
const toSelectOption =
	':nth-child(3) > .wallet-selection_walletSelector__qL7_c > select'

Cypress.Commands.add(
	'Switch_Wallet_Between_Provider_Wallet_And_Main_Wallet',
	(selectWallet1, selectWallet2) => {
		cy.get(fromSelectOption)
			.select(selectWallet1)
			.should('have.value', selectWallet1)
		cy.get(toSelectOption)
			.select(selectWallet2)
			.should('have.value', selectWallet2)
	}
)

//Insert transfer amount in in transfer Pop Up & page
const transferAmountLabel = '.amount-inputs_transferAmountLabel___tK6N'
const TransferAmountInPopUp = '.amount-input_amount__MY83h > input'
var transferAmountLabelText = 'Transfer amount'
Cypress.Commands.add('Insert_Transfer_Amount', transferAmount => {
	cy.get(transferAmountLabel).should('have.text', transferAmountLabelText)
	cy.get(TransferAmountInPopUp).click()
	cy.get(TransferAmountInPopUp).type(transferAmount)
})

//Transfer button able when (Main Wallet > amount < Provider Wallet) & disable when (Main Wallet < amount > Provider Wallet) in transfer Pop Up & page
const transferPageTransferButton =
	'.amount-inputs_actionSection__XeYV0 > .TT__standard-button'
var transferPageTransferButtonText = 'Transfer'

Cypress.Commands.add('Click_Transfer_Button', () => {
	// cy.wait(6000)
	cy.get(transferPageTransferButton).should(
		'have.text',
		transferPageTransferButtonText
	)
	cy.get(transferPageTransferButton).click()
})

Cypress.Commands.add('Transfer_Button_Disable', () => {
	cy.get(transferPageTransferButton).should('be.disabled')
})

//Transfer Error message when transfer below amount < 1
const transferBelowOneErrorMessage = '.modal_message__hHpBD'
const closetransferBelowOneErrorMessage =
	'.modal_action__0o7AY > .TT__standard-button'
var transferBelowOneErrorMessageText = 'Transfer amount must be more than 1.'
var closetransferBelowOneErrorMessageText = 'Okay'

Cypress.Commands.add('Transfer_Error_Message_Below_1', () => {
	cy.get(transferBelowOneErrorMessage).should(
		'have.text',
		transferBelowOneErrorMessageText
	)
})

Cypress.Commands.add('Close_Transfer_Error_Message_Below_1', () => {
	cy.get(closetransferBelowOneErrorMessage).should(
		'have.text',
		closetransferBelowOneErrorMessageText
	)
	cy.get(closetransferBelowOneErrorMessage).click()
})

//Apply promotion with promo code when transfer and Labels in Transfer Pop up & Page
const enterPromoCodeLabel = '.inputs_textContainer__ksnHm > label'
const insertPromotionCode = '.inputs_textContainer__ksnHm > input'
const usePromotionCodeButton =
	'.promotion-code-input_container___dckd > .TT__standard-button'
var enterPromoCodeLabelText = 'Enter promo code'
var usePromotionCodeButtonText = 'Use'

Cypress.Commands.add('Promo_Code_Label', () => {
	cy.get(enterPromoCodeLabel).should('have.text', enterPromoCodeLabelText)
})

Cypress.Commands.add('Insert_Promo_Code', insertPromoCode => {
	cy.get(insertPromotionCode).click()
	cy.get(insertPromotionCode).type(insertPromoCode)
	cy.get(usePromotionCodeButton).click()
})

//Select promotion in dropdown when transfer and Labels in Transfer Pop up & Page
const selectPromoCodeLabel = '.inputs_selectContainer__O9Ic_ > label'
const promotionSelectionDropdown = '.inputs_selectContainer__O9Ic_ > select'
var selectPromoCodeLabelText = 'Select promo'

Cypress.Commands.add('Dropdown_Promo_Label', () => {
	cy.get(selectPromoCodeLabel).should('have.text', selectPromoCodeLabelText)
})

Cypress.Commands.add('Select_Dropdown_Promotion', selectActivePromo => {
	cy.get(promotionSelectionDropdown).select(selectActivePromo)
})

//Remove promo code in Transfer page & Transfer Pop Up
const removePromotionButton =
	'.amount-inputs_selectedPromotionContainer__wjqQb > .TT__standard-button'
var removePromotionButtonText = 'Remove Promotion'

Cypress.Commands.add(
	'Click_Remove_Promo_After_insert_Promo_Code_Or_Select_Promotion_Dropdown',
	() => {
		cy.get(removePromotionButton).should('have.text', removePromotionButtonText)
		cy.get(removePromotionButton).click()
	}
)

//Apply promotion unsuccessful error message when provider wallet more than 1 in Transfer Pop up & Page
const errorMessageApplyPromoBelow1 = '.modal_message__hHpBD'
const closeErrorMessageApplyPromoBelow1 =
	'.modal_action__0o7AY > .TT__standard-button'
var errorMessageApplyPromoBelow1Text =
	'Cannot apply promotion when your provider wallet exceeds 1.'
var closeErrorMessageApplyPromoBelow1Text = 'Okay'

Cypress.Commands.add(
	'Apply_Promotion_Unsuccessful_Error_Message_When_Provider_Wallet_More_Than_1',
	() => {
		cy.get(errorMessageApplyPromoBelow1).should(
			'have.text',
			errorMessageApplyPromoBelow1Text
		)
	}
)

Cypress.Commands.add(
	'Close_Apply_Promotion_Unsuccessful_Error_Message_When_Provider_Wallet_More_Than_1',
	() => {
		cy.get(closeErrorMessageApplyPromoBelow1).should(
			'have.text',
			closeErrorMessageApplyPromoBelow1Text
		)
	}
)

//Apply promotion unsuccessful error message when promotion not reach min target in Transfer Pop up & Page
const errorMessageApplyPromoNotReachTarget = '.modal_message__hHpBD'
const closeerrorMessageApplyPromoNotReachTarget =
	'.modal_action__0o7AY > .TT__standard-button'
var errorMessageApplyPromoNotReachTargetText =
	'The minimum transfer amount to apply the promotion is not reached.'
var closeerrorMessageApplyPromoNotReachTargetText = 'Okay'

Cypress.Commands.add(
	'Apply_Promotion_Unsuccessful_Error_Message_When_Promotion_Not_Reach_Min_Target',
	() => {
		cy.get(errorMessageApplyPromoNotReachTarget).should(
			'have.text',
			errorMessageApplyPromoNotReachTargetText
		)
	}
)

Cypress.Commands.add(
	'Close_Apply_Promotion_Unsuccessful_Error_Message_When_Promotion_Not_Reach_Min_Target',
	() => {
		cy.get(closeerrorMessageApplyPromoNotReachTarget).should(
			'have.text',
			closeerrorMessageApplyPromoNotReachTargetText
		)
	}
)

//Launch Game failed when Providers / Technical team have issue
const maintenanceMessagePopUp = '.modal_message__hHpBD'
var maintenanceMessagePopUpText =
	'Something went wrong while launching the game, please try again or contact support for assistance.'

Cypress.Commands.add('Error_Message_When_Launch_Maintenance_Failed', () => {
	cy.get(maintenanceMessagePopUp).should(
		'have.text',
		maintenanceMessagePopUpText
	)
})

//Transfer page restore all button
const restoreAllButton = '.transfer_headerAction__BShW2 > .TT__standard-button'
var restoreAllButtonText = 'Restore All'

Cypress.Commands.add('Restore_All_Button_In_Transfer_Page', () => {
	cy.get(restoreAllButton).should('have.text', restoreAllButtonText)
	cy.get(restoreAllButton).click()
	cy.wait(6000)
})

//Point Live Casino & Sports 2nd provider in transfer page show restore button and All in button
const secondProviderInLiveCasino =
	'.transfer_providerCategory__Lf4rJ:nth-child(2) > .transfer_providers__gE9xN > .provider-wallet-view_container__s1tJX:nth-child(2)'
const secondProviderInSports =
	':nth-child(3) > .transfer_providers__gE9xN > :nth-child(2)'

Cypress.Commands.add('Point_Live_Casino_2nd_Provider', () => {
	cy.get(secondProviderInLiveCasino).trigger('mouseover')
})

Cypress.Commands.add('Point_Sports_2nd_Provider', () => {
	cy.get(secondProviderInSports).trigger('mouseover')
})

//Show and click Restore button in click Transfer page
const restoreButton =
	'.buttons_button__Pv4L3.buttons_outlined___Fzb2'

Cypress.Commands.add('Show_And_Click_Restore_Button', () => {
	cy.get(restoreButton).should('have.text', 'Restore').invoke('show')
	// cy.get(restoreButton).click()
})

//Show and click All in button in click Transfer page
const allInButton =
	'.provider-wallet-view_actions__m3NSW > .provider-wallet-view_action__M3Tch:nth-child(1)'

Cypress.Commands.add('Show_And_Click_All_In_Button', () => {
	cy.get(allInButton).invoke('show')
	cy.get(allInButton).click()
})

//Transfer page Auto Transfer button
const autoTransferSwitch = '.switch_switchLabel__GbE8U'

Cypress.Commands.add('Click_Auto_Transfer_Switch_Button', ()=>{
	cy.get(autoTransferSwitch).click()
})

//Scroll to Referral section in My account Page & Referral label
const referralSectionInMyAccountPage = '.referral-summary_container__fcgB_'
Cypress.Commands.add(
	'Scroll_Down_Your_Wallet_Section_In_My_Account_Page',
	() => {
		cy.get(referralSectionInMyAccountPage).scrollIntoView()
	}
)

//Referral label in My Account Page
const referralLabel = '.referral-summary_title__K7zrE'
var referralLabelText = 'Referral'

Cypress.Commands.add('Your_Wallets_Label_In_My_Account_Page', () => {
	cy.get(referralLabel).should('have.text', referralLabelText)
})

//Click referral code in My account page
const copyReferralcodeIcon = '.copy-text_copy__miSzx'

Cypress.Commands.add('Click_Referral_Code_Copy_Icon_In_My_Account_Page', () => {
	cy.get(copyReferralcodeIcon).click()
})

//Click Referral Sign Up copy link in My account page
const copyReferralSignUpLinkButton = '.referral-summary_linkButton__jhwUy'
var copyReferralSignUpLinkButtonText = 'Copy Link'

Cypress.Commands.add(
	'Click_Referral_Sign_Up_Copy_Button_In_My_Account_Page',
	() => {
		cy.get(copyReferralSignUpLinkButton).should(
			'have.text',
			copyReferralSignUpLinkButtonText
		)
		cy.get(copyReferralSignUpLinkButton).click()
	}
)

//Click Referral section View details in My account page --> Referral page
const referralViewDetail = '.referral-summary_viewDetails__X9VLQ'
var referralViewDetailText = 'View details →'

Cypress.Commands.add(
	'Click_Referral_Section_View_Details_In_My_Account',
	() => {
		cy.get(referralViewDetail).should('have.text', referralViewDetailText)
		cy.get(referralViewDetail).click()
	}
)

//Click Referral tab on Side Menu --> Referral page
const sideMenuReferralButton = '.account-info_sideNavBar__Zeolo > :nth-child(9)'
Cypress.Commands.add('Navigation_SideMenu_To_Referral', () => {
	cy.get(sideMenuReferralButton).click()
})

//Referral Page Label
const referralPageLabel = '.referral_sectionTitle__hPCjM'
var referralPageLabelText = 'Referral'
Cypress.Commands.add('Referral_Page_Label', () => {
	cy.get(referralPageLabel).should('have.text', referralPageLabelText)
})

//Click Message Icon on header
const messageIcon = '.messages-quick-view_button__Zz_37'

Cypress.Commands.add('Click_Message_Icon_On_Header', () => {
	cy.get(messageIcon).click()
})

//Message Pop up Label
const messagePopUpLabel =
	'.messages-quick-view_headerRow__GTk3P > .top-nav-bar_dropdownTitle__OtA5n'
var messagePopUpLabelText = 'Messages'

Cypress.Commands.add('Message_Pop_Up_Label', () => {
	cy.get(messagePopUpLabel).should('have.text', messagePopUpLabelText)
})

//See More button in Message Pop Up
const messageSeeMoreButton =
	'.messages-quick-view_seeMoreSection__1Ic7q > .TT__standard-button'

Cypress.Commands.add('Message_See_More_Button', () => {
	cy.get(messageSeeMoreButton).click()
})

//Click General & Promotion message without or with CTA (Learn more, Go to Promotion) Message Pop up
const firstmessageInMessagePopUp =
	'.message-list_container__9cx9C > :nth-child(1)'
const secondmessageInMessagePopUp =
	'.message-list_container__9cx9C > :nth-child(2)'
const thirdmessageInMessagePopUp =
	'.message-list_container__9cx9C > :nth-child(3)'
const messageURLButton = '.message-list_cta__mX_o9 > a > .TT__standard-button'

Cypress.Commands.add('Click_1st_Message_Without_CTA_In_Pop_Up', () => {
	cy.get(firstmessageInMessagePopUp).click()
})

Cypress.Commands.add('Click_2nd_Message_Without_CTA_In_Pop_Up', () => {
	cy.get(secondmessageInMessagePopUp).click()
})

Cypress.Commands.add('Click_3rd_Message_Without_CTA_In_Pop_Up', () => {
	cy.get(thirdmessageInMessagePopUp).click()
})

Cypress.Commands.add(
	'Click_1st_Message_With_CTA_Button_In_Message_Pop_Up',
	() => {
		cy.get(firstmessageInMessagePopUp)
		cy.get(messageURLButton).click()
	}
)

Cypress.Commands.add(
	'Click_2nd_Message_With_CTA_Button_In_Message_Pop_Up',
	() => {
		cy.get(secondmessageInMessagePopUp)
		cy.get(messageURLButton).click()
	}
)

Cypress.Commands.add(
	'Click_3rd_Message_With_CTA_Button_In_Message_Pop_Up',
	() => {
		cy.get(thirdmessageInMessagePopUp)
		cy.get(messageURLButton).click()
	}
)

//Message Page Label
const messagePageLabel = '.messages_title__WGWJV'
var messagePageLabelText = 'Messages'

Cypress.Commands.add('Message_Page_Label', () => {
	cy.get(messagePageLabel).should('have.text', messagePageLabelText)
})

//Click General & Promotion message with CTA (Learn more, Go to Promotion) Message Page
const messagePageFirstURLButton =
	':nth-child(1) > .message-list_contentContainer__JoxJr > .message-list_cta__mX_o9'
const messagePageSecondURLButton =
	':nth-child(2) > .message-list_contentContainer__JoxJr > .message-list_cta__mX_o9'
const messagePageThirdURLButton =
	':nth-child(3) > .message-list_contentContainer__JoxJr > .message-list_cta__mX_o9'

Cypress.Commands.add(
	'Click_1st_Message_With_CTA_Button_In_Message_Page',
	() => {
		cy.get(messagePageFirstURLButton).click()
	}
)

Cypress.Commands.add(
	'Click_2nd_Message_Page_URL_Button_In_Message_Page',
	() => {
		cy.get(messagePageSecondURLButton).click()
	}
)

Cypress.Commands.add(
	'Click_3rd_Message_Page_URL_Button_In_Message_Page',
	() => {
		cy.get(messagePageThirdURLButton).click()
	}
)

//Click message Pop Up & Page Unread button
const messageUnreadButton =
	'.messages_tabs__IGWFY > .buttons_link__UIxx_:nth-child(2)'
var messageUnreadButtonText = 'Unread'

Cypress.Commands.add('Click_Message_Unread_Button', () => {
	cy.get(messageUnreadButton).should('have.text', messageUnreadButtonText)
	cy.get(messageUnreadButton).click()
})

//Click message Pop Up & Page All button
const messageAllButton =
	'.messages_tabs__IGWFY > .buttons_link__UIxx_:nth-child(1)'
var messageAllButtonText = 'All'

Cypress.Commands.add('Click_Message_All_Button', () => {
	cy.get(messageAllButton).should('have.text', messageAllButtonText)
	cy.get(messageAllButton).click()
})

//Click Notification Icon on header
const notificationIcon = '.notifications-quick-view_button__7l_B0'

Cypress.Commands.add('Click_Notification_Icon_On_Header', () => {
	cy.get(notificationIcon).click()
})

//Notification Pop up Label
const notificationPopUpLabel =
	'.notifications-quick-view_headerRow__M_UK9 > .top-nav-bar_dropdownTitle__OtA5n'
var messagePopUpLabelText = 'Messages'
var notificationPopUpLabelText = 'Notifications'

Cypress.Commands.add('Notification_Pop_Up_Label', () => {
	cy.get(notificationPopUpLabel).should('have.text', notificationPopUpLabelText)
})

//See More button in Notification Pop Up
const notificationSeeMoreButton =
	'.notifications-quick-view_seeMoreSection__NjbwR > .TT__standard-button'

Cypress.Commands.add('Click_Notification_See_More_Button', () => {
	cy.get(notificationSeeMoreButton).click()
})

//Click notification in notification pop up
const firstNotificationInPopUp =
	'.notification-list_container__j0RFa > .notification-list_notificationItem__fYNTV:nth-child(1)'
const secondNotificationInPopUp =
	'.notification-list_container__j0RFa > .notification-list_notificationItem__fYNTV:nth-child(2)'
const thirdNotificationInPopUp =
	'.notification-list_container__j0RFa > .notification-list_notificationItem__fYNTV:nth-child(3)'

Cypress.Commands.add('Click_1st_Notification_In_Notification_Pop_up', () => {
	cy.get(firstNotificationInPopUp).click()
})

Cypress.Commands.add('Click_2nd_Notification_In_Notification_Pop_up', () => {
	cy.get(secondNotificationInPopUp).click()
})

Cypress.Commands.add('Click_3rd_Notification_In_Notification_Pop_up', () => {
	cy.get(thirdNotificationInPopUp).click()
})

//Notification Page Label
const notificationPageLabel = '.notifications_title__H8js2'
var notificationPageLabelText = 'Notifications'

Cypress.Commands.add('Notification_Page_Label', () => {
	cy.get(notificationPageLabel).should('have.text', notificationPageLabelText)
})

//Click notification in notification page
const firstNotificationInPage =
	'.notification-list_container__j0RFa > :nth-child(1)'
const secondNotificationInPage =
	'.notification-list_container__j0RFa > :nth-child(2)'
const thirdNotificationInPage =
	'.notification-list_container__j0RFa > :nth-child(3)'

Cypress.Commands.add('Click_1st_Notification_In_Notification_Page', () => {
	cy.get(firstNotificationInPage).click()
})

Cypress.Commands.add('Click_2nd_Notification_In_Notification_Page', () => {
	cy.get(secondNotificationInPage).click()
})

Cypress.Commands.add('Click_3rd_Notification_In_Notification_Page', () => {
	cy.get(thirdNotificationInPage).click()
})

//Click notification Pop Up & Page Unread button
const notificationUnreadButton =
	'.notifications_tabs__4U4zB > .buttons_button__Pv4L3:nth-child(2)'
var notificationUnreadButtonText = 'Unread'

Cypress.Commands.add('Click_Notification_Unread_Button', () => {
	cy.get(notificationUnreadButton).should(
		'have.text',
		notificationUnreadButtonText
	)
	cy.get(notificationUnreadButton).click()
})

//Click notification Pop Up & Page All button
const notificationAllButton =
	'.notifications_tabs__4U4zB > .buttons_button__Pv4L3:nth-child(1)'
var notificationAllButtonText = 'All'

Cypress.Commands.add('Click_Notification_All_Button', () => {
	cy.get(notificationAllButton).should('have.text', notificationAllButtonText)
	cy.get(notificationAllButton).click()
})

//Message & Notification page Navigation arrow & number page
const messagePageNumberOne = ':nth-child(2) > .paginate_pageLink__jvDYt'
const messagePageNumberTwo = ':nth-child(3) > .paginate_pageLink__jvDYt'
const messagePagePreviousArrow = ':nth-child(1) > .paginate_pageLink__jvDYt'
const messagePageNextArrow = ':nth-child(4) > .paginate_pageLink__jvDYt'
const messagePageActiveNumber =
	'.paginate_pageItem__9hQMN.paginate_active__iN9Xg > .paginate_pageLink__jvDYt'
const messagePageDisableArrow =
	'.paginate_pageItem__9hQMN.paginate_disabled__Rv1pD > .paginate_pageLink__jvDYt'

Cypress.Commands.add('Click_Message_Page_One', () => {
	cy.get(messagePageNumberOne).click()
})

Cypress.Commands.add('Click_Message_Page_Two', () => {
	cy.get(messagePageNumberTwo).click()
})

Cypress.Commands.add('Click_Message_Page_Active_Number', () => {
	cy.get(messagePageActiveNumber).click()
})

Cypress.Commands.add('Click_Message_Page_Previous_Arrow', () => {
	cy.get(messagePagePreviousArrow).click()
})

Cypress.Commands.add('Click_Message_Page_Next_Arrow', () => {
	cy.get(messagePageNextArrow).click()
})

Cypress.Commands.add('Click_Message_Page_Disable_Arrow', () => {
	cy.get(messagePageDisableArrow).should('be.disable')
})

//Scroll down to homepage promotion section
const homepagePromotionSection = '.index_promotions__YGYtx'
const homepagePromoSectionLabel = '.promotions-preview_header__RvKLD > h4'
var homepagePromoSectionLabelText = 'Exclusive Promotions'

Cypress.Commands.add('Scroll_Down_To_Homepage_Promotion', () => {
	cy.get(homepagePromotionSection).scrollIntoView()
})

Cypress.Commands.add('Homepage_Promotion_Label', () => {
	cy.get(homepagePromoSectionLabel).should(
		'have.text',
		homepagePromoSectionLabelText
	)
})

//Click "View all promotions" button in Homepage --> Promotion page
const viewAllPromotionButton =
	'.promotions-preview_footer__RnoK0 > a > .TT__standard-button'
var viewAllPromotionButtonText = 'View all promotions'

Cypress.Commands.add('Click_View_All_Promotion_Button', () => {
	cy.get(viewAllPromotionButton).should('have.text', viewAllPromotionButtonText)
	cy.get(viewAllPromotionButton).click()
})

//Promotion Page Label
const promotionPageLabel = '.promotions_pageTitle__xhfxB > h2'
var promotionPageLabelText = 'All Promotions'

Cypress.Commands.add('Promotion_Page_Label', () => {
	cy.get(promotionPageLabel).should('have.text', promotionPageLabelText)
})

//Click 1st promotion in homepage --> specific promotion page
const firstPromotionInHomepage =
	'.promotions-preview_mainPromotionContent__8ftve'

Cypress.Commands.add('Click_1st_Promotion_On_Homepage', () => {
	cy.get(firstPromotionInHomepage).click()
})

//Click 2nd promotion in homepage --> specific promotion page
const secondPromotionInHomepage =
	'.promotions-preview_subPromotion__x1RMG:nth-child(1) > .promotions-preview_subPromotionCTA__7KRMv'

Cypress.Commands.add('Click_2nd_Promotion_On_Homepage', () => {
	cy.get(secondPromotionInHomepage).click()
})

//Click 1st promotion in All promotion page --> specific promotion page
const firstPromotionInPromotionPage =
	'.promotions_promotions__FobUK > .promotion-item_promotionLink__TIxVb:nth-child(1)'

Cypress.Commands.add('Click_1st_Promotion_On_Promotion_Page', () => {
	cy.get(firstPromotionInPromotionPage).click()
})

Cypress.Commands.add('Click_2nd_Promotion_On_Promotion_Page', () => {
	cy.get(secondPromotionInPromotionPage).click()
})

//Click 2nd promotion in All promotion page --> specific promotion page
const secondPromotionInPromotionPage =
	'.promotions_promotions__FobUK > .promotion-item_promotionLink__TIxVb:nth-child(2)'

Cypress.Commands.add('Click_2nd_Promotion_On_Promotion_Page', () => {
	cy.get(secondPromotionInPromotionPage).click()
})

//Scroll down to specific promotion page bottom
const morePromotionsForYou = '.promotion_moreTitle__bxf5v'
var morePromotionsForYouText = 'More promotions for you'

Cypress.Commands.add('Scroll_Down_To_Below_Specific_Promotion_Page', () => {
	cy.get(morePromotionsForYou).scrollIntoView()
	cy.get(morePromotionsForYou).should('have.text', morePromotionsForYouText)
})

//Click 1st promotion below specific promotion page --> other specific promotion page
const firstMorePromotions = '.promotion-item_promotionLink__TIxVb:nth-child(1)'

Cypress.Commands.add('Click_1st_Promotion_On_More_Promotion_section', () => {
	cy.get(firstMorePromotions).click()
})

//Click 2nd promotion below specific promotion page --> other specific promotion page
const secondMorePromotions = '.promotion-item_promotionLink__TIxVb:nth-child(2)'

Cypress.Commands.add('Click_2nd_Promotion_On_More_Promotion_section', () => {
	cy.get(secondMorePromotions).click()
})

//Promotion content page banner
const promotionPageBanner = '.promotion_imageContainer__whkFN > img'

Cypress.Commands.add('Promotion_Content_Page_Banner', () => {
	cy.get(promotionPageBanner).should('be.visible')
})

//Click Sign Up to play button
const signUpButton =
	':nth-child(1) > .user-quick-view_container__pFlJe > .user-quick-view_guestActions__La_tU > .user-quick-view_signUpLink__0WzNM'
var signUpButtonText = 'Sign Up to Play'

Cypress.Commands.add('Click_Sign_In_To_Play_Button', () => {
	cy.get(signUpButton).should('have.text', signUpButtonText)
	cy.get(signUpButton).click()
})

//Sign Up Page 1 Label
const signUpPage1Label = '.auth_title__3fico'
var signUpPage1LabelText = 'Register a new account'

Cypress.Commands.add('Sign_Up_Page_1_Label', () => {
	cy.get(signUpPage1Label).should('have.text', signUpPage1LabelText)
})

//Sign Up Page 2 Label
const signUpPage2Label = '.auth_title__3fico'
var signUpPage2LabelText = 'Create account'

Cypress.Commands.add('Sign_Up_Page_2_Label', () => {
	cy.get(signUpPage2Label).should('have.text', signUpPage2LabelText)
})

//Click Sign In link in Sign Up page
const signInButtonInSignUpPage = '.auth_contentFooter__hxvPY > a'
var signInButtonInSignUpPageText = 'Sign In'

//Select country and insert Phone Number
const registerCountryList = '.selected-flag'
const registerPhoneNumberContainer = ''
