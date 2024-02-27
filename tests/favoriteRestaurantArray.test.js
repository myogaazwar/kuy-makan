/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */
import { afterEach, describe, xdescribe } from '@jest/globals';
import { itActsAsFavoriteRestaurantModel } from './contracts/FavoriteRestaurantContract';

let favoriteRestaurants = [];

const FavoriteRestaurantArray = {
  getRestaurant(id) {
    if (!id) {
      return;
    }

    return favoriteRestaurants.find((restaurant) => restaurant.id == id);
  },

  getAllRestaurants() {
    return favoriteRestaurants;
  },

  putRestaurant(restaurant) {
    // eslint-disable-next-line no-prototype-builtins
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }

    // pastikan id ini belum ada dalam daftar favoriteRestaurants
    if (this.getRestaurant(restaurant.id)) {
      return;
    }

    favoriteRestaurants.push(restaurant);
  },

  deleteRestaurant(id) {
    // cara boros menghapus restaurant dengan meng-copy restaurant yang ada
    // kecuali restaurant dengan id == id
    favoriteRestaurants = favoriteRestaurants.filter(
      (restaurant) => restaurant.id != id
    );
  },

  searchRestaurants(query) {
    return this.getAllRestaurants().filter((restaurant) => {
      const loweredCaseRestaurantTitle = (restaurant.name || '-').toLowerCase();
      const jammedRestaurantTitle = loweredCaseRestaurantTitle.replace(
        /\s/g,
        ''
      );

      const loweredCaseQuery = query.toLowerCase();
      const jammedQuery = loweredCaseQuery.replace(/\s/g, '');

      return jammedRestaurantTitle.indexOf(jammedQuery) != -1;
    });
  },
};

describe('Favorite Restaurant Array Contract Test Implementation', () => {
  afterEach(() => {
    favoriteRestaurants = [];
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantArray);
});
