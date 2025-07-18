import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from '../Features/AboutComponent/AboutUs';
import OurTeam from '../Features/AboutComponent/OurTeam';
import OurValuesSection from '../Features/AboutComponent/OurValuesSection';
import WhatWeDoSection from '../Features/AboutComponent/WhatWeDoSection'
import OurPresenceSection from '../Features/AboutComponent/OurPresenceSection';
function App() {
  return (
    <div>
      <AboutUs/>
      <OurTeam/>
      <OurValuesSection/>
      <WhatWeDoSection/>
      <OurPresenceSection/>
      </div>
  )
}

export default App
