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
  ALL_PATHS,
} from "../constants/app.constants";

import logo from "../assets/logo.png";

const App: React.FC<AppProps> = () => {
  const pages: KeyValuePair<string, string>[] = [MAIN_PAGE, WAREHOUSE_PAGE];

  return (
    <BrowserRouter>
      <Navbar image={logo} pages={pages} />
      <main className="container">
        <Routes>
          <Route
            path={MAIN_PAGE.value}
            element={<MainPage pageName={MAIN_PAGE.key} />}
          />
          <Route
            path={WAREHOUSE_PAGE.value}
            element={<WarehousePage pageName={WAREHOUSE_PAGE.key} />}
          />
          <Route
            path={ERROR_PAGE.value}
            element={<ErrorPage pageName={ERROR_PAGE.key} />}
          />
          <Route
            path={ALL_PATHS.value}
            element={<Navigate to={ERROR_PAGE.value} />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
