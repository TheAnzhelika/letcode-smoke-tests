import { expect, test } from "playwright/test";
import Navbar from "../components/Navbar";
import Section from "../components/Section";

test.describe('Letcode main page', () => {
    let navbar;
    let section;

    test.beforeEach(async ({ page }) => {
        await page.goto('https://letcode.in/');
        navbar = new Navbar(page);
        section = new Section(page);
    });
    
    test('Check the right URL and Tittle', async ({ page }) => {
        await expect(page).toHaveURL('https://letcode.in/')
        await expect(page).toHaveTitle('LetCode with Koushik');
        await expect(page.getByText('LetCode with Koushik')).toBeVisible();
    });

    test('NavbarStart contains all expected items', async ({ page }) => {
        for (const label of navbar.labels) {
            const labelVisible = await navbar.isLabelVisible(label);
            expect(labelVisible).toBe(true);
        }
        await expect(navbar.image).toBeVisible();
        await expect(navbar.icon).toBeVisible();
    });

    test('Button started with the text "NEW" is visible and redirects to a new page', async ({ page}) => {
        const buttonNew = page.getByRole('link', { name: 'NEW! Playwright Quiz' });
        await expect(buttonNew).toBeVisible();
        await buttonNew.click();
        await expect(page).toHaveURL('https://letcode.in/pw-quiz');
    })

    test('Button started with the text "Buy" is visible and redirects to a new page', async ({ page }) => {
        const buttonBuy = page.getByRole('link', { name: 'Buy me a Pizza' });
        await expect(buttonBuy).toBeVisible();
        await buttonBuy.click();
        await expect(page).toHaveURL('https://buymeacoffee.com/letcode');
    })

    test('Section contains all expected cards', async ({ page }) => {
        for (const card of section.cards) {
            const cardVisible = await section.isCardVisible(card);
            expect(cardVisible).toBe(true);
        }
    });
})
