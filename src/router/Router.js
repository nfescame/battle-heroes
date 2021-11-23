import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth } from "../providers/auth";

import NavBar from "../components/navBar/NavBar";
import Main from "../pages/main/Main";
import ListHeroes from "../components/list";

function Router() {
  return (
    <BrowserRouter>
      <Auth>
        <NavBar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/list' element={<ListHeroes />} />
        </Routes>
      </Auth>
    </BrowserRouter>
  );
}

export default Router;
