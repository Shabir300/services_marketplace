import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/home/Home";
import Auth from "./pages/auth/signupLogin/signupLogin";
import { ForgotPasswordPage } from "./pages/auth/forgotPassword/ForgotPasswordPage";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: '/auth',
      element: <Auth />,
    },
    {
      path: '/forgot-password',
      element: <ForgotPasswordPage />,
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
