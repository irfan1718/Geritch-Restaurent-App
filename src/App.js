import React from 'react';

import { Navbar } from './components';
import {
  AboutUs,
  Chef,
  Footer,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
  Gallery,
  FindUs,
} from './container';

import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
};

export default App;
