import { App } from '../app.po';
import { CountryTest } from './country.po';

describe('Country Test', () => {
    let app: App;
    let page: CountryTest;
    let pageUrl: string;

    beforeEach(() => {
        app = new App();
        pageUrl = app.getPageURL('countries-list/Croatia');
        page = new CountryTest(app, pageUrl);
    });

    it('Should navigate to Croatia page', async () => {
        page.navigateTo();
    });

    it('Should navigate BIH when clicked on one of Border Countries', async () => {
        const result = await page.openBorderCountry();

        expect(result).toBe(true);
    });
});
