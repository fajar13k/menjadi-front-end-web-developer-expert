import Detail from '../views/pages/detail';
import NowServing from '../views/pages/now-serving';

const routes = {
  '/': NowServing, // Default page
  '/now-serving': NowServing,
  '/detail/:id': Detail,
};

export default routes;
