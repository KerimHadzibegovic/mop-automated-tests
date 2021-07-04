class SettingsPage {
    
    clickLogoutButton(){
        cy.contains('Log me out').click()
    }
    clickAccountInformation(){
        cy.contains('Account information').click()
    }
    clickLoginDetails(){
        cy.contains('Login details').click()
    }
}
export default SettingsPage;