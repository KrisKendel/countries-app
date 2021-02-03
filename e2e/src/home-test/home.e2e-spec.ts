import { App } from '../app.po';
import { HomeTest } from './home.po';

describe('Home Test:', () => {
    let app: App;
    let page: HomeTest;
    let pageUrl: string;

    beforeEach(() => {
        app = new App();
        pageUrl = app.getPageURL('home');
        page = new HomeTest(app, pageUrl);
    });

    it('Should navigate to Home component', async () => {
        page.navigateTo();
    });

    it('Should display Explore Countries button on Home', async () => {
        const result = await page.getMainButton();

        expect(result).toBe(true);
    });

    it('Click on Explore Coutries should redirect you to coutries list component', async () => {
        const result = await page.clickMainButton();

        expect(result).toBe(true);
    });
});
