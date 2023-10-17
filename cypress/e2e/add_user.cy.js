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
        cy.wait(4000);

       cy.get

    
    })

})