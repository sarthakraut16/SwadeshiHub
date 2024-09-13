import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Blockbuster from '../Components/Blockbuster/Blockbuster'
import Footer from '../Components/Footer/Footer'
import NewsLetter from './../Components/NewsLetter/NewsLetter';

const Home = () => {
  return (
    <div>
      <Hero/>
      <h1 style={{marginLeft:'80px'}}>Popular products</h1>
      <Popular/>
      <Popular/>
      <div style={{background:'#ffedec',paddingTop:'10px'}}>
      <h1 style={{marginLeft:'80px',textAlign:'center', marginTop:'10px'}}>Block Buster Deals</h1>
      <Blockbuster/>
      <Blockbuster/>
      </div> <br />
      <NewsLetter/>
    </div>
  )
}

export default Home