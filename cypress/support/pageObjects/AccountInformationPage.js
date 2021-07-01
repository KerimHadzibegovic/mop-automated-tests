class AccountInformationPage{
    fullNameField(){
        return cy.get('[data-testid=name-account-information]')
    }
    addressField(){
        return cy.get(':nth-child(4) > .css-uevokd > .css-12acnxq > [data-testid=phone-number-account-information]')
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