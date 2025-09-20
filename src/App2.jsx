import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Navigation from "./pages/Navigation";
import Error from "./pages/Error";
import Stats from "./pages/sousPage/Stats";
import BookStats from "./pages/sousPage/BookStats";
import DashChoice from "./pages/sousPage/DashChoice";

function App2() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<DashChoice />} />
            <Route path="stats" element={<Stats />} />
            <Route path="bookStats" element={<BookStats />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App2;
