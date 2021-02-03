import { App } from '../app.po';
import { CountriesListTest } from './countries.po';

describe('Countries-list Test', () => {
    let app: App;
    let page: CountriesListTest;
    let pageUrl: string;

    beforeEach(() => {
        app = new App();
        pageUrl = app.getPageURL('countries-list');
        page = new CountriesListTest(app, pageUrl);
    });

    it('Should navigate to Countries list component', async () => {
        page.navigateTo();
    });
});
