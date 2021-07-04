import HomePage from "../../support/pageObjects/HomePage"
import LoginPage from "../../support/pageObjects/LoginPage"
import EventsPage from "../../support/pageObjects/EventsPage"
import SettingsPage from "../../support/pageObjects/SettingsPage"
import AccountInformationPage from "../../support/pageObjects/AccountInformationPage"

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
        homePage.loginButtonClick()
        cy.url().should('include', '/login')
    })
    it('Submit login', function() {   
        loginPage.loginWithCredentials(this.data.loginEmail, this.data.loginPassword)
        cy.url().should('include', '/events')
    })
    it('Open settings and edit information', ()=>{  
        eventsPage.clickAvatarIcon()
        cy.url().should('include', '/settings')
        settingsPage.clickAccountInformation()
        accountInformation.updateAccountInformation()
        accountInformation.notificationBanner().should('have.text', 'Account information saved successfully.')
        accountInformation.closeNotificationBanner()
    })
    it('Logout', ()=>{
        eventsPage.clickAvatarIcon()
        cy.url().should('include', '/settings')
        settingsPage.clickLogoutButton()
        cy.url().should('include','/login')
    })
})