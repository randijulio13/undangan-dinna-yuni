import Aos from "aos";
import React from "react";
import Router from "./router";

export default function App() {
  Aos.init();
  return <Router />;
}
