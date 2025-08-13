describe('Criando Tag Kanban', () => {

    beforeEach(() => {
        cy.visit('https://kanban-dusky-five.vercel.app/')
    })

    it('Criar uma nova tag', () => {
        cy.get('.sc-jqUVSM > .custom-input > p').click()
        cy.get('.sc-gsnTZi').type('teste')
        cy.get('.btn').click()
        cy.get('#testeCreateTask > .custom-input > p').click()
        cy.get('.sc-gsnTZi').type('work1')
        cy.get('.btn').click()
        cy.get(':nth-child(4) > .board-cards > .sc-gKXOVf').click()
        cy.get("#\\30 Color").click()
        cy.get('section > .custom-input > p').click()
        cy.get('.sc-gsnTZi').type('tag 4')
        cy.get('.btn').click()
        cy.contains('tag 4').should('exist')
    })
})