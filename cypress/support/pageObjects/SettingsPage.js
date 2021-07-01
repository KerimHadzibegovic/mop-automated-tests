class SettingsPage {
    accountInformation(){
        return cy.contains('Account information')
    }
    loginDetails(){
        return cy.contains('Login details')
    }
    logoutButton(){
        return cy.contains('Log me out')
    }
}
export default SettingsPage;