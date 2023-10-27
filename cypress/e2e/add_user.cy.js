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
        cy.viewport(1600, 900)
        // nav-item menu-item-has-child
      //  cy.get('.nav-item .menu-item-has-child').trigger('mousehover').click()
      // 
      //cy.get('.nav-item .menu-item-has-child').eq(0)
      cy.visit('http://revolt.accucia.com/app/master/user')
      cy.get('.MuiIconButton-label > .MuiButtonBase-root > .MuiButton-label').click()
      cy.get('.contact-grid-content > .MuiBox-root > .MuiButtonBase-root').click()
      cy.contains('Name is required').should('be.visible')
      cy.contains('Employee code is required.')
      cy.contains('City Name is required').should('be.visible')
      cy.contains('Date of joining is required.').should('be.visible')
      cy.contains('Mobile number is required').should('be.visible')
      cy.contains('Designation Name is required').should('be.visible')
      cy.contains('Branch Name is required').should('be.visible')
      cy.contains('Current address is required.').should('be.visible')
      cy.contains('Department Name is required').should('be.visible')
      cy.contains('Permanent address is required').should('be.visible')
      //cy.contains('State is required.').should('be.visible')
      cy.contains('Email is required.').should('be.visible')

    
        cy.scrollTo('top', { duration: 0 });
      cy.get('#name').type('Siddhesh')
      cy.get('#mobile_number').type('9960736369')
      cy.get('#password').type('11223344')
      cy.get('#personal_number').type('9960736369')
      cy.get('#employee_code').type('ASPL0012')

      cy.contains('Designation Name*').parent().find('input[type="text"]').click()
      cy.contains('Staff').click()

      cy.contains('Department Name*').parent().find('input[type="text"]').click()
      cy.contains('Accounts Department').click()

      cy.contains('State*').parent().find('input[type="text"]').click()
      cy.contains('Maharashtra').click()

      cy.contains('City Name*').parent().find('input[type="text"]').click()
      cy.contains('Mumbai').click()


     // cy.contains('Branch Name*').parent().find('input[type="text"]').click()
      //cy.contains('Ahmednagar Branch').click()
      //cy.contains('Pune branch').click()
    
    
      cy.contains('Email*').parent().find('input[type="text"]').type('siddheshkasar@accucia.com{Enter}')

       cy.contains('Current address*').parent().find('input[type="text"]').type(' Plot no 1, Ring Road A.Nagar {Enter}')
       cy.contains('Permanent address*').parent().find('input[type="text"]').type(' Plot no 1, Ring Road A.Nagar {Enter}')
      // cy.contains('Date of joining*').parent().find('input[type="text"]').click()
      // cy.get('value="DD/MM/YYYY"')
      cy.contains('Date of joining*')  // Find the label element containing "Date of joining*"
      .next()                      // Move to the next sibling, which is the input field
      .click()                     // Click the input field to focus it
      .clear()                     // Clear the existing input value
      .type('26-Oct-23')           // Type the new date value
      .type('{enter}');



    //   cy.contains('Reporting Manager*').parent().find('input[type="text"]').click()
    //   cy.contains('Accucia User (manager)').click()

    //   cy.contains('Status*').parent().find('input[type="text"]').click()
    //   cy.contains('Active').click()

     
      //cy.get('.MuiAutocomplete-popupIndicator').eq(0).click();
;

     // cy.get('input[ id="lead-source-autocomplete"]').click().contains('MIDC Jalgaon') 

      

    
    })

})