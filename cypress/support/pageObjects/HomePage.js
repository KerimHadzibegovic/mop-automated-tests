class HomePage {

    signUpButtonClick(){
        cy.get('.css-o6pyxp').click()
    }
    loginButtonClick(){
        cy.get('.css-66x756').click()
    }
}

export default HomePage;