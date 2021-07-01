import HomePage from "../support/pageObjects/HomePage"
import LoginPage from "../support/pageObjects/LoginPage"
import EventsPage from "../support/pageObjects/EventsPage"
import SettingsPage from "../support/pageObjects/SettingsPage"
import AccountInformationPage from "../support/pageObjects/AccountInformationPage"

describe('Login and edit account information', ()=>{

    beforeEach(()=>{
        cy.fixture('users').then(function(data) {
            this.data = data;
        })
    })
    
    const homePage = new HomePage()
    const loginPage = new LoginPage()
    const settingsPage = new SettingsPage()
    const eventsPage = new EventsPage()
    const accountInformation = new AccountInformationPage()

    it('Navigate to homepage', ()=>{
        cy.visit(Cypress.env('url'))
    })
    it('Click on Log In button', ()=>{    
        homePage.loginButton().click()
        cy.url().should('include', '/login')
    })
    it('Submit login', function() {   
        loginPage.emailField().type(this.data.loginEmail)
        loginPage.passwordField().type(this.data.loginPassword)
        loginPage.loginButton().click()
        cy.url().should('include', '/events')
    })
    it('Open settings and edit information', ()=>{  
        eventsPage.avatar().click()
        cy.url().should('include', '/settings')
        settingsPage.accountInformation().click()
        accountInformation.fullNameField().type('Update')
        accountInformation.addressField().type('Update')
        accountInformation.updateSettingsButton().click()
        accountInformation.notificationBanner().should('have.text', 'Account information saved successfully.')
        accountInformation.closeNotificationBanner().click()
    })
    it('Logout', ()=>{
        eventsPage.avatar().click()
        cy.url().should('include', '/settings')
        settingsPage.logoutButton().click()
        cy.url().should('include','/login')
    })
})