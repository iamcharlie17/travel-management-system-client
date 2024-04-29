import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import FirebaseProvider from "./providers/FirebaseProvider.jsx";
import { Toaster } from 'react-hot-toast';
import AddSpots from "./Pages/AddSpots.jsx";
import PrivateRoute from "./privateRoutes/PrivateRoute.jsx";
import NotFound from "./Pages/NotFound.jsx";
import AllSpots from "./Pages/AllSpots.jsx";
import SpotDetails from "./Pages/SpotDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/add-tourist-spots",
        element: <PrivateRoute><AddSpots/></PrivateRoute>
      },
      {
        path: '/all-tourist-spots',
        element: <PrivateRoute><AllSpots/></PrivateRoute>,
        loader: () => fetch('http://localhost:3000/all-tourist-spots')
      },
      {
        path: "/spot-details/:id",
        element: <SpotDetails/>,
        loader: () => fetch('http://localhost:3000/all-tourist-spots')
      }
    ],
  },
  {
    path:'*',
    element:<NotFound/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <FirebaseProvider>
    <RouterProvider router={router} />
    <Toaster />
  </FirebaseProvider>
);
