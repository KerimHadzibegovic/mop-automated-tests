class LoginPage {
    emailField(){
        return cy.get("[data-testid=email-login]")
    }
    passwordField(){
        return cy.get("[data-testid=password-login]")
    }
    loginButton(){
        return cy.get("[data-testid=login-button]")
    }
}

export default LoginPage;