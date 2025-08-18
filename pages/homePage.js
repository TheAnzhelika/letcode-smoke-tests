class HomePage {
    static url = 'https://letcode.in';
    static title = 'LetCode with Koushik';

    constructor(page) {
        this.page = page;
    }

    async open() {
        await this.page.goto(HomePage.url);
    }
}

export default HomePage;
