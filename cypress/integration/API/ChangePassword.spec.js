describe('Change password', function(){

    beforeEach(()=>{
        cy.fixture('users').then(function(data) {
            this.data = data;
        })
    })
    let token;
    it('User login on /account/login Bearer token generation', function(){
        cy.request({
            method:'POST',
            url:Cypress.env('urlAPI')+'/account/login',
            body:{
                "email": this.data.loginEmail,
                "password":this.data.loginPassword
            },
            headers:{
                'content-type': 'application/json; charset=utf-8',      
            }
        }).then(function(response){
            expect(response.status).to.eq(200)
            expect(response.body.success).to.eq(true)
            expect(response.body).to.have.property('data')
            expect(response.body).to.have.property("error")
            expect(response.body.error).to.eq(null)
            token = response.body.data.accessToken;
        })
    })
    it('Change password on /account/change-password ', function(){
        cy.request({
            method:'POST',
            url:Cypress.env('urlAPI')+'/account/change-password',
            body:{
                "newPassword": this.data.newPassword,
                "password":this.data.loginPassword
            },
            headers:{
                'Authorization': 'Bearer ' + token,    
            }
        }).then(function(response){
            expect(response.status).to.eq(202)
            expect(response.body.success).to.eq(true)
            expect(response.body.data).to.eq(null)
            expect(response.body.error).to.eq(null)
        })
    })
})