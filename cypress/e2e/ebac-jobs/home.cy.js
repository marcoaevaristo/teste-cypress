/// <reference types="cypress" />

describe('Testes para a home', () => {
    beforeEach(() => {
        cy.visit('https://ebac-jobs-e2e.vercel.app/')
    })

    it('Deve renderizar 4 vagas', () => {
        cy.wait(2000) // Espera 2 segundos para garantir que a página carregou
        cy.get('.ListaVagas_vagas__gmNZn > li', { timeout: 10000 }).should('have.length', 4)
    })

    it('Deve filtrar por fullstack', () => {
        cy.wait(2000) // Espera 2 segundos para garantir que a página carregou
        cy.get('.FormVagas_campo__E1ppF').type('fullstack{enter}')
        // Adicionando verificação para garantir que as vagas filtradas sejam exibidas
        cy.get('.ListaVagas_vagas__gmNZn > li').should('contain.text', 'fullstack')
    })
})
