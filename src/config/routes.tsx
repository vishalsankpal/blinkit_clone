import React, { Suspense } from "react";
import Header from "../Components/Organisms/Header/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "../Components/Organisms/Footer/Footer";
//import CategoryProductList from "../Pages/CategoryProductList/CategoryProductList.Layout";
// import Home from "../Pages/Home/Home.layout";

const Home = React.lazy(() => import("../Pages/Home/Home.layout"));
const About = React.lazy(() => import("../Pages/About/About.Layout"));
const Careers = React.lazy(() => import("../Pages/Careers/Careers.Layout"));
const Blogs = React.lazy(() => import("../Pages/Blogs/Blogs.Layout"));
const CategoryProductList = React.lazy(
  () => import("../Pages/CategoryProductList/CategoryProductList.Layout")
);
// remaine will add
interface RoutesMap {
  [key: string]: string;
}

export const routesMap: RoutesMap = {
  root: "/",
  about: "/about",
  careers: "/careers",
  blogs: "/blogs",
  categoryProductList: "/categoryList/:name",
  //   home: "/home",
  //   products: "/products",
  //   cart: "/cart",
  //   productDetail: "/product/:productId",
  //   signInPage: "/signInPage",
};
const Layout = (): JSX.Element => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    id: "root",
    element: <Layout />,
    children: [
      {
        path: routesMap.root,
        element: (
          <Suspense fallback={<div className="loader"></div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: routesMap.about,
        element: (
          <Suspense fallback={<div className="loader"></div>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: routesMap.careers,
        element: (
          <Suspense fallback={<div className="loader"></div>}>
            <Careers />
          </Suspense>
        ),
      },
      {
        path: routesMap.blogs,
        element: (
          <Suspense fallback={<div className="loader"></div>}>
            <Blogs />
          </Suspense>
        ),
      },
      {
        path: routesMap.categoryProductList,
        element: (
          <Suspense fallback={<div className="loader"></div>}>
            <CategoryProductList />
          </Suspense>
        ),
      },
    ],
  },
]);
const RoutesConfig = () => {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default RoutesConfig;
