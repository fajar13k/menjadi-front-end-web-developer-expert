import CONFIG from '../../globals/config';
import truncateString from '../../utils/truncate-string';

const createRestaurantItemTemplate = (restaurant) => `
  <article tabindex="0">
  <picture>
    <source media="(min-width:1024px)" srcset="${restaurant.id ? CONFIG.BASE_IMAGE_URL_LARGE + restaurant.pictureId : 'https://picsum.photos/id/1060/1210/810?grayscale'}">
    <source media="(min-width:768px)" srcset="${restaurant.id ? CONFIG.BASE_IMAGE_URL_MEDIUM + restaurant.pictureId : 'https://picsum.photos/id/1060/807/540?grayscale'}">
    <img src="${restaurant.id ? CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId : 'https://picsum.photos/id/1060/403/270?grayscale'}" alt="Restoran ${restaurant.name} di ${restaurant.city}">
  </picture>
  <div class="grid-restoran__text__overlay">
    <p>⭐️ ${restaurant.rating}/5</p>
  </div>
  <div class="grid-restoran__content">
    <div class="grid-restoran__lokasi">
      <i class="fa fa-map-marker-alt"></i>
      <p>${restaurant.city}</p>
    </div>
    <h1>${restaurant.name}</h1>
    <p>${truncateString(restaurant.description, 250)}</p>
    <a href="${`/#/detail/${restaurant.id}`}"><button class="btn button__medium button__main">Cek Restoran</button></a>
  </div>
  </article>
`;

export default createRestaurantItemTemplate;
