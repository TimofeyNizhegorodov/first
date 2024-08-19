const pageCommands = {
    search(word) {
        this
            .setValue('@searchBar', [word, this.api.Keys.ENTER]);
        return this;
    }
};

module.exports = {
    url: 'http://testshop.sedtest-school.ru/',
    commands: [pageCommands],
    elements: {
        searchBar: {
            selector: '//input[@name="search"]',
            locateStrategy: 'xpath'
        },
        pageTitle: {
            selector: '//h4[contains(text(), "Каталог")]',
            locateStrategy: 'xpath'
        }
    }
};