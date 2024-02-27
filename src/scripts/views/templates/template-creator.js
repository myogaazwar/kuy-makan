/* eslint-disable prefer-template */
/* eslint-disable indent */
import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createRestaurantItemTemplate = (restaurant) => `
<div class="card" id="restaurant-card">

      <div class="card-header">
      <picture>
        <source media="(min-width: 600px)" srcset="${
          CONFIG.BASE_IMAGE_URL + restaurant.pictureId
        }"> 
        <img class="lazyload" crossorigin="anonymous" data-src="${
          CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId
        }" alt="${restaurant.name || '-'}" id="restaurant-image">
        </picture>
        <p id="restaurant-city">Kota ${restaurant.city || '-'}</p>
      </div>

    <div class="card-body">
        <p id="rating-text">Rating: <span id="restaurant-rating">${
          restaurant.rating || '-'
        }</span></p>
        <h4 class="restaurant__title"><a href="/kuy-makan/#/detail/${
          restaurant.id
        }" id="restaurant-name">${restaurant.name || '-'}</a></h4>
        <p id="restaurant-description">${
          restaurant.description
            ? restaurant.description.slice(0, 150) + '...'
            : '-'
        }</p>

    </div>
</div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <div id="header-detail">
  <div id="title-header">
    <h2>${restaurant.restaurant.name}</h2>
    <p id="rating-text">Rating: <span id="restaurant-rating">${
      restaurant.restaurant.rating
    }</span></p>
  </div>

    <picture>
    <source media="(min-width: 600px)" srcset="${
      CONFIG.BASE_IMAGE_URL + restaurant.restaurant.pictureId
    }">
    <img crossorigin="anonymous" src="${
      CONFIG.BASE_IMAGE_URL_SMALL + restaurant.restaurant.pictureId
    }" />
    </picture>
    <h3>${restaurant.restaurant.city}</h3>
    <p>Alamat : ${restaurant.restaurant.address}</p>
    <div class="container-desc">
        <p id="description-detail">${restaurant.restaurant.description.slice(
          0,
          150
        )}... <button id="full-desc">Selengkapnya</button>
        </p>
    </div>
  </div>

  <div id="body-detail">
    <div class="menu-list">
        <h3 class="title-menu">Menu Makanan</h3>
        ${restaurant.restaurant.menus.foods
          .map((food, index) => `<ul>${index + 1}. ${food.name}</ul>`)
          .join('')}
    </div>

    <div class="menu-list">
        <h3 class="title-menu">Menu Minuman</h3>
        ${restaurant.restaurant.menus.drinks
          .map((drink, index) => `<ul>${index + 1}. ${drink.name}</ul>`)
          .join('')}
    </div>
</div>

<div id="footer-detail">
<h3>Customer Review</h3>
${restaurant.restaurant.customerReviews
  .map(
    (customerReview) =>
      `<div class="customer-review">
        <div class="customer-review__header">
        <h4>@${customerReview.name} </h4>
        <h5>${customerReview.date}</h5>
        </div>
        <p>${customerReview.review}</p>
        </div>`
  )
  .join('')}
</div>

    
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
