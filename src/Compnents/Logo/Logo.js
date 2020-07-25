import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css'
import brain from './brain.png'
const Logo = () => {
  return (
    <div className ="pa3"  style = {{ display :'flex', justifyContent:'flex-start'}}>
      <Tilt
        tiltMaxAngleX={100}
       tiltMaxAngleY={50}
       perspective={100}
       scale={1}
       transitionSpeed={2000}
       gyroscope={false}
       className="tilt br2 shadow-2 dib"
  >
        <div className="br2 shadow-2 " style={{ height: '150px', width:'150px'}}>
           <img  className="pa3 logo"src = {brain} alt =" logo"/>
        </div>
      </Tilt>
      </div>
  )
}

export default Logo;
