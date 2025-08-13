describe('Criando Coluna Kanban', () => {

    beforeEach(() => {
        cy.visit('https://kanban-dusky-five.vercel.app/')
    })

    it('Criar uma nova coluna', () => {
        cy.get('.sc-jqUVSM > .custom-input > p').click()
        cy.get('.sc-gsnTZi').type('teste')
        cy.get('.btn').click()
        cy.contains('teste').should('exist')
    })
})