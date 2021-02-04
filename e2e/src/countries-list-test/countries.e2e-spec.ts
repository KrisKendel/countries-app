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

    it('Title Countries table should be displayed', async () => {
        expect(page.getTitle()).toEqual('Countries table');
    });

    it('Search Input field should work', async () => {
        expect(page.inputSearch()).toEqual('Croatia');
    });

    it('Should redirect to selected country (Croatia) when clicked', async () => {
        const result = await page.openCountry();

        expect(result).toBe(true);
    });
});
