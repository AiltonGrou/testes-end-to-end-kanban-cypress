describe('Editar Nome Tarefa Kanban', () => {

    beforeEach(() => {
        cy.visit('https://kanban-dusky-five.vercel.app/')
    })

    it('Editando nome de uma tarefa', () => {
        cy.get('.sc-jqUVSM > .custom-input > p').click()
        cy.get('.sc-gsnTZi').type('teste')
        cy.get('.btn').click()
        cy.get('#testeCreateTask > .custom-input > p').click()
        cy.get('.sc-gsnTZi').type('work1')
        cy.get('.btn').click()
        cy.contains('work1').should('exist')
        cy.get(':nth-child(4) > .board-cards > .sc-gKXOVf').click()
        cy.get('#work1ModalTitle > .custom-input > p').click()
        cy.get('.sc-gsnTZi').type('novo nome')
        cy.get('.btn').click()
        cy.contains('novo nome').should('exist')
    })
})