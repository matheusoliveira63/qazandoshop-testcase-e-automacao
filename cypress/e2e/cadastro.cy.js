/// <reference types="cypress" />

describe('Pagina de Cadastro de Usuario', () => {

    //cenario 1
    it('Cadastro com sucesso', () => {
        // 1 - Acessar a tela de criar conta
        cy.visit('https://automationpratice.com.br/register')
        // 2 - Preencher nome valido
        cy.get('#user').type('Matheus Souza')
        // 3 - Preencher email valido
        cy.get('#email').type('mat.virta@hotmail.com')
        // 4 - Preencher senha valida
        cy.get('#password').type('cadastro1234') 
        // 5 - Clicar no botao de cadastrar  
        cy.get('#btnRegister').click()
        // 6 - Validar se o usuario foi cadastrado com sucesso
        cy.get('#swal2-title').should('contain', 'Cadastro realizado!')
    })  

    //cenario 2
    it('Email já cadastrado', () => {
        // 1 - Acessar a tela de criar conta
        cy.visit('https://automationpratice.com.br/register')
        // 2 - Preencher nome valido
        cy.get('#user').type('Matheus Souza')
        // 3 - Preencher email ja cadastrado
        cy.get('#email').type('mat.virta@hotmail.com')
        // 4 - Preencher senha valida
        cy.get('#password').type('cadastro1234') 
        // 5 - Clicar no botao de cadastrar  
        cy.get('#btnRegister').click()    
        // 6 - Validar se a mensagem de erro foi exibida
        cy.get('#swal2-title').should('contain', 'E-mail já cadastrado.')
    })

    //cenario 3
    it('Campos obrigatorios vazios', () => {
        // 1 - Acessar a tela de criar conta
        cy.visit('https://automationpratice.com.br/register')
        // 2 - Clicar no botao de cadastrar sem preencher os campos
        cy.get('#btnRegister').click()
        // 3 - Validar se a mensagem de erro foi exibida
        cy.get('#errorMessageFirstName').should('contain', 'O campo nome deve ser prenchido')   
    })

    //cenario 4
    it('Email invalido', () => {
        // 1 - Acessar a tela de criar conta
        cy.visit('https://automationpratice.com.br/register')
        // 2 - Preencher nome valido
        cy.get('#user').type('Matheus Souza')
        // 3 - Preencher email invalido
        cy.get('#email').type('invalido.com')
        // 4 - Preencher senha valida
        cy.get('#password').type('cadastro1234') 
        // 5 - Clicar no botao de cadastrar  
        cy.get('#btnRegister').click()
        // 6 - Validar se a mensagem de erro foi exibida
        cy.get('#errorMessageFirstName').should('contain', 'O campo e-mail deve ser prenchido corretamente')  
    })

    //cenario 5
    it('Senha invalida', () => {
        // 1 - Acessar a tela de criar conta
        cy.visit('https://automationpratice.com.br/register')
        // 2 - Preencher nome valido
        cy.get('#user').type('Matheus Souza')
        // 3 - Preencher email valido
        cy.get('#email').type('mat.virta@hotmail.com')
        // 4 - Preencher senha invalida
        cy.get('#password').type('123')
        // 5 - Clicar no botao de cadastrar
        cy.get('#btnRegister').click()
        // 6 - Validar se a mensagem de erro foi exibida 
        cy.get('#errorMessageFirstName').should('contain', 'O campo senha deve ter pelo menos 6 dígitos')
    })
}) 
