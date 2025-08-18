class CoursesPage {
    static url = 'https://letcode.in/courses';
    static title = 'Courses | LetCode with Koushik';

    constructor(page) {
        this.page = page;

    }

    async open() {
        await this.page.goto(CoursesPage.url);
    }
}

export default CoursesPage;
