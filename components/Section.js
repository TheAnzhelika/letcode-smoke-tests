class Section {
    constructor(page) {
        this.page = page;

        this.section = page.locator('.section');
        this.cards = [
            {name: 'Workspace', role: 'heading'},
            {name: 'Courses', role: 'heading'},
            {name: 'Grooming', role: 'heading'},
            {name: 'Product', role: 'heading'},
        ];
    }

    async isCardVisible(card) {
        const { name, role } = card;
        return await this.section.getByRole(role, { name: new RegExp(`^${name}$`) }).isVisible();
    }
}

export default Section;
