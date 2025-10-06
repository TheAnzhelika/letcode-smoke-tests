class CoursesPage {
    static expected = {
        key: 'courses',
        url: 'https://letcode.in/courses',
        title: 'Courses | LetCode with Koushik',
        navText: 'Courses',
        buttonText: 'Explore Courses',
    };

    constructor(page) {
        this.page = page;
    }

    async open() {
        await this.page.goto(CoursesPage.expected.url);
    }
}

export default CoursesPage;
