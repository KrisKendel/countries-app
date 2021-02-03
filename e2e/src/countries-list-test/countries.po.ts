import { App } from '../app.po';
import { browser } from 'protractor';

export class CountriesListTest {
    private app: App;
    private url: string;
    private baseUrl = 'http://localhost:5000';

    constructor(
        app: App,
        url: string,
    ) {
        this.app = app;
        this.url = url;
    }

    async navigateTo(): Promise<any> {
        return browser.get('countries-list');
    }
}
