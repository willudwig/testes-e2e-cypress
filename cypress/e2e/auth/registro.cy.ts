describe('alguma coisa', () =>{

  beforeEach(() => {
    cy.visit('conta/registrar');
  }); //executa antes de cada teste

  it('Deve - Carregar a página', () => {

    //arrange

    //action

    //assert
    //cy.url().should('contain', 'xx');
    cy.title().should('contain', 'Registro - e-Agenda');
  })

  it('Deve - Notificar sobre usuário inválido', () => {

    //arrange
    const inputNome = cy.get('[formControlName=nome]');
    const inputEmail = cy.get('[formControlName=email]');
    const inputSenha = cy.get('[formControlName=senha]');
    const inputConfirmarSenha = cy.get('[formControlName=confirmarSenha]');
    const btnRegistrar = cy.get('button[type=submit]');

    //action
    inputNome.type('Cy');
    inputEmail.type('cypress@g.com');
    inputSenha.type('123&abcABC');
    inputConfirmarSenha.type('123&abcABC');
    btnRegistrar.click();
    cy.wait(4000);

    //assert
    cy.contains('Por favor, preencha o formulário corretamente antes de prosseguir.');
  });

  // it('Deve - Registrar e redirecionar novo usuário', () => {

  //   //arrange
  //   const inputNome = cy.get('[formControlName=nome]');
  //   const inputEmail = cy.get('[formControlName=email]');
  //   const inputSenha = cy.get('[formControlName=senha]');
  //   const inputConfirmarSenha = cy.get('[formControlName=confirmarSenha]');
  //   const btnRegistrar = cy.get('button[type=submit]');

  //   //action
  //   inputNome.type('Cypress 2');
  //   inputEmail.type('cypress2@gmail.com');
  //   inputSenha.type('Teste@123');
  //   inputConfirmarSenha.type('Teste@123');
  //   btnRegistrar.click();
  //   cy.wait(4000);

  //   //assert
  //   cy.url().should('contain', 'dashboard');

  // });

  it('Deve - Notificar usuário repetido', () => {

    //arrange
    const inputNome = cy.get('[formControlName=nome]');
    const inputEmail = cy.get('[formControlName=email]');
    const inputSenha = cy.get('[formControlName=senha]');
    const inputConfirmarSenha = cy.get('[formControlName=confirmarSenha]');
    const btnRegistrar = cy.get('button[type=submit]');

    //action
    inputNome.type('Cypress Testador');
    inputEmail.type('cypress@g.com');
    inputSenha.type('123&abcABC');
    inputConfirmarSenha.type('123&abcABC');
    btnRegistrar.click();
    cy.wait(4000);

    //assert
    cy.contains("Login 'cypress@g.com' já está sendo utilizado");

  });

  it('Deve - Notificar senhas diferentes', () => {

    //arrange
    const inputNome = cy.get('[formControlName=nome]');
    const inputEmail = cy.get('[formControlName=email]');
    const inputSenha = cy.get('[formControlName=senha]');
    const inputConfirmarSenha = cy.get('[formControlName=confirmarSenha]');
    const btnRegistrar = cy.get('button[type=submit]');

    //action
    inputNome.type('Cypress Testador 3');
    inputEmail.type('cypress3@g.com');
    inputSenha.type('123&abcABC');
    inputConfirmarSenha.type('123&&&abcABC');
    btnRegistrar.click();
    cy.wait(4000);

    //assert
    cy.contains("As senhas não conferem");

  });

  it('Deve - Validar nome vazio', () => {

    //arrange
    const inputNome = cy.get('[formControlName=nome]');
    const inputEmail = cy.get('[formControlName=email]');

    //action
    inputNome.focus();
    inputEmail.type('cypress3@g.com');
    cy.wait(4000);

    //assert
    cy.contains("O nome precisa ser preenchido.");

  });

  it('Deve - Validar quantidade de caracteres nome', () => {

    //arrange
    const inputNome = cy.get('[formControlName=nome]');
    const inputEmail = cy.get('[formControlName=email]');

    //action
    inputNome.type('cy');
    inputEmail.type('cypress3@g.com');
    cy.wait(4000);

    //assert
    cy.contains("O nome deve ter no mínimo 3 caracteres.");

  });


});
