import { expect, test } from 'playwright/test';
import HomePage from '../../pages/homePage';
import blockAds from '../../utils/blockAds.js';
import NavigationPage from '../../pages/navigationPage';

test.describe('Home Page Smoke Tests', () => {
    let homePage;
    let navigationPage;

    test.beforeEach(async ({ page, context }) => {
        await blockAds(context);
        homePage = new HomePage(page);
        navigationPage = new NavigationPage(page);
        await homePage.open();
    });

    test('Verify Home exact URL & Title', async ({ page }) => {
        await expect(page).toHaveURL(HomePage.expected.url);
        await expect(page).toHaveTitle(HomePage.expected.title);
    });

    test('Verify Home page texts', async () => {
        await expect(homePage.textHeading).toBeVisible();
        await expect(homePage.textInsights).toBeVisible();
        await expect(homePage.textAdfree).toBeVisible();
        await expect(homePage.textJoke).toBeVisible();
    });

    test('Button started with the text "NEW" is visible and redirects to a new page', async ({
        page,
    }) => {
        await expect(homePage.buttonNew).toBeVisible();
        await homePage.buttonNew.click();
        await expect(page).toHaveURL('https://letcode.in/pw-quiz');
    });

    test('Button started with the text "Buy" is visible and redirects to a new page', async ({
        page,
    }) => {
        await expect(homePage.buttonBuy).toBeVisible();
        await homePage.buttonBuy.click();
        await expect(page).toHaveURL('https://buymeacoffee.com/letcode');
    });

    test('Section contains all expected cards', async () => {
        for (const card of homePage.cards) {
            const cardVisible = await homePage.isCardVisible(card);
            expect(cardVisible).toBe(true);
        }
    });

    test('Card buttons from Section navigate to expected URLs & Titles', async ({ context }) => {
        for (const expectedList of Object.values(navigationPage.expectedData)) {
            for (const expected of expectedList) {
                if (!expected.buttonText) continue;
                await homePage.clickCardAndCheck(expected, context);
            }
        }
    });
});
