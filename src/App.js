import React from "react";
import Navigation from "../src/components/Navigation/nav"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
// import Main from "./components/main";
import Aboutus from "./components/AboutUs/aboutus";
import Career from "./components/Career/career";
import Home from "./components/Home/home";
import ContactUs from "./components/ContactUs/contactUs";
import NewPost from "./components/newPost/newPost";
import PastEvent from "./components/PastEvent/pastEvent";

function AppRoutes() {
  const routes = useRoutes([
    { path: "/contactUs", element: <ContactUs /> },
    { path: "/aboutUs", element: <Aboutus /> },
    { path: "/home", element: <Home /> },
    { path: "/career", element: <Career /> },
    { path: "/newPost", element: <NewPost /> },
    { path: "/pastEvent", element: <PastEvent /> },
 
   
  ]);
  return routes;
}

function App() {
  return (
      <Router>
        <Navigation/>
        <AppRoutes />
      </Router>
  );
}
 

export default App;
