import App from '../App.js';
import { ErrorPage } from '../components/ErrorPage.js';
import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../components/Home.js';
import { Users } from '../components/Users.js';
import { About } from '../components/About.js';
import { RegisterPage } from '../03-forms/pages/RegisterPage.js';

import { FormikYupPage } from '../03-forms/pages/FormikYupPage.js';
import { FormikBasicPage } from '../03-forms/pages/FormikBasicPage.js';
import { FormikComponents } from '../03-forms/pages/FormikComponents.js';

export const router = createBrowserRouter([
  {
    path: '/*',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'register',
        element: <RegisterPage />,
      },
      {
        path: 'formik',
        element: <FormikBasicPage />,
      },
      {
        path: 'formik-yup',
        element: <FormikYupPage />,
      },
      {
        path: 'formik-components',
        element: <FormikComponents />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'users',
        element: <Users />,
      },
    ],
  },
]);
