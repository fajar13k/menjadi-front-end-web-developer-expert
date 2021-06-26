import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <article class="post-item" tabindex="0">
  <div class="box">
    <img class="post-item__thumbnail"
      src="${restaurant.id ? CONFIG.BASE_IMAGE_URL_LARGE + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}"
      alt="Gambar ${restaurant.name} di ${restaurant.city}">
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
