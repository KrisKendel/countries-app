import { browser, by, element, ElementFinder } from 'protractor';

const EC = browser.ExpectedConditions;

export class App {

  public waitForDOM(elem: ElementFinder, msg: string = ''): any {
    return browser.wait(EC.presenceOf(elem), 15000, msg);
  }

  getAppTestURL(): string {
    return browser.baseUrl;
  }

  getPageURL(suffix: string): string {
    return `${this.getAppTestURL()}${suffix}`;
  }

  getButton(): ElementFinder {
    return element(by.css('.enter-button'));
  }

  getInputField(): ElementFinder {
    return element(by.css('.input-field'));
  }

  fillInputField(value: string): void {
    this.getInputField().sendKeys(value);
  }
}
