import Posts from "./components/Posts";
import { Main } from './components/Main';
import { Acceptedorders } from './components/Acceptedorders';

const AppRoutes = [
  {
    path: '/Posts',
    element: <Posts />
  },
  {
    index: true,
    element: <Main />
  },
  {
    path: '/order',
    element: <Posts />
  },
  {
    path: '/accept',
    element: <Acceptedorders />
  }
];

export default AppRoutes;
