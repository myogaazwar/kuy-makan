/* eslint-disable no-undef */
Feature('Unliking Restaurant');

// Menyukai 1 Restaurant Terlebih dahulu
Before(({ I }) => {
  I.amOnPage('/');

  I.seeElement('.restaurant__title a');
  const firstRestaurant = locate('.restaurant__title a').first();
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites');
  I.seeElement('.card');
});

// Batal Menyukai Satu Restaurant
Scenario('Unliking one restaurant', ({ I }) => {
  I.amOnPage('/#/favorites');
  I.scrollTo('.restaurant__title a');
  I.seeElement('.card');
  I.seeElement('.restaurant__title a');

  const firstRestaurant = locate('.restaurant__title a').first();
  I.click(firstRestaurant);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites');
  I.see(
    'Sayangnya Tidak ada restaurant untuk ditampilkan',
    '.restaurant-item__not__found'
  );
});
