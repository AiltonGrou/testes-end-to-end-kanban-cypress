describe('Excluindo Coluna Kanban', () => {

    beforeEach(() => {
        cy.visit('https://kanban-dusky-five.vercel.app/')
    })

    it('Excluir coluna', () => {
        cy.get('.sc-jqUVSM > .custom-input > p').click()
        cy.get('.sc-gsnTZi').type('teste')
        cy.get('.btn').click()
        cy.get('#testetrash > svg').click()
        cy.contains('teste').should('not.exist')
    })
})