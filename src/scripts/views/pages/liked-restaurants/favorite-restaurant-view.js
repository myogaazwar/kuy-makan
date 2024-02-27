/* eslint-disable class-methods-use-this */
import { createRestaurantItemTemplate } from '../../templates/template-creator';

class FavoriteRestaurantView {
  getTemplate() {
    return `
    <div id="section-rs"></div>

  <section class="menu-rs">

  <p id="query-text">Cari Restaurant Favorite Kamu</p>
  <input id="query" type="text" placeholder="Cari Restaurant..">
  
  <h2 id="menu-title">Your Favorite Restaurants</h2>

  <div id="restaurants" class=" card-container">
  </div>
            `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showFavoriteRestaurants(restaurants) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce(
        (carry, restaurant) =>
          carry.concat(createRestaurantItemTemplate(restaurant)),
        ''
      );
    } else {
      html = this._getEmptyRestaurantTemplate();
    }
    document.getElementById('restaurants').innerHTML = html;

    document
      .getElementById('restaurants')
      .dispatchEvent(new Event('restaurants:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return `
    <div class="restaurant-item__not__found">Sayangnya Tidak ada restaurant untuk ditampilkan</div>
    `;
  }
}

export default FavoriteRestaurantView;
