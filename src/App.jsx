import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Companents/Layout";
import 'bootstrap-icons/font/bootstrap-icons.css';
import All from './Companents/all';
import Porfolio from './Companents/Porfolio';
import ScrollToTop from "./Companents/ScrollToTop";

function App() {
  return (
    <>
   
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<All />} />
          <Route path="portfolio" element={<Porfolio />} />
        </Route>
      </Routes>
   </>
  )
}

export default App
