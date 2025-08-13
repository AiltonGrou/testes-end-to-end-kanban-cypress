describe('Criando Tarefa Kanban', () => {

    beforeEach(() => {
        cy.visit('https://kanban-dusky-five.vercel.app/')
    })

    it('Criar uma nova tarefa', () => {
        cy.get('.sc-jqUVSM > .custom-input > p').click()
        cy.get('.sc-gsnTZi').type('teste')
        cy.get('.btn').click()
        cy.get('#testeCreateTask > .custom-input > p').click()
        cy.get('.sc-gsnTZi').type('work1')
        cy.get('.btn').click()
        cy.contains('work1').should('exist')
    })
})