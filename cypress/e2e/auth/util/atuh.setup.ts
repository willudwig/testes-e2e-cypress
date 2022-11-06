class AuthSetup {
  obterFormRegistro() {
    return {
        nome: () => cy.get('[data-cypress=nome]'),
        email: () => cy.get('[data-cypress=email]'),
        senha: () => cy.get('[data-cypress=senha]'),
        confirmarSenha: () => cy.get('[data-cypress=confirmarSenha]'),
        btnRegistrar: () => cy.get('[data-cypress=btnRegistrar]')
    };
  }
}

export default new AuthSetup();


