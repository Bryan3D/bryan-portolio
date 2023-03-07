import React from 'react'
import Headers from './components/header/header.js';
import About from './components/about/about.jsx';
import Nav from './components/nav/nav.jsx';
import Portfolio from './components/portfolio/portfolio.jsx';
import Skills from './components/skill/skills.js';
import Contact from './components/contact/contact.js';
import Footer from './components/footer/footer.js';
// import PartclesBG from './components/particlesBg/partclesBG.jsx';



const App = () => {
  return (
    <>
      {/* <PartclesBG /> */}
      <Headers />
      <Nav/>
      <About />
      <Portfolio />
      <Skills/>
      <Contact />
      <Footer />

    </>
  )
}

export default App



