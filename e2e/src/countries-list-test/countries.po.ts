import { App } from '../app.po';
import { browser, element, by } from 'protractor';

export class CountriesListTest {
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
        return browser.get('countries-list');
    }

    async getTitle(): Promise<string> {
        return element(by.css('.title')).getText();
    }

    async inputSearch(): Promise<string> {
        this.app.fillInputField('Croatia');

        return element(by.css('tbody:nth-of-type(1) .cell')).getText();
    }

    async openCountry(): Promise<void | boolean> {
        const country = element(by.css('table [tabindex="0"]'));
        country.click();

        return browser.driver.getCurrentUrl().then(url => {
            if (url === `${this.baseUrl}/countries-list/Croatia`) {
                return true;
            } else {
                return false;
            }
        }).catch(err => console.log(err));
    }
}
