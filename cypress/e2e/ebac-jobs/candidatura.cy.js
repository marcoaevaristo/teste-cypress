/// <reference types="cypress" />

describe('Testes para a página de candidatura', () => {
    beforeEach(() => {
        cy.visit('https://ebac-jobs-e2e.vercel.app/')
    })

    it('Deve levar o usuário até o formulário de inscrição', () => {
        cy.wait(2000) // Espera 2 segundos para garantir que a página carregou
        cy.get('.Vaga_vagaLink__DeFkk', { timeout: 10000 }).first().click()
        cy.get('input', { timeout: 10000 }).should('have.length', 7)
        cy.screenshot('tela-inscricao')
    })

    it('Deve preencher o formulário de inscrição', () => {
        cy.wait(2000) // Espera 2 segundos para garantir que a página carregou
        cy.get('.Vaga_vagaLink__DeFkk', { timeout: 10000 }).first().click()
        cy.get('input[name="nome-completo"]').type('georges hutschinski')
        cy.get('input[name="email"]').type('georgeshutschinski@teste.com')
        cy.get('input[name="telefone"]').type('11 98911-8110')
        cy.get('input[name="endereco"]').type('rua jeste, bairro cypress, são paulo-sp')
        cy.get('#linux').check()
        cy.get('select[name="escolaridade"]').select('outros')
        cy.get('.Aplicacao_button__tw2AE').click()

        cy.on('window:alert', (conteudo) => {
            expect(conteudo).to.contain('Obrigado pela candidatura!')
        })
        cy.screenshot('tela-inscricao-preenchido')
    })
})
