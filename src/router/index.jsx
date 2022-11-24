import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../NotFound";
import Guests from "../pages/Guests";
import Comments from "../pages/Comments";
import Password from "../components/Password";

export default function index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Password />}>
          <Route path="/guests" element={<Guests />} />
          <Route path="/comments" element={<Comments />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
