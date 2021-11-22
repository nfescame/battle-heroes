import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth } from "../providers/auth";

import NavBar from "../components/navBar/NavBar";

import Home from "../pages/home/Home";
import Main from "../pages/main/Main";

function Router() {
  return (
    <BrowserRouter>
      <Auth>
        <NavBar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/' element={<Main />} />
        </Routes>
      </Auth>
    </BrowserRouter>
  );
}

export default Router;
