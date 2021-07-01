import HomePage from "../support/pageObjects/HomePage"
import LoginPage from "../support/pageObjects/LoginPage"
import EventsPage from "../support/pageObjects/EventsPage"
import SettingsPage from "../support/pageObjects/SettingsPage"
import LoginDetailsPage from "../support/pageObjects/LoginDetailsPage"

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
        homePage.loginButton().click()
        cy.url().should('include', '/login')
    })
    it('Populate login fields', function() {
        loginPage.emailField().type(this.data.loginEmail)
        loginPage.passwordField().type(this.data.loginPassword)
        loginPage.loginButton().click()
        cy.url().should('include', '/events')
    })
    it('Open user settings', ()=>{
        eventsPage.avatar().click()
        cy.url().should('include', '/settings')
    })
    it('Open login details', ()=>{
        settingsPage.loginDetails().click()
    })
    it('Change password and save changes', function() {
        loginDetailsPage.currentPasswordField().type(this.data.loginPassword)
        loginDetailsPage.newPasswordField().type(this.data.newPassword)
        loginDetailsPage.confirmPasswordField().type(this.data.newPassword)
        loginDetailsPage.changePasswordButton().click()
        loginDetailsPage.changePasswordBanner().should('be.visible')
        loginDetailsPage.changePasswordBannerText().should('have.text', 'Password changed successfully.'),
        loginDetailsPage.closeBanner().click()
    })
    it('Logout', ()=>{
        eventsPage.avatar().click()
        cy.url().should('include', '/settings')
        settingsPage.logoutButton().click()
        cy.url().should('include','/login')
    })
})