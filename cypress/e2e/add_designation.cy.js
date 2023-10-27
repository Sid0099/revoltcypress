describe('Login page test cases',()=>{
    beforeEach('Open web page',()=>{
        cy.visit('http://revolt.accucia.com/signin');
    })
    const mobilenumber='8484003711'
    const password='11223344'
    it('Login with valid user Id and password',()=>{
        //cy.visit('http://revolt.accucia.com/signin');
        cy.get('input[name=mobile_number]').type(mobilenumber);
        cy.contains('Sign In').click();
        cy.get('input[name=password]').type(password);
        cy.contains('Sign In').click();
       
        cy.viewport(1600, 900)
        cy.wait(2000)
        cy.visit('http://revolt.accucia.com/app/master/designation')
        cy.get('.MuiBox-root > .MuiButtonBase-root > .MuiButton-label').click()
        
        cy.contains('Designation Name is required.').should('be.visible')
        cy.get('#designation_name').type('President {enter}')
        cy.contains('Status').click()
        cy.contains('Inactive').click()
        cy.contains('Submit').click()
        




})
    })