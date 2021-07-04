import HomePage from "../../support/pageObjects/HomePage"
import LoginPage from "../../support/pageObjects/LoginPage"
import EventsPage from "../../support/pageObjects/EventsPage"
import SettingsPage from "../../support/pageObjects/SettingsPage"

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
        homePage.loginButtonClick()
        cy.url().should('include', '/login')
    })
    it('Submit login', function() {
        loginPage.loginWithCredentials(this.data.loginEmail, this.data.loginPassword)
        cy.wait(4000)
        cy.url().should('include', '/events')
    })
    it('Open settings and logout', ()=>{
        eventsPage.clickAvatarIcon()
        cy.url().should('include', '/settings')
        settingsPage.clickLogoutButton()
        cy.url().should('include','/login')
    })

})