class ProductsPage {
    static expected = [
        {
            key: 'ortoni-report',
            url: 'https://letcode.in/product/ortoni-report',
            title: 'Ortoni Report for Playwright',
            navText: 'Ortoni Report',
            buttonText: 'Ortoni Report',
        },
        {
            key: 'letxpath',
            url: 'https://letcode.in/product/letxpath',
            title: 'LetXPath - Chrome extension',
            navText: 'LetXPath',
            buttonText: 'LetXPath',
        },
        {
            key: 'playwright-runner',
            url: 'https://letcode.in/product/playwright-runner',
            title: 'Playwright Runner - VS Code extension',
            navText: 'Playwright Runner',
            buttonText: 'Playwright Runner',
        },
    ];

    constructor(page) {
        this.page = page;
        this.productsNav = page.locator('.navbar-start >> text=Products');
        this.dropdownItems = this.productsNav
            .locator('..')
            .locator('.navbar-dropdown >> .navbar-item');
    }

    async getDropdownCount() {
        return await this.dropdownItems.count();
    }

    async getDropdownItemText(index) {
        return await this.dropdownItems.nth(index).textContent();
    }

    async clickdropdownItem(index) {
        await this.productsNav.hover();
        await this.dropdownItems.nth(index).waitFor({ state: 'visible' });
        await this.dropdownItems.nth(index).click();
        await this.page.waitForLoadState('domcontentloaded');
    }
}

export default ProductsPage;
