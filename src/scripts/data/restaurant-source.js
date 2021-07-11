import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async nowServingRestaurant() {
    const response = await fetch(API_ENDPOINT.NOW_SERVING);
    const responseJson = response.json();
    return responseJson;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default RestaurantSource;
