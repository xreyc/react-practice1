import { useEffect, useState } from "react"
import { MemoryRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout1 from "./layout/Layout1"
import ProductScreen from "./pages/ProductScreen"
import StoreScreen from "./pages/StoreScreen"
import LoginPage from "./pages/LoginPage"
import ProductFormScreen from "./pages/ProductFormScreen"

function App() {
  return (
    <Router>
      <Layout1>
      <Routes>
        <Route path="/" element={<ProductScreen/>} />
        <Route path="/product_form" element={<ProductFormScreen/>} />
        <Route path="/stores" element={<StoreScreen/>} />
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
      </Layout1>
    </Router>
  )
}

export default App
