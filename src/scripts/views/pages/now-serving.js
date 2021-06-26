import RestaurantSource from '../../data/restaurant-source';

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
      <div id="movies" class="movies">

      </div>
    </div>
    `;
  },

  async afterRender() {
    const restaurant = await RestaurantSource.nowServingRestaurant();
    console.log(restaurant.restaurants);
  },
};

export default NowServing;
