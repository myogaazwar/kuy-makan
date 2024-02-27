import Detail from '../views/pages/detail';
import Favorites from '../views/pages/favorites';
import Home from '../views/pages/home';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/favorites': Favorites,
  'kuy-makan/detail/:id': Detail,
};

export default routes;
