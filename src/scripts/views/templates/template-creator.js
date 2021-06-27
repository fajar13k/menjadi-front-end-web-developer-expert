import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <article class="post-item" tabindex="0">
  <div class="box">
    <picture class="post-item__thumbnail">
      <source media="(min-width:1024px)" srcset="${restaurant.id ? CONFIG.BASE_IMAGE_URL_LARGE + restaurant.pictureId : 'https://picsum.photos/id/1060/1210/810?grayscale'}">
      <source media="(min-width:768px)" srcset="${restaurant.id ? CONFIG.BASE_IMAGE_URL_MEDIUM + restaurant.pictureId : 'https://picsum.photos/id/1060/807/540?grayscale'}">
      <img src="${restaurant.id ? CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId : 'https://picsum.photos/id/1060/403/270?grayscale'}" alt="Restoran ${restaurant.name} di ${restaurant.city}">
    </picture>
    <div class="post-item__overlay">
      <h1>${restaurant.city}</h1>
    </div>
  </div>
  <div class="post-item__content">
      <p class="post-item__rating">Rating: <span class="post-item__rating__score">${restaurant.rating}/5</span>
      </p>
      <h1 class="post-item__title" tabindex="-1"><a href="#" tabindex="-1">${restaurant.name}</a></h1>
      <p class="post-item__description">${restaurant.description}</p>
  </div>
  </article>
`;

export default createRestaurantDetailTemplate;
