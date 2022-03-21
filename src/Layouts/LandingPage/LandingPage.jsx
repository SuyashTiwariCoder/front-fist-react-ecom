import React from 'react';
import Categories from '../../components/Categories/Categories';
import Banner from "../../components/Banner/Banner";
import Section from '../../components/Section/Section';
import PopularCollection from '../../components/PopularCollection/PopularCollection';
import Footer from '../../components/Footer/Footer';

function LandingPage() {
  return (
      <>
     <Categories/>
    <Banner/>
    <Section/>
    <PopularCollection/>
    <Footer/>
  </>
  )
}

export default LandingPage;