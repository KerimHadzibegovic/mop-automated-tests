class AccountInformationPage{
    fullNameField(){
        return cy.get('input[id=name]')
    }
    addressField(){
        return cy.get('input[id=address]')
    }
    updateSettingsButton(){
        return cy.contains('Update Settings')
    }
    cancelButton(){
        return cy.contains('Cancel')
    }
    notificationBanner(){
        return cy.get('.css-5ipae5 > .toastify-container')
    }
    closeNotificationBanner(){
        return cy.get('[viewBox="0 0 352 512"]')
    }
}
export default AccountInformationPage;