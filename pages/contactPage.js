class ContactPage {
    static expected = {
        key: 'courses',
        url: 'https://letcode.in/contact',
        title: 'Contact | LetCode with Koushik',
        navText: 'Contact',
    };

    constructor(page) {
        this.page = page;
    }

    async open() {
        await this.page.goto(ContactPage.expected.url);
    }
}

export default ContactPage;
