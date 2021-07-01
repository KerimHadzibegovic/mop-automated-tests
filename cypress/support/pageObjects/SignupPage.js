class SignupPage{
    signupEmailField(){
        return cy.get('input[id="email"]')
    }
    signupNameField(){
        return cy.get('input[id="name"]')
    }
    signupPasswordField(){
        return cy.get('input[id="password"]')
    }
    confirmSignupPassword(){
        return cy.get('input[id="confirm_password"]')
    }
    signupPhoneNumber(){
        return cy.get('input[id="phone_number"]')
    }
    termsCheckbox(){
        return cy.get('[type="checkbox"]')
    }
    signupButton(){
        return cy.get('button[type="submit"]')
    }
}

export default SignupPage;