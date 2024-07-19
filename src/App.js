import React from "react";
import { useEffect, useState, useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import AboutLink from "./pages/AboutLink";
import ProjectLink from "./pages/ProjectLink";
import ArticleLink from "./pages/ArticleLink";
import Home from "./pages/Home";
import NavLinks from "./pages/NavLinks";
import ScrollToTop from "./components/ScrollToTop";
const App = () => {
  const appRef = useRef(null);
  const [appHeight, setAppHeight] = useState("auto");
  const [show, setShow] = useState(false);

  useEffect(() => {
    const updateHeight = () => {
      if (appRef.current) {
        setAppHeight(`${appRef.current.scrollHeight}px`);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);
  const clickhamburger = (e) => {
    e.stopPropagation(); // Prevent event propagation
    setShow((prevShow) => {
      const newShow = !prevShow;
      return newShow;
    });
  };
  // handling of arrow keys
  const [isChecked, setIsChecked] = useState(false);

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      console.log("hello")
      setIsChecked(false);
    } else if (event.key === 'ArrowLeft') {
      console.log("hello")
      setIsChecked(false);
    }
  };
  useEffect(() => {
    const handlePopState = () => {
      // Handle browser forward/backward button click
      setIsChecked(false);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  useEffect(() => {

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <Router>
      <div ref={appRef} className="app">
        <ScrollToTop />
        <NavLinks height={appHeight} show={show} setShow={setShow} setIsChecked={setIsChecked} />
        <Navbar show={show} clickhamburger={clickhamburger} setShow={setShow} appHeight={appHeight} isChecked={isChecked} setIsChecked={setIsChecked}  />
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutLink />} />
          <Route path="/project" element={<ProjectLink />} />
          <Route path="/article" element={<ArticleLink />} />
         </Routes> 


      </div> </Router>
  );
};

export default App;
