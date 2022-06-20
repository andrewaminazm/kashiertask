/// <reference types ="cypress" />


describe(' registeration', function(){
    it(' case1', function(){
      cy.log('click next without enter any data')

      cy.visit('https://merchant.kashier.io/signup', {
       headers: {
         "Accept-Encoding": "gzip, deflate, br"
       }
     })



      /* ==== End Cypress Studio ==== */
      /* ==== Generated with Cypress Studio ==== */
      cy.get('#register-submit-btn').click();
      cy.wait(7000)
      /* ==== End Cypress Studio ==== */
    })
     

    it(' case2', function(){
      cy.log('enter invalid data')

      cy.visit('https://merchant.kashier.io/signup', {
       headers: {
         "Accept-Encoding": "gzip, deflate, br"
       }
     })




      /* ==== Generated with Cypress Studio ==== */
      cy.get(':nth-child(5) > .m-input-icon > .form-control').clear({force:true});
      cy.get(':nth-child(5) > .m-input-icon > .form-control').type('aaaaaaaa',{force:true});
      cy.get(':nth-child(6) > .m-input-icon > .form-control').clear({force:true});
      cy.get(':nth-child(6) > .m-input-icon > .form-control').type('11111111',{force:true});
      cy.get('.transform-checkbox-icon').click({force:true});
      cy.get('.m-checkbox > input').check({force:true});
      cy.get(':nth-child(8) > .m-input-icon > .form-control').clear({force:true});
      cy.get(':nth-child(8) > .m-input-icon > .form-control').type('2323',{force:true});
      cy.get('#signup-form').click({force:true});
      cy.get(':nth-child(9) > .m-input-icon > .form-control').clear({force:true});
      cy.get(':nth-child(9) > .m-input-icon > .form-control').type('and@',{force:true});
      cy.get('#signup-form').click({force:true});
      cy.get('#register-password').clear({force:true});
      cy.get('#register-password').type('01222222222',{force:true});
      cy.get(':nth-child(10) > .m-input-icon > .password-visibility > #visibility-a').click({force:true});
      cy.get('#r-register-password').clear({force:true});
      cy.get('#r-register-password').type('111111111111',{force:true});
      cy.get('#signup-form').click({force:true});
      cy.get('.m-login__signup').scrollIntoView()
      cy.get('.m-login__signup').screenshot()
      /* ==== End Cypress Studio ==== */
    })
    it(' case3', function(){
        cy.log('happy-path for registeration')
  
        cy.visit('https://merchant.kashier.io/signup', {
         headers: {
           "Accept-Encoding": "gzip, deflate, br"
         }
       })
  
  
  
  
        /* ==== Generated with Cypress Studio ==== */
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
        cy.get(':nth-child(9) > .m-input-icon > .form-control').type('anrewd@gmail.com',{force:true});
        cy.get('#signup-form').click({force:true});
        cy.get('#register-password').clear({force:true});
        cy.get('#register-password').type('01211782855@Aa',{force:true});
        cy.get(':nth-child(10) > .m-input-icon > .password-visibility > #visibility-a').click({force:true});
        cy.get('#r-register-password').clear({force:true});
        cy.get('#r-register-password').type('01211782855@Aa',{force:true});
        cy.get('#register-submit-btn').click();
        
        /* ==== End Cypress Studio ==== */
      })
      it(' case4', function(){
        cy.log('leave empty required field ')
  
        cy.visit('https://merchant.kashier.io/signup', {
         headers: {
           "Accept-Encoding": "gzip, deflate, br"
         }
       })
  
  
  
  
        /* ==== Generated with Cypress Studio ==== */
       
        cy.get(':nth-child(6) > .m-input-icon > .form-control').clear({force:true});
        cy.get(':nth-child(6) > .m-input-icon > .form-control').type('andrew',{force:true});
        cy.get('.transform-checkbox-icon').click({force:true});
        cy.get('.m-checkbox > input').check({force:true});
        cy.get(':nth-child(8) > .m-input-icon > .form-control').clear({force:true});
        cy.get(':nth-child(8) > .m-input-icon > .form-control').type('01211782854',{force:true});
        cy.get('#signup-form').click({force:true});
        cy.get(':nth-child(9) > .m-input-icon > .form-control').clear({force:true});
        cy.get(':nth-child(9) > .m-input-icon > .form-control').type('anrewd@gmail.com',{force:true});
        cy.get('#signup-form').click({force:true});
        cy.get('#register-password').clear({force:true});
        cy.get('#register-password').type('01211782855@Aa',{force:true});
        cy.get(':nth-child(10) > .m-input-icon > .password-visibility > #visibility-a').click({force:true});
        cy.get('#r-register-password').clear({force:true});
        cy.get('#r-register-password').type('01211782855@Aa',{force:true});
        cy.get('#register-submit-btn').click();
        cy.wait(6000)
        cy.wait(6000)
        cy.get('.m-login__signup').scrollIntoView()
        cy.get('.m-login__signup').screenshot()
        
        /* ==== End Cypress Studio ==== */
      })
    
    
    })