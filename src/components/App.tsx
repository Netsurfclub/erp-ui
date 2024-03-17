import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./common/Navbar";
import WarehousePage from "./pages/WarehousePage";

import { MAIN_PAGE, WAREHOUSE_PAGE } from "../constants/app.constants";

import logo from "../images/logo.png";
import MainPage from "./pages/MainPage";

const App: React.FC<AppProps> = () => {
  const pages: KeyValuePair<string, string>[] = [MAIN_PAGE, WAREHOUSE_PAGE];

  const mainPageComponent: JSX.Element = <MainPage pageName={MAIN_PAGE.key} />;
  const warehousePageComponent: JSX.Element = (
    <WarehousePage pageName={WAREHOUSE_PAGE.key} />
  );

  return (
    <BrowserRouter>
      <Navbar image={logo} pages={pages} />
      <main className="container">
        <Routes>
          <Route path={MAIN_PAGE.value} element={mainPageComponent} />
          <Route path={WAREHOUSE_PAGE.value} element={warehousePageComponent} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
