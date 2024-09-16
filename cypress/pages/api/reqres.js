const url = 'https://reqres.in/api'
var resp
class reqres {
    ExecutaEndPointPostCreate(){
        cy.request({
            method: 'POST',
            url: url+"/users",
            body:{
                name: "Thiago",
                job: "Analista QA"
            }
        }).then((response) =>{
                expect(response.status).to.eq(201)
                cy.log(JSON.stringify(response.body))
                const id = response.body.id
                cy.log(id)
            })
    }
}

export default new reqres()