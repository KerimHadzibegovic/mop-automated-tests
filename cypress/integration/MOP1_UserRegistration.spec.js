import HomePage from "../support/pageObjects/HomePage"
import SignupPage from "../support/pageObjects/SignupPage"
import PbaPage from "../support/pageObjects/PbaPage"
import EventsPage from "../support/pageObjects/EventsPage"
import SettingsPage from "../support/pageObjects/SettingsPage"

describe('User registration', ()=> {

    beforeEach(()=>{
        cy.fixture('users').then(function(data) {
            this.data = data;
        })
    })

    const homePage = new HomePage();
    const signupPage = new SignupPage();
    const pbaPage = new PbaPage();
    const eventsPage = new EventsPage();
    const settingsPage = new SettingsPage()
    const randomNumber = Math.floor(Math.random() * 5000);

    it('Navigate to homepage', function () {
        cy.visit(Cypress.env('url'))
    })
    it('Open signup page', () => {
        homePage.signUpButton().click()
        cy.url().should('include', '/signup')
    })
    it('Enter signup data', function() {
        signupPage.signupEmailField().type(this.data.email + randomNumber + this.data.emailDomain)
        signupPage.signupNameField().type(this.data.name)
        signupPage.signupPasswordField().type(this.data.password)
        signupPage.confirmSignupPassword().type(this.data.password)
        signupPage.signupPhoneNumber().type(this.data.phone)
        signupPage.termsCheckbox().check({ force: true })
        signupPage.signupButton().click()
        cy.wait(4000)
    })
    it('Confirm phone number', function() {
        cy.url().should('include', '/pba')
        pbaPage.registrationCodeField().type(this.data.pba)
        pbaPage.verifyButton().click()
        pbaPage.submitModalButton().click()
        cy.url().should('include', '/events')
    })
    it('Logout', ()=>{
        eventsPage.avatar().click()
        cy.url().should('include', '/settings')
        settingsPage.logoutButton().click()
        cy.url().should('include','/login')
    })
})