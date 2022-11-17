import React, {FC} from "react";
import {Route, Routes} from "react-router-dom";
import Main from "./main";
import Shop from "./shop";
import Subscriptions from "./subscriptions";
import Tv from "./tv";
import Sport from "./sport";

const Router: FC = () => (
    <Routes>
        <Route
            path="/"
            element={<Main/>}
        />
        <Route
            path="/shop"
            element={<Shop/>}
        />
        <Route
            path="/subscriptions"
            element={<Subscriptions/>}
        />
        <Route
            path="/tv"
            element={<Tv/>}
        />
        <Route
            path="/sport"
            element={<Sport/>}
        />
    </Routes>
);

export default Router;
