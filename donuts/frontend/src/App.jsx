import React, { useState } from "react";
import Navbar from "./Components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/LogPopup/Login";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <Login setShowLogin={setShowLogin}></Login> : <></>}
      <div className="App">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home></Home>}>
            {" "}
          </Route>
          <Route path="/Cart" element={<Cart></Cart>}>
            {" "}
          </Route>
          <Route path="/PlaceOrder" element={<PlaceOrder></PlaceOrder>}>
            {" "}
          </Route>
        </Routes>
      </div>

      <Footer></Footer>
    </>
  );
};

export default App;
