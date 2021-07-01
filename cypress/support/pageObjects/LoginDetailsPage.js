class LoginDetailsPage{
    currentPasswordField(){
        return cy.get('[data-testid=password-change]')
    }
    newPasswordField(){
        return cy.get('[data-testid=new-password-change]')
    }
    confirmPasswordField(){
        return cy.get('[data-testid=confirm-password-change]')
    }
    changePasswordButton(){
        return cy.get('[data-testid=change-password-button]')
    }
    changePasswordBanner(){
        return cy.get('.Toastify__toast-body')
    }
    changePasswordBannerText(){
        return cy.get('.css-5ipae5 > .toastify-container')
    }
    closeBanner(){
        return cy.get('[viewBox="0 0 352 512"]')
    }
}

export default LoginDetailsPage;