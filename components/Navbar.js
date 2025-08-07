class Navbar {
    constructor(page) {
        this.page = page;

        this.navbarStart = page.locator('.navbar-start');
        this.labels = ['Work-Space', 'Products', 'Grooming', 'Courses', 'Contact'];
        this.image = page.locator('[alt="letcode"]');
        this.icon = page.locator('#theme-icon');
    }

    async isLabelVisible(label) {
        return await this.navbarStart.locator(`text=${label}`).isVisible();
    }
}

export default Navbar;
