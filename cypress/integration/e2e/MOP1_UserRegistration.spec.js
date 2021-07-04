import HomePage from "../../support/pageObjects/HomePage"
import SignupPage from "../../support/pageObjects/SignupPage"
import PbaPage from "../../support/pageObjects/PbaPage"
import EventsPage from "../../support/pageObjects/EventsPage"
import SettingsPage from "../../support/pageObjects/SettingsPage"

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
        homePage.signUpButtonClick()
        cy.url().should('include', '/signup')
    })
    it('Enter signup data', function() {
        signupPage.populateSignupForm(this.data.email, this.data.emailDomain, this.data.name, this.data.password, this.data.phone,randomNumber)
        signupPage.markTermsCheckbox()
        signupPage.clickSignupButton()
        cy.wait(4000)
    })
    it('Confirm phone number', function() {
        cy.url().should('include', '/pba')
        pbaPage.enterRegistrationCode(this.data.pba)
        pbaPage.clickVerifyButton()
        pbaPage.clickSubmitModalButton()
        cy.url().should('include', '/events')
    })
    it('Logout', ()=>{
        eventsPage.clickAvatarIcon()
        cy.url().should('include', '/settings')
        settingsPage.clickLogoutButton()
        cy.url().should('include','/login')
    })
})