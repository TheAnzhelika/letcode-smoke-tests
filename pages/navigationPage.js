import HomePage from './homePage';
import WorkspacePage from './workspacePage';
import CoursesPage from './coursesPage';
import ContactPage from './contactPage';
import ProductsPage from './productsPage';
import GroomingPage from './groomingPage';

class NavigationPage extends HomePage {
    constructor(page) {
        super(page);

        this.navbarStart = page.locator('.navbar-start');

        this.menuSelector = {
            'Work-Space': 'nav >> text=Work-Space',
            Products: 'nav >> text=Products',
            Grooming: 'nav >> text=Grooming',
            Courses: 'nav >> text=Courses',
            Contact: 'nav >> text=Contact',
        };

        this.expectedData = {
            'Work-Space': [WorkspacePage.expected],
            Courses: [CoursesPage.expected],
            Contact: [ContactPage.expected],
            Products: ProductsPage.expected,
            Grooming: GroomingPage.expected,
        };

        // Common elements
        this.image = page.locator('[alt="letcode"]');
        this.themeIcon = page.locator('#theme-icon');
        this.themeToggleButton = page.locator('#toggle-theme');
    }

    async isMenuItemVisible(itemName) {
        if (!this.menuSelector[itemName]) {
            throw new Error(`Menu item "${itemName}" not found in menuSelector`);
        }
        return await this.page.locator(this.menuSelector[itemName]).isVisible();
    }

    async clickMenu(menuName) {
        if (!this.menuSelector[menuName]) throw new Error(`Menu item "${menuName}" not found`);
        await this.page.locator(this.menuSelector[menuName]).click();
        await this.page.waitForLoadState('domcontentloaded');
    }
}

export default NavigationPage;
