class LoginPage {

    loginWithCredentials(email, password){
        cy.get("[data-testid=email-login]").type(email)
        cy.get("[data-testid=password-login]").type(password)
        cy.get("[data-testid=login-button]").click()
    }
}

export default LoginPage;