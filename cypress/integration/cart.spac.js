/// <reference types="cypress" />

describe('realizar pedido', () => {

    it('Visitar página e listar produtos', () => {
      cy.visit('http://localhost:3000');

      cy.request('https://5d6da1df777f670014036125.mockapi.io/api/v1/product')
    })

    it('Adidiocnar produto e acessar carrinho', () => {
      cy.get(':nth-child(1) > [data-cy=add-product-button]').click();
      cy.get(':nth-child(2) > [data-cy=add-product-button]').click();
      cy.get('div > strong').click();

    })

    it('Finalizar pedido', () => {

      cy.get('[data-cy=handle-request-product]').click(console.log('Finalizado'));
    })

    it('Remover produto', () => {

      cy.get('[data-cy=increment-product]').click();
    })
  })