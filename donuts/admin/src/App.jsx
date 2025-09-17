import React from "react";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/Sidebar/SideBar";
import { Route, Routes } from "react-router-dom";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Orders from "./pages/Orders/Orders";

const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <hr />
      <div className="app-content">
        <SideBar></SideBar>
        <Routes>
          <Route  path="/add" element={<Add></Add>}></Route>
          <Route  path="/list" element={<List></List>}></Route>
          <Route  path="/orders" element={<Orders></Orders>}></Route>
          
        </Routes>
      </div>
    </div>
  );
};

export default App;
