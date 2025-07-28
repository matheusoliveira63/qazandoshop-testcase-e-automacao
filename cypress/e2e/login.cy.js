/// <reference types="cypress" />

describe('Pagina de Login', () => {
    
    //cenario 1 
    it ('Login com sucesso', () => {
        // 1 - Acessar a tela de login 
        cy.visit('https://automationpratice.com.br/login') 
        // 2 - Preencher email valido
        cy.get('#user').type('mat.o.souza@hotmail.com')
        // 3 - Preencher senha valida
        cy.get('#password').type('teste1234')
        // 4 - Clicar no botao de login 
        cy.get('#btnLogin').click()
        // 5 - Validar se o usuario foi redirecionado para a pagina de produtos
        cy.get('#swal2-title').should('contain', 'Login realizado')
    })

    //cenario 2
    it ('Senha invalida', () => {
        // 1 - Acessar a tela de login 
        cy.visit('https://automationpratice.com.br/login') 
        // 2 - Preencher email valido
        cy.get('#user').type('mat.o.souza@hotmail.com')
        // 3 - Preencher senha invalida
        cy.get('#password').type('123')
        // 4 - Clicar no botao de login
        cy.get('#btnLogin').click()
        // 5 - Validar se a mensagem de erro foi exibida
        cy.get('.invalid_input').should('contain', 'Senha inválida.')
    })

    //cenario 3 
    it ('Email invalido', () => {
        // 1 - Acessar a tela de login 
        cy.visit('https://automationpratice.com.br/login') 
        // 2 - Preencher email invalido
        cy.get('#user').type('invalido.com')
        // 3 - Preencher senha valida
        cy.get('#password').type('teste1234')
        // 4 - Clicar no botao de login
        cy.get('#btnLogin').click()
        // 5 - Validar se a mensagem de erro foi exibida
        cy.get('.invalid_input').should('contain', 'E-mail inválido.')
    })
 
    //cenario 4
    it ('Campos vazios', () => {
        // 1 - Acessar a tela de login 
        cy.visit('https://automationpratice.com.br/login') 

        // 4 - Clicar no botao de login
        cy.get('#btnLogin').click()
        // 5 - Validar se a mensagem de erro foi exibida
        cy.get('.invalid_input').should('contain', 'E-mail inválido.')
    })

})