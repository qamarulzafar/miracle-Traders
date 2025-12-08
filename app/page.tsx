import React from 'react'
import Header from './components/header'
import TopBar from './components/top_bar'
import Footer from './components/footer'
import Sec1 from './components/sec1'


const page = () => {
  return (
    <div>
      <TopBar/>
      <Header/>
      <Sec1/>
      <Footer/>
    </div>
  )
}

export default page
