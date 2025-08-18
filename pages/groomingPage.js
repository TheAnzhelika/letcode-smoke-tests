class GroomingPage {
    static expected = [
        { name: 'Test Practice', url: 'https://letcode.in/test-practice', title: 'Test Practice | LetCode with Koushik' },
        { name: 'Interview Q & A', url: 'https://letcode.in/interview', title: 'Interview Questions | LetCode with Koushik' },
        { name: 'Playwright Quiz', url: 'https://letcode.in/pw-quiz', title: 'Playwright Quiz | LetCode with Koushik' }
    ];

    constructor(page) {
        this.page = page;
        // Grooming
        this.groomingNav = page.locator('.navbar-start >> text=Grooming');
        this.dropdownItems = this.groomingNav.locator('..').locator('.navbar-dropdown >> .navbar-item');
        
        this.expected = [
            { name: 'Test Practice', url: 'https://letcode.in/test-practice', title: 'Test Practice | LetCode with Koushik' },
            { name: 'Interview Q & A', url: 'https://letcode.in/interview', title: 'Interview Questions | LetCode with Koushik' },
            { name: 'Playwright Quiz', url: 'https://letcode.in/pw-quiz', title: 'Playwright Quiz | LetCode with Koushik' }
        ];
    }

    async dropdownCount() {
        return await this.dropdownItems.count();
    }
    
    async getDropdownItemText(index) {
        return await this.dropdownItems.nth(index).textContent();
    }
    
    async clickDropdownItem(index) {
        await this.groomingNav.hover();
        await this.dropdownItems.nth(index).waitFor({ state: 'visible' });
        await this.dropdownItems.nth(index).click();
        await this.page.waitForLoadState('domcontentloaded');
    }
}

export default GroomingPage;
