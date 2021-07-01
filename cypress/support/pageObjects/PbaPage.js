class PbaPage{
    registrationCodeField(){
        return cy.get('input[id="registration_code"]')
    }
    verifyButton(){
        return cy.get('[data-testid=pba-signup-button]')
    }
    submitModalButton(){
        return cy.get('.css-1czsflu')
    }
}

export default PbaPage;