/// <reference types = "cypress"/>

describe('Login page test cases',()=>{
  beforeEach('Open web page',()=>{
      cy.visit('http://revolt.accucia.com/signin');
  })
  const mobilenumber='8888888888'
  const password='123123'
  it('Login with valid user Id and password',()=>{
      //cy.visit('http://revolt.accucia.com/signin');
      cy.get('input[name=mobile_number]').type(mobilenumber);
      cy.contains('Sign In').click();
      cy.get('input[name=password]').type(password);
      cy.contains('Sign In').click();
      cy.wait(4000);
  })
  it('Login with empty mobile number',()=>{
      cy.contains('Sign In').click();
      cy.contains('Mobile number is required.');
      cy.wait(4000);
  })

  it('Login with Invalid valid mobile number',()=>{
     cy.get('input[name=mobile_number]').type('92322804322');
     cy.contains('Sign In').click();
     cy.contains('User does not exists');
  })

  it('login with valid mobile number and blank password',()=>{
      cy.get('input[name=mobile_number]').type(mobilenumber);
      cy.contains('Sign In').click();
      cy.contains('Sign In').click();
      cy.contains('Password is required.');
  })
  
  it.only('Forgot password valid mobile number',()=>{
      cy.get('input[name=mobile_number]').type(mobilenumber);
      cy.contains('Forgot password?').click();
      //cy.get('Please enter your 10-digit mobile number.').click();
      //cy.contains('mobileNumber').click();
      cy.get('#mobileNumber').click();
      cy.get('input[name=mobileNumber]').type(mobilenumber);
      cy.contains('Send OTP').click();
      //cy.contains('Back To Sign In').click();
  })


})