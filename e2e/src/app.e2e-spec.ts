import { App } from './app.po';
import { browser, logging } from 'protractor';

describe('Countries App e2e main', () => {
  let page: App;

  beforeEach(() => {
    page = new App();
  });

  it('Should start app with correct title', () => {
    browser.get('/');
    expect(browser.getTitle()).toEqual('Countries');
  });

});
