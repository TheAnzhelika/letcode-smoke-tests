class ProductsPage {
    static expected = [
        { name: 'Ortoni Report', url: 'https://letcode.in/product/ortoni-report', title: 'Ortoni Report for Playwright' },
        { name: 'LetXPath', url: 'https://letcode.in/product/letxpath', title: 'LetXPath - Chrome extension' },
        { name: 'Playwright Runner', url: 'https://letcode.in/product/playwright-runner', title: 'Playwright Runner - VS Code extension' }
    ];

    constructor(page) {
        this.page = page;

        this.productsNav = page.locator('.navbar-start >> text=Products');
        this.dropdownItems = this.productsNav.locator('..').locator('.navbar-dropdown >> .navbar-item');
        
        this.expected = [
            { name: 'Ortoni Report', url: 'https://letcode.in/product/ortoni-report', title: 'Ortoni Report for Playwright' },
            { name: 'LetXPath', url: 'https://letcode.in/product/letxpath', title: 'LetXPath - Chrome extension' },
            { name: 'Playwright Runner', url: 'https://letcode.in/product/playwright-runner', title: 'Playwright Runner - VS Code extension' }
          ];

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
