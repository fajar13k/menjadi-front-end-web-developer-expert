import RestaurantSource from '../../data/restaurant-source';

const NowServing = {
  async render() {
    return `
      <h2>Now Serving Page</h2>
    `;
  },

  async afterRender() {
    const restaurant = await RestaurantSource.nowServingRestaurant();
    console.log(restaurant.restaurants);
  },
};

export default NowServing;
