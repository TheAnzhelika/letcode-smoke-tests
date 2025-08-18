import { expect, test } from "playwright/test";
import NavigationPage from "../../pages/navigationPage";
import HomePage from "../../pages/homePage";
import ProductsPage from "../../pages/productsPage";
import GroomingPage from "../../pages/groomingPage";

test.describe('Navigation Bar Smoke Tests', () => {
    let navigationPage;
    let homePage;
    let productsPage;
    let groomingPage;

    test.beforeEach(async ({ page }) => {
        navigationPage = new NavigationPage(page);
        homePage = new HomePage(page);
        productsPage = new ProductsPage(page);
        groomingPage = new GroomingPage(page);

        await homePage.open();
    });

    test('Verify NavbarStart contains all expected items', async ({ page }) => {
        for (const item of Object.keys(navigationPage.menuSelector)) {
            const isVisible = await navigationPage.isMenuItemVisible(item);
            expect(isVisible).toBeTruthy();
        }
        await expect(navigationPage.image).toBeVisible();
        await expect(navigationPage.icon).toBeVisible();
    });

    test('Verify Navigation menus without dropdowns have exact URL & Title', async ({ page }) => {
        for (const menuName of Object.keys(navigationPage.menuSelector)) {
            if (menuName === 'Products' || menuName === 'Grooming') continue; // handled separately
    
            await navigationPage.clickMenu(menuName);
            const expected = navigationPage.expectedData[menuName];
            await expect(page).toHaveURL(expected.url);
            await expect(page).toHaveTitle(expected.title);
    
            await homePage.open();
        }
    });

    test('Verify Products dropdown exact URL & Title', async ({ page }) => {
        const expectedItems = navigationPage.expectedData['Products'];
        for (let i = 0; i < expectedItems.length; i++) {
            const expected = expectedItems[i];
            await productsPage.productsNav.hover();
            await expect(productsPage.dropdownItems.nth(i)).toHaveText(expected.name);

            await productsPage.clickdropdownItem(i);
            await expect(page).toHaveURL(expected.url);
            await expect(page).toHaveTitle(expected.title);

            await homePage.open();
        };
    });

    test('Verify Grooming dropdown exact URL & Title', async ({ page }) => {
        const expectedItems = navigationPage.expectedData['Grooming'];
        for (let i = 0; i < expectedItems.length; i++) {
            const expected = expectedItems[i];
            await groomingPage.groomingNav.hover();
            await expect(groomingPage.dropdownItems.nth(i)).toHaveText(expected.name);

            await groomingPage.clickDropdownItem(i);
            await expect(page).toHaveURL(expected.url);
            await expect(page).toHaveTitle(expected.title);

            await homePage.open();
        }
    });

});
    