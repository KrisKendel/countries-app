import { App } from '../app.po';
import { browser, element, by } from 'protractor';

export class CountryTest {
    private app: App;
    private url: string;
    private baseUrl = 'http://localhost:4200';

    constructor(
        app: App,
        url: string,
    ) {
        this.app = app;
        this.url = url;
    }

    async navigateTo(): Promise<boolean> {
        return browser.get('countries-list/Croatia');
    }

    async openBorderCountry(): Promise<void | boolean> {
        const borderCountry = element(by.css('.border-button'));
        borderCountry.click();
        browser.sleep(500);
        return browser.driver.getCurrentUrl().then(url => {
            if (url === `${this.baseUrl}/countries-list/Bosnia%20and%20Herzegovina`) {
                return true;
            } else {
                return false;
            }
        }).catch(err => console.log(err));
    }
}
