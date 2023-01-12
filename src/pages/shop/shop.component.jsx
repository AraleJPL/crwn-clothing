import React from "react";
import { Routes, Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Routes>
      <Route
        exact
        path="/"
        element={<CollectionsOverview></CollectionsOverview>}
      />
      <Route
        path="/:collectionId"
        element={<CollectionPage></CollectionPage>}
      />
    </Routes>
  </div>
);

export default ShopPage;
