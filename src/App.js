import reactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Shimmer from "./components/Shimmer";
import RestraurantMenu from "./components/RestraurantMenu";
import { lazy, Suspense } from "react";

/* 
     * Header
     *    -Logo
     *    -NavInfo (right side)
     *    -cart
     * Body
     *   -search bar
     *   -restaurantlist
     *      -restaurant card (many cards)
     *         -Image
     *         -Name
     *         -Rating
     *         -Cuisines
     * Footer
     *   -links
     *   -copyright 
     
*/

// * Chunking,
// * Code Splitting,
// * Dynamic Bundling,
// * Lazy Loading,
// * On Demand Loading,
// * Dynamic Import

const Instamart = lazy(() => import("./components/Instamart"));

// ******* config driven UI ************

const AppLayout = () => {
  return (
    <>
      <Header />
      {/* 
        {Outlet} ....  all the children will go to the outlet according to route.
      */}
      <Outlet />

      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestraurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = reactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// const logo= react.createElement("img",{src:logoImg, alt:"logo"});

// const header=react.createElement("h1",null,"namaste react");

// const navBar= react.createElement("div",{className:"navBar"},logo,header);

// const root = reactDOM.createRoot(document.getElementById("root"));
// root.render(navBar);
