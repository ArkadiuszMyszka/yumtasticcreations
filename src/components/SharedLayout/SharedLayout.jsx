import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Loader from "../Loader/Loader.jsx";
import { Layout } from "./SharedLayout.styled.js";
// import NestedRoutes from "./NestedRoutes"; -przykładowe podłączenie pliku z routes

export const SharedLayout = () => {
  return (
    <Layout>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      {/* <NestedRoutes /> */}
      <Footer />
    </Layout>
  );
};

export default SharedLayout;
