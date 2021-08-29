/**********************************************************************************************************************
 * This file is used to interact with any page element
 *
 * It contains all needed methods to interact with a web page {getElem, click, writeOnElem, readElem..etc}
 ***********************************************************************************************************************/

/**
 * This is Page interactions class
 *
 * It contains all needed functions to interact with page view {}
 */
class PageInteractions {
  /**
   * This is the method to get page field element so that you can do actions on it
   */
  getElem(selector) {
    console.log(selector);
    return cy.get(selector);
  }

  /**
   * This is the method to click elem
   */
  clickBtn(selector) {
    this.getElem(selector).click();
  }


  /**
   * This is the method to write txt
   */
  writeText(selector, text) {
    this.getElem(selector).type(text);
  }

  /**
   * This is the method to click enter button
   */

  clickEnter(selector) {
    cy.get(selector).type('{enter}')
  }



  /**
   * This is the method to clear field and write txt
   */
  updateText(selector, text) {
    this.getElem(selector)
      .clear()
      .type(text);
  }

  /**
   * This is the method to Choose value from list
   */
  chooseFromList(listSelector, value) {
    cy.get(listSelector).select(value); // Select the 'user-1' option
  }

  /**
   * This is the method to assert txt
   */
  assertText(selector, textExpected) {
    cy.get(selector)
      .invoke('text')
      .should('contain', textExpected);
  }
}

export default PageInteractions;
