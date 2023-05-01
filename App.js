import React, { useState } from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
//import Register from "./auth/Register";
//import Login from "./auth/Login";
import ApplicationView from "./views/ApplicationView";
import { Authorized } from "./views/Authorized";
import Footer from "./components/Footer";



function App() {

  /* const [isAuth, setIsAuth] = useState(localStorage.getItem("googleAuth")); */

  return (
    <Routes>
      {/* <Route path="/register" element={<Register />} /> */}
      {/* <Route path="/login" element={<Login setIsAuth={setIsAuth} />} /> */}
      <Route path="/" element={
        <Authorized /* isAuth={isAuth} */ >
          <>
              <Header />
              <ApplicationView />
              <Footer />   
          </>
        </Authorized>
      } />
    </Routes>

  );
}

export default App;

