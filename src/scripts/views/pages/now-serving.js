import RestaurantSource from '../../data/restaurant-source';
import createRestaurantDetailTemplate from '../templates/template-creator';

const NowServing = {
  async render() {
    return `
    <div class="content">
      <section class="content">
        <div class="whats__up">
            <h1 class="whats__up__tagline">いらっしゃいませ！</h1>
            <h2 class="whats__up__headline">Mau makan apa <span class="highlight">sekarang?</span></h2>
        </div>
      </section>
      <div class="posts" id="list__restoran">
          <div id="card__restoran"></div>
      </div>
    </div>
    `;
  },

  async afterRender() {
    const resto = await RestaurantSource.nowServingRestaurant();
    const restoContainer = document.querySelector('#card__restoran');
    resto.restaurants.forEach((restaurant) => {
      restoContainer.innerHTML += createRestaurantDetailTemplate(restaurant);
    });
  },
};

export default NowServing;
