import React from 'react'
import AppHero from '../components/common/home/hero'
import AppAbout from '../components/common/home/about'
import AppFeature from '../components/common/home/feature'

const AppHome = () => {
  return (
    <div className="main">
      <AppHero />
      <AppAbout />
      <AppFeature />
    </div>
  )
}

export default AppHome
