import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate, createRestaurantDetailReviewTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant__detail" tabindex="0"></div>
      <div class="restaurant__detail__review" id="customerReview" tabindex="0">
        <h3 style="padding-top: 10px;">Ulasan</h3>
      </div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantSource.detailRestaurant(url.id);
    const restoContainer = document.querySelector('#restaurant');
    const detailReviewContainer = document.querySelector('#customerReview');
    restoContainer.innerHTML = createRestaurantDetailTemplate(resto.restaurant);
    resto.restaurant.customerReviews.forEach((review) => {
      detailReviewContainer.innerHTML += createRestaurantDetailReviewTemplate(review);
    });

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: resto.restaurant.id,
        name: resto.restaurant.name,
        city: resto.restaurant.city,
        description: resto.restaurant.description,
        pictureId: resto.restaurant.pictureId,
        rating: resto.restaurant.rating,
      },
    });
  },
};

export default Detail;
