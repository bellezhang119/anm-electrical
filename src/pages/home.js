import React from 'react';
import Navbar from '../components/navbar';
import Landing from '../components/landing/landing';
import About from '../components/about/about'
import Service from '../components/service/service'
import Contact from "../components/contact/contact";
 
const Home = () => {
  return (
    <div>
      <Navbar />
      <Landing />
      <About />
      <Service />
      <Contact />
    </div>
  );
};
 
export default Home;