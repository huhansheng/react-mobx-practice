import User from '../view/User';

const routesConfig = [
  {
    path: '/',
    component: User,
    childRoutes: [
      {
        path: '/login',
        component: User
      }
    ]
  }
];
export default routesConfig;
