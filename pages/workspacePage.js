class WorkspacePage {
    static url = 'https://letcode.in/test';
    static title = 'Workspace | LetCode with Koushik';

    constructor(page) {
        this.page = page;

    }

    async open() {
        await this.page.goto(WorkspacePage.url);
    }
}

export default WorkspacePage;
