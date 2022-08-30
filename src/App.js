import React from "react";
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./login";
import OrderProducts from "./orderProduct";
import OrderDetails from "./orderDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/users/order" element={<OrderProducts />} />
        <Route exact path="/users/details/:id" element={<OrderDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
