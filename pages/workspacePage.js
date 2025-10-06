class WorkspacePage {
    static expected = {
        key: 'test',
        url: 'https://letcode.in/test',
        title: 'Workspace | LetCode with Koushik',
        navText: 'Work-Space',
        buttonText: 'Explore Workspace',
    };

    constructor(page) {
        this.page = page;
    }

    async open() {
        await this.page.goto(WorkspacePage.expected.url);
    }
}

export default WorkspacePage;
