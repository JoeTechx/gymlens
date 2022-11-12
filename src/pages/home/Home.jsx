import React from 'react'
import FAQS from '../../components/FAQS'
import MainHeader from '../../components/MainHeader'
import Programs from '../../components/Programs'
import Values from '../../components/Values'
import "./Home.css"

const Home = () => {
  return (
    <>
    <MainHeader/>
    <Programs/>
    <Values/>
    <FAQS/>
    </>
  )
}

export default Home