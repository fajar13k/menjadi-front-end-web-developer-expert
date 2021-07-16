import CONFIG from '../../globals/config';
import truncateString from '../../utils/truncate-string';

const createRestaurantDetailReviewTemplate = (review) => `
  <h4>${review.name} · ${review.date}</h4>
  <p>${review.review}</p>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <article class="article__restaurant" tabindex="0">
    <picture>
      <source media="(min-width:1024px)" data-srcset="${restaurant.id ? CONFIG.BASE_IMAGE_URL_LARGE + restaurant.pictureId : 'https://picsum.photos/id/1060/1210/810?grayscale'}">
      <source media="(min-width:768px)" data-srcset="${restaurant.id ? CONFIG.BASE_IMAGE_URL_MEDIUM + restaurant.pictureId : 'https://picsum.photos/id/1060/807/540?grayscale'}">
      <img class="lazyload" data-src="${restaurant.id ? CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId : 'https://picsum.photos/id/1060/403/270?grayscale'}" alt="Restoran ${restaurant.name} di ${restaurant.city}">
    </picture>
    <div class="grid-restoran__text__overlay">
      <p>⭐️ ${restaurant.rating}/5</p>
    </div>
    <div class="grid-restoran__content">
      <div class="grid-restoran__lokasi">
        <i class="fa fa-map-marker-alt"></i>
        <p>${restaurant.city}</p>
      </div>
      <h1 class="grid-restoran__title">${restaurant.name}</h1>
      <p>${truncateString(restaurant.description, 250)}</p>
      <a tabindex="-1" href="${`/#/detail/${restaurant.id}`}"><button class="btn button__medium button__main button__restoran">Cek Restoran</button></a>
    </div>
  </article>
`;

const createRestaurantDetailTemplate = (detail) => `
  <h2 class="restaurant__detail__title">${detail.name}</h2>
  <picture>
    <source media="(min-width:1024px)" srcset="${detail.id ? CONFIG.BASE_IMAGE_URL_LARGE + detail.pictureId : 'https://picsum.photos/id/1060/1210/810?grayscale'}">
    <source media="(min-width:768px)" srcset="${detail.id ? CONFIG.BASE_IMAGE_URL_MEDIUM + detail.pictureId : 'https://picsum.photos/id/1060/807/540?grayscale'}">
    <img class="restaurant__detail__poster" src="${detail.id ? CONFIG.BASE_IMAGE_URL_SMALL + detail.pictureId : 'https://picsum.photos/id/1060/403/270?grayscale'}" alt="Restoran ${detail.name} di ${detail.city}">
  </picture>
  <div class="restaurant__detail__info">
    <h3>Rincian Restoran</h3>
      <h4>Alamat</h4>
      <p>${detail.address}, ${detail.city}</p>
      <h4>Kategori</h4>
      <p>${detail.categories.map((category) => ` ${category.name}`)}</p>
      <h4>Rating</h4>
      <p>⭐️ ${detail.rating}/5</p>
  </div>
  <div class="restaurant__detail__description">
    <h3>Deskripsi</h3>
    <p>${detail.description}</p>
    <h3>Menu</h3>
      <h4>Makanan</h4>
      <p>${detail.menus.foods.map((food) => ` ${food.name}`)}</p>
      <h4>Minuman</h4>
      <p>${detail.menus.drinks.map((drink) => ` ${drink.name}`)}</p>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetailReviewTemplate,
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
