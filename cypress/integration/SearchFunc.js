//This file include Test cases for searching functionality of "www.duckduckgo.com"

//Import methods that interact with the page and assertions
import PageInteractions from '../utilites/page-interactions';
import Assertion from '../utilites/assertions'

let page = new PageInteractions();
let assert = new Assertion();

describe('Testing Search Functionality', function () {
  //Beafore Each test case calling fixture file
  beforeEach(function () {
    cy.fixture('data.json').as('data');
    cy.fixture('locators.json').as('selc');
    cy.visit('www.duckduckgo.com');
  });

  /////////1st test case/////////
  /*
  This test case include happy scenario of search engine website when enter word and click on search button
  */
  it('Happy scenario - Search using search button', function () {
    assert.isVisable(this.selc.searchField);
    page.writeText(
      this.selc.searchField,
      this.data.searchTxt,
    );

    assert.isVisable(this.selc.searchBtn);
    page.clickBtn(this.selc.searchBtn);

    assert.checkUrl(this.data.searchTxt)

    assert.isTxTVisible(this.selc.result, this.data.searchTxt)

    assert.checkLink(this.selc.resultLink1)
    assert.checkLink(this.selc.resultLink2)
    assert.checkLink(this.selc.resultLink3)
  });

  /////////2nd test case/////////
  /*
  This test case include happy scenario of search engine website when enter word and click on enter button
  */
  it('Happy scenario - Search using enter button', function () {
    assert.isVisable(this.selc.searchField);
    page.writeText(
      this.selc.searchField,
      this.data.searchTxt,
    );

    page.clickEnter(this.selc.searchBtn)
    assert.checkUrl(this.data.searchTxt)
    assert.isTxTVisible(this.selc.result, this.data.searchTxt)

    assert.checkLink(this.selc.resultLink1)
    assert.checkLink(this.selc.resultLink2)
    assert.checkLink(this.selc.resultLink3)
  });

  /////////3rd test case/////////
  /*
  This test case verify that when click on search while the search field is empty
  */
  it('Check error message when clicking search btn with empty field', function () {
    assert.isVisable(this.selc.searchField);

    page.writeText(
      this.selc.searchField,
      this.data.emptyTxt,
    );

    assert.isVisable(this.selc.searchBtn);
    page.clickBtn(this.selc.searchBtn);

    assert.checkTxt(this.selc.errMsg, this.data.errMsg)
  });

  /////////4th test case/////////
  /*
  This test case Verify that when enter any dummy values and click search
  */
  it('Verify that error message appear when search for somthing not exist', function () {

    assert.isVisable(this.selc.searchField);

    page.writeText(
      this.selc.searchField,
      this.data.invalidTxt,
    );

    page.clickEnter(this.selc.searchBtn)
    assert.checkUrl(this.data.invalidTxt)
    assert.checkTxt(this.selc.noResult, "No results found for " + this.data.invalidTxt + ".")
    assert.isVisable(this.selc.tips)
  });

  /////////5th test case/////////
  /*
  This test case verify that you can start new search from results of anther search
  */
  it('Verify that you can search from result page', function () {
    assert.isVisable(this.selc.searchField);
    page.writeText(
      this.selc.searchField,
      this.data.searchTxt,
    );

    assert.isVisable(this.selc.searchBtn);
    page.clickBtn(this.selc.searchBtn);

    assert.checkUrl(this.data.searchTxt)

    assert.isTxTVisible(this.selc.result, this.data.searchTxt)

    page.updateText(this.selc.newSearch, this.data.newSearchTxt)

    page.clickBtn(this.selc.newSearchBtn);

    assert.checkUrl(this.data.newSearchTxt)
    assert.isTxTVisible(this.selc.result, this.data.newSearchTxt)

    assert.checkLink(this.selc.resultLink1)
    assert.checkLink(this.selc.resultLink2)
    assert.checkLink(this.selc.resultLink3)
  });
});