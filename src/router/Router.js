import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth } from "../providers/auth";

import NavBar from "../components/navBar";
import Home from "../pages/home";
import ListHeroes from "../pages/list";

function Router() {
  return (
    <BrowserRouter>
      <Auth>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/list' element={<ListHeroes />} />
        </Routes>
      </Auth>
    </BrowserRouter>
  );
}

export default Router;
