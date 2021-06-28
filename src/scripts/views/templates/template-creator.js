import CONFIG from '../../globals/config';
import truncateString from '../../utils/truncate-string';

const createRestaurantDetailReviewTemplate = (restaurant) => `
  <h4>${restaurant.name} · ${restaurant.date}</h4>
  <p>${restaurant.review}</p>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__detail__title">${restaurant.name}</h2>
  <picture>
    <source media="(min-width:1024px)" srcset="${restaurant.id ? CONFIG.BASE_IMAGE_URL_LARGE + restaurant.pictureId : 'https://picsum.photos/id/1060/1210/810?grayscale'}">
    <source media="(min-width:768px)" srcset="${restaurant.id ? CONFIG.BASE_IMAGE_URL_MEDIUM + restaurant.pictureId : 'https://picsum.photos/id/1060/807/540?grayscale'}">
    <img class="restaurant__detail__poster" src="${restaurant.id ? CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId : 'https://picsum.photos/id/1060/403/270?grayscale'}" alt="Restoran ${restaurant.name} di ${restaurant.city}">
  </picture>
  <div class="restaurant__detail__info">
    <h3>Rincian Restoran</h3>
      <h4>Alamat</h4>
      <p>${restaurant.address}, ${restaurant.city}</p>
      <h4>Kategori</h4>
      <p>${restaurant.categories.map((category) => ' ' + category.name)}</p>
      <h4>Rating</h4>
      <p>⭐️ ${restaurant.rating}/5</p>
  </div>
  <div class="restaurant__detail__description">
    <h3>Deskripsi</h3>
    <p>${restaurant.description}</p>
    <h3>Menu</h3>
      <h4>Makanan</h4>
      <p>${restaurant.menus.foods.map((food) => ' ' + food.name)}</p>
      <h4>Minuman</h4>
      <p>${restaurant.menus.drinks.map((drink) => ' ' + drink.name)}</p>
  </div>
`;

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
      <a tabindex="-1" href="${`/#/detail/${restaurant.id}`}"><button class="btn button__medium button__main">Cek Restoran</button></a>
    </div>
  </article>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this spot" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this spot" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetailReviewTemplate,
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
