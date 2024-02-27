/* eslint-disable no-plusplus */
/* eslint-disable no-multi-spaces */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorites');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#query');

  I.see(
    'Sayangnya Tidak ada restaurant untuk ditampilkan',
    '.restaurant-item__not__found'
  );
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see(
    'Sayangnya Tidak ada restaurant untuk ditampilkan',
    '.restaurant-item__not__found'
  );
  I.amOnPage('/');

  I.seeElement('.restaurant__title a');
  const firstRestaurant = locate('.restaurant__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites');
  I.seeElement('.card');
  const likeRestaurantTitle = await I.grabTextFrom('.restaurant__title');

  assert.strictEqual(firstRestaurantTitle, likeRestaurantTitle);
});

Scenario('searching restaurants', async ({ I }) => {
  I.see(
    'Sayangnya Tidak ada restaurant untuk ditampilkan',
    '.restaurant-item__not__found'
  );

  I.amOnPage('/');

  I.seeElement('.restaurant__title a');

  const titles = [];

  for (let i = 1; i <= 3; i++) {
    I.click(locate('.restaurant__title a').at(i));
    I.seeElement('#likeButton');
    I.click('#likeButton');
    // eslint-disable-next-line no-await-in-loop
    titles.push(await I.grabTextFrom('#title-header h2'));
    I.amOnPage('/');
  }

  I.amOnPage('/#/favorites');
  I.seeElement('#query');

  const visibleLikedRestaurants = await I.grabNumberOfVisibleElements('.card');
  assert.strictEqual(titles.length, visibleLikedRestaurants);

  const searchQuery = titles[1].substring(1, 3);
  I.fillField('#query', searchQuery);
  I.pressKey('Enter');

  // mendapatkan daftar restaurant yang sesuai dengan searchQuery
  const matchingRestaurants = titles.filter(
    (title) => title.indexOf(searchQuery) !== -1
  );
  const visibleSearchedLikedRestaurants = await I.grabNumberOfVisibleElements(
    '.card'
  );
  assert.strictEqual(
    matchingRestaurants.length,
    visibleSearchedLikedRestaurants
  );
  for (let i = 0; i < matchingRestaurants.length; i++) {
    // eslint-disable-next-line no-await-in-loop
    const visibleTitle = await I.grabTextFrom(
      locate('#restaurant-name').at(i + 1)
    );

    assert.strictEqual(matchingRestaurants[i], visibleTitle);
  }
});
