import React from 'react'
import Hero from '../../components/Hero/Hero'
import CaruselHome from '../../components/CaruselHome/CaruselHome'
import Catalog from '../Catalog/Catalog'
import ImageHome from '../../components/ImageHome/ImageHome'
import CartHome from '../../components/CartHome/CartHome'
import Review from '../../components/Review/Review'

const Home = () => {
  return (
    <div>
      <Hero/>
      <CaruselHome/>
      <Catalog/>
      <ImageHome/>
      <CartHome/>
      {/* <Review/> */}
    </div>
  ) 
}

export default Home