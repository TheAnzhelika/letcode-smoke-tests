class HomePage {
    static url = 'https://letcode.in';
    static title = 'LetCode with Koushik';

    constructor(page) {
        this.page = page;
        this.textHeading = page.getByRole('heading', { name: HomePage.title });
        this.textInsights = page.getByText('Insights on software testing videos like Selenium, Protractor, Playwright, Cypress & WebDriver IO');
        this.textAdfree = page.getByText('Once we reach 1l subs, this site will become adfree.');
        this.textJoke = page.getByText('Why did the belt go to prison? He held up a pair of pants!');
        this.buttonNew = page.getByRole('link', { name: 'NEW! Playwright Quiz' });
        this.buttonBuy = page.getByRole('link', { name: 'Buy me a Pizza' });

        this.section = page.locator('.section');
        this.cards = [
            {name: 'Workspace', role: 'heading'},
            {name: 'Courses', role: 'heading'},
            {name: 'Grooming', role: 'heading'},
            {name: 'Product', role: 'heading'},
        ];
    }

    async open() {
        await this.page.goto(HomePage.url);
    }

    async isCardVisible(card) {
        const { name, role } = card;
        return await this.section.getByRole(role, { name: new RegExp(`^${name}$`) }).isVisible();
    }
}

export default HomePage;
