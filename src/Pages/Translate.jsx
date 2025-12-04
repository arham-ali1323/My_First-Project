import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Translate from '../Features/TranslateComponents/Translate';
import Testimonials from "../Features/HomeComponents/Testimonials";
export default function App() {
  return (
    <div>
      <Translate/>
      <Testimonials/>
    </div>
  )
}
