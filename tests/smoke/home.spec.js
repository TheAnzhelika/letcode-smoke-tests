import { expect, test } from "playwright/test";
import HomePage from "../../pages/homePage";
import blockAds from '../../utils/blockAds.js';

test.describe('Home Page Smoke Tests', () => {
    let homePage;

    test.beforeEach(async ({ page, context }) => {
        await blockAds(context);

        homePage = new HomePage(page);
        await homePage.open();
    });

    test('Verify Home exact URL & Title', async ({ page }) => {
        await expect(page).toHaveURL(HomePage.url)
        await expect(page).toHaveTitle(HomePage.title);
    });

    test('Verify Home page texts', async ({ page }) => {
        await expect(homePage.textHeading).toBeVisible();
        await expect(homePage.textInsights).toBeVisible();
        await expect(homePage.textAdfree).toBeVisible();
        await expect(homePage.textJoke).toBeVisible();
    });

    test('Button started with the text "NEW" is visible and redirects to a new page', async ({ page}) => {
        await expect(homePage.buttonNew).toBeVisible();
        await homePage.buttonNew.click();
        await expect(page).toHaveURL('https://letcode.in/pw-quiz');
    });

    test('Button starting with "Buy" is visible and redirects to a new page', async ({ page, context }) => {
        await expect(homePage.buttonBuy).toBeVisible();
    
        const target = await homePage.buttonBuy.getAttribute('target');
        if (target === '_blank') {
            const [newPage] = await Promise.all([
            context.waitForEvent('page'),
            homePage.buttonBuy.click(),
            ]);
            await newPage.waitForLoadState('domcontentloaded');
            await expect(newPage).toHaveURL(/https?:\/\/(www\.)?buymeacoffee\.com\/letcode\/?$/);
        } else {
            await Promise.all([
            page.waitForURL(/https?:\/\/(www\.)?buymeacoffee\.com\/letcode\/?$/),
            homePage.buttonBuy.click(),
            ]);
        }
    });

    test('Section contains all expected cards', async ({}) => {
        for (const card of homePage.cards) {
            const cardVisible = await homePage.isCardVisible(card);
            expect(cardVisible).toBe(true);
        }
    });
});
