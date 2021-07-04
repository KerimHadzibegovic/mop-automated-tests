class LoginDetailsPage{

    populatePasswordFields(password,newPassword){
        cy.get('[data-testid=password-change]').type(password)
        cy.get('[data-testid=new-password-change]').type(newPassword)
        cy.get('[data-testid=confirm-password-change]').type(newPassword)
    }
    changePasswordButton(){
        cy.get('[data-testid=change-password-button]').click()
    }
    changePasswordBanner(){
        return cy.get('.Toastify__toast-body')
    }
    changePasswordBannerText(){
        return cy.get('.css-5ipae5 > .toastify-container')
    }
    closeBanner(){
        cy.get('[viewBox="0 0 352 512"]').click()
    }
}

export default LoginDetailsPage;