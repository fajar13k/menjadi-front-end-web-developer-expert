import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
    <div class="content">
      <section class="content">
        <div class="whats__up">
          <h1 class="whats__up__tagline">Favorit Kamu！</h1>
          <h2 class="whats__up__headline">Udah siap balik ke <span class="highlight">tongkrongan?</span></h2>
        </div>
      </section>
      <div class="grid-restoran" id="list__restoran">
          <div id="card__restoran"></div>
      </div>
    </div>
    `;
  },

  async afterRender() {
    const resto = await FavoriteRestaurantIdb.getAllRestaurants();
    const restoContainer = document.querySelector('#card__restoran');
    resto.forEach((restaurant) => {
      restoContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Like;
