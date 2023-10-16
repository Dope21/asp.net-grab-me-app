import Posts from "./components/Post";
import {Main} from './components/Main';
import {Acceptedorders} from './components/Acceptedorders';

const AppRoutes = [
  {
    path: '/posts',
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
    path: '/acceptedorders',
    element: <Acceptedorders />
  }
];

export default AppRoutes;
