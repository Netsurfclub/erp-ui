import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./common/Navbar";
import MainPage from "./pages/MainPage";
import WarehousePage from "./pages/WarehousePage";
import ErrorPage from "./pages/ErrorPage";

import {
  MAIN_PAGE,
  WAREHOUSE_PAGE,
  ERROR_PAGE,
} from "../constants/app.constants";

import logo from "../assets/logo.png";

const App: React.FC<AppProps> = () => {
  const pages: KeyValuePair<string, string>[] = [MAIN_PAGE, WAREHOUSE_PAGE];

  const mainPageComponent: JSX.Element = <MainPage pageName={MAIN_PAGE.key} />;
  const warehousePageComponent: JSX.Element = (
    <WarehousePage pageName={WAREHOUSE_PAGE.key} />
  );
  const errorPageComponent: JSX.Element = (
    <ErrorPage pageName={ERROR_PAGE.key} />
  );
  const navigationComponentToErrorPage: JSX.Element = (
    <Navigate to={ERROR_PAGE.value} />
  );

  return (
    <BrowserRouter>
      <Navbar image={logo} pages={pages} />
      <main className="container">
        <Routes>
          <Route path={MAIN_PAGE.value} element={mainPageComponent} />
          <Route path={WAREHOUSE_PAGE.value} element={warehousePageComponent} />
          <Route path={ERROR_PAGE.value} element={errorPageComponent} />
          <Route path={"*"} element={navigationComponentToErrorPage} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
