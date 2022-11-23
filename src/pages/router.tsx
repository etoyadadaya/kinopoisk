import React, {FC, lazy, Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import Main from "./main";

const Shop = lazy(() => import("./shop"));
const Subscriptions = lazy(() => import("./subscriptions"));
const Tv = lazy(() => import("./tv"));
const Sport = lazy(() => import("./sport"));
const Gallery = lazy(() => import("./gallery"));
const Registration = lazy(() => import("./registration"));
const Login = lazy(() => import("./login"));

const Router: FC = () => (
  <Suspense fallback="Loading...">
    <Routes>
      <Route
        path="/"
        element={<Main />}
      />
      <Route
        path="/shop"
        element={<Shop />}
      />
      <Route
        path="/subscriptions"
        element={<Subscriptions />}
      />
      <Route
        path="/tv"
        element={<Tv />}
      />
      <Route
        path="/sport"
        element={<Sport />}
      />
      <Route
        path="/gallery"
        element={<Gallery />}
      />
      <Route
        path="/registration"
        element={<Registration />}
      />
      <Route
        path="/login"
        element={<Login />}
      />
    </Routes>
  </Suspense>
);

export default Router;
