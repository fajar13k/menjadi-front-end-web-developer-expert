import Detail from '../views/pages/detail';
import NowServing from '../views/pages/now-serving';
import Like from '../views/pages/like';

const routes = {
  '/': NowServing, // Default page
  '/now-serving': NowServing,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
