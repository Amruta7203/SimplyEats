import React, { useEffect } from "react";
import "./App.css";
import {BrowserRouter,Route, Routes} from "react-router-dom";
import Header from "./components/layouts/Header";
import Home from "./components/layouts/Home";
import Footer from "./components/layouts/Footer";
import Menu from "./components/layouts/Menu";
import Login from "./components/users/Login";
import Register from "./components/users/Register";
import Profile from "./components/users/Profile";
import ForgotPassword from "./components/users/ForgotPassword";
import NewPassword from "./components/users/NewPassword";
import Cart from "./components/cart/Cart";
import UpdateProfile from "./components/users/UpdateProfile";
import store from "./store";
import { loadUser } from "./actions/userAction";

export default function App() {
// dispatched exactly once when the component is first rendered and check is user is authenticated or not

  console.log(store);
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
  <BrowserRouter>
  <div className="App">
    <Header/>
    <div className="container container-fluid">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/eats/stores/:id/menus" element={<Menu/>}/>
        <Route path="/users/login" element={<Login/>}/>
        <Route path="/users/signup" element={<Register/>}/>
        <Route path="/users/me" element={<Profile/>}/>
        <Route path="/users/me/update" element={<UpdateProfile/>}/>
        <Route path="/users/forgotPassword" element={<ForgotPassword/>}/>
        <Route path="/users/resetPassword/:token" element={<NewPassword/>}/>
      </Routes>
    </div>
    <Footer/>
  </div>
  </BrowserRouter>
  );
}
