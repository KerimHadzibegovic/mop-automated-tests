class AccountInformationPage{
    updateAccountInformation(){
        cy.get('input[id=name]').type("Update")
        cy.get('input[id=address]').type("Update")
        cy.contains('Update Settings').click()
    }
    cancelButton(){
        cy.contains('Cancel').click()
    }
    notificationBanner(){
        return cy.get('.css-5ipae5 > .toastify-container')
    }
    closeNotificationBanner(){
        cy.get('[viewBox="0 0 352 512"]').click()
    }
}
export default AccountInformationPage;