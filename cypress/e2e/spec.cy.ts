describe('Primeiro acesso do usuario', () => {

  it('Deve - Redirecionar para autenticação ', () => {

    //arrange
    cy.visit('/');

    //action
    cy.wait(100) //milisegundos
    //cy.contains('Login'); //este é um assertion global, pega toda a página
    //cy.title()

    //assert
    cy.url().should('contain', 'conta/autenticar')


  });
})
