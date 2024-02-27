import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import RestaurantsSource from '../../data/restaurants-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
            <div id="section-rs"></div>
            <div id="container__detail-page">
              <div id="container__detail-restaurant"></div>
              <div id="likeButtonContainer"></div>
            </div>
            `;
  },

  async afterRender() {
    // fungsi setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantsSource.detailRestaurants(url.id);
    const restaurantContainer = document.querySelector(
      '#container__detail-restaurant'
    );

    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    const detailRestaurant = restaurant.restaurant;

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      detailRestaurant,
    });
    // detail description
    const descriptionDetail = document.getElementById('description-detail');
    const fullDescButton = document.getElementById('full-desc');
    let isFullDescriptionShown = false;

    const showFullDescription = () => {
      descriptionDetail.textContent = restaurant.restaurant.description;
      fullDescButton.style.display = 'none';
      isFullDescriptionShown = true;
    };

    const showShortDescription = () => {
      descriptionDetail.textContent = `${restaurant.restaurant.description.slice(
        0,
        150
      )}..;`;
      fullDescButton.style.display = 'block';
      isFullDescriptionShown = false;
    };

    const checkWindowSize = () => {
      if (window.innerWidth >= 609 && !isFullDescriptionShown) {
        showFullDescription();
      } else if (window.innerWidth < 609 && isFullDescriptionShown) {
        showShortDescription();
      }
    };

    window.addEventListener('resize', checkWindowSize);

    fullDescButton.addEventListener('click', () => {
      showFullDescription();
      window.removeEventListener('resize', checkWindowSize);
    });
  },
};

export default Detail;
