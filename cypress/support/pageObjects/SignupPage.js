class SignupPage{

    populateSignupForm(email, domain, name, password, phone, generatedNumber){
        cy.get('input[id="email"]').type(email+generatedNumber+domain)
        cy.get('input[id="name"]').type(name)
        cy.get('input[id="password"]').type(password)
        cy.get('input[id="confirm_password"]').type(password)
        cy.get('input[id="phone_number"]').type(phone)
    }
    markTermsCheckbox(){
        cy.get('[type="checkbox"]').check({ force: true }) 
    }
    clickSignupButton(){
        cy.get('button[type="submit"]').click()
    }
}

export default SignupPage;