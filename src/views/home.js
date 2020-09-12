import React from 'react'
import AppHero from '../components/common/home/hero'
import AppAbout from '../components/common/home/about'

const AppHome = () => {
  return (
    <div className="main">
      <AppHero />
      <AppAbout />
    </div>
  )
}

export default AppHome
