class PbaPage{
    enterRegistrationCode(code){
        cy.get('input[id="registration_code"]').type(code)
    }
    clickVerifyButton(){
        cy.get('[data-testid=pba-signup-button]').click()
    }
    clickSubmitModalButton(){
        cy.get('.css-1czsflu').click()
    }
}

export default PbaPage;