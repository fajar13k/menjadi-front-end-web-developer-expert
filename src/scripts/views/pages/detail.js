import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant__detail"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantSource.detailRestaurant(url.id);
    console.log(resto.restaurant);
    const restoContainer = document.querySelector('#restaurant');
    restoContainer.innerHTML = createRestaurantDetailTemplate(resto.restaurant);
  },
};

export default Detail;
