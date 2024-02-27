import RestaurantsSource from '../../data/restaurants-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <section class="hero">
        <div class="text-hero">
        <h3>Cari Makanan & Minuman Di Restaurant Kesukaan Kamu Disini</h3>
        <button><a href="#menu-title">Cari Sekarang</a></button>
        </div>
    </section>

  <section class="menu-rs">
    <h2 id="menu-title">Explore Restaurant</h2>

    <div id="restaurants" class="card-container">
    </div>
  </section>
  `;
  },

  async afterRender() {
    const restaurants = await RestaurantsSource.listRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML +=
        createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
