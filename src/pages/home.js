import React from 'react';
import Navbar from '../components/navbar';
import Landing from '../components/landing/landing';
import About from '../components/about/about'
 
const Home = () => {
  return (
    <div>
      <Navbar />
      <Landing />
      <About />
    </div>
  );
};
 
export default Home;