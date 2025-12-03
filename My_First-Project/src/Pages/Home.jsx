import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Features/HomeComponents/Header';
import Copywriter from '../Features/HomeComponents/Copywriter';
import Features from '../Features/HomeComponents/Features';
import TrustedBy from "../Features/HomeComponents/TrustedBy";
import AnimeText from "../Features/HomeComponents/AnimeText";
import Highlights from "../Features/HomeComponents/Highlights";
import Testimonials from "../Features/HomeComponents/Testimonials";

function Home() {
  return (
    <>
      <Header />
      <Copywriter />
      <Features />
      <TrustedBy />
      <AnimeText />
      <Highlights />
      <Testimonials />
      </>
  );
}

export default Home;
