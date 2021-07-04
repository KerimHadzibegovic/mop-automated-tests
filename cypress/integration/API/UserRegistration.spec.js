describe('User registration', function(){

    beforeEach(()=>{
        cy.fixture('users').then(function(data) {
            this.data = data;
        })
    })

    const randomNumber = Math.floor(Math.random() * 5000);

    it('User registration on /account/register ', function(){
        cy.request({
            method:'POST',
            url:Cypress.env('urlAPI') + '/account/register',
            body:{
                "email": this.data.email + randomNumber + this.data.emailDomain,
                "name": this.data.name,
                "password": this.data.password,
                "phoneNumber": this.data.phone
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
        })
    })
})