describe('Login', () => {
  it('Realizar login com credenciais válidas', () => {
    cy.visit('https://www.saucedemo.com/')

    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')

    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="shopping-cart-link"]').should('be.visible')
  })

  it('Realizar login com credenciais inválidas', () => {

    cy.visit('https://www.saucedemo.com/')

    cy.get('[data-test="username"]').type('usuario_errado')
    cy.get('[data-test="password"]').type('senha_invalida')

    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="error"]').should('be.visible')

  })
})