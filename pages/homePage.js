import { expect } from '@playwright/test';

class HomePage {
    static expected = {
        url: 'https://letcode.in',
        title: 'LetCode with Koushik',
    };

    constructor(page) {
        this.page = page;
        this.textHeading = page.getByRole('heading', { name: HomePage.expected.title });
        this.textInsights = page.getByText(
            'Insights on software testing videos like Selenium, Protractor, Playwright, Cypress & WebDriver IO'
        );
        this.textAdfree = page.getByText('Once we reach 1l subs, this site will become adfree.');
        this.textJoke = page.getByText(
            'Why did the belt go to prison? He held up a pair of pants!'
        );
        this.buttonNew = page.getByRole('link', { name: 'NEW! Playwright Quiz' });
        this.buttonBuy = page.getByRole('link', { name: 'Buy me a Pizza' });

        this.section = page.locator('.section');
        this.cards = [
            { name: 'Workspace', role: 'heading' },
            { name: 'Courses', role: 'heading' },
            { name: 'Grooming', role: 'heading' },
            { name: 'Product', role: 'heading' },
        ];
    }

    async open() {
        await this.page.goto(HomePage.expected.url);
    }

    async isCardVisible(card) {
        const { name, role } = card;
        return await this.section.getByRole(role, { name: new RegExp(`^${name}$`) }).isVisible();
    }

    async getCardLink(expected) {
        const path = new URL(expected.url).pathname;
        let link = this.section.locator(`.card a[href$="${path}"]`);

        if ((await link.count()) === 0 && expected.buttonText) {
            link = this.section.getByRole('link', { name: expected.buttonText, exact: true });
        }

        return link;
    }

    async clickCardAndCheck(expected, context) {
        const link = await this.getCardLink(expected);
        await expect(link).toBeVisible();

        const target = await link.getAttribute('target');
        if (target === '_blank') {
            const [newPage] = await Promise.all([context.waitForEvent('page'), link.click()]);
            await newPage.waitForLoadState('domcontentloaded');
            await expect(newPage).toHaveURL(expected.url);
            await expect(newPage).toHaveTitle(expected.title);
            await newPage.close();
        } else {
            await Promise.all([this.page.waitForURL(expected.url), link.click()]);
            await expect(this.page).toHaveTitle(expected.title);
            await this.page.goBack();
        }
    }
}

export default HomePage;
