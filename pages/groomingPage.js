class GroomingPage {
    static expected = [
        {
            key: 'test-practice',
            url: 'https://letcode.in/test-practice',
            title: 'Test Practice | LetCode with Koushik',
            navText: 'Test Practice',
            buttonText: 'Test Practice',
        },
        {
            key: 'interview',
            url: 'https://letcode.in/interview',
            title: 'Interview Questions | LetCode with Koushik',
            navText: 'Interview Q & A',
            buttonText: 'Interview Prep',
        },
        {
            key: 'pw-quiz',
            url: 'https://letcode.in/pw-quiz',
            title: 'Playwright Quiz | LetCode with Koushik',
            navText: 'Playwright Quiz',
        },
    ];

    constructor(page) {
        this.page = page;
        this.groomingNav = page.locator('.navbar-start >> text=Grooming');
        this.dropdownItems = this.groomingNav
            .locator('..')
            .locator('.navbar-dropdown >> .navbar-item');
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
