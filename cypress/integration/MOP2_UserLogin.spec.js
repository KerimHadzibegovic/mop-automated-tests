import HomePage from "../support/pageObjects/HomePage"
import LoginPage from "../support/pageObjects/LoginPage"
import EventsPage from "../support/pageObjects/EventsPage"
import SettingsPage from "../support/pageObjects/SettingsPage"

describe('User login', ()=>{

    beforeEach(()=>{
        cy.fixture('users').then(function(data) {
            this.data = data;
        })
    })

    const homePage = new HomePage();
    const loginPage = new LoginPage();
    const eventsPage = new EventsPage();
    const settingsPage = new SettingsPage();

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
        cy.wait(4000)
        cy.url().should('include', '/events')
    })
    it('Open settings and logout', ()=>{
        eventsPage.avatar().click()
        cy.url().should('include', '/settings')
        settingsPage.logoutButton().click()
        cy.url().should('include','/login')
    })

})