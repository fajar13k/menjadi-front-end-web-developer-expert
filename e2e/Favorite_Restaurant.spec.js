const assert = require('assert');

Feature('Favorite Restaurant');

Before((I) => {
  I.amOnPage('/#/like');
});

const kondisiAwal = 'Belum ada restoran yang kamu suka nih!';

Scenario('Showing empty favorite restaurant', (I) => {
  I.seeElementInDOM('#card__restoran');
  I.see(kondisiAwal, '#card__restoran');
});

Scenario('Liking one restaurant', async (I) => {
  I.see(kondisiAwal, '#card__restoran');

  I.amOnPage('/');

  I.seeElement('.article__restaurant');
  const restaurantSample = locate('.grid-restoran__title').first();
  const restaurantSampleTitle = await I.grabTextFrom(restaurantSample);
  I.click('.button__restoran');

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.article__restaurant');
  const likedRestaurantTitle = await I.grabTextFrom('.grid-restoran__title');

  assert.strictEqual(restaurantSampleTitle, likedRestaurantTitle);
});

Scenario('Unliking one restaurant', async (I) => {
  I.see(kondisiAwal, '#card__restoran');

  I.amOnPage('/');

  I.seeElement('.article__restaurant');
  const restaurantSample = locate('.grid-restoran__title').first();
  const restaurantSampleTitle = await I.grabTextFrom(restaurantSample);
  I.click('.button__restoran');

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.article__restaurant');
  const likedRestaurantTitle = await I.grabTextFrom('.grid-restoran__title');
  assert.strictEqual(restaurantSampleTitle, likedRestaurantTitle);
  I.click('.button__restoran');

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElementInDOM('#card__restoran');
  const emptyFavoriteRestaurant = await I.grabTextFrom('#card__restoran');

  assert.strictEqual(emptyFavoriteRestaurant, kondisiAwal);
});
