import AuthPage from '../../pages/AuthPage';
import SignIn from '../../components/auth/SignIn';
import SignUp from '../../components/auth/SignUp';

export default [
  {
    path: '',
    name: 'authPage',
    component: AuthPage,
    // beforeEnter: ifNotAuthenticated,
    children: [
      {
        path: '/sign-in',
        name: 'signIn',
        component: SignIn,
      },
      {
        path: '/sign-up',
        name: 'signUp',
        component: SignUp,
      },
    ],
  },
];
