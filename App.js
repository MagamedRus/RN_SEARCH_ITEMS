import React from "react";
import CategoriesPage from "./src/screens/CategoriesPage";
import ItemsPage from "./src/screens/ItemsPage";
import Router from "react-native-easy-router";
import { pageNames } from "./src/constants/pages";

const routes = {
  CategoriesPage,
  ItemsPage,
};

export default function App() {
  return <Router screens={routes} initialStack={pageNames.CategoriesPage} />;
}
