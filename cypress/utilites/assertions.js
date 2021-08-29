/**********************************************************************************************************************
 * This file contains assertion methods to assert for various interactable elements
 ***********************************************************************************************************************/
class Assertion {
  /**
   * Method to assert that a text/selector is visible in a certain element
   */
  isVisable(selector) {
    cy.get(selector).should('be.visible');
  }

  isTxTVisible(selector, text) {
    cy.get(selector).should('contain', text)
  }

  /**
   * Method to assert that a url includes the following directory
   */
  checkUrl(url) {
    cy.url().should('include', url);
  }

  /**
   * Method to check that a link works and re-directs user to another Tab
   */
  checkLink(url) {
    cy
      .get(url)
      .invoke('attr', 'url')
      .then(href => {

        cy
          .request(url)
          .its('status')
          .should('eq', 200);
      });
  }

  /**
   * Method to check that a button is enabled
   */
  isEnabled(selector) {
    cy.get(selector).should('be.visible', 'be.enabled');
  }

  /**
 * Method to check text content
 */
  checkTxt(selector, text) {
    cy.get(selector).invoke("text").should('eq', text);
  }

  /**
   * Method to check that a button is disabled
   */
  isDisabled(selector, text) {
    cy.contains(selector, text).should('be.disabled');
  }

  /**
   * Method to check that txt have class
   */
  txtHaveClass(selector, text, className) {
    cy.get(selector)
      .contains(text)
      .should('have.class', className);
  }
}
export default Assertion;
