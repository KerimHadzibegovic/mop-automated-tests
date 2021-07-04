import HomePage from "../../support/pageObjects/HomePage"
import LoginPage from "../../support/pageObjects/LoginPage"
import EventsPage from "../../support/pageObjects/EventsPage"
import SettingsPage from "../../support/pageObjects/SettingsPage"
import LoginDetailsPage from "../../support/pageObjects/LoginDetailsPage"

describe('Login and change account password', () =>{

    beforeEach(()=>{
        cy.fixture('users').then(function(data) {
            this.data = data;
        })
    })

    const homePage = new HomePage();
    const loginPage = new LoginPage();
    const eventsPage = new EventsPage();
    const settingsPage = new SettingsPage();
    const loginDetailsPage = new LoginDetailsPage();

    it('Navigate to homepage', ()=>{
        cy.visit(Cypress.env('url'))
    })
    it('Click on login button', ()=>{
        homePage.loginButtonClick()
        cy.url().should('include', '/login')
    })
    it('Populate login fields', function() {
        loginPage.loginWithCredentials(this.data.loginEmail, this.data.loginPassword)
        cy.url().should('include', '/events')
    })
    it('Open user settings', ()=>{
        eventsPage.clickAvatarIcon()
        cy.url().should('include', '/settings')
    })
    it('Open login details', ()=>{
        settingsPage.clickLoginDetails()
    })
    it('Change password and save changes', function() {
        loginDetailsPage.populatePasswordFields(this.data.loginPassword,this.data.newPassword)
        loginDetailsPage.changePasswordButton()
        loginDetailsPage.changePasswordBanner().should('be.visible')
        loginDetailsPage.changePasswordBannerText().should('have.text', 'Password changed successfully.'),
        loginDetailsPage.closeBanner()
    })
    it('Logout', ()=>{
        eventsPage.clickAvatarIcon
        cy.url().should('include', '/settings')
        settingsPage.clickLogoutButton
        cy.url().should('include','/login')
    })
})