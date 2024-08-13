module.exports = {
  'Check Number of Products': function (browser) {
    const url = 'http://testshop.sedtest-school.ru/';
    const expectedCount = 5;

    browser
      .url(url) // Открываем URL
      .waitForElementVisible('body', 1000) // Ждем, пока страница загрузится
      .elements('css selector', 'img[src^="/static/products"]', function (result) {
        const actualCount = result.value.length;
        if (actualCount === expectedCount) {
          console.log('PASSED (пройдено) - количество товаров совпадает с заданным.');
        } else {
          console.log(`FAILED (не пройдено) - ожидается ${expectedCount}, найдено ${actualCount}.`);
        }
      })
      .end(); // Закрываем браузер
  }
};