Feature('Favorite Restaurant');

Before((I) => {
  I.amOnPage('/#/like');
});

const kondisiAwal = 'Belum ada restoran yang kamu suka nih!';

Scenario('Showing empty favorite restaurant', (I) => {
  I.seeElementInDOM('#card__restoran');
  I.see(kondisiAwal, '#card__restoran');
});
