import React from "react";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./common/Navbar";

import logo from "../images/logo.png";

const App: React.FC<AppProps> = () => {
  return (
    <BrowserRouter>
      <Navbar image={logo} pages={[]} />
      <main className="container">{/* TODO: Routing between page.*/}</main>
    </BrowserRouter>
  );
};

export default App;
