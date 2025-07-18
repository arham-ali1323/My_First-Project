import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Pricing from "./Pages/Pricing";
import About from "./Pages/About";
import SignIn from "./Pages/SignIn"; // <-- This page handles auth forms
import Translate from "./Pages/Translate";
import Layout from "./Components/Layout";
import SignupForm from "./Features/SignInComponent/SignupForm"; // optional direct route

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/solution" element={<Translate />} />
          <Route path="/signupForm" element={<SignupForm />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
