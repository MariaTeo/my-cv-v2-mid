import React, { useState, useEffect } from 'react'
import AboutMe from '../about-me/about-me.component'
import Connect from '../connect/connect.component'
import Skills from '../skills/skills.component'
import Experience from '../experience/experience.component'
import OpenSource from '../open-source/open-source.component'
import Portfolio from '../portfolio/portfolio.component'

function App () {
  return (
    <>
    <AboutMe />
    <Connect />
    <Skills />
    <Experience />
    <OpenSource />
    <Portfolio />
    </>
  )
}

export default App
