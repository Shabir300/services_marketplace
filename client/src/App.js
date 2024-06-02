import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/home/Home";
import Auth from "./pages/auth/signupLogin/signupLogin";
import ForgotPasswordPage from "./pages/auth/forgotPassword/ForgotPasswordPage";
import ResetPasswordPage from "./pages/auth/resetPassword/ResetPasswordPage";
import Verify from "./pages/auth/verify/Verify";
import NotFoundPage from "./pages/notFound/NotFound";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <NotFoundPage />
    },
    {
      path: '/auth',
      element: <Auth />,
    },
    {
      path: '/forgot-password',
      element: <ForgotPasswordPage />,
    },
    {
      path: '/reset-password',
      element: <ResetPasswordPage />,
    },
    {
      path: "/verify",
      element: <Verify />,
    },
    // {
    //   element: <NotFoundPage />,
    // }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
