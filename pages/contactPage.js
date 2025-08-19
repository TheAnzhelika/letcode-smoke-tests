class ContactPage {
    static url = 'https://letcode.in/contact';
    static title = 'Contact | LetCode with Koushik';

    constructor(page) {
        this.page = page;

    }

    async open() {
        await this.page.goto(ContactPage.url);
    }
}

export default ContactPage;
