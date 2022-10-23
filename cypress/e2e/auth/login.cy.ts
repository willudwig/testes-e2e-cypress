describe('Processo de login do usuário', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('Deve - Verificar título', () => {

    //arrange

    //action

    //assert
    cy.title().should('contain', 'Login');
  });

  it('Deve - Notificar usuário inválido', () => {

    //arrange
    const email = cy.get('[formControlName="email"]');
    const senha = cy.get('[formControlName="senha"]');
    const btnEntrar = cy.get('button[type=submit]');

    //action
    email.type('tudo errado');
    senha.type('&123Abc');
    btnEntrar.click();
    cy.wait(4000);


    //assert
    cy.contains('Por favor, preencha o formulário corretamente antes de prosseguir.');
  });

  it('Deve - Autenticar usuário válido', () => {

    //arrange
    const email = cy.get('[formControlName="email"]');
    const senha = cy.get('[formControlName="senha"]');
    const btnEntrar = cy.get('button[type=submit]');

    //action
    email.type('abc@gmail.com');
    senha.type('&abc123ABC');
    btnEntrar.click();
    cy.wait(4000);

    //assert
    cy.url().should('contain', 'dashboard');
  });

  it('Deve - Notificar credenciais inválidas', () => {

    //arrange
    const email = cy.get('[formControlName="email"]');
    const senha = cy.get('[formControlName="senha"]');
    const btnEntrar = cy.get('button[type=submit]');

    //action
    email.type('abc@gmail.com');
    senha.type('&&&abc123ABC');
    btnEntrar.click();
    cy.wait(4000);

    //assert
    cy.contains('Usuário ou senha incorretos');
  });

  it('Deve - Validar email vazio', () => {

    //arrange
    const email = cy.get('[formControlName="email"]');
    const senha = cy.get('[formControlName="senha"]');

    //action
    email.focus();
    senha.type('&abc123ABC');

    //assert
    cy.contains('O email precisa ser preenchido.');
  });

  it('Deve - Validar formato correto', () => {

    //arrange
    const email = cy.get('[formControlName="email"]');
    const senha = cy.get('[formControlName="senha"]');

    //action
    email.type('errado');
    senha.type('&abc123ABC');

    //assert
    cy.contains('O email precisa seguir o formato "usuario@dominio.com".');
  });

  it('Deve - Validar senha vazia', () => {

    //arrange
    const email = cy.get('[formControlName="email"]');
    const senha = cy.get('[formControlName="senha"]');

    //action
    senha.focus();
    email.focus();

    //assert
    cy.contains('A senha precisa ser preenchida.');
  });

  it('Deve - Validar mínimo de caracteres senha', () => {

    //arrange
    const email = cy.get('[formControlName="email"]');
    const senha = cy.get('[formControlName="senha"]');

    //action
    senha.type('&12');
    email.focus();

    //assert
    cy.contains('A senha deve ter no mínimo 6 caracteres.');
  });

});

