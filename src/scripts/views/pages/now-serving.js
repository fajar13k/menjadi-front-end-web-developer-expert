import RestaurantSource from '../../data/restaurant-source';
import Spinner from '../templates/spinner-html';
import { createSkeletonItemTemplate, createRestaurantItemTemplate } from '../templates/template-creator';

const NowServing = {
  async render() {
    return `
    <div class="content">
      <div id="loading"></div>
      <section class="content">
        <div class="whats__up">
          <h1 class="whats__up__tagline">Selamat Datang！</h1>
          <h2 class="whats__up__headline">Mau makan apa <span class="highlight">sekarang?</span></h2>
        </div>
      </section>
      <section class="grid-restoran" id="list__restoran">
        <div id="card__restoran">
          ${createSkeletonItemTemplate(20)}
        </div>
      </section>
    </div>
    `;
  },

  async afterRender() {
    const loading = document.querySelector('#loading');
    const mainContent = document.querySelector('#list__restoran');
    loading.innerHTML = Spinner();
    mainContent.style.display = 'none';
    const restoContainer = document.querySelector('#card__restoran');
    restoContainer.innerHTML = '';

    try {
      const resto = await RestaurantSource.nowServingRestaurant();
      resto.restaurants.forEach((restaurant) => {
        restoContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
      mainContent.style.display = 'grid';
      loading.style.display = 'none';
    } catch (err) {
      mainContent.style.display = 'grid';
      loading.style.display = 'none';
      restoContainer.innerHTML = `Yah gagal dimuat: ${err}, coba swipe up!`;
    }
  },
};

export default NowServing;
