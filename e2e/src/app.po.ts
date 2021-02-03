import { browser, by, element, ElementFinder } from 'protractor';

const EC = browser.ExpectedConditions;

export class App {

  public waitForDOM(elem: ElementFinder, msg: string = ''): any {
    return browser.wait(EC.presenceOf(elem), 15000, msg);
  }

  getAppTestURL(): any {
    return browser.baseUrl;
  }

  getPageURL(suffix: string): string {
    return `${this.getAppTestURL()}${suffix}`;
  }

  getButton(): any {
    return element(by.css('.enter-button'));
  }
}
