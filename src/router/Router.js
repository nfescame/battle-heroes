import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth } from "../providers/auth";
import Home from "../pages/home/Home";

function Router() {
  return (
    <BrowserRouter>
      <Auth>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Auth>
    </BrowserRouter>
  );
}

export default Router;
