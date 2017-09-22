import User from '../view/User';

const routesConfig = [
  {
    path: '/',
    component: User,
    childRoutes: [
      {
        path: '/login',
        component: User,
        onEnter: (nextState, replaceState) => {
          // can do authority
          // replaceState(null, '/messages/' + nextState.params.id)
        }
      }
    ]
  }
];

export default routesConfig;
