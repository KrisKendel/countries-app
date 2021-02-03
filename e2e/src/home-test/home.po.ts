import { App } from '../app.po';
import { browser } from 'protractor';

export class HomeTest {
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

    navigateTo(): any {
        return browser.get('home');
    }

    public async getMainButton(): Promise<any> {
        const mainButton = this.app.getButton();
        return this.app.waitForDOM(mainButton);
    }

    public async clickMainButton(): Promise<any> {
        const mainButton = this.app.getButton();
        mainButton.click();
        return browser.driver.getCurrentUrl().then(url => {
            if (url === `${this.baseUrl}/countries-list`) {
                return true;
            } else {
                return false;
            }
        }).catch(err => console.log(err));
    }
}
