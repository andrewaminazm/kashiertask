/// <reference types ="cypress" />


describe(' registeration', function(){
    it(' case1', function(){
        cy.log('happy-path for registeration')
  
        cy.visit('https://merchant.kashier.io/signup', {
         headers: {
           "Accept-Encoding": "gzip, deflate, br"
         }
       })
  
  
  
  
     
        cy.get(':nth-child(5) > .m-input-icon > .form-control').clear({force:true});
        cy.get(':nth-child(5) > .m-input-icon > .form-control').type('aaaaaaaa',{force:true});
        cy.get(':nth-child(6) > .m-input-icon > .form-control').clear({force:true});
        cy.get(':nth-child(6) > .m-input-icon > .form-control').type('andrew',{force:true});
        cy.get('.transform-checkbox-icon').click({force:true});
        cy.get('.m-checkbox > input').check({force:true});
        cy.get(':nth-child(8) > .m-input-icon > .form-control').clear({force:true});
        cy.get(':nth-child(8) > .m-input-icon > .form-control').type('01211782854',{force:true});
        cy.get('#signup-form').click({force:true});
        cy.get(':nth-child(9) > .m-input-icon > .form-control').clear({force:true});
        cy.get(':nth-child(9) > .m-input-icon > .form-control').type('anreeeewd@gmail.com',{force:true});
        cy.get('#signup-form').click({force:true});
        cy.get('#register-password').clear({force:true});
        cy.get('#register-password').type('01211782855@Aa',{force:true});
        cy.get(':nth-child(10) > .m-input-icon > .password-visibility > #visibility-a').click({force:true});
        cy.get('#r-register-password').clear({force:true});
        cy.get('#r-register-password').type('01211782855@Aa',{force:true});
        cy.get('#register-submit-btn').click().then(() => {
            // we are trying to return something
            // from the .within callback,
            // but it won't have any effect
          cy.wait(7000)
          });
        
       
      })
    })