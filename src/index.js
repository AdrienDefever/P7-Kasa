import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home/Home.jsx";
import {createBrowserRouter,  RouterProvider, Outlet} from "react-router-dom";
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import Main from './components/Main/Main.jsx'
import ApartmentPage from './components/ApartmentPage/ApartmentPage.jsx'
import APropos from './components/Apropos/APropos.jsx'
import PageError from './components/PageError/PageError.jsx'

const HeaderFooterLayout = () => {
  return (
    <>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  { element: <HeaderFooterLayout />,
    errorElement:<PageError />,
    children: [
      { path: "/",
        element: <Home />,
      },
      {
        path: "/ApartmentPage/:id",
        element: <ApartmentPage />,
      },
      {
        path: "/APropos",
        element: <APropos />,
      },
    ]
  },
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);